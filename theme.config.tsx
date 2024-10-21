import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (<>
    <img src='/logo.png' style={{ width: "35px", height: "35px", marginRight: "10px" }}></img>
    <span><b>Big Null</b></span>
  </>),
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
