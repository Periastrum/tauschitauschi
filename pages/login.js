// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    // 👉 Mock-Login: akzeptiert JEDE Eingabe, wenn beide Felder gefüllt sind.
    await new Promise(r => setTimeout(r, 700)); // kleine „Warte“-Simulation

    if (email && pw) {
      setMsg("Erfolgreich eingeloggt (Demo). Weiterleitung …");
      router.push("/dashboard"); // zur Demo-Seite
    } else {
      setMsg("Bitte E-Mail und Passwort eingeben.");
    }
    setLoading(false);
  }

  return (
    <main style={styles.wrap}>
      <div style={styles.card}>
        <h1 style={{ marginBottom: 8 }}>Login</h1>
        <p style={{ marginTop: 0, color: "#666" }}>
          (Demo – ohne echte Benutzerprüfung)
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <label style={styles.label}>E-Mail</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="du@beispiel.de"
            style={styles.input}
            required
          />

          <label style={styles.label}>Passwort</label>
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            placeholder="••••••••"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Anmelden …" : "Anmelden"}
          </button>
        </form>

        {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
      </div>
      <a href="/" style={{ marginTop: 16, color: "#0a7" }}>← zurück zur Startseite</a>
    </main>
  );
}

const styles = {
  wrap: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f6f7f9", padding: 20 },
  card: { width: "100%", maxWidth: 420, background: "#fff", borderRadius: 14, padding: 24, boxShadow: "0 10px 25px rgba(0,0,0,.08)" },
  label: { display: "block", marginTop: 12, marginBottom: 6, fontWeight: 600 },
  input: { width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #dde1e6", outline: "none" },
  button: { marginTop: 16, width: "100%", padding: "12px 14px", borderRadius: 10, border: "none", background: "#0a7", color: "#fff", fontWeight: 700, cursor: "pointer" }
};
