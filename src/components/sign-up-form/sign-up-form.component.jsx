import { useState } from "react";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Signup up using email password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handelChange}
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handelChange}
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handelChange}
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={handelChange}
          value={confirmPassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
