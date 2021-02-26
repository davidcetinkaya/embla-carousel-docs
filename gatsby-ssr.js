import React from 'react'
import favicon from 'assets/images/favicon.png'
import shareImage from 'assets/images/share-image.jpg'
import config from './gatsby-config'
import { removeProtocol } from 'utils'

export const onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents,
  setPreBodyComponents,
}) => {
  const { siteUrl } = config.siteMetadata

  setPreBodyComponents([
    <noscript key="noscript">
      This app only works with JavaScript enabled.
    </noscript>,
  ])
  setHeadComponents([
    <meta
      key="mobile-web-app-capable"
      name="mobile-web-app-capable"
      content="yes"
    />,
    <meta
      key="apple-mobile-web-app-capable"
      name="apple-mobile-web-app-capable"
      content="yes"
    />,
    <meta
      key="apple-mobile-web-app-status-bar-style"
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />,
    <meta
      key="apple-mobile-web-app-title"
      name="apple-mobile-web-app-title"
      content={removeProtocol(siteUrl)}
    />,
    <meta
      key="og:image"
      property="og:image"
      content={`${siteUrl}${shareImage}`}
    />,
    <meta
      key="twitter:image"
      name="twitter:image"
      content={`${siteUrl}${shareImage}`}
    />,
    <link key="favicon" rel="icon" href={favicon} />,
  ])
  setPostBodyComponents([
    <div
      key="service-worker"
      id="service-worker"
      aria-hidden="true"
      role="complementary"
    />,
  ])
}
