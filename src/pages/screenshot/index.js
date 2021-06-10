import Image from "next/image";
import MetaDecorator from "../../components/MetaDecorator";

const OgScreenshot = ({ imgHave, imageUrl }) => {
  if (!imgHave) {
    return (
      <div className="og">
        <h1>Missing ?imageUrl params</h1>
      </div>
    );
  }

  return (
    <div className="og">
      <MetaDecorator
        title="Og Screenshot"
        imageUrl={imageUrl}
        description="user image url and some description"
        imageAlt="user image url"
      />
      <Image
        src={imageUrl}
        alt="Username image url"
        width={500}
        height={500}
        layout="intrinsic"
      />
    </div>
  );
};

export const getServerSideProps = ({ query }) => {
  const { imageUrl } = query;

  if (!imageUrl) {
    return {
      props: {
        imgHave: false,
      },
    };
  }

  return {
    props: {
      imageUrl,
      imgHave: true,
    },
  };
};

export default OgScreenshot;
