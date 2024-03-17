import React from "react";
import ContactForm from "../components/ContactForm";
import Page from "../components/Page";

export default function Contact() {
  return (
    <Page>
      <div className="hero-sub-container">
        <img src="https://picsum.photos/id/60/1200/800" alt="Hero image" />
      </div>
      <ContactForm />
    </Page>
  );
}
