export function Current() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ transform: "skewX(-8deg)", position: "relative" }}>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "4.5rem",
          color: "#000",
          letterSpacing: "0.02em",
          lineHeight: 0.8,
          textTransform: "uppercase",
          fontStyle: "italic",
          margin: 0,
          transform: "scaleX(0.85)",
          transformOrigin: "left",
        }}>
          MULA
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
          <div style={{ flex: 1, height: "1.5px", background: "#000", opacity: 0.15 }} />
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "0.7rem",
            color: "#000",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontStyle: "italic",
            opacity: 0.45,
          }}>
            FYSIO
          </span>
        </div>
      </div>
    </div>
  );
}
