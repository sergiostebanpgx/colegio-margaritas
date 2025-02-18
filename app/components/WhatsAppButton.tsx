import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-tertiary transition-colors z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

export default WhatsAppButton

