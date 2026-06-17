import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import ContactDrawer from "./ContactDrawer";
import TopBar from "./TopBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Shield, TrendingUp, Users, GraduationCap, Wrench } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subServices = [
    { to: "/services/installation", label: t("Installation", "इंस्टॉलेशन"), icon: Zap, desc: t("Professional setup", "पेशेवर सेटअप") },
    { to: "/services/consultancy", label: t("Consultancy", "परामर्श"), icon: Shield, desc: t("Expert advice", "विशेषज्ञ सलाह") },
    { to: "/services/subsidy", label: t("Subsidy", "सब्सिडी"), icon: TrendingUp, desc: t("Govt. support", "सरकारी सहायता") },
    { to: "/services/franchise", label: t("Franchise", "फ्रैंचाइज़"), icon: Users, desc: t("Partner setup", "पार्टनर सेटअप") },
    { to: "/services/training", label: t("Training", "प्रशिक्षण"), icon: GraduationCap, desc: t("Staff workshops", "स्टाफ वर्कशॉप") },
    { to: "/services/maintenance", label: t("Maintenance", "रखरखाव"), icon: Wrench, desc: t("AMC support", "एएमसी सहायता") },
  ];

  const links = [
    { to: "/", label: t("Home", "होम") },
    { to: "/about", label: t("About Us", "हमारे बारे में") },
    { to: "/services", label: t("Services", "सेवाएं") },
    { to: "/product", label: t("Product", "प्रोडक्ट") },
    { to: "/how-it-works", label: t("How It Works", "कैसे काम करता है") },
    { to: "/why-solar", label: t("Why Solar", "सोलर क्यों") },
    { to: "/gallery", label: t("Gallery", "गैलरी") },
    { to: "/contact", label: t("Contact Us", "संपर्क करें") },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50">
      <TopBar isVisible={showTopBar} />
      <div className="bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-24 px-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Sainik Solar Logo" className="h-12 md:h-16 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm" />
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {links.map((l) => (
              l.to === "/services" ? (
                <div
                  key={l.to}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={l.to}
                    className={`text-sm font-bold transition-all hover:text-primary px-3 py-2 rounded-lg flex items-center gap-1 group-hover:bg-primary/5 ${location.pathname.startsWith("/services") ? "text-primary bg-primary/5" : "text-foreground"
                      }`}
                  >
                    {l.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-[480px] bg-card border border-border shadow-2xl rounded-2xl p-4 grid grid-cols-2 gap-2 z-50 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                        {subServices.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-primary/10 group/sub"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/sub:bg-primary/20 transition-colors">
                              <sub.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-foreground group-hover/sub:text-primary transition-colors">{sub.label}</div>
                              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">{sub.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-bold transition-all hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5 ${location.pathname === l.to ? "text-primary bg-primary/5" : "text-foreground"
                    }`}
                >
                  {l.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href="tel:+918433284427"
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
            >
              <Phone className="w-4 h-4" />
              {t("Call Now", "कॉल करें")}
            </a>
            <LanguageToggle />
            <ContactDrawer />

          </div>

          <button className="xl:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden overflow-hidden bg-card border-b border-border"
            >
              <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {links.map((l) => (
                  <div key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 px-3 rounded-lg text-sm font-bold transition-colors ${location.pathname === l.to ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                        }`}
                    >
                      {l.label}
                    </Link>
                    {l.to === "/services" && (
                      <div className="ml-4 mt-1 border-l-2 border-primary/20 pl-4 space-y-1">
                        {subServices.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className={`block py-2 px-3 rounded-lg text-xs font-bold transition-colors ${location.pathname === sub.to ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-muted"
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                  <LanguageToggle />
                  <a
                    href="tel:+918433284427"
                    className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    <Phone className="w-4 h-4" />
                    {t("Call Now", "कॉल करें")}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
