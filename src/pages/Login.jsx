import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/auth";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { signInSchema } from "../validations/validations";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

 

  const onSubmit = async(values,{setSubmitting}) => {
    
    try {
        const {email, password } = values;
        await dispatch(login({ email, password }, navigate));
      } catch (error) {
        console.error("Signup failed", error);
      } finally {
        setSubmitting(false);
      }
  };

  return (
    <div className="w-11/12">
      <div className="w-[50%] mx-auto border mt-5 bg-slate-500 px-5 rounded-3xl">
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3">
              <h1 className="font-bold text-3xl text-center text-white mt-3">Login</h1>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-[100%] p-2 border"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="w-[100%] p-2 border"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div className="my-4">
                <button
                  type="submit"
                  className="mx-auto block border bg-slate-600 text-white p-3 rounded-md hover:scale-105 transition duration-300 ease-in-out"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
