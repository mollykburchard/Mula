export function StackedMinimal() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ transform: "skewX(-10deg)", position: "relative" }}>
        <h1 style={{
          fontFamily: "'Saira Extra Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "5rem",
          color: "#000",
          letterSpacing: "0.06em",
          lineHeight: 0.75,
          textTransform: "uppercase",
          margin: 0,
        }}>
          MULA
        </h1>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "-8%",
          right: "-8%",
          height: "2.5px",
          background: "#000",
          transform: "translateY(-50%)",
          opacity: 0.08,
        }} />
        <p style={{
          fontFamily: "'Saira Extra Condensed', sans-serif",
          fontWeight: 300,
          fontSize: "1rem",
          color: "#000",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          marginTop: "2px",
          opacity: 0.4,
        }}>
          FYSIO
        </p>
      </div>
    </div>
  );
}
