import { useRouter } from "next/router";
import MetaDecorator from "../../components/MetaDecorator";

const Username = () => {
  const router = useRouter();

  return (
    <>
      <MetaDecorator
        description={"Profile from " + router.query.username}
        imageAlt={`Profile ${router.query.username}`}
        imageUrl="https://i.pinimg.com/474x/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg"
        title={`Profile ${router.query.username}`}
      />
      <h1>Profile {router.query.username}</h1>
    </>
  );
};

export default Username;
