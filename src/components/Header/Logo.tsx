import React from 'react'
import styled from 'styled-components'
import { createSquareSizeStyles } from 'utils'
import { useNavigation, useSiteMetadata } from 'hooks'
import { PlainLink } from 'components/Link'
import { SiteLogo } from 'components/SiteLogo'
import { cssHackStyles } from 'consts'

const Wrapper = styled(PlainLink)`
  color: var(--text-high-contrast);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  line-height: 1;
  font-weight: 900;

  ${cssHackStyles.firefoxAll} {
    font-weight: 1000;
  }
`

const LogoWrapper = styled.div`
  ${createSquareSizeStyles('3rem')};
  display: flex;
  margin-right: 1rem;
  > img {
    ${createSquareSizeStyles('100%')};
  }
`

export const Logo = () => {
  const { closeNavigation } = useNavigation()
  const { title } = useSiteMetadata()

  return (
    <Wrapper
      aria-label="Permalink to home page"
      onClick={closeNavigation}
      to="/"
    >
      <LogoWrapper>
        <SiteLogo />
      </LogoWrapper>
      <span>{title}</span>
    </Wrapper>
  )
}
