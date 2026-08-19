// scripts/processCovers.js

import fs from "fs/promises";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

const INPUT_DIR = "public/images/covers/original";
const DESKTOP_DIR = "public/images/covers/desktop";
const MOBILE_DIR = "public/images/covers/mobile";

const DESKTOP_SIZE = 600;
const MOBILE_SIZE = 300;

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".tif",
  ".tiff",
  ".avif",
]);

async function processImage(inputPath, outputPath, size) {
  await execFileAsync("ffmpeg", [
    "-y",
    "-i",
    inputPath,

    "-vf",
    `scale=${size}:${size}:force_original_aspect_ratio=increase,crop=${size}:${size}`,

    "-c:v",
    "libwebp",
    "-quality",
    "85",

    outputPath,
  ]);
}

async function processCovers() {
  await fs.mkdir(INPUT_DIR, { recursive: true });
  await fs.mkdir(DESKTOP_DIR, { recursive: true });
  await fs.mkdir(MOBILE_DIR, { recursive: true });

  const files = await fs.readdir(INPUT_DIR);

  const imageFiles = files.filter((file) =>
    IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()),
  );

  if (imageFiles.length === 0) {
    console.log("No cover images found.");
    return;
  }

  console.log(`Found ${imageFiles.length} cover images.`);

  let successful = 0;
  let failed = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);

    const basename = path.parse(file).name;

    const desktopPath = path.join(DESKTOP_DIR, `${basename}.webp`);

    const mobilePath = path.join(MOBILE_DIR, `${basename}.webp`);

    console.log(`Processing: ${file}`);

    try {
      await processImage(inputPath, desktopPath, DESKTOP_SIZE);

      await processImage(inputPath, mobilePath, MOBILE_SIZE);

      successful++;

      console.log(`✓ Created desktop + mobile versions`);
    } catch (error) {
      failed++;

      console.error(`✗ Failed processing ${file}`);
      console.error(error.stderr ?? error.message);
    }
  }

  console.log("\nCover processing complete.");
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
}

processCovers();
