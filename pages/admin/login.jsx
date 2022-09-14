import styles from "../../styles/Login.module.css";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Layout title="Login-page">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Admin Dashboard</h1>
          <input
            type="text"
            className={styles.input}
            placeholder="user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className={styles.button}>
            Sign In
          </button>
          {error && <span className={styles.error}>Wrong Credentials!</span>}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
