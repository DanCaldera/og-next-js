import MetaDecorator from "../../components/MetaDecorator";

const Username = ({ username }) => {
  return (
    <>
      <MetaDecorator
        description={"Profile from " + username}
        imageAlt={`Profile ${username}`}
        imageUrl="https://i.pinimg.com/474x/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg"
        title={`Profile ${username}`}
      />
      <h1>Profile {username}</h1>
    </>
  );
};

export const getServerSideProps = ({ query }) => {
  const { username } = query;

  return {
    props: {
      username,
    },
  };
};

export default Username;
