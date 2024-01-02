import Image from "next/image";
import styles from "./page.module.css";
import SplashPage from "@/pages/SplashPage/view";
import Webpage from "@/templates/Webpage";
import { NavLinksProps } from "@/components/Navbar/types";

const nav_link = (label: string, href: string = "") => {
  return { label: label, href: href };
};
const nav_links = [
  nav_link("Home"),
  nav_link("About"),
  nav_link("Contact"),
  nav_link("Book"),
  nav_link("Jobs"),
];
export default function Home() {
  return (
    <Webpage nav_links={nav_links}>
      <SplashPage />
    </Webpage>
  );
}
