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
        src="/morty-logo-white-bg.png"
      ></img>
      <h1 style={{ fontWeight: 'bold' }}>Morty</h1>
    </div>
  );
}

export default {
  logo: <Logo />,
  banner: {
    text: (
      <a href="https://github.com/morty-faas/morty-faas.github.io/issues/new/choose" target="_blank">
       <strong>Morty's documentation is under construction.</strong> Give us your feedback →
      </a>
    ),
  },
  primaryHue: {
    dark: 270,
    light: 270,
  },
  docsRepositoryBase: 'https://github.com/morty-faas/morty-faas.github.io/tree/main/',
  project: {
    link: 'https://github.com/morty-faas',
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  footer: {
    text: 'MIT 2023 © Morty maintainers.',
  },
};
