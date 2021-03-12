import { frameCollapseStyles } from 'components/SiteLayout'
import { css } from 'styled-components'
import { breakpoints } from 'consts'

const BORDER_RADIUS = '0.4rem'
const CODE_PADDING = '2.4rem'

export const codeStyles = css`
  .language-text {
    background-color: var(--detail-low-contrast);
    border-radius: ${BORDER_RADIUS};
    font-size: 1.44rem;
    padding: 0.288rem 0.6rem;
    box-sizing: border-box;
  }

  .gatsby-code-block {
    position: relative;
    &:before,
    &:after {
      display: block;
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      width: ${CODE_PADDING};
      pointer-events: none;
    }
    &:before {
      left: 0;
      background: linear-gradient(
        to left,
        rgba(var(--background-code-rgb-value), 0) 0,
        var(--background-code) 100%
      );
    }
    &:after {
      right: 0;
      background: linear-gradient(
        to right,
        rgba(var(--background-code-rgb-value), 0) 0,
        var(--background-code) 100%
      );
    }
  }

  .gatsby-highlight {
    ${frameCollapseStyles};
    background-color: var(--background-code);
    overflow: hidden;
    position: relative;
    font-size: 1.36rem;
    margin-bottom: 2.4rem;

    &:before {
      display: block;
      content: attr(data-language);
      line-height: 1;
      font-size: 1.2rem;
      text-transform: uppercase;
      position: absolute;
      top: 0;
      left: ${CODE_PADDING};
      padding: 0.4rem 0.8rem;
      border-bottom-left-radius: ${BORDER_RADIUS};
      border-bottom-right-radius: ${BORDER_RADIUS};
    }

    &[data-language='jsx'] {
      &:before {
        background-color: #61dafb;
        color: #000000;
      }
    }
    &[data-language='js'] {
      &:before {
        background-color: #f7de1e;
        color: #000000;
      }
    }
    &[data-language='ts'] {
      &:before {
        background-color: #007acc;
        color: #ffffff;
      }
    }
    &[data-language='html'] {
      &:before {
        background-color: #005b9c;
        color: #ffffff;
      }
    }
    &[data-language='css'] {
      &:before {
        background-color: #2965f1;
        color: #ffffff;
      }
    }
    &[data-language='shell'] {
      &:before {
        background-color: #d9d7e0;
        color: #232129;
      }
    }

    ${breakpoints.minXs} {
      border-radius: ${BORDER_RADIUS};
    }
  }

  .gatsby-highlight pre[class*='language-'] {
    padding: ${CODE_PADDING} 0;
    background-color: transparent;
    border: 0;
    margin-bottom: 0;
  }

  .gatsby-highlight pre code {
    padding: 0 ${CODE_PADDING};
    background-color: transparent;
    display: block;
    font-size: 100%;
    line-height: 1.5;
    float: left;
    min-width: 100%;
  }

  pre {
    color: var(--text-body);
    overflow: auto;
    white-space: pre;

    ::-webkit-scrollbar-thumb {
      background-color: var(--scroll-thumb);
    }
    ::-webkit-scrollbar-track {
      background-color: var(--detail-low-contrast);
    }
    ::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.5rem;
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--text-comment);
  }
  .token.class-name,
  .token.tag,
  .token.constant,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.selector,
  .token.function:not(.function-variable),
  .token.unit {
    color: var(--brand-primary);
  }
  .token.string,
  .token.property,
  .token.attr-name,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.statement,
  .token.regex,
  .token.atrule,
  .token.placeholder,
  .token.variable {
    color: var(--brand-secondary);
  }
  .token.punctuation,
  .token.plain-text {
    color: var(--text-high-contrast);
  }
  .token.tag,
  .token.boolean,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol {
    color: var(--brand-alternative);
  }
  .token.namespace {
    opacity: 0.75;
  }
  .token.deleted {
    text-decoration: line-through;
  }
  .token.italic {
    font-style: italic;
  }
  .token.important,
  .token.bold {
    font-weight: 600;
  }
  .token.entity {
    cursor: help;
  }
`
