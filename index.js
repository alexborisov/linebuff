const lineBuff = (stream, cb, opt = { sep: '\n' }) => {
  let shadowBuffer = ''
  let totalLines = 0

  stream.on('data', (data) => {
    const buffer = (shadowBuffer)
      ? shadowBuffer + data.toString()
      : data.toString()
    const lines = buffer.split(opt.sep)
    const lastLine = lines.slice(-1)
    shadowBuffer = lastLine
    lines.slice(0, -1).forEach((line) => {
      totalLines += 1
      cb(line, totalLines)
    })
  })

  stream.on('end', () => {
    totalLines += 1
    cb(shadowBuffer.toString(), totalLines)
  })
}

module.exports = lineBuff
