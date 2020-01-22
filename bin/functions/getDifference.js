const fs = require('fs')
const PNG = require('pngjs').PNG
const pixelmatch = require('pixelmatch')

module.exports = async () => {
  const img1 = PNG.sync.read(fs.readFileSync('images/nytimes.png'))
  const img2 = PNG.sync.read(fs.readFileSync('images/nytimes-politics.png'))
  const { width, height } = img1
  const diff = new PNG({ width, height })
  const pixelDiff = pixelmatch(img1.data, img2.data, diff.data, width, height, {
    threshold: 0.1,
  })
  const isSame = pixelDiff === 0

  fs.writeFileSync('images/diff.png', PNG.sync.write(diff))

  console.log(isSame)
}
