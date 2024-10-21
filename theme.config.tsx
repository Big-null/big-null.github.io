import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Big null</span>,
  project: {
    link: 'https://github.com/Big-null/big-null.github.io',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    content: <span> Copyright © {new Date().getFullYear()} Big null </span>,
  },
}

export default config
