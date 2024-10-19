import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSlider = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelected(storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = () => {
    const newLang = selected === "es" ? "en" : "es";
    setSelected(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
  
  return (
    <div className="flex items-center space-x-4">
      <button 
        className="w-20 h-10 bg-[#f8e5d3] rounded-full p-1 transition-colors duration-300 focus:outline-none relative overflow-hidden"
        onClick={changeLanguage}
      >
        <motion.div
          className="w-10 h-8 bg-[#8b1e3f] rounded-full absolute top-1 flex items-center justify-center text-[#f8e5d3] font-bold"
          initial={false}
          animate={{ x: selected === "es" ? 0 : 32 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {selected === "es" ? 'ES' : 'EN'}
        </motion.div>
      </button>
    </div>
  );
};

export default LanguageSlider;
