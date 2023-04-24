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
  primaryHue: {
    dark: 270,
    light: 270,
  },
  docsRepositoryBase: 'https://github.com/morty-faas/docs',
  project: {
    link: 'https://github.com/morty-faas',
  },
  footer: {
    text: 'MIT 2023 © Morty maintainers.',
  },
};
