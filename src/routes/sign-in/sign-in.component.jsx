import { wait } from "@testing-library/user-event/dist/utils";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    // const Response = await signInWithGooglePopup();
    const { user } = await signInWithGooglePopup(); //destructuring
    const userData = await createUserDocumentFromAuth(user);
    console.log(userData);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
