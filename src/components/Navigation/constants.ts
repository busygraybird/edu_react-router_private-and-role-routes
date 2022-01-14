import {PATHS, ROLES} from "../../constants";

export const navigationItems = [
  {path: PATHS.home, title: 'home'},
  {path: PATHS.private, title: 'private', availableFor: [ROLES.user, ROLES.admin]},
  {path: PATHS.public, title: 'public'},
  {path: PATHS.admin, title: 'admin', availableFor: [ROLES.admin]},
  {path: PATHS.profile, title: 'profile', availableFor: [ROLES.user, ROLES.admin]},
]
