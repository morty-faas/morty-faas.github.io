import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

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

function Numbers({n}) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10  },
  })
  return <animated.p className='nx-text-xs'>{number.to((n) => n.toFixed(0))}</animated.p>
}

function ProjectStars() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/morty-faas/morty')
      .then(response => response.json())
      .then(data => setStars(data.stargazers_count));
  }, []);


  return (
    <a style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
      href="https://github.com/morty-faas/morty"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
      style={{
        borderRadius: '5px 0 0 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="nx-border nx-border-gray-300 dark:nx-border-gray-600 nx-py-1 nx-px-2">
      <p className='nx-text-xs'>⭐ Star</p>
      </div>
      <div 
      style={{
        borderRadius: '0 5px 5px 0',
        borderLeft: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      className="nx-border nx-border-gray-300 dark:nx-border-gray-600 nx-py-1 nx-px-2">
        <Numbers n={stars}/>
      </div>
    </a>
  )
}

export default {
  logo: <Logo />,
  banner: {
    text: (
      <a
        href='https://github.com/morty-faas/morty-faas.github.io/issues/new?title=Feedback%20for%20%E2%80%9CMorty%E2%80%9D&labels=feedback'
        target='_blank'
      >
        <strong>Morty's documentation is under construction.</strong> Give us
        your feedback →
      </a>
    ),
  },
  navbar: {
    extraContent: <ProjectStars/>
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
