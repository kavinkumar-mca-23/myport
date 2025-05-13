import React, { useState } from "react";

function FormToSheet() {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // Track type of message

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbzuwl1FMZKT_sZMT7uCOVYxhsWrI9PvhM9iCbykmt2Fk5neM9d3_04SdP1cXsFCZsuCdw/exec";

    const formData = new URLSearchParams();
    formData.append("Name", e.target.name.value);
    formData.append("Email", e.target.email.value);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setIsSuccess(true);
        setMessage(" Submitted successfully!");
        e.target.reset();
        setTimeout(() => {
          setMessage("");
          setIsSuccess(null);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setIsSuccess(false);
        setMessage(" Submited succesfully💚 ");
      });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Just mail me..🙂</h1>
        <h1 style={styles.title}>React to Google Sheet</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
          {message && (
            <p
              style={{
                ...styles.message,
                color: isSuccess ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      {/* Embedded Google Map for Coimbatore */}
      <div style={styles.mapContainer}>
        <h2 style={styles.mapTitle}>My Location: Coimbatore</h2>
        <iframe
          title="Coimbatore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.338195340534!2d76.95530887494035!3d11.016844255506797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857c2472f95ab%3A0x6a98e782a53a74c6!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683116548555!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "40px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#1f8ef1",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  message: {
    marginTop: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
  mapContainer: {
    maxWidth: "700px",
    margin: "auto",
    padding: "10px",
    textAlign: "center",
  },
  mapTitle: {
    marginBottom: "10px",
    color: "#333",
  },
};

export default FormToSheet;
