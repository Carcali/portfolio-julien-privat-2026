import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import Seo from "../../components/Seo/Seo";
import { initTextRollHover } from "../../utils/textRollHover";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const submitRef = useRef<HTMLButtonElement>(null);

  // CTA "Envoyer" : texte en roll au survol
  useEffect(() => {
    if (!submitRef.current) return;
    return initTextRollHover(submitRef.current, ".contact__submit--label");
  }, []);

  // ── Anti-spam ────────────────────────────────────────────────
  const [honeypot, setHoneypot] = useState("");
  const formStartTime = useRef<number>(Date.now());
  const lastSubmitTime = useRef<number | null>(null);
  const COOLDOWN_MS = 30_000;
  const MIN_FILL_TIME_MS = 3_000;
  // ─────────────────────────────────────────────────────────────

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject) {
      setStatus("Tous les champs requis doivent être remplis.");
      setStatusType("error");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Veuillez entrer un email valide.");
      setStatusType("error");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) return;

    const timeSpent = Date.now() - formStartTime.current;
    if (timeSpent < MIN_FILL_TIME_MS) return;

    if (lastSubmitTime.current && Date.now() - lastSubmitTime.current < COOLDOWN_MS) {
      const secondsLeft = Math.ceil((COOLDOWN_MS - (Date.now() - lastSubmitTime.current)) / 1000);
      setStatus(`Merci de patienter ${secondsLeft}s avant de renvoyer un message.`);
      setStatusType("error");
      return;
    }

    if (!validateForm()) return;

    lastSubmitTime.current = Date.now();

    const serviceId = "service_7nlejji";
    const templateId = "template_ok18you";
    const publicKey = "rufYzxI2hT7goG7qS";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email envoyé avec succès :", response);
        setStatus("Message envoyé avec succès !");
        setStatusType("success");
        setFormData({ name: "", phone: "", email: "", subject: "" });
        setMessage("");
        formStartTime.current = Date.now();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setStatus("Erreur lors de l'envoi. Veuillez réessayer.");
        setStatusType("error");
      });
  };

  return (
    <>
      <Seo
        title="Contact — Julien PRIVAT, graphiste & développeur web freelance"
        description="Contactez-moi pour discuter de votre projet d'identité de marque ou de site web. Parce que le contact humain reste une priorité."
        path="/contact"
      />
      <section className="contact__hero--section">
        <h1 className="contact__hero--title">Contact</h1>
        <p className="contact__hero--text">Parce que le contact humain reste une priorité.</p>
      </section>
      <section>
        <div className="contact__container">
          <form className="contact__form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="bot_field"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                rows={6}
              />
            </div>
            <div className="contact__submit--div">
              <button type="submit" ref={submitRef} className="contact__submit--text">
                <span className="contact__submit--inner">
                  <span className="contact__submit--label">Envoyer</span>
                </span>
              </button>
            </div>
          </form>
          {status && (
            <div
              className={`contact__status contact__status--${statusType}`}
              role="status"
            >
              <span className="contact__status--badge">
                <span className="contact__status--icon" aria-hidden="true">
                  {statusType === "success" ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.4-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2 1 21h22L12 2Zm0 5.5 7.5 13h-15L12 7.5ZM11 10h2v5h-2v-5Zm0 6.5h2v2h-2v-2Z" />
                    </svg>
                  )}
                </span>
                <span className="contact__status--text">{status}</span>
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Contact;