import useAuth from "../../../redux/hooks/useAuth";
import "./style.css";

function Menu() {
  const { handleLogOut } = useAuth();
  return (
    <div
      className="customer-menu"
      style={{
        backgroundColor: "#2f4858",
        color: "white",
        width: "20%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          listStyle: "none",
        }}
      >
        <li>
          User information
          <hr />
        </li>
        <li>
          Update user information
          <hr />
        </li>
        <li>
          View order history
          <hr />
        </li>
        <li style={{ cursor: "pointer" }} onClick={handleLogOut}>
          Log out
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
