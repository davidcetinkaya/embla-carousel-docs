import styled, { css } from 'styled-components'
import { frameCollapseStyles } from 'components/SiteLayout'
import { EmblaOptionsType } from 'embla-carousel'
import { breakpoints, LAYERS, supportsStyles } from 'consts'
import { PlainButton } from 'components/Button'
import { createSquareSizeStyles } from 'utils'

const CAROUSEL_HEIGHT = '22.2rem'
export const CAROUSEL_SPACING = '1.6rem'
export const CAROUSEL_RADIUS = '0.4rem'
export const ITEM_SPACING = '1rem'

export const Wrapper = styled.div`
  height: ${CAROUSEL_HEIGHT};
  padding: ${CAROUSEL_SPACING};
  background-color: ${({ theme }) => theme.backgroundCode};
  position: relative;

  ${breakpoints.maxSm} {
    ${frameCollapseStyles};
  }
  ${breakpoints.minSm} {
    border-radius: ${CAROUSEL_RADIUS};
  }
`

export const Viewport = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`

export const Container = styled.div<{ $axis?: EmblaOptionsType['axis'] }>`
  ${({ $axis }) =>
    $axis === 'y'
      ? css`
          flex-wrap: wrap;
          height: ${`calc(100% + ${ITEM_SPACING})`};
          margin-top: -${ITEM_SPACING};
          > div {
            padding-top: ${ITEM_SPACING};
          }
        `
      : css`
          height: 100%;
          margin-left: -${ITEM_SPACING};
          > div {
            padding-left: ${ITEM_SPACING};
          }
        `};
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

export const Slide = styled.div<{ $size: number }>`
  min-width: ${({ $size }) => `${$size}%`};
  position: relative;
  height: 100%;
`

export const SlideInner = styled.div`
  border-radius: ${CAROUSEL_RADIUS};
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;

  ${supportsStyles.objectFitCover} {
    position: static;
    overflow: visible;
  }
`

export const SlideImg = styled.img`
  border-radius: ${CAROUSEL_RADIUS};
  display: flex;

  position: absolute;
  top: 0;
  bottom: 0;
  left: -10000%;
  right: -10000%;
  margin: auto;
  min-width: 1000%;
  min-height: 1000%;
  max-width: none;
  transform: scale(0.1);

  ${supportsStyles.objectFitCover} {
    object-fit: cover;
    height: 100%;
    width: 100%;

    position: static;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    margin: 0;
    min-width: auto;
    min-height: auto;
    max-width: 100%;
    transform: none;
  }
`

export const DotButtons = styled.div`
  z-index: ${LAYERS.STEP};
  bottom: 1.2rem;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DotButton = styled(PlainButton)<{ $active?: boolean }>`
  ${createSquareSizeStyles('3rem')};
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  &:after {
    ${({ $active, theme }) => css`
      background: ${$active ? theme.brandPrimary : theme.backgroundSite};
      ${supportsStyles.gradientText} {
        background: ${$active
          ? `linear-gradient(45deg, ${theme.brandPrimary}, ${theme.brandSecondary})`
          : theme.backgroundSite};
      }
    `};
    border-radius: 0.2rem;
    width: 100%;
    height: 0.3rem;
    content: '';
  }
`

export const ArrowButton = styled(PlainButton)<{ $direction: 'prev' | 'next' }>`
  ${({ $direction }) => css`
    left: ${$direction === 'prev' && CAROUSEL_SPACING};
    right: ${$direction === 'next' && CAROUSEL_SPACING};
  `};
  z-index: ${LAYERS.STEP};
  color: ${({ theme }) => theme.backgroundSite};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
  ${createSquareSizeStyles('4rem')};
  > svg {
    ${createSquareSizeStyles('65%')};
  }
`