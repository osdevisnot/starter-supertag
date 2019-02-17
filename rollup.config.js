const bundles = require('tslib-cli')
const isDev = !!process.env.ROLLUP_WATCH

let config = [
  {
    input: 'src/index.tsx',
    output: { file: 'dist/starter-supertag.mjs', format: 'es' },
    tsconfigOverride: { exclude: ['node_modules', 'dist', 'public'] }
  },
  {
    input: 'src/index.tsx',
    output: { file: 'dist/starter-supertag.js', format: 'umd', name: 'starter-supertag' },
    tsconfigOverride: { exclude: ['node_modules', 'dist', 'public'] },
    minify: true
  }
]

// demo code on `npm start`
if (!!process.env.ROLLUP_WATCH) {
  config = [
    {
      input: 'src/index.tsx',
      output: { file: 'dist/index.js', format: 'umd', name: 'starter-supertag' },
      devServer: true
    }
  ]
}

export default bundles(config)
