import {useRecoilState} from "recoil";
import {isAuthState, userRoleState} from "../store/auth";

const useAuth = () => {
  const [isAuth, setIsAuth] = useRecoilState(isAuthState)
  const [userRole, setUserRole] = useRecoilState(userRoleState)

  const toggleIsAuth = () => setIsAuth((actual) => !actual)

  return {isAuth, userRole, toggleIsAuth, setUserRole}
}

export default useAuth
