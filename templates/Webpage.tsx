import { NavLinksProps } from "@/components/Navbar/types";
import Navbar from "@/components/Navbar/view";

type WebpageProps = {
  children: React.ReactNode;
} & NavLinksProps;

export default function Webpage(props: WebpageProps) {
  return (
    <>
      <Navbar nav_links={props.nav_links} />
      {props.children}
    </>
  );
}
