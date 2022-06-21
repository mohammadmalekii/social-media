export default function validate(values) {
  let errors = {};

  // username
  if (!values.username) {
    errors.username = "نام کاربری اجباری است";
  }

  //   password
  if (!values.password) {
    errors.password = "رمز عبور اجباری است";
  } else if (values.password.length < 8) {
    errors.password = "رمز عبور باید حداقل 8 کاراکتر باشد";
  }

  return errors;
}
