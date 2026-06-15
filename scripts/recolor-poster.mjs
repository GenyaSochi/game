import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const inputPath = join(rootDir, 'public', 'photo', 'poster_event.webp')
const outputPath = join(rootDir, 'public', 'photo', 'poster_event_styled.webp')

// Tri-tone palette: plum (shadows) → lilac (mids) → beige-gray (highlights)
const shadow = [75, 50, 85]       // deep plum
const midtone = [180, 145, 180]   // lilac / mauve
const highlight = [220, 205, 190] // warm beige-gray

console.log('Input :', inputPath)

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
console.log(`Image: ${width}x${height}, channels: ${channels}`)

let processed = 0
let preserved = 0

for (let i = 0; i < data.length; i += channels) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const a = channels === 4 ? data[i + 3] : 255

  // Keep transparent pixels untouched
  if (a < 10) {
    preserved++
    continue
  }

  // Perceptual luminance (Rec. 601)
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  let nr, ng, nb
  if (lum < 0.5) {
    const t = lum / 0.5
    nr = shadow[0] + (midtone[0] - shadow[0]) * t
    ng = shadow[1] + (midtone[1] - shadow[1]) * t
    nb = shadow[2] + (midtone[2] - shadow[2]) * t
  } else {
    const t = (lum - 0.5) / 0.5
    nr = midtone[0] + (highlight[0] - midtone[0]) * t
    ng = midtone[1] + (highlight[1] - midtone[1]) * t
    nb = midtone[2] + (highlight[2] - midtone[2]) * t
  }

  data[i] = Math.round(nr)
  data[i + 1] = Math.round(ng)
  data[i + 2] = Math.round(nb)
  processed++
}

console.log(`Processed: ${processed}, preserved (transparent): ${preserved}`)

await sharp(data, { raw: { width, height, channels } })
  .webp({ quality: 92, effort: 6 })
  .toFile(outputPath)

console.log('Output:', outputPath)
console.log('Done.')
