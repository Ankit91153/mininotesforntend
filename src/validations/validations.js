import * as Yup from "yup";

const EMAILREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
export const signUpSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Name must contain only letters and spaces")
    .min(3,"Name should be more than 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .matches(EMAILREGEX, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/(?=.*[0-9])/, "Password must contain at least one digit")
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Password must contain at least one special character"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .required("Password is required"),
});
