// scripts/generateCredits.js

import fs from "fs/promises";
import path from "path";

const COVERS_DIR = "public/images/covers/desktop";
const OUTPUT_FILE = "src/data/credits.json";

/*Save artist photo's under the expected format:

  Artist_Name__Release_Title__[Role,Another_Role]

  name, title and role seperated by a double underline __

  Example:
  Adult_Jazz__So_Sorry_So_Slow__[Mixer].webp

  To use a forward slash such as "Champagne / That’s Life" replace it with a ~ e.g

    Example:

    Declan_McKenna__Champagne_~_That’s_Life__[Engineer,Additional_Production]
    
    restoreText() will replace a single underline with a space and ~ with a / */

function restoreText(value) {
  return value.replaceAll("_", " ").replaceAll("~", "/").trim();
}

function parseCreditFilename(file) {
  const extension = path.extname(file);
  const filename = path.basename(file, extension);

  const match = filename.match(/^(.+?)__(.+?)__\[(.+)\]$/);

  if (!match) {
    throw new Error(
      `Invalid filename format: ${file}\n` +
        `Expected: Artist_Name__Release_Title__[Role,Another_Role].webp`,
    );
  }

  const [, artist, release, rolesString] = match;

  const roles = rolesString
    .split(",")
    .map((role) => restoreText(role))
    .filter(Boolean);

  return {
    artist: restoreText(artist),
    release: restoreText(release),
    roles,
    filename: file,
  };
}

async function generateCredits() {
  await fs.mkdir(COVERS_DIR, { recursive: true });

  const files = await fs.readdir(COVERS_DIR);

  const coverFiles = files
    .filter((file) => path.extname(file).toLowerCase() === ".webp")
    .sort();

  if (coverFiles.length === 0) {
    console.log("No WebP cover images found.");
    return;
  }

  const credits = [];
  const failed = [];

  for (const file of coverFiles) {
    try {
      const credit = parseCreditFilename(file);

      credits.push(credit);

      console.log(`✓ ${credit.artist} — ${credit.release}`);
    } catch (error) {
      failed.push(file);
      console.error(`✗ ${error.message}`);
    }
  }

  await fs.mkdir(path.dirname(OUTPUT_FILE), {
    recursive: true,
  });

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(credits, null, 2));

  console.log("\nCredits generation complete.");
  console.log(`Generated: ${credits.length}`);
  console.log(`Failed: ${failed.length}`);
  console.log(`Output: ${OUTPUT_FILE}`);

  if (failed.length > 0) {
    console.log("\nFiles requiring attention:");

    failed.forEach((file) => {
      console.log(`- ${file}`);
    });
  }
}

generateCredits();
