import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.scss";

const Signup = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default values
    const name = "User";
    const email = "user123@gmail.com";
    const password = "user123";

    // You can replace this with actual backend logic later
    alert(`Signed up as Name: ${name}, Email: ${email}, Password: ${password}`);
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.leftSection}>
        <h1>Sign up to</h1>
        <h2>Daily Dose of You</h2>
        <Image src="/img/logo.png" alt="Logo" width={370} height={370} onClick={() => router.push("/")} />
      </div>
      <div className={styles.rightSection}>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <span onClick={() => router.push("/login")}>Sign in here</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
