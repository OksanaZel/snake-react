import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Label, Input, Button } from "./UserFrom.styled";
import { usersOperations} from "../../redux";

function UserForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(usersOperations.createUser(values)), setSubmitting(false), resetForm();
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        Name
        <Input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <>{formik.errors.name}</>
        ) : null}
      </Label>

      <Button type="submit" disabled={formik.isSubmitting}>
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
