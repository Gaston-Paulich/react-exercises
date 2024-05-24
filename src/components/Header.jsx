const Header = () => {
  return (
    <header>
      <figure>
        <img src="images/logos/logo-blue.svg" alt="NUEVA B-MIX" />
      </figure>

      <button className="open-menu" id="btn-menu">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </button>

      <nav className="nav-mobile">
        <figure>
          <img src="images/logos/logo-blue.svg" alt="NUEVA B-MIX" />
        </figure>

        <ul className="menu-scroll">
          <li>
            <a href="#video">Video</a>
          </li>
          <li>
            <a href="#producto">Producto</a>
          </li>
          <li>
            <a href="#registrate">Regístrate</a>
          </li>
        </ul>

        <ul className="menu-social">
          <li>
            <a href="#">
              <img src="images/icons/icon-blue-x.svg" alt="X" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bmix.cl">
              <img src="images/icons/icon-blue-instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icons/icon-blue-facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@b-mixchile">
              <img src="images/icons/icon-blue-youtube.svg" alt="YouTube" />
            </a>
          </li>
        </ul>

        <ul className="menu-legal">
          <a href="https://www.ab-inbev.com/" target="_blank" rel="noreferrer">
            Anheuser-Busch InBev©
          </a>
          <a
            href="https://www.tapintoyourbeer.com"
            target="_blank"
            rel="noreferrer"
          >
            Tap Into Your Beer
          </a>
          <a href="#" target="_blank">
            Términos & Condiciones
          </a>
          <a
            href="https://www.abinbev.cl/index.php/node/73"
            target="_blank"
            rel="noreferrer"
          >
            Política De Privacidad
          </a>
        </ul>
      </nav>

      <nav className="nav-desktop">
        <ul className="menu-scroll">
          <li>
            <a href="#video">Video</a>
          </li>
          <li>
            <a href="#producto">Producto</a>
          </li>
          <li>
            <a href="#registrate">Regístrate</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
