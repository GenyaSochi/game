import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const inputPath = join(rootDir, 'public', 'photo', 'poster_event.webp')
const outputPath = join(rootDir, 'public', 'photo', 'poster_event_styled.webp')

// Monochrome purple palette — muted & soft
const stops = [
  { at: 0.0, color: [40, 35, 48] },    // dark grey-purple
  { at: 0.25, color: [70, 55, 85] },   // muted plum
  { at: 0.5, color: [110, 90, 130] },  // dusty purple
  { at: 0.75, color: [155, 135, 170] },// soft mauve
  { at: 1.0, color: [215, 205, 220] }, // pale grey-lavender
]

console.log('Input :', inputPath)

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
console.log(`Image: ${width}x${height}, channels: ${channels}`)

// --- Pass 1: gradient-map recoloring ---
let processed = 0
let preserved = 0

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2]
  const a = channels === 4 ? data[i + 3] : 255

  if (a < 10) { preserved++; continue }

  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  if (lum > 0.93 && r > 225 && g > 225 && b > 225) { preserved++; continue }

  let lo = stops[0], hi = stops[stops.length - 1]
  for (let s = 0; s < stops.length - 1; s++) {
    if (lum >= stops[s].at && lum <= stops[s + 1].at) {
      lo = stops[s]; hi = stops[s + 1]; break
    }
  }

  const range = hi.at - lo.at || 1
  const t = (lum - lo.at) / range
  const st = t * t * (3 - 2 * t)

  data[i]     = Math.round(lo.color[0] + (hi.color[0] - lo.color[0]) * st)
  data[i + 1] = Math.round(lo.color[1] + (hi.color[1] - lo.color[1]) * st)
  data[i + 2] = Math.round(lo.color[2] + (hi.color[2] - lo.color[2]) * st)
  processed++
}

console.log(`Recolor: ${processed} px, preserved: ${preserved}`)

// --- Pass 2: glow on highlights ---
const glowRadius = 4
const glowThreshold = 0.8
const brightMap = new Uint8Array(width * height)

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels
    const a = channels === 4 ? data[idx + 3] : 255
    if (a < 10) continue
    const lum = (0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2]) / 255
    if (lum >= glowThreshold) {
      brightMap[y * width + x] = 1
      data[idx] = 255; data[idx + 1] = 255; data[idx + 2] = 255
    }
  }
}

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (brightMap[y * width + x]) continue
    const idx = (y * width + x) * channels
    const a = channels === 4 ? data[idx + 3] : 255
    if (a < 10) continue

    let glow = 0
    for (let dy = -glowRadius; dy <= glowRadius; dy++) {
      for (let dx = -glowRadius; dx <= glowRadius; dx++) {
        const ny = y + dy, nx = x + dx
        if (ny < 0 || ny >= height || nx < 0 || nx >= width) continue
        if (!brightMap[ny * width + nx]) continue
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist <= glowRadius) {
          const intensity = 1 - dist / glowRadius
          if (intensity > glow) glow = intensity
        }
      }
    }

    if (glow > 0.05) {
      const g = Math.round(glow * 200)
      data[idx]     = Math.min(255, data[idx] + g)
      data[idx + 1] = Math.min(255, data[idx + 1] + g)
      data[idx + 2] = Math.min(255, data[idx + 2] + g)
    }
  }
}

console.log('Glow applied.')

// --- Pass 3: grain ---
const grainIntensity = 8
for (let i = 0; i < data.length; i += channels) {
  const a = channels === 4 ? data[i + 3] : 255
  if (a < 10) continue
  const noise = (Math.random() - 0.5) * grainIntensity
  data[i]     = Math.max(0, Math.min(255, data[i] + noise))
  data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
  data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
}

console.log('Grain added.')

// --- Pass 4: light vignette ---
const cx = width / 2, cy = height / 2
const maxDist = Math.sqrt(cx * cx + cy * cy)
const vignetteStrength = 0.25

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels
    const a = channels === 4 ? data[idx + 3] : 255
    if (a < 10) continue
    const dx = x - cx, dy = y - cy
    const dist = Math.sqrt(dx * dx + dy * dy) / maxDist
    const vignette = 1 - dist * dist * vignetteStrength
    data[idx]     = Math.round(data[idx] * vignette)
    data[idx + 1] = Math.round(data[idx + 1] * vignette)
    data[idx + 2] = Math.round(data[idx + 2] * vignette)
  }
}

console.log('Vignette applied.')

await sharp(data, { raw: { width, height, channels } })
  .resize(Math.round(width * 1.5), height, { fit: 'fill' })
  .webp({ quality: 92, effort: 6 })
  .toFile(outputPath)

console.log('Output:', outputPath)
console.log('Done.')
