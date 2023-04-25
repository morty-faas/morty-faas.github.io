import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{ borderRadius: '5px', marginRight: '10px' }}
        width={50}
        src='/morty-logo-white-bg.png'
      ></img>
      <h1 style={{ fontWeight: 'bold' }}>Morty</h1>
    </div>
  )
}

export default {
  logo: <Logo />,
  banner: {
    text: (
      <a
        href='https://github.com/morty-faas/morty-faas.github.io/issues/new/choose'
        target='_blank'
      >
        <strong>Morty's documentation is under construction.</strong> Give us
        your feedback →
      </a>
    ),
  },
  primaryHue: {
    dark: 270,
    light: 270,
  },
  docsRepositoryBase:
    'https://github.com/morty-faas/morty-faas.github.io/tree/main/',
  project: {
    link: 'https://github.com/morty-faas',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  footer: {
    text: 'MIT 2023 © Morty maintainers.',
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const base = 'https://morty-faas.github.io/'
    const url = `${base}${asPath}`

    let title = `${frontMatter.title}` ?? 'Morty'
    if (asPath !== '/') {
      title += ' - Morty'
    }
    const description =
      frontMatter.description ??
      'Morty is an open source serverless platform allowing users to deploy function as a service, without the need of managing servers.'
    const image =
      frontMatter.image ??
      `https://raw.githubusercontent.com/morty-faas/.github/main/assets/morty.jpg`

    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='title' content={title} />
        <meta name='theme-color' content='#321A4C' />
        <meta name='description' content={description} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={image} />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return {
        titleTemplate: 'Morty',
      }
    }
    return {
      titleTemplate: '%s - Morty',
    }
  },
}
