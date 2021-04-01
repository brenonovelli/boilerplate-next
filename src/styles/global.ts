import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    :root {
      --primary: ${theme.colors.primary};
      --secondary: ${theme.colors.secondary};
      --light: ${theme.colors.light};
      --dark: ${theme.colors.dark};
      --inative: ${theme.colors.inative};
      --white: ${theme.colors.white};
      --gray: ${theme.colors.gray};
      --tertiary: ${theme.colors.tertiary};
      --success: ${theme.colors.success};
      --info: ${theme.colors.info};
      --warning: ${theme.colors.warning};
      --danger: ${theme.colors.danger};
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
