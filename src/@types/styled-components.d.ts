import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string,
    colors: {
      primary: string,
      primaryDark: string,
      body: string,
      color: string,
      background: string,
      foreground: string,
      error: string,
      success: string,
      warn: string,
      border: string,
      disabled: string,
    },
    sizes: {
      borderRadius: string;
    }
  }
}