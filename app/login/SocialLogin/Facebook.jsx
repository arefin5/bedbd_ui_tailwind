import Image from "next/image"
import facebookIcon from '/public/icons/facebook.png'
import { GoogleAuthProvider, getAuth , FacebookAuthProvider} from "firebase/auth";
import {auth, facebookLogin,  facebookProvider, signInWithPopup} from '../../lib/firebase'

export default function Facebook() {

  const handleSignIn = async () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token)

        const user = result.user;
        console.log(user)

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
      };
  return (
    <button 
      onClick={handleSignIn}
      className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
        <Image src={facebookIcon} height={24} width={24}/>facebook
    </button>
)
}
