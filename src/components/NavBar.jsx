import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={require("../assets/logo.JPG")} className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon
          className="navbar-toggler-icon"
          icon={faList}
          color="white"
        />
      </button>

      <div
        className="collapse navbar-collapse items"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav  mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              تماس با ما
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              علاقه مندی
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              فروشگاه
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#">
              ثبت نام / ورود <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        {/*   <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="نام کالا"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            جست و جو
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default NavBar;
