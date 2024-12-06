import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Auth.module.scss";

const Signup = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    // Validasi Input
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert("Signup successful! Redirecting to login...");
      router.push("/login");
    } else {
      const error = await response.json();
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.leftSection}>
        <h1>Sign up to</h1>
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
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input name="email" type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input name="password" type="password" placeholder="Enter your password" />
          <button type="submit">Sign Up</button>
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
