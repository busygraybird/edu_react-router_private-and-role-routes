import {ROLES} from "../../constants";
import {ChangeEventHandler} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Switch} from "@mui/material";
import useAuth from "../../hooks/useAuth";

const PrivateParamsForm = () => {
  const {isAuth, userRole, toggleIsAuth, setUserRole} = useAuth()

  const roles = Object.keys(ROLES)

  const handleUserRoleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUserRole(e.target.value)

  return (
    <Stack direction="row" spacing={4}>
      <FormControl>
        <FormLabel component="legend">Is authenticated</FormLabel>
        <Switch value={isAuth} onChange={toggleIsAuth} />
      </FormControl>
      <FormControl component="fieldset" disabled={!isAuth}>
        <FormLabel component="legend">Role</FormLabel>
        <RadioGroup row name="user-role" value={userRole} onChange={handleUserRoleChange}>
          {roles.map((role) => <FormControlLabel key={role} value={role} control={<Radio/>} label={role}/>)}
        </RadioGroup>
      </FormControl>
    </Stack>
  )
}

export default PrivateParamsForm
