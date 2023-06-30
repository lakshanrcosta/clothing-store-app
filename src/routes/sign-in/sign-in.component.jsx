import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGooglePopUpUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am the sign in page</h1>
      <button onClick={logGooglePopUpUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
