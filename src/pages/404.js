import MetaDecorator from "../components/MetaDecorator";

const Custom404 = () => {
  return (
    <>
      <MetaDecorator
        title="Page not found"
        description="please check url"
        imageAlt="asdasd"
        imageUrl="https://cdn.dribbble.com/users/3693559/screenshots/11398071/404_not_found.png"
      />
      <h1>This is a 404 page custom</h1>
    </>
  );
};

export default Custom404;
