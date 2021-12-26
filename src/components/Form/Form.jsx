import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Label, Input, Button } from "./From.styled";

export default function UserForm({ onSubmit }) {
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
      console.log(values);
      onSubmit(values), setSubmitting(false), resetForm();
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
        {" "}
        Submit
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
};
