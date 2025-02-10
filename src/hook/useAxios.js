import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, method = "GET", body = null, token = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios({
          url,
          method,
          data: body,
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, token]);

  return { data, loading, error };
};

export default useAxios;

/* 🔹 Ejemplo: Obtener datos de un usuario

import React from "react";
import useAxios from "./hooks/useAxios";

const UserProfile = () => {
    const token = "tu_token_aqui";  // Se obtendría de un estado global o localStorage
    const { data, loading, error } = useAxios("https://api.example.com/user", "GET", null, token);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>Email: {data.email}</p>
        </div>
    );
};

export default UserProfile; */

/* 4️⃣ Ejemplo de Uso con POST
Si necesitas enviar datos (por ejemplo, iniciar sesión), puedes usar POST pasando un body en el request.

🔹 Ejemplo: Iniciar sesión y obtener un token

import React, { useState } from "react";
import useAxios from "./hooks/useAxios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data, loading, error } = useAxios(
        "https://api.example.com/login",
        "POST",
        { email, password }
    );

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Token recibido:", data?.token);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" disabled={loading}>Iniciar Sesión</button>
            </form>
            {loading && <p>Autenticando...</p>}
            {error && <p>Error: {error}</p>}
            {data?.token && <p>Token: {data.token}</p>}
        </div>
    );
};

export default Login; */