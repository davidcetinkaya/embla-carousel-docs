import React, { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { GatsbyLinkProps, Link } from 'gatsby'
import { tabAccessStyles } from 'components/TabAccess'
import { useTabAccess } from 'hooks/useTabAccess'

const linkStyles = css<{ $isTabbing: boolean }>`
  text-decoration: none;
  ${tabAccessStyles};
`

const InternalLink = styled(Link)`
  ${linkStyles};
`

const ExternalLink = styled.a`
  ${linkStyles};
`

export type PropType = PropsWithChildren<{
  to: string
  ariaLabel?: string
  tabIndex?: number
  onClick?: GatsbyLinkProps<{}>['onClick']
}>

export const PlainLink = (props: PropType) => {
  const { to, ariaLabel, tabIndex, children, onClick, ...restProps } = props
  const isInternal = /^\/(?!\/)|^#/.test(to)
  const isTabbing = useTabAccess()

  if (isInternal) {
    return (
      <InternalLink
        to={to}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        onClick={onClick}
        $isTabbing={isTabbing}
        {...restProps}
      >
        {children}
      </InternalLink>
    )
  }

  return (
    <ExternalLink
      href={to}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={onClick}
      $isTabbing={isTabbing}
      target="_blank"
      rel="noreferrer"
      {...restProps}
    >
      {children}
    </ExternalLink>
  )
}
