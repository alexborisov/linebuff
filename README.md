# lineBuff

## Install
`npm i --save linebuff`

## Use
```js
const linebuff = require('linebuff')
const rs = new Readable()

lineBuff(rs, (line, lineNumber) => {
  console.log('[ * ]', line, `( ${lineNumber} )`)
})

rs.push('line\nline\nline\nli')
rs.push('ne\nline\nline\n')
rs.push('line\nline\nline')
rs.push('\nline\nline\nline')
rs.push(null)
```

## Contribute
Merge requests are welcome.
