import { withLogger } from "../hoc/withLogger";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#home" aria-label="Dev Insights home">
          <span className="header__mark" aria-hidden="true">
            DI
          </span>
          <span className="header__brand">
            <span className="header__name">Dev Insights</span>
            <span className="header__tagline">Internal Mini Blog</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Main">
          <a className="header__link" href="#new-post">
            New Post
          </a>
        </nav>
      </div>
    </header>
  );
}

export default withLogger(Header, "Header");
