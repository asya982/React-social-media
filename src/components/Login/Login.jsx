import React, { useEffect } from "react";
import styles from "./Login.module.css";
import icon from "../../assets/images/icon.png";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  let onSubmit = (data) =>
    props.userLogin(data.email, data.password, data.remeberMe);

  let clearServerError = () => {
    props.clearServerError();
    clearErrors("root.serverError");
  };

  useEffect(() => {
    if (props.serverError) {
      setError("root.serverError", {
        type: "custom",
        message: props.serverError,
      });
    }
  }, [props.serverError, setError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        onClick={clearServerError}
        {...register("email", {
          required: "This field is required",
        })}
        placeholder={"Email"}
        name={"email"}
      />
      <ErrorMessage name="email" errors={errors} as="p" />
      <input
        onClick={clearServerError}
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Your password must be minimum 8 symbols length",
          },
        })}
        placeholder={"Password"}
        name={"password"}
        type={"password"}
      />
      <ErrorMessage name="password" errors={errors} as="p" />
      <div className={styles.remeberMe}>
        <input
          {...register("rememberMe")}
          placeholder={"rememberMe"}
          name={"rememberMe"}
          type={"checkbox"}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <ErrorMessage name="root.serverError" errors={errors} as="p" />
      <button>Log in</button>
    </form>
  );
};

const Login = (props) => {
  if (props.isAuth) return <Navigate to={"/profile/" + props.userId} />;
  return (
    <div className={styles.Login}>
      <img src={icon} alt="icon" />
      <LoginForm
        userLogin={props.userLogin}
        serverError={props.serverError}
        clearServerError={props.clearServerError}
      />
    </div>
  );
};

export default Login;
