const CardInfo = ({ info_top, info_bottom, showing }) => {
  return (
    <div className="Info-container" style={{ opacity: showing }}>
      <h2
        style={{
          fontSize: "18px",
          lineHeight: "1",
          fontWeight: "700",
          marginTop: "20px",
        }}
      >
        {info_top}
      </h2>
      <h3
        style={{
          fontSize: "13px",
          marginTop: "6px",
          fontWeight: "500",
          lineHeight: "1.15",
          color: "#666",
        }}
      >
        {info_bottom}
      </h3>
      <div className="infoborder"></div>
      <span
        style={{
          display: "block",
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "1",
          color: "#36f",
          padding: "6px 8px",
          marginTop: "15px",
        }}
      >
        바로가기 >
      </span>
    </div>
  );
};

export default CardInfo;
