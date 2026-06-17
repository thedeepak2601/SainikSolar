import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const brands = [
    "Polycab", "Sundak", "Loom Solar", "Pahal", "V-Guard", "Adani",
    "Luminous", "Waaree", "Exide", "Jakson", "Microtek", "UTL Solar", "Tata", "Electrower"
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Sainik Solar Logo" className="h-12 w-auto object-contain drop-shadow-sm" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              {t(
                "Dixit & Daughters Enterprises  UPNEDA Empaneled Firm. Consultancy, Installation & Services. 2000+ projects installed across Uttar Pradesh.",
                "दीक्षित एंड डॉटर्स एंटरप्राइजेज  UPNEDA पैनलबद्ध फर्म। परामर्श, इंस्टॉलेशन और सेवाएं। उत्तर प्रदेश में 2000+ प्रोजेक्ट्स इंस्टॉल।"
              )}
            </p>
            <div className="inline-block rounded-lg bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/30">
              {t("3 KW Solar Plant ≈ ₹3,000 Monthly Saving", "3 KW सोलर प्लांट ≈ ₹3,000 मासिक बचत")}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">{t("Quick Links", "त्वरित लिंक")}</h4>
            <div className="space-y-2">
              {[
                { to: "/about", label: t("About Us", "हमारे बारे में") },
                { to: "/services", label: t("Services", "सेवाएं") },
                { to: "/product", label: t("Product Price List", "प्रोडक्ट मूल्य सूची") },
                { to: "/how-it-works", label: t("How It Works", "कैसे काम करता है") },
                { to: "/why-solar", label: t("Why Solar", "सोलर क्यों") },
                { to: "/gallery", label: t("Gallery", "गैलरी") },
                { to: "/contact", label: t("Contact Us", "संपर्क करें") },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">{t("Contact", "संपर्क")}</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+918433284427" className="hover:text-primary font-semibold">+91 8433284427</a><br />
                  <span className="text-xs">{t("Toll Free", "टोल फ्री")}: 02269622226</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:engineersolarwala2020@gmail.com" className="hover:text-primary break-all">
                  engineersolarwala2020@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-background/90 mb-1">{t("Corporate Office", "मुख्य कार्यालय")}</p>
                  <span>{t("Sarai Sahjadi, Banthara Bazaar, Near Ramada Plaza, Kanpur Road, Lucknow-226401", "सराय सहजादी, बंथरा बाज़ार, रामाडा प्लाज़ा के पास, कानपुर रोड, लखनऊ-226401")}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-background/90 mb-1">{t("Branch Office", "शाखा कार्यालय")}</p>
                  <span>{t("Unit No.-625, Crescent Heights, Ansal API, Shaheed Path, Lucknow-226030", "यूनिट नं.-625, क्रिसेंट हाइट्स, अंसल API, शहीद पथ, लखनऊ-226030")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brands & Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">{t("Our Brand Partners", "हमारे ब्रांड पार्टनर्स")}</h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {brands.map((b) => (
                <span key={b} className="text-xs px-2 py-1 rounded-full border border-background/20 opacity-70">
                  {b}
                </span>
              ))}
            </div>

            <h4 className="font-heading font-semibold mb-3 text-primary">{t("Follow Us", "फॉलो करें")}</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-primary hover:text-primary transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs opacity-0">
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50 text-center sm:text-left">
          <span>© 2025 Sainik Solar (formerly Engineer Solar Wala) — Dixit & Daughters Enterprises. {t("All rights reserved.", "सभी अधिकार सुरक्षित।")}</span>
          <span className="sm:text-right">{t("UPNEDA Empaneled | GSTIN: 09ABDFS6332D1ZA", "UPNEDA पैनलबद्ध | GSTIN: 09ABDFS6332D1ZA")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
