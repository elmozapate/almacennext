import Container from "../components/Container";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Users from "../components/Users";

const Index = (props) => (
<div>
  
<Container>
    <Head>
      <title>NIGOTILLOS</title>
    </Head>
    <div>
      <h1>NEXTPROYECT</h1>
      {/* {props.users[0].id} */}
      <Users users={props.users} />
    </div>
  </Container>
  <Users users={props.users} />

  </div>
);

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`http://127.0.0.1:5501/pages/users/user`);
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};

export default Index;
