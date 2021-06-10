import { useRouter } from "next/router";
import Image from "next/image";
import MetaDecorator from "../../components/MetaDecorator";

const OgScreenshot = () => {
  const router = useRouter();

  if (!router.query.imageUrl) {
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
        imageUrl={router.query.imageUrl}
        description="user image url and some description"
        imageAlt="user image url"
      />
      <Image
        src={router.query.imageUrl}
        alt="Username image url"
        width={500}
        height={500}
        layout="intrinsic"
      />
    </div>
  );
};

export default OgScreenshot;
