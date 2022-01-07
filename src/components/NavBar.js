import WantedTitle from "./WantedTitle";
import MenuList from "./MenuList";
import Addon from "./Addon";
const NavBar = () => {
  return (
    <div
      style={{
        paddingRight: "initial",
        position: "fixed",
        borderBottom: "1px solid #e3e3e3",
        zIndex: "100",
        width: "100%",
      }}
    >
      <div className="NavBar-Maincontainer">
        <nav className="NavBar-Subcontainer">
          <WantedTitle></WantedTitle>
          <MenuList></MenuList>
          <Addon></Addon>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
