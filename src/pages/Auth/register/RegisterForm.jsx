export default function RegisterForm(){

  return(

    <form className="form">

      <h1>Crear Cuenta</h1>

      <input type="text" placeholder="Usuario"/>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Contraseña"/>

      <button>Registrarse</button>

    </form>

  )

}