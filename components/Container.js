import Head from "next/head";
import BarraNav from "./barranav";

const Container = (props) => (
  <>
    <Head>
      <title>Perros</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
      />
    </Head>
    <BarraNav />
  </>
);

export default Container;
