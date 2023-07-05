import styles from "./ProfileDataForm.module.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ProfileDataForm = ({
  userInfo,
  saveProfile,
  saveChanges,
  serverError,
  clearServerError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      ...userInfo,
    },
  });

  let onSubmit = async (data) => {
    saveProfile(data).then(() => {
      saveChanges();
    }).catch((serverError) => {
      setError("root.serverError", {
        type: "custom",
        message: serverError,
      });
    });
  };

  const clearServerErrors = () => {
    clearServerError();
    clearErrors("root.serverError");
  };

  const formatError = () => {}

console.log("rendering");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.userInfo}>
      <ErrorMessage name="root.serverError" errors={errors} as="p" />
      <h2>User Info</h2>
      <label htmlFor="fullName">
        Full Name:
        <input
          {...register("fullName", {
            required: "This field is required",
          })}
          name="fullName"
          id="fullName"
        />
      </label>
      <ErrorMessage name="fullName" errors={errors} as="p" />
      <label htmlFor="aboutMe">
        About me:
        <input
          {...register("aboutMe", {
            required: "This field is required",
          })}
          name="aboutMe"
          id="aboutMe"
        />
      </label>
      <ErrorMessage name="aboutMe" errors={errors} as="p" />
      <label htmlFor="jobStatus">
        Are you looking for a job?
        <input
          {...register("lookingForAJob")}
          name="lookingForAJob"
          id="jobStatus"
          type="checkbox"
        />
      </label>
      <label htmlFor="jobDescription">
        Job Description:
        <textarea
          {...register("lookingForAJobDescription", {
            required: "This field is required",
          })}
          name="lookingForAJobDescription"
          id="jobDescription"
        />
      </label>
      <ErrorMessage name="lookingForAJobDescription" errors={errors} as="p" />
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        {Object.keys(userInfo.contacts).map((key) => (
          <label key={key} htmlFor={key}>
            {key}:
            <input
              {...register(`contacts[${key}]`)}
              name={`contacts[${key}]`}
              id={key}
            />
          </label>
        ))}
      </div>

      <button>Save changes</button>
    </form>
  );
};

export default ProfileDataForm;
