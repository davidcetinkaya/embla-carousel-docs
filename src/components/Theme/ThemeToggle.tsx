import React from 'react'
import styled, { css } from 'styled-components'
import { PlainButton } from 'components/Button'
import { SunIcon, MoonIcon } from 'assets/icons'
import { createSquareSizeStyles } from 'utils'
import { LAYERS, THEME_KEYS } from 'consts'
import { useTheme } from 'hooks'

const Wrapper = styled(PlainButton)`
  ${createSquareSizeStyles('4rem')};
  color: var(--text-high-contrast);
  z-index: ${LAYERS.STEP};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
`

const svgStyles = css`
  ${createSquareSizeStyles('2.5rem')};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

export const SunSvg = styled(SunIcon)`
  ${svgStyles};
`

export const MoonSvg = styled(MoonIcon)`
  ${svgStyles};
`

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isLightTheme = theme === THEME_KEYS.LIGHT
  const oppositeTheme = isLightTheme ? THEME_KEYS.DARK : THEME_KEYS.LIGHT

  return (
    <Wrapper
      type="button"
      onClick={toggleTheme}
      aria-label={`Activate ${oppositeTheme} theme`}
    >
      <MoonSvg aria-hidden="true" focusable="false" />
      <SunSvg aria-hidden="true" focusable="false" />
    </Wrapper>
  )
}
