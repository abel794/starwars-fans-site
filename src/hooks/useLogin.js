// src/hooks/useLogin.js
import.meta.env
import { useState } from "react";
import { validationLogin } from "../services/validationLogin";
import { useNavigate } from "react-router-dom";

const ApiLogin = import.meta.env.VITE_API_LOGIN;

export function useLogin() {
    const navigate = useNavigate();
  // Estado del formulario
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

  // Estado de errores
  const [error, setError] = useState({});

  // Función para actualizar inputs
  const manejarCanbio = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Función para enviar el formulario
  const enviarFormulario = async (e) => {
    e.preventDefault();

    // Validación de campos
    const validationErrors = validationLogin(user);
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Aquí iría tu petición al backend
        // Por ejemplo con fetch:
        const response=await fetch(`${ApiLogin}`,{
            method:"Post",
            headers:{"Content-type":"aplication/json"},
            body:JSON.stringify(user)
        })
        const data = await response.json();
        console.log("Respuesta del backend exitosa :", data);
        if(data.id){
            navigate("/home")
        }
      } catch (err) {
        console.error("Error al enviar login:", err);
      }
    }
  };

  return { user, error, manejarCanbio, enviarFormulario };
}