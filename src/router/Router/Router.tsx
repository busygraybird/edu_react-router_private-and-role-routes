import {Route, Routes} from "react-router-dom";
import {PATHS, ROLES} from "../../constants";
import PrivateRoute from "../PrivateRoute";

const Router = () => {
 return (
   <Routes>
     <Route path={PATHS.home} element={<div>home page</div>}/>
     <Route path={PATHS.public} element={<div>public page</div>}/>
     <Route
       path={PATHS.private}
       element={<PrivateRoute>
         <div>private page</div>
       </PrivateRoute>}
     />
     <Route
       path={PATHS.admin}
       element={<PrivateRoute roles={[ROLES.admin]}>
         <div>admin page</div>
       </PrivateRoute>}
     />
     <Route
       path={PATHS.profile}
       element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}>
         <div>profile page</div>
       </PrivateRoute>}
     />
   </Routes>
 )
}

export default Router
