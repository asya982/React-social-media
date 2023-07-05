import { ErrorMessage } from "@hookform/error-message";

export const Input = ({ id, name, rules, label, errors }) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        {...register({id}, {
          required: "This field is required",
        })}
        name={id}
        id={id}
      />
      <ErrorMessage name="fullName" errors={errors} as="p" />
    </label>
  );
};
