export function VerticalStack() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ transform: "skewX(-8deg)", position: "relative" }}>
        <h1 style={{
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "3.8rem",
          color: "#000",
          letterSpacing: "0.04em",
          lineHeight: 0.82,
          textTransform: "uppercase",
          fontStyle: "italic",
          margin: 0,
          transform: "scaleX(0.9)",
          transformOrigin: "left",
        }}>
          MULA
        </h1>
        <div style={{
          position: "absolute",
          top: "-4px",
          right: "-4px",
          width: "10px",
          height: "10px",
          borderTop: "2px solid #000",
          borderRight: "2px solid #000",
          opacity: 0.2,
        }} />
        <div style={{
          position: "absolute",
          bottom: "6px",
          left: "-4px",
          width: "10px",
          height: "10px",
          borderBottom: "2px solid #000",
          borderLeft: "2px solid #000",
          opacity: 0.2,
        }} />
        <p style={{
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 300,
          fontSize: "0.7rem",
          color: "#000",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          fontStyle: "italic",
          margin: 0,
          marginTop: "4px",
          textAlign: "center",
          opacity: 0.4,
          transform: "scaleX(0.9)",
          transformOrigin: "center",
        }}>
          FYSIO
        </p>
      </div>
    </div>
  );
}
