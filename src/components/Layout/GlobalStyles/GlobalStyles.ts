import { createGlobalStyle } from 'styled-components'
import { baseStyles } from './base'
import { resetStyles } from './reset'

export const GlobalStyles = createGlobalStyle`
  ${resetStyles};
  ${baseStyles};
`
