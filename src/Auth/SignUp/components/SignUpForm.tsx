import React from "react";
import { Stack } from "@chakra-ui/react";
import withFormik from "../../../shared/HOC/withFormik";
import { FormikProps } from "formik";
import { ISignUpModel } from "../../../shared/domain/interfaces/auth";
import { Button, Input } from "../../../shared/components/UI/atoms";

type Props = {
  initialValues: ISignUpModel;
  formik: FormikProps<ISignUpModel>;
  onSubmit: (model: ISignUpModel) => void;
};

const SignUpForm: React.FC<Props> = ({ formik }) => {
  return (
    <Stack spacing={4}>
      <Input
        label="Full name"
        placeholder='e.g. "John Smith"'
        isInvalid={!!formik.errors.name && formik.touched.name}
        errorMsg={formik.errors.name}
        styleType="dark"
        onChange={formik.handleChange("name")}
      />

      <Input
        type="email"
        label="Email address"
        placeholder='e.g. "example@example.com"'
        isInvalid={!!formik.errors.email && formik.touched.email}
        errorMsg={formik.errors.email}
        styleType="dark"
        onChange={formik.handleChange("email")}
      />

      <Input
        type="password"
        label="Password"
        placeholder='e.g. "John$33*68"'
        isInvalid={!!formik.errors.password && formik.touched.password}
        errorMsg={formik.errors.password}
        styleType="dark"
        onChange={formik.handleChange("password")}
      />

      <Button styleType="primary" isLoading={formik.isSubmitting} type="submit">
        Create account
      </Button>
    </Stack>
  );
};

export default withFormik(SignUpForm);
