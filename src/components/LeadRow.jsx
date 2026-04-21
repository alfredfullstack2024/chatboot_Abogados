// src/components/LeadRow.jsx

const LeadRow = ({ lead, onSelect }) => {
  return (
    <div style={styles.row}>
      <strong>{lead.name}</strong>
      <span>📞 {lead.phone}</span>
      <span>⚖️ {lead.area}</span>
      <span>📂 {lead.subarea}</span>
      <span>💰 ${lead.amount}</span>
      <span>{lead.description}</span>
      <span>{lead.date}</span>

      <button onClick={() => onSelect(lead)}>SEGUIMIENTO</button>
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    background: "#1e293b",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    color: "#fff",
  },
};

export default LeadRow;
