const LeadRow = ({ lead, onSelect }) => {
  // 🔥 Detectar si es nuevo (últimas 24 horas)
  const isNew = () => {
    if (!lead.date) return false;

    const now = new Date();
    const leadDate = new Date(lead.date);

    const diffHours = (now - leadDate) / (1000 * 60 * 60);

    return diffHours < 24;
  };

  return (
    <div style={styles.row}>
      <div style={styles.mainInfo}>
        <strong>
          {lead.name}{" "}
          {isNew() && <span style={styles.badge}>NUEVO</span>}
        </strong>

        <span>📞 {lead.phone}</span>
        <span>⚖️ {lead.area}</span>
        <span>📂 {lead.subarea}</span>
      </div>

      <div style={styles.secondaryInfo}>
        <span>💰 ${lead.amount}</span>
        <span style={styles.description}>{lead.description}</span>
        <span>{lead.date}</span>
      </div>

      <button style={styles.button} onClick={() => onSelect(lead)}>
        SEGUIMIENTO
      </button>
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    background: "#1e293b",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    color: "#fff",
  },
  mainInfo: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  secondaryInfo: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "14px",
    color: "#cbd5f5",
  },
  description: {
    maxWidth: "300px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  badge: {
    background: "#22c55e",
    color: "#000",
    padding: "2px 6px",
    borderRadius: "6px",
    fontSize: "10px",
    marginLeft: "6px",
  },
  button: {
    alignSelf: "flex-end",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default LeadRow;
