const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const srcDir = path.join(__dirname, '../src/assets/images')
const outDir = srcDir

const widths = [400, 800, 1200, 1920]

async function processImage(file) {
  const ext = path.extname(file)
  const name = path.basename(file, ext)
  const input = path.join(srcDir, file)
  for (const w of widths) {
    const outWebP = path.join(outDir, `${name}-${w}.webp`)
    const outJpg = path.join(outDir, `${name}-${w}.jpg`)
    try {
      await sharp(input).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpg)
      await sharp(input).resize({ width: w }).webp({ quality: 75 }).toFile(outWebP)
      console.log(`Generated ${outWebP} and ${outJpg}`)
    } catch (err) {
      console.error('Error processing', input, err)
    }
  }
}

async function main() {
  const files = fs.readdirSync(srcDir).filter(f => /\.jpe?g|\.png$/.test(f))
  for (const file of files) {
    await processImage(file)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
