import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import LeadRow from "../components/LeadRow";
import Filters from "../components/Filters";
import Seguimiento from "./Seguimiento";
import Estadisticas from "./Estadisticas";

const Dashboard = () => {
  const [view, setView] = useState("list");
  const [selected, setSelected] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://chatboot-bqad.onrender.com/webhook/leads";

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        // 🔥 Ordenar por fecha (más recientes primero)
        const sorted = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setLeads(sorted);
      } catch (error) {
        console.error("Error cargando leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setView={setView} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#020617",
          minHeight: "100vh",
        }}
      >
        {view === "list" && !selected && (
          <>
            <h2 style={{ color: "#fff" }}>LISTADO DE CLIENTES</h2>
            <Filters />

            {loading ? (
              <p style={{ color: "#fff" }}>Cargando clientes...</p>
            ) : leads.length === 0 ? (
              <p style={{ color: "#aaa" }}>
                No hay clientes registrados aún.
              </p>
            ) : (
              leads.map((lead, index) => (
                <LeadRow
                  key={lead._id || index}
                  lead={lead}
                  onSelect={setSelected}
                />
              ))
            )}
          </>
        )}

        {selected && (
          <Seguimiento
            lead={selected}
            goBack={() => setSelected(null)}
          />
        )}

        {view === "stats" && <Estadisticas leads={leads} />}
      </div>
    </div>
  );
};

export default Dashboard;
