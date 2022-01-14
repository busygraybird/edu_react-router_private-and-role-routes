import {atom} from "recoil";
import {ROLES} from "../constants";

export const isAuthState = atom<boolean>({
  key: 'isAuthState',
  default: false
})

export const userRoleState = atom<string>({
  key: 'userRoleState',
  default: ROLES.admin
})
