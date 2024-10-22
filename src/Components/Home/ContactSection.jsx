import { useState } from "react";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_bawlu42","template_l8qfqph", formData, 'yQNMeO1gaR9hfetMf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Correo enviado correctamente');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Hubo un error al enviar el correo');
      });
  };

  return (
    <div className="bg-turquoise text-turContrast font-playfair min-h-screen overflow-x-hidden flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-8 text-[#1c0f38] text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full px-0 py-2 text-[#1c0f38] bg-transparent border-b-2 border-[#1c0f38] focus:outline-none focus:border-white transition-colors placeholder-[#1c0f38] placeholder-opacity-75"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full px-0 py-2 text-[#1c0f38] bg-transparent border-b-2 border-[#1c0f38] focus:outline-none focus:border-white transition-colors placeholder-[#1c0f38] placeholder-opacity-75"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="relative mt-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-0 py-2 text-[#1c0f38] bg-transparent border-b-2 border-[#1c0f38] focus:outline-none focus:border-white transition-colors resize-none h-32 placeholder-[#1c0f38] placeholder-opacity-75"
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#1c0f38] text-white rounded-md hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 mt-8"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
