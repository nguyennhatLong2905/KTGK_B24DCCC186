import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        background: "#0078D7",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        📝 Blog Management
      </h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFD700" : "white",
            textDecoration: "none",
          })}
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/create"
          style={({ isActive }) => ({
            color: isActive ? "#FFD700" : "white",
            textDecoration: "none",
          })}
        >
          Viết bài mới
        </NavLink>
      </div>
    </nav>
  );
}
