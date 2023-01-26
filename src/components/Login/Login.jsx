import React from "react";
import styles from "./Login.module.css";
import icon from "../../assets/images/icon.png";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();

  let onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register("login")} placeholder={"Login"} name={"login"} />
      <input
        {...register("password")}
        placeholder={"Password"}
        name={"password"}
        type={"password"}
      />      
      <div className={styles.remeberMe}>
        <input
          {...register("rememberMe")}
          placeholder={"rememberMe"}
          name={"rememberMe"}
          type={"checkbox"}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button>Log in</button>
    </form>
  );
};

const Login = () => (
  <div className={styles.Login}>
    <img src={icon} alt="icon" />
    <LoginForm />
  </div>
);

export default Login;
