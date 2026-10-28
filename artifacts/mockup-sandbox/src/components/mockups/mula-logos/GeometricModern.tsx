export function GeometricModern() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ position: "relative", transform: "skewX(-9deg)" }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "5rem",
            color: "#000",
            letterSpacing: "0.02em",
            lineHeight: 0.75,
            display: "block",
            transform: "scaleX(1.2)",
            transformOrigin: "left",
          }}>
            M
          </span>
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "3px", marginLeft: "2px" }}>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: "1.8rem",
              color: "#000",
              letterSpacing: "0.04em",
              lineHeight: 1,
              transform: "scaleX(1.1)",
              transformOrigin: "left",
            }}>
              ULA
            </span>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              color: "#000",
              letterSpacing: "0.35em",
              lineHeight: 1,
              marginTop: "0px",
              opacity: 0.35,
            }}>
              FYSIO
            </span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: "-2px",
          top: "0",
          bottom: "0",
          width: "2.5px",
          background: "linear-gradient(180deg, #000, transparent)",
          opacity: 0.3,
        }} />
      </div>
    </div>
  );
}
