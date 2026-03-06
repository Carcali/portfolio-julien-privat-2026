import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function Contact() {
  // États pour les champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });
  const [message, setMessage] = useState(""); // Champ optionnel pour le message
  const [status, setStatus] = useState(""); // Pour afficher le statut (succès/erreur)

  // Gestion des changements dans les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation basique
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject) {
      setStatus("Tous les champs requis doivent être remplis.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Veuillez entrer un email valide.");
      return false;
    }
    return true;
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Remplacez par vos vraies clés EmailJS
    const serviceId = "your_service_id"; // Ex. : service_xxxxx
    const templateId = "your_template_id"; // Ex. : template_xxxxx
    const publicKey = "your_public_key"; // Ex. : your_public_key

    // Paramètres à envoyer (doivent correspondre à votre template EmailJS)
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: message, // Optionnel
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email envoyé avec succès :", response);
        setStatus("Message envoyé avec succès !");
        // Réinitialiser le formulaire
        setFormData({ name: "", phone: "", email: "", subject: "" });
        setMessage("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setStatus("Erreur lors de l'envoi. Veuillez réessayer.");
      });
  };

  return (
    <>
      <section className="contact__hero--section">
        <h1 className="contact__hero--title">Contact</h1>
      </section>
      <section>
        <div className="contact__container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Prénom NOM *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="subject">Sujet *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message (optionnel)</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
              />
            </div>
            <button type="submit" className="contact__button">Envoyer</button>
          </form>
          {status && <p className="contact__status">{status}</p>}
        </div>
      </section>
    </>
  );
}

export default Contact;