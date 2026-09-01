function About() {
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
    },

    paragraph: {
      fontSize: "18px",
      color: "#666",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.heading}>About Page</h1>

      <p style={style.paragraph}>
        Welcome to our website! We provide simple, modern, and
        user-friendly services to create a better experience for our users.
      </p>
    </div>
  );
}

export default About;