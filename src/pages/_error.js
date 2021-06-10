import MetaDecorator from "../components/MetaDecorator";

const Error = () => {
  return (
    <>
      <MetaDecorator
        title="Page not found"
        description="please check url"
        imageAlt="asdasd"
        imageUrl="https://cdn.dribbble.com/users/3693559/screenshots/11398071/404_not_found.png"
      />
      <h1>ERROR PAGE</h1>
    </>
  );
};

export default Error;
