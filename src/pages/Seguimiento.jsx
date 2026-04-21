// src/pages/Seguimiento.jsx

import { useState } from "react";

const Seguimiento = ({ lead, goBack }) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(lead.notes || []);

  const handleAddNote = () => {
    if (!note.trim()) return;

    const newNote = {
      text: note,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setNote("");
  };

  return (
    <div style={styles.container}>
      <button onClick={goBack} style={styles.backBtn}>
        ⬅ Volver
      </button>

      <h2 style={styles.title}>📂 Seguimiento del Cliente</h2>

      {/* INFO CLIENTE */}
      <div style={styles.card}>
        <p>
          <strong>👤 Nombre:</strong> {lead.name}
        </p>
        <p>
          <strong>📞 Teléfono:</strong> {lead.phone}
        </p>
        <p>
          <strong>⚖️ Área:</strong> {lead.area}
        </p>
        <p>
          <strong>📂 Subárea:</strong> {lead.subarea}
        </p>
        <p>
          <strong>💰 Valor:</strong> ${lead.amount}
        </p>
        <p>
          <strong>📅 Fecha:</strong> {lead.date}
        </p>
      </div>

      {/* 🔥 DESCRIPCIÓN DESTACADA */}
      <div style={styles.descriptionBox}>
        <h3 style={{ marginBottom: "10px" }}>📝 Descripción del caso</h3>
        <p style={{ lineHeight: "1.5" }}>{lead.description}</p>
      </div>

      {/* AGREGAR NOTA */}
      <div style={styles.noteBox}>
        <textarea
          placeholder="Escribe un comentario o seguimiento del caso..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={handleAddNote} style={styles.addBtn}>
          ➕ Agregar Seguimiento
        </button>
      </div>

      {/* HISTORIAL */}
      <h3 style={styles.subtitle}>📜 Historial</h3>

      {notes.length === 0 && (
        <p style={{ color: "#aaa" }}>No hay seguimientos aún.</p>
      )}

      {notes.map((n, i) => (
        <div key={i} style={styles.note}>
          <p>{n.text}</p>
          <small>{n.date}</small>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    color: "#fff",
    maxWidth: "900px",
  },
  backBtn: {
    marginBottom: "10px",
    padding: "6px 10px",
    cursor: "pointer",
  },
  title: {
    marginBottom: "20px",
  },
  subtitle: {
    marginTop: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  // 🔥 AQUÍ VA EL NUEVO BLOQUE
  descriptionBox: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "15px",
    borderLeft: "4px solid #3b82f6",
  },

  noteBox: {
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    border: "none",
  },
  addBtn: {
    padding: "10px 15px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  note: {
    background: "#0f172a",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default Seguimiento;
