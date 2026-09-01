function Home() {
  const style = {
    container: {
      width: "70%",
      maxWidth: "700px",
      margin: "80px auto",
      textAlign: "center",
      padding: "40px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },

    heading: {
      fontSize: "40px",
      color: "#333",
      marginBottom: "20px",
    },

    paragraph: {
      fontSize: "18px",
      color: "#666",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.heading}>Home Page</h1>

      <p style={style.paragraph}>
        Welcome to our website! Explore our pages and learn more
        about our services and information.
      </p>
    </div>
  );
}

export default Home;