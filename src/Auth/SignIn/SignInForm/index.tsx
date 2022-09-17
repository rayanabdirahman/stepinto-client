import React from "react";
import { Stack } from "@chakra-ui/react";
import withFormik from "../../../shared/HOC/withFormik";
import { FormikProps } from "formik";
import { ISignInModel } from "../../../shared/domain/interfaces/auth";
import { Button, Input } from "../../../shared/components/UI/atoms";

type Props = {
  initialValues: ISignInModel;
  formik: FormikProps<ISignInModel>;
  onSubmit: (model: ISignInModel) => void;
};

const SignInForm: React.FC<Props> = ({ formik }) => {
  return (
    <Stack spacing={4}>
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
        Sign in
      </Button>
    </Stack>
  );
};

export default withFormik(SignInForm);
