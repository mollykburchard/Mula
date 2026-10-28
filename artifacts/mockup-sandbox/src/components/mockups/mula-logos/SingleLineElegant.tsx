export function SingleLineElegant() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px", transform: "skewX(-12deg)" }}>
          <span style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 700,
            fontSize: "4.5rem",
            color: "#000",
            letterSpacing: "0.04em",
            lineHeight: 0.75,
            textTransform: "uppercase",
            transform: "scaleX(1.15)",
            transformOrigin: "left",
          }}>
            MULA
          </span>
          <span style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 300,
            fontSize: "4.5rem",
            color: "#000",
            letterSpacing: "0.04em",
            lineHeight: 0.75,
            textTransform: "uppercase",
            opacity: 0.3,
            transform: "scaleX(1.15)",
          }}>
            FYSIO
          </span>
        </div>
        <div style={{
          position: "absolute",
          bottom: "6px",
          left: "-5%",
          right: "-5%",
          display: "flex",
          gap: "3px",
        }}>
          {[...Array(25)].map((_, i) => (
            <div key={i} style={{
              flex: 1,
              height: "1px",
              background: "#000",
              opacity: 0.02 + (i / 25) * 0.15,
              transform: "skewX(-12deg)",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
