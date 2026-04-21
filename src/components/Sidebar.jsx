// src/components/Sidebar.jsx

const Sidebar = ({ setView }) => {
  return (
    <div style={styles.sidebar}>
      <h2>⚖️ Abogados</h2>

      <button onClick={() => setView("list")}>📋 Listado Clientes</button>
      <button onClick={() => setView("stats")}>📊 Estadísticas</button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#0f172a",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default Sidebar;
