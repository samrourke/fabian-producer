"use client";

import { useRef, useState } from "react";
import styles from "./ContactModal.module.css";

export default function ContactModal() {
  const dialogRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function openModal() {
    setStatus("idle");
    setError("");
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send enquiry.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);

      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <button className="btn" onClick={openModal}>
        Contact <span>→</span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={handleBackdropClick}
      >
        <div className={styles.sheet}>
          <header className={styles.header}>
            <div>
              <h2>Contact Form</h2>
            </div>

            <button
              type="button"
              className="btn"
              onClick={closeModal}
              aria-label="Close contact form"
            >
              <p>X</p>
            </button>
          </header>

          <div className={styles.meta}>
            <p>PRODUCTION / MIXING / DRUMS</p>
          </div>

          {status === "success" ? (
            <div className={styles.success}>
              <p>ENQUIRY SENT</p>
              <p>Thanks for getting in touch.</p>

              <button type="button" className="btn" onClick={closeModal}>
                Close <span>→</span>
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">01 / NAME</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                }}
              >
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">02 / EMAIL</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={`${styles.field} ${styles.messageField}`}>
                <label htmlFor="message">03 / MESSAGE</label>
                <textarea id="message" name="message" rows="5" required />
              </div>

              <footer className={styles.footer}>
                <div>
                  <p>
                    DATE:{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }).format(new Date())}
                  </p>

                  {status === "error" && (
                    <p className={styles.error}>{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Enquiry <span>→</span>
                    </>
                  )}
                </button>
              </footer>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
