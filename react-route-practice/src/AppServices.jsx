function AppServices() {
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
    color: "#0284c7",
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
      <h2 style={titleStyle}>📱 Mobile App Development</h2>
      <p style={textStyle}>
        We specialize in building high-performance, intuitive mobile applications for iOS and Android platforms. 
        Using modern cross-platform technologies like React Native and Flutter, we deliver seamless user interfaces, 
        robust performance, and scalable features tailored to your mobile audience.
      </p>
    </div>
  );
}

export default AppServices;