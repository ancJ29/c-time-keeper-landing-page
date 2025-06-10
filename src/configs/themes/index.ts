import {
  Button,
  CSSVariablesResolver,
  Input,
  MantineThemeOverride,
  PasswordInput,
  createTheme,
} from '@mantine/core'
import classes from './themes.module.scss'

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'primary',
  defaultRadius: 'sm',
  fontFamily: 'Open Sans, sans-serif',
  fontSizes: { md: '14px' },
  components: {
    Input: Input.extend({
      classNames: { input: classes.input, wrapper: classes.inputWrapper },
      defaultProps: { variant: 'unstyled' },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: { innerInput: classes.innerInput },
    }),
    Button: Button.extend({
      classNames: { root: classes.root },
    }),
  },
  colors: {
    primary: [
      '#dce4f4',
      '#b8c6e3',
      '#91a7d2',
      '#708cc4',
      '#5b7bbb',
      '#5073b8',
      '#3f60a0',
      '#365793',
      '#294b83',
      '#223f70',
    ],
  },
})

// https://mantine.dev/styles/css-variables/#css-variables-resolver
export const resolver: CSSVariablesResolver = () => ({
  variables: {
    '--success': '#3ca77a',
    '--error': '#d93e3e',
    '--register-surface': '#ebebeb',
    '--register-background': '#F5F5F5',
  },
  light: {},
  dark: {},
})
