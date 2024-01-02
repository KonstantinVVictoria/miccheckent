import styles from "./styles.module.css";
import { NavLinkProps, NavLinksProps, WebsiteBannerLogoProps } from "./types";

function NavLink(props: NavLinkProps) {
  const { href, label } = props;
  return (
    <div className={styles.navbar_link}>
      <a href={href}>{label}</a>
    </div>
  );
}

function NavItems(props: NavLinksProps) {
  const { nav_links } = props;
  const NavLinks = nav_links.map((props) => <NavLink {...props} />);
  return <nav className={styles.navbar_links}>{NavLinks}</nav>;
}

function WebsiteBannerLogo({ logo_src, logo_href }: WebsiteBannerLogoProps) {
  return (
    <div>
      <a href={logo_href}>
        <img alt="company logo" src={logo_src} />
      </a>
    </div>
  );
}

export default function Navbar(props: NavLinksProps & WebsiteBannerLogoProps) {
  return (
    <header className={styles.navbar_container}>
      <WebsiteBannerLogo
        logo_src={props.logo_src}
        logo_href={props.logo_href}
      />
      <NavItems nav_links={props.nav_links} />
    </header>
  );
}
