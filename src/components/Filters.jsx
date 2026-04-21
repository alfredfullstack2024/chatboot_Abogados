// src/components/Filters.jsx

const Filters = () => {
  return (
    <div style={styles.container}>
      <input placeholder="Buscar por nombre o número" />
      <select>
        <option>Filtro por área</option>
        <option>Derecho Penal</option>
        <option>Derecho Civil</option>
      </select>
      <input type="date" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    marginBottom: "20px",
  },
};

export default Filters;
