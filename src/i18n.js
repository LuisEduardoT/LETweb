import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locale/en/en.json";
import esJSON from "./locale/es/es.json";
import Backend from "i18next-http-backend";

i18n
.use(initReactI18next)
.use(Backend)
.init({
	debug: true,
 resources: {
	 en: { translation: enJSON },
	 es: { translation: esJSON }, 
 }, // Where we're gonna put translations' files
 lng: "es",     // Set the initial language of the App
 fallbackLng: "es", // Language that will be loaded in case the translations the user is looking for are not available. 
 interpolation: {
	escapeValue: false,
  }, // used to escape the values and avoid XSS attacks, we will set it to false, because React already does it by default.
});

export default i18n;