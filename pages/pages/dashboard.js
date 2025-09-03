// pages/dashboard.js
export default function Dashboard() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Hallo 👋</h1>
        <p>Du bist auf dem (Demo-)Dashboard gelandet.</p>
        <a href="/" style={{ color: "#0a7" }}>Zurück zur Startseite</a>
      </div>
    </main>
  );
}
