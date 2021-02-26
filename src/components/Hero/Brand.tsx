import React from 'react'
import styled from 'styled-components'
import { breakpoints, THEME_KEYS } from 'consts'
import { SiteLogo } from 'components/SiteLogo'
import { createSquareSizeStyles, gradientTextStyles } from 'utils'
import { useSiteMetadata } from 'hooks'

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding-top: 2rem;
  margin-right: -1rem;
  margin-left: -1rem;

  @media (min-height: 480px) {
    padding-top: 9rem;
  }
  ${breakpoints.minSm} {
    padding-top: 11rem;
    padding-bottom: 11rem;
  }
`

const EmblaLogo = styled(SiteLogo)`
  ${createSquareSizeStyles('25rem')};
  opacity: ${({ theme }) => (theme.current === THEME_KEYS.DARK ? 0.15 : 0.1)};
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 10%;

  ${breakpoints.minSm} {
    ${createSquareSizeStyles('36rem')};
    top: 50%;
    left: 50%;
  }
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.textHighContrast};
  position: relative;
  font-weight: 900;
  font-size: 3rem;
  line-height: 0.9;
  margin-bottom: 1.8rem;

  > span:nth-child(2) {
    ${gradientTextStyles};
  }

  > span {
    display: block;
  }
  > span:nth-child(1) {
    font-size: 5rem;
  }
  > span:nth-child(2) {
    font-size: 5.8rem;
  }

  ${breakpoints.minXs} {
    > span:nth-child(1) {
      font-size: 6rem;
    }
    > span:nth-child(2) {
      font-size: 7rem;
    }
  }
  ${breakpoints.minSm} {
    margin-bottom: 0;
    line-height: 1.2;

    > span {
      display: inline;
    }
    > span:nth-child(1) {
      font-size: 7rem;
    }
    > span:nth-child(2) {
      font-size: 7rem;
    }
  }
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.textMediumContrast};
  line-height: 1.5;
  font-size: 2rem;

  ${breakpoints.maxSm} {
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
  }
  ${breakpoints.minSm} {
    font-size: 2.2rem;
  }
`
export const Brand = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Wrapper>
      <EmblaLogo />
      <H1>
        {title.split(' ').map((word, index, words) => (
          <span key={`${word}-${index}`}>
            {index === words.length - 1 ? word : `${word} `}
          </span>
        ))}
      </H1>
      <H2>{description}</H2>
    </Wrapper>
  )
}
