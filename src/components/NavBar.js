import WantedTitle from "./WantedTitle";
import MenuList from "./MenuList";
import Addon from "./Addon";
const NavBar = () => {
  return (
    <div className="NavBar-Maincontainer" style={{ paddingRight: "initial" }}>
      <nav className="NavBar-Subcontainer">
        <WantedTitle></WantedTitle>
        <MenuList></MenuList>
        <Addon></Addon>
      </nav>
    </div>
  );
};

export default NavBar;
