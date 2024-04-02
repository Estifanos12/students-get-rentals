import MobileNav from "../common/navbar/mobile_nav";
import { NavigationBar } from "../common/navbar/navbar";

export default function Navbar() {
  return (
    <>
      <NavigationBar className="hidden sm:flex" />
      <MobileNav className="sm:hidden" />
    </>
  );
}
