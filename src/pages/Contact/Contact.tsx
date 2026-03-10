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
    const serviceId = "service_7nlejji"; // Ex. : service_xxxxx
    const templateId = "template_ok18you"; // Ex. : template_xxxxx
    const publicKey = "rufYzxI2hT7goG7qS"; // Ex. : your_public_key

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
        <p className="contact__hero--text">Parce que le contact humain reste une priorité.</p>
      </section>
      <section>
        <div className="contact__container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field--div-flex">
              <div className="contact__field--name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Prénom NOM *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field--phone">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact__field--email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field--subject">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet *"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field--message">
              <textarea
                id="message"
                name="message"
                placeholder="Tapez votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
              />
            </div>
            <div className="contact__submit--div">
              <button type="submit" className="contact__submit--text">Envoyer</button>
            </div>
          </form>
          {status && <p className="contact__status">{status}</p>}
        </div>
      </section>
    </>
  );
}

export default Contact;