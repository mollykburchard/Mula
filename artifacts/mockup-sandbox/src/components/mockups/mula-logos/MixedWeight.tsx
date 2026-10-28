export function MixedWeight() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ transform: "skewX(-10deg)", position: "relative" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "4rem",
            color: "#000",
            letterSpacing: "0.03em",
            lineHeight: 0.78,
            textTransform: "uppercase",
            fontStyle: "italic",
            margin: 0,
            position: "relative",
          }}>
            <span style={{ position: "relative", zIndex: 2 }}>MULA</span>
            <span style={{
              position: "absolute",
              left: "3px",
              top: "3px",
              color: "#000",
              opacity: 0.06,
              zIndex: 1,
            }}>
              MULA
            </span>
          </h1>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "5px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #000)" }} />
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 300,
            fontSize: "0.7rem",
            color: "#000",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontStyle: "italic",
            opacity: 0.4,
          }}>
            FYSIO
          </span>
        </div>
      </div>
    </div>
  );
}
