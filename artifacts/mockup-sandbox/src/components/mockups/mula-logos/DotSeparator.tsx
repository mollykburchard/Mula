export function DotSeparator() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ position: "relative", transform: "skewX(-9deg)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "1px" }}>
          {["M", "U", "L", "A"].map((letter, i) => (
            <span key={i} style={{
              fontFamily: "'Antonio', sans-serif",
              fontWeight: 700,
              fontSize: "4.2rem",
              color: "#000",
              lineHeight: 0.8,
              display: "block",
              transform: `scaleX(${0.8 + i * 0.08})`,
            }}>
              {letter}
            </span>
          ))}
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginTop: "4px",
          justifyContent: "flex-end",
        }}>
          <div style={{ width: "20px", height: "1.5px", background: "#000", opacity: 0.2 }} />
          <span style={{
            fontFamily: "'Antonio', sans-serif",
            fontWeight: 400,
            fontSize: "0.7rem",
            color: "#000",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            opacity: 0.4,
          }}>
            FYSIO
          </span>
        </div>
      </div>
    </div>
  );
}
