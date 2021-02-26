import styled from 'styled-components'
import { LAYERS, supportsStyles } from 'consts'

export const ProgressWrapper = styled.div`
  z-index: ${LAYERS.STEP};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 2.8rem;
  left: 0;
  right: 0;
  margin: auto;
`

export const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.backgroundSite};
  max-width: 210px;
  width: 100%;
  position: relative;
  height: 0.3rem;
  overflow: hidden;
  border-radius: 0.2rem;
`

export const ProgressHighlight = styled.div`
  background-color: ${({ theme }) => theme.brandPrimary};
  ${supportsStyles.gradientText} {
    background-image: ${({ theme }) =>
      `linear-gradient(45deg, ${theme.brandPrimary}, ${theme.brandSecondary})`};
  }
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: -100%;
`
