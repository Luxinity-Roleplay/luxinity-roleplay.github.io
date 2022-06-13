export default {
  github: 'https://github.com/Luxinity-Roleplay/wiki',
  docsRepositoryBase: 'https://github.com/Luxinity-Roleplay/wiki/blob/master',
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
      <meta name="msapplication-TileColor" content="#fb4127" />
      <meta name="theme-color" content="#fb4127" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="og:title" content="Luxinity" />
      <meta name="author" content="mclemie" />
      <meta name="description" content="Official Luxinity Roleplay Wiki" />
      <meta name="og:description" content="Official Luxinity Roleplay Wiki" />
      <meta property="og:image" content="https://media.discordapp.net/attachments/846736449705082920/967445380751056896/LX.png?width=468&height=468" />
      <meta name="keywords" content="samp, samp indo, samp roleplay, gta, san andreas multiplayer" />
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
