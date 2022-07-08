const input = document.querySelector('input')

function converImageToBase64(file, callback) {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = (e) => {
    const src = e.target.result
    callback(src)
  }
}

function compress(src, uploadToServer) {
  const image = new Image()
  image.src = src
  document.body.appendChild(image)
  let maxW = 1024
  let maxH = 1024
  image.onload = (e) => {
    // 拿到原始图片的宽高
    const { naturalWidth, naturalHeight } = image
    let rates = 0
    let needCompress = false
    if (maxW < naturalWidth) {
      needCompress = true
      rates = maxW / naturalWidth
      maxH = naturalHeight * rates
    }
    if (maxH < naturalHeight) {
      needCompress = true
      rates = maxH / naturalHeight
      maxW = naturalWidth * rates
    }
    if (!needCompress) {
      maxW = naturalWidth
      maxH = naturalHeight
    }

    const canvas = document.createElement('canvas')
    canvas.width = maxW
    canvas.height = maxH
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, maxW, maxH)
    ctx.drawImage(image, 0, 0, maxW, maxH)
    const src = canvas.toDataURL('image/png', 0.9)
    uploadToServer(src)
  }
}

input.addEventListener('change', (e) => {
  const [file] = e.target.files
  if (!file) return

  function uploadToServer(compressImage) {
    console.log('upload to server...', compressImage)
  }

  // 压缩图片
  converImageToBase64(file, (base64Image) => {
    compress(base64Image, uploadToServer)
  })
})
