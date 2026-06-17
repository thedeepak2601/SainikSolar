import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Building2, Factory, Landmark, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const propertyTypes = [
  { key: "residential", icon: Home, label: "Residential", labelHi: "आवासीय" },
  { key: "commercial", icon: Building2, label: "Commercial", labelHi: "व्यावसायिक" },
  { key: "industrial", icon: Factory, label: "Industrial", labelHi: "औद्योगिक" },
  { key: "government", icon: Landmark, label: "Government", labelHi: "सरकारी" },
];

const InstallationRequest = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [propertyType, setPropertyType] = useState("residential");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: t("Request Submitted!", "अनुरोध जमा हो गया!"), description: t("We'll contact you within 24 hours.", "हम 24 घंटे के भीतर संपर्क करेंगे।") });
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-background">
        <AnimatedSection direction="scale">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">{t("Request Submitted!", "अनुरोध जमा हो गया!")}</h2>
            <p className="text-muted-foreground mb-2">{t("Our expert will contact you within 24 hours.", "हमारा विशेषज्ञ 24 घंटे में संपर्क करेगा।")}</p>
            <ul className="text-sm text-muted-foreground space-y-1 mt-4">
              <li>• {t("Free site assessment", "निःशुल्क साइट मूल्यांकन")}</li>
              <li>• {t("Customized system design", "अनुकूलित सिस्टम डिज़ाइन")}</li>
              <li>• {t("Government subsidy assistance", "सरकारी सब्सिडी सहायता")}</li>
            </ul>
            <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-primary px-6 py-2 text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              {t("Submit Another", "एक और जमा करें")}
            </button>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div>
      <section className="py-20 bg-gradient-solar text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t("Solar Installation Request", "सोलर इंस्टॉलेशन अनुरोध")}</h1>
            <p className="opacity-90">{t("Submit your request and our experts will design a customized solution", "अपना अनुरोध जमा करें, हमारे विशेषज्ञ समाधान डिज़ाइन करेंगे")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            {/* Property Type */}
            <div className="mb-8">
              <h3 className="font-heading font-semibold mb-4">{t("Select Your Property Type", "अपनी संपत्ति का प्रकार चुनें")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt.key}
                    onClick={() => setPropertyType(pt.key)}
                    className={`rounded-xl p-4 flex flex-col items-center gap-2 border-2 transition-all ${propertyType === pt.key
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-card text-muted-foreground hover:border-primary/30"
                      }`}
                  >
                    <pt.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{t(pt.label, pt.labelHi)}</span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-heading font-semibold">{t("Installation Details", "इंस्टॉलेशन विवरण")}</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Full Name *", "पूरा नाम *")}</label>
                  <input required className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder={t("Enter your full name", "अपना पूरा नाम दर्ज करें")} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Phone Number *", "फ़ोन नंबर *")}</label>
                  <input required type="tel" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Email Address", "ईमेल पता")}</label>
                  <input type="email" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Location *", "स्थान *")}</label>
                  <input required className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder={t("Complete address", "पूरा पता")} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Pincode *", "पिनकोड *")}</label>
                  <input required className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder={t("6-digit pincode", "6-अंकों का पिनकोड")} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Roof Area (Sq. Ft.) *", "छत का क्षेत्रफल (वर्ग फुट) *")}</label>
                  <input required className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="e.g., 1000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Monthly Bill (₹)", "मासिक बिल (₹)")}</label>
                  <input className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="e.g., 5000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("Budget Range (₹)", "बजट सीमा (₹)")}</label>
                  <select className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all">
                    <option>{t("Select budget range", "बजट सीमा चुनें")}</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000 - ₹3,00,000</option>
                    <option>₹3,00,000 - ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">{t("Additional Information", "अतिरिक्त जानकारी")}</label>
                <textarea rows={3} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none" placeholder={t("Any specific requirements...", "कोई विशेष आवश्यकता...")} />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-xl bg-primary py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                {t("Submit Installation Request", "इंस्टॉलेशन अनुरोध जमा करें")}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default InstallationRequest;
