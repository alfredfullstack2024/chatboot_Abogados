// src/pages/Estadisticas.jsx

const Estadisticas = ({ leads }) => {
  const total = leads.length;

  const porArea = leads.reduce((acc, l) => {
    acc[l.area] = (acc[l.area] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ color: "#fff" }}>
      <h2>📊 Estadísticas</h2>

      <p>Total clientes: {total}</p>

      <h3>Por área:</h3>
      {Object.entries(porArea).map(([area, count]) => (
        <p key={area}>
          {area}: {count}
        </p>
      ))}
    </div>
  );
};

export default Estadisticas;
