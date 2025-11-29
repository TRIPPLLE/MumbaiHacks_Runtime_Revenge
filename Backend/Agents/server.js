// server.js

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');

const AUTOMATION_URL = process.env.AUTOMATION_URL;
const TOKEN = process.env.AUTOMATION_TOKEN;

if (!AUTOMATION_URL || !TOKEN) {
  console.warn("WARNING: AUTOMATION_URL or AUTOMATION_TOKEN not set in .env");
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.post('/run', async (req, res) => {
  if (!AUTOMATION_URL || !TOKEN) {
    return res.status(500).json({
      error: "AUTOMATION_URL or AUTOMATION_TOKEN not configured",
    });
  }

  const base = AUTOMATION_URL.replace(/\/$/, '');

  // Wrap client body into { inputs: ... } for Crew
  const inputsBody = { inputs: req.body };

  console.log('Received /run with body:', req.body);
  console.log('Sending to Crew as:', inputsBody);

  try {
    // ---------- 1) KICKOFF ----------
    const kickoffResp = await fetch(`${base}/kickoff`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputsBody),
    });

    if (!kickoffResp.ok) {
      const text = await kickoffResp.text();
      console.error('Kickoff failed:', kickoffResp.status, text);
      return res.status(kickoffResp.status).json({
        error: 'Kickoff failed',
        status: kickoffResp.status,
        body: text,
      });
    }

    const kickoffData = await kickoffResp.json();
    console.log('Kickoff response from Crew:', kickoffData);

    const kickoffId = kickoffData.kickoff_id;
    if (!kickoffId) {
      console.error('No kickoff_id returned from Crew');
      return res.status(500).json({
        error: 'No kickoff_id returned',
        raw: kickoffData,
      });
    }

    // ---------- 2) POLL STATUS ----------
    let attempts = 0;
    let statusData;

    while (attempts < 60) {
      const statusResp = await fetch(`${base}/status/${kickoffId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      statusData = await statusResp.json();

      // normalize status text
      const rawStatus =
        statusData.status ||
        statusData.run?.status ||
        '';
      const status = String(rawStatus).toLowerCase();

      console.log(`Poll #${attempts + 1} – status:`, rawStatus);

      // break if we see any kind of "completed"/"failed"/"error"
      if (
        status.includes('completed') ||
        status === 'failed' ||
        status.includes('error')
      ) {
        break;
      }

      attempts += 1;
      await sleep(3000);
    }

    console.log(
      'FINAL statusData:',
      JSON.stringify(statusData, null, 2)
    );

    // ---------- 3) RETURN TO CLIENT ----------
    return res.json(statusData);
  } catch (err) {
    console.error('Error in /run handler:', err);
    return res.status(502).json({ error: err.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Node proxy listening on port ${port}`);
});
