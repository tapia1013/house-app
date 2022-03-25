// Outlet = allows us to render child routes
import { Navigate, Outlet } from 'react-router-dom';
// use custom made hook useAuthState
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';


const PrivateRoute = () => {
  // check to see if we're logged in with Firebase and custom hook
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute