import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '../assets/svg/googleIcon.svg';


function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();


  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Reference to the document, get user from google sign in
      const docRef = doc(db, 'users', user.uid);
      // then we get a snapshot of the document
      const docSnap = await getDoc(docRef)

      // check for user and if it doesnt exists create user
      if (!docSnap.exists()) {
        // create user in database
        await setDoc(doc(db, 'users', user.uid), {
          // data we wanna add to db
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }

      // Once user is signed in we navigate back to homepage
      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with Google')
    }
  }

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
      <button className='socialIconDiv' onClick={onGoogleClick}>
        <img className='socialIconImg' src={googleIcon} alt='google' />
      </button>
    </div>
  )
}

export default OAuth