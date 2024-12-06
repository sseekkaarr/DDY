import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Auth.module.scss";

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      alert("Login failed: " + result.error);
    } else {
      router.push("/"); // Redirect to homepage on success
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.leftSection}>
        <h1>Sign in to</h1>
        <h2>Daily Dose of You</h2>
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={370}
          height={370}
          onClick={() => router.push("/")}
        />
      </div>
      <div className={styles.rightSection}>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name="email" type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input name="password" type="password" placeholder="Enter your password" />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => router.push("/signup")}>Create new account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
