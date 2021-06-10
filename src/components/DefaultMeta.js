import Head from "next/head";

const DefaultMeta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Anywhere description" />
      <meta property="og:title" content="My app mf" />
      <meta
        property="og:description"
        content="Some global description in case other website not have og"
      />
      <meta
        property="og:image"
        content="https://i.pinimg.com/originals/f0/c1/31/f0c13145aef37c36bca75e839ebc9a8f.png"
      />
      <meta property="og:url" content="https://tomasportfolio.netlify.app/" />
      <meta property="twitter:card" content="Twitter Card og react spa" />
      <meta property="twitter:image:alt" content="Alt image twitter" />
    </Head>
  );
};

export default DefaultMeta;
