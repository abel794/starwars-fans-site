import LoginInput from "./LoginInput";
import './LoginForm.css';
import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
  const { user, error, manejarCanbio, enviarFormulario, loading, response } = useLogin();

  return (
    <form className="Login-form" onSubmit={enviarFormulario}>
      <h2 className="title-Loginform">Iniciar sesión</h2>

      <LoginInput
        type="email"
        name="email"
        placeholder="Correo"
        value={user.email}
        onChange={manejarCanbio}
      />
      {error.email && <p className="error">{error.email}</p>}

      <LoginInput
        type="password"
        name="password"
        placeholder="Contraseña"
        value={user.password}
        onChange={manejarCanbio}
      />
      {error.password && <p className="error">{error.password}</p>}

      <button className="btn-LoginForm" type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Ingresar"}
      </button>

      {response && (
        <p className="success">
          Login simulado con éxito. ID generado: {response.id}
        </p>
      )}

      <p className="info">
        Inicio de sesión en entorno de prueba. Puede utilizar cualquier combinación de correo y contraseña.
      </p>
      
    </form>
  );
}