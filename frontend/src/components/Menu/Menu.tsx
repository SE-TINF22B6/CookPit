import CustomLink from "../CustomLink/CustomLink";
import "../Menu/Menu.css";

export default function Menu() {
  return (
    <nav className="menu_btn_wrapper">
      <input className="checkbox" type="checkbox" id="menu-checkbox" />
      <label htmlFor="menu-checkbox" id="menu_label">
        <div className="hamburger_lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </label>
      <div className="menu_items">
        <div className="menu_items_wrapper" id="miw">
          <div className="separation_line"></div>
          <CustomLink to={"/show-all-recipes"} children={"Show all recipes"} />
          <CustomLink to={"/recipe-maker"} children={"Recipe maker"} />
          <CustomLink to={"/upload-recipe"} children={"Upload a recipe"} />
          <CustomLink to={"/my-recipe"} children={"Show my recipes"} />
          <div className="separation_line"></div>
          <CustomLink to={"/account"} children={"Account"} />
          <div className="separation_line"></div>
        </div>
      </div>
    </nav>
  );
}
