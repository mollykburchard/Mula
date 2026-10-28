export function SlashSplit() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", transform: "skewX(-10deg)" }}>
          <span style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "3.8rem",
            color: "#000",
            letterSpacing: "0.02em",
            lineHeight: 0.8,
            textTransform: "uppercase",
          }}>
            MULA
          </span>
          <div style={{
            width: "2.5px",
            height: "48px",
            background: "#000",
            margin: "0 10px",
            transform: "skewX(-8deg)",
            opacity: 0.2,
          }} />
          <span style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 300,
            fontSize: "1.8rem",
            color: "#000",
            letterSpacing: "0.15em",
            lineHeight: 0.8,
            textTransform: "uppercase",
            opacity: 0.35,
          }}>
            FYSIO
          </span>
        </div>
        <div style={{
          position: "absolute",
          bottom: "-6px",
          left: "0",
          right: "35%",
          height: "1.5px",
          background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.1))",
          transform: "skewX(-10deg)",
        }} />
      </div>
    </div>
  );
}
