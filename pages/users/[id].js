import { useRouter } from "next/router";
import { userjason } from "./userjson";
import Footer from "../../components/footer";
import BarraNav from "../../components/barranav";
  const User = () => {
  var user=userjason()
  user=user.data
    console.log(user)
  const router = useRouter();
  const { id } = router.query;
  let resultadoUsuario = user.filter(usuario => usuario.id == id);
  resultadoUsuario=resultadoUsuario[0]
/*   const usuario = user.filter(id=>id===indice)
 */  console.log(resultadoUsuario)
  return (
    <>
    <BarraNav/>
 {/*    <main>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={resultadoUsuario.avatar}
                alt={resultadoUsuario.first_name + " " + resultadoUsuario.last_name}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {resultadoUsuario.first_name} {resultadoUsuario.last_name}
              </h3>
              <p>Email: {resultadoUsuario.email}</p>
              <p>Roll: {resultadoUsuario.tipo}</p>
            </div>
          </div>
        </div>
      </div>
      </main> */}
<Footer/>
      </>
  );
};
export default User;
