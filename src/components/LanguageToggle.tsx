import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const cycleLanguage = () => {
    if (lang === "en") setLang("hi");
    else setLang("en");
  };

  return (
    <button
      onClick={cycleLanguage}
      className="flex items-center gap-1 rounded-full border border-primary/30 px-3 py-1.5 text-sm font-medium transition-all hover:bg-primary/10"
    >
      <span className={lang === "en" ? "font-bold text-primary" : "text-muted-foreground"}>EN</span>
      <span className="text-muted-foreground">|</span>
      <span className={lang === "hi" ? "font-bold text-primary" : "text-muted-foreground"}>हि</span>
    </button>
  );
};

export default LanguageToggle;
