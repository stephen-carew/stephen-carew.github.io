const sharp = require("sharp");
const fs = require("fs");

const src = process.argv[2];
const out = process.argv[3];

async function main() {
  const png = await sharp(src).resize(256, 256).png().toBuffer();

  // Build a single-image ICO container embedding the PNG.
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0); // width 256 -> 0
  entry.writeUInt8(0, 1); // height 256 -> 0
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png.length, 8); // size of data
  entry.writeUInt32LE(22, 12); // offset of data (6 + 16)

  fs.writeFileSync(out, Buffer.concat([header, entry, png]));
  console.log(`Wrote ${out} (${png.length} bytes PNG payload)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
