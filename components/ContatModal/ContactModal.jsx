"use client";

import { useRef } from "react";
import styles from "./ContactModal.module.css";

export default function ContactModal() {
  const dialogRef = useRef(null);

  function openModal() {
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
            <p>PRODUCTION / ENGINEERING</p>
            <p>ENQUIRY FORM</p>
            <p>REF. FP-001</p>
          </div>

          <form
            className={styles.form}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

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

            <div className={styles.field}>
              <label htmlFor="project">03 / PROJECT</label>
              <input
                id="project"
                name="project"
                type="text"
                placeholder="Artist / record / project"
              />
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="message">04 / MESSAGE</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <footer className={styles.footer}>
              <p>
                DATE:{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }).format(new Date())}
              </p>

              <button type="submit" className="btn">
                Send Enquiry <span>→</span>
              </button>
            </footer>
          </form>
        </div>
      </dialog>
    </>
  );
}
