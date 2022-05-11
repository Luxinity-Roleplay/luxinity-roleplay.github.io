export default {
  github: 'https://github.com/Luxinity-Roleplay/luxinity-roleplay.github.io',
  docsRepositoryBase: 'https://github.com/Luxinity-Roleplay/luxinity-roleplay.github.io/blob/master',
  titleSuffix: ' – Luxinity',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Luxinity</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Official Website
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Offcial Luxinity Roleplay Website and Wiki" />
      <meta name="og:description" content="Offcial Luxinity Roleplay Website and Wiki" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://media.discordapp.net/attachments/846736449705082920/967445380751056896/LX.png?width=468&height=468" />
      <meta name="twitter:site:domain" content="luxinity-roleplay.github.io" />
      <meta name="twitter:url" content="https://luxinity-roleplay.github.io" />
      <meta name="og:title" content="Luxinity" />
      <meta name="og:image" content="https://media.discordapp.net/attachments/846736449705082920/967445380751056896/LX.png?width=468&height=468" />
      <meta name="apple-mobile-web-app-title" content="Luxinity" />
      <link
        rel="icon"
        type="image/png"
        href="https://cdn.discordapp.com/attachments/846736449705082920/967445380751056896/LX.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>Copyright © {new Date().getFullYear()} Luxinity.</>,
}
