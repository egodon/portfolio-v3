module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'styled-components',
      { ssr: true, displayName: process.env.NODE_ENV === 'development' },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          css: './src/css',
          constants: './src/constants',
          style: './src/style',
          utils: './src/utils',
          hooks: './src/hooks',
          static: './static',
        },
      },
    ],
  ],
};
