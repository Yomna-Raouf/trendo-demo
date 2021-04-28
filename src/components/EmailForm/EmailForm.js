import { useState } from "react";
import { Formik, Form } from "formik";
import "./EmailForm.css";
import { InputField } from "../InputField/InputField";
import * as yup from "yup";

const EmailForm = () => {
  // const [signInEmail, setSignInEmail] = useState("");
  const [continueState, setContinueState] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email("not a valid Email").required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
    >
      {(formik) => (
        <Form className="Login__FormEmail">
          <fieldset id="Login" className="Login__FormEmailFieldset">
            {/*  <label htmlFor="email-address">البريد الإلكتروني</label> */}
            {/*<input
              type="email"
              name="email-address"
              id="email-address"
              value={signInEmail}
              placeholder="name@example.com"
              onChange={(e) => setSignInEmail(e.target.value)}
            /> */}
            <InputField
              label="البريد الإلكتروني"
              type="email"
              name="email-address"
              placeholder="name@example.com"
            />
            {console.log(formik.values)}
          </fieldset>

          <div className="Login__formRegisterButton">
            <button
              onClick={(e) => {
                e.preventDefault();
                setContinueState(true);
              }}
            >
              استمرار
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { EmailForm };
