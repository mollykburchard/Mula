export function SerifContrast() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ position: "relative", transform: "skewX(-7deg)" }}>
        <div style={{
          background: "#000",
          padding: "8px 24px 6px 18px",
          clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)",
        }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "2.8rem",
            color: "#FFF",
            letterSpacing: "0.1em",
            lineHeight: 1,
            textTransform: "uppercase",
            fontStyle: "italic",
          }}>
            MULA
          </span>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginTop: "3px",
          gap: "6px",
        }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "0.8rem",
            color: "#000",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontStyle: "italic",
            opacity: 0.5,
          }}>
            FYSIO
          </span>
          <div style={{ flex: 1, height: "1px", background: "#000", opacity: 0.15 }} />
        </div>
      </div>
    </div>
  );
}
