import { ClearAll, LocalPizza, Add } from "@material-ui/icons";

const NavbarApp = () => {
  return (
    <header className="header" data-testid="header">
      <nav className="main-nav">
        <div className="logo">
          <ClearAll />
        </div>
        <div className="settings">
          <ul>
            <li>
              <Add />
            </li>
            <li>
              <LocalPizza />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarApp;
