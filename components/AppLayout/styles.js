import css from 'styled-jsx/css'

import {breakpoints, colors, fonts} from '../../styles/theme'

export const globalStyles = css.global`
  html,
  body {
    background-color: ${colors.background};
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base}
  }
  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .6);
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }`