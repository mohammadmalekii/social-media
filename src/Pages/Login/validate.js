export default function validate(values) {
  let errors = {};

  //   firstname
  if (!values.firstname) {
    errors.firstname = "نام خانوادگی اجباری است !";
  }

  //   lastname
  if (!values.lastname) {
    errors.lastname = "نام اجباری است !";
  }

  // username
  //   if (!values.username) {
  //     errors.username = "نام کاربری اجباری است !";
  //   }

  //   email
  if (!values.email) {
    errors.email = "ایمیل اجباری است";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "ایمیل اشتباه است";
  }

  //   password
  if (!values.password) {
    errors.password = "رمز عبور اجباری است";
  } else if (values.password.length < 8) {
    errors.password = "رمز عبور باید حداقل 8 کاراکتر باشد";
  }

  //   confrim password
  if (!values.password2) {
    errors.password2 = "تکرار رمز عبور اجباری است";
  } else if (values.password !== values.password2) {
    errors.password2 = "رمز عبور یکسان نیست";
  }

  return errors;
}
