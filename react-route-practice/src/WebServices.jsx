function WebServices() {
  const containerStyle = {
    padding: "24px",
    marginTop: "20px",
    background: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    color: "#2563eb",
    fontSize: "22px",
    marginTop: 0,
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const textStyle = {
    color: "#4b5563",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🌐 Web Development Services</h2>
      <p style={textStyle}>
        We build modern, responsive, and high-performance web applications tailored to your business needs. 
        Utilizing cutting-edge technologies like React, Next.js, and Node.js, we ensure seamless user experiences, 
        fast loading speeds, and robust backend scalability.
      </p>
    </div>
  );
}

export default WebServices;