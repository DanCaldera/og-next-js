import Header from "../components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />

      <div className="content">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
