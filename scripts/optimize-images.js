import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryPath = path.join(__dirname, '../src/assets/gallery');
const maxWidth = 1920; // Max width for web images
const quality = 85; // JPEG quality (85 is a good balance)

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: quality,
        mozjpeg: true 
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    
    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    // Clean up temp file if it exists
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
    return null;
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(galleryPath);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|JPG|JPEG)$/i.test(file) && 
    !file.includes('Awards') // Skip Awards folder
  );
  
  console.log(`Found ${imageFiles.length} images to optimize...\n`);
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(galleryPath, file);
    const outputPath = path.join(galleryPath, `temp_${file}`);
    
    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total optimized size: ${(totalNewSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`Space saved: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)}MB`);
}

optimizeAllImages().catch(console.error);

