export function EditorialSerif() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div style={{ transform: "skewX(-12deg)", position: "relative" }}>
        <h1 style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "4.8rem",
          color: "#000",
          letterSpacing: "-0.02em",
          lineHeight: 0.72,
          textTransform: "uppercase",
          margin: 0,
        }}>
          MULA
        </h1>
        <div style={{
          width: "115%",
          marginLeft: "-5%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #000)",
          marginTop: "5px",
          position: "relative",
        }}>
          <div style={{
            position: "absolute",
            right: "0",
            top: "-3px",
            width: "0",
            height: "0",
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            borderLeft: "6px solid #000",
          }} />
        </div>
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontWeight: 300,
          letterSpacing: "0.35em",
          fontSize: "0.7rem",
          color: "#000",
          marginTop: "4px",
          textTransform: "uppercase",
          textAlign: "right",
          opacity: 0.4,
        }}>
          FYSIO
        </p>
      </div>
    </div>
  );
}
