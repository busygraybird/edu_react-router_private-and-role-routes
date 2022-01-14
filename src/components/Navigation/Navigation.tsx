import {FC} from "react";
import {Button, Link, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import {navigationItems} from "./constants";
import styles from './Navigation.module.scss';

type NavigationItem = {
  path: string
  title: string
  availableFor?: Array<string>
}

const NavigationItem: FC<NavigationItem> = ({path, title, availableFor}) => (
  <NavLink to={path} className={styles.navigation__link}>
    {({isActive}) => (
      <Link component={getVariantButton(isActive ? "contained" : "outlined")}>
        <div>{title}</div>
        {availableFor && <div className={styles.link__subtext}>
            available for: <span className={styles.link__availableFor}>{availableFor.join(', ')}</span>
        </div>}
      </Link>
    )}
  </NavLink>
)

const Navigation: FC = () => {
  return (
    <Stack direction="row" spacing={4}>
      {navigationItems.map((item) => <NavigationItem {...item} />)}
    </Stack>
  )
}

const getVariantButton = (variant: 'outlined' | 'contained'): FC => (props) =>
  <Button variant={variant} {...props} className={styles.navigation__link} />

export default Navigation
