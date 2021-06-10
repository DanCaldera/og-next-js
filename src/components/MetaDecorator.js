import Head from "next/head";

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content="https://tomasportfolio.netlify.app/" />
      <meta property="twitter:card" content={description} />
      <meta property="twitter:image:alt" content={imageAlt} />
    </Head>
  );
};

export default MetaDecorator;
