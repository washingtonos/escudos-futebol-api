const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SVG_DIR = path.join(__dirname, "..", "assets", "badges");
const PNG_DIR = path.join(__dirname, "..", "assets", "badges-png");

const SIZE = 512;

async function main() {
  if (!fs.existsSync(PNG_DIR)) fs.mkdirSync(PNG_DIR, { recursive: true });

  const svgs = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith(".svg"));
  let ok = 0;
  let fail = 0;

  for (const file of svgs) {
    const name = path.parse(file).name;
    const src = path.join(SVG_DIR, file);
    const dest = path.join(PNG_DIR, `${name}.png`);

    try {
      await sharp(src, { density: 300 })
        .resize(SIZE, SIZE, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(dest);
      ok++;
      process.stdout.write(`\r✔ ${ok} converted, ${fail} failed`);
    } catch (err) {
      fail++;
      console.error(`\n✘ ${file}: ${err.message}`);
    }
  }

  console.log(`\n\nDone! ${ok}/${svgs.length} converted to ${PNG_DIR}`);
}

main();
