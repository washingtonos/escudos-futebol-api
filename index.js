const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const GITHUB_RAW_BASE =
  "https://cdn.jsdelivr.net/gh/washingtonos/escudos-futebol-api@main/assets/badges";

const BADGES_DIR = path.join(__dirname, "assets", "badges");

function loadBadges() {
  const files = fs.readdirSync(BADGES_DIR).filter((f) => /\.(svg|png)$/i.test(f));

  return files.map((file) => {
    const name = path.parse(file).name;
    return {
      name,
      image: `${GITHUB_RAW_BASE}/${file}`,
    };
  });
}

const badges = loadBadges();

app.get("/badges", (_req, res) => {
  res.json(badges);
});

app.get("/badges/:name", (req, res) => {
  const badge = badges.find((b) => b.name === req.params.name);
  if (!badge) return res.status(404).json({ error: "Time não encontrado" });
  res.json(badge);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
