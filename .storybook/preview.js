import a from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/styles/a.css'
import b from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/styles/b.css'
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      'Theme A': a,
      'Theme B': b,
    },
    defaultTheme: 'Theme A'
  }
}

export const decorators = [
  cssVariablesTheme,
];