import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (<>
        <img src='/logo.png' style={{ width: "35px", height: "35px", marginRight: "10px" }}></img>
        <span><b>Big Null</b></span>
    </>),
    head() {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://big-null.github.io' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        const topTitle = !!frontMatter.title
            ? `${frontMatter.title} | Big Null`
            : !!frontMatter.sidebarTitle
                ? `${frontMatter.sidebarTitle} | Big Null`
                : "Big Null";

        const desc = frontMatter.description ?? "Big Null";

        return (
            <>
                <title>{topTitle}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/logo.png" />

                <meta property="title" content={topTitle} />
                <meta property="url" content={url} />
                <meta property="description" content={desc} />

                <meta property="og:url" content={url} />
                <meta property="og:title" content={topTitle} />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="website" />
   
                <meta property="og:description" content={desc} />
                <meta property="og:site_name" content="Big Null" />

            </>
        )
    },
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
