import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const LanguageSlider = () => {
  const {  i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language); // Establecemos el idioma actual como valor inicial

  const changeLanguage = (language) => {
    setSelected(language);  // Cambiar el estado para reflejar el idioma seleccionado
    i18n.changeLanguage(language); // Cambiar el idioma con i18next
  };

  return (
    <div
      className={`grid h-[200px] place-content-center px-4 transition-colors ${
        selected === "en" ? "bg-white" : "bg-slate-900"
      }`}
    >
      <SliderToggle selected={selected} changeLanguage={changeLanguage} />
    </div>
  );
};

const SliderToggle = ({ selected, changeLanguage }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "en" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          changeLanguage("en"); // Cambiar a inglés
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">{t("languageSlider.en")}</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "es" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          changeLanguage("es"); // Cambiar a español
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">{t("languageSlider.es")}</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "es" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default LanguageSlider;
