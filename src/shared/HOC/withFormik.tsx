import { Formik, Form, FormikHelpers } from "formik";
import { Component, ComponentType } from "react";

interface IProps {
  initialValues: any;
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>;
}

export default function withFormik(WrappedComponent: ComponentType<any>) {
  return class WithFormik extends Component<IProps> {
    render() {
      return (
        <Formik
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        >
          {(formik) => (
            <Form>
              <WrappedComponent {...this.props} formik={formik} />
            </Form>
          )}
        </Formik>
      );
    }
  };
}
