module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['next/babel'],
    plugins: [
      ['styled-components'],
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
          alias: {
            '@posts': './src/components/posts/',
            '@home': './src/components/home/',
            '@navbar': './src/components/navbar/',
            '@styles': './src/assets/styles/',
            '@images': './src/assets/img/'
          }
        }
      ]
    ]
  }
}
