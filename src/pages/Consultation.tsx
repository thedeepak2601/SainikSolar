import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Phone, Mail, MapPin, BarChart3, Lightbulb, Calculator, Award, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: t("Consultation Booked!", "परामर्श बुक हो गया!"), description: t("We'll get back within 24 hours.", "हम 24 घंटे में वापस आएंगे।") });
  };

  const benefits = [
    { icon: BarChart3, text: t("Detailed energy consumption analysis", "विस्तृत ऊर्जा खपत विश्लेषण") },
    { icon: Lightbulb, text: t("Customized solar system recommendations", "अनुकूलित सोलर सिस्टम सिफ़ारिशें") },
    { icon: Calculator, text: t("ROI and payback calculations", "ROI और पेबैक गणना") },
    { icon: Award, text: t("Government subsidy guidance", "सरकारी सब्सिडी मार्गदर्शन") },
    { icon: UserCheck, text: t("Expert advice from Er. Ashish Dixit", "इंजी. आशीष दीक्षित से विशेषज्ञ सलाह") },
  ];

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-background">
        <AnimatedSection direction="scale">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">{t("Consultation Booked!", "परामर्श बुक हो गया!")}</h2>
            <p className="text-muted-foreground">{t("Our team will contact you within 24 hours.", "हमारी टीम 24 घंटे में संपर्क करेगी।")}</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-primary px-6 py-2 text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              {t("Book Another", "एक और बुक करें")}
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t("Book Solar Consultation", "सोलर परामर्श बुक करें")}</h1>
            <p className="opacity-90 max-w-xl mx-auto">{t("Get expert advice from Er. Ashish Dixit and our team. Free consultation available.", "इंजी. आशीष दीक्षित और हमारी टीम से विशेषज्ञ सलाह। निःशुल्क परामर्श उपलब्ध।")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-semibold text-xl mb-4">{t("Consultation Details", "परामर्श विवरण")}</h3>

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
                      <input required className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder={t("City, State", "शहर, राज्य")} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t("Property Type", "संपत्ति का प्रकार")}</label>
                      <select className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all">
                        <option>{t("Select property type", "संपत्ति प्रकार चुनें")}</option>
                        <option>{t("Residential", "आवासीय")}</option>
                        <option>{t("Commercial", "व्यावसायिक")}</option>
                        <option>{t("Industrial", "औद्योगिक")}</option>
                        <option>{t("Government", "सरकारी")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t("Monthly Electricity Bill (₹)", "मासिक बिजली बिल (₹)")}</label>
                      <input className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="e.g., 3000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">{t("Specific Requirements", "विशेष आवश्यकताएं")}</label>
                    <textarea rows={3} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none" placeholder={t("Tell us about your solar requirements...", "अपनी सोलर आवश्यकताओं के बारे में बताएं...")} />
                  </div>

                  <div className="bg-muted rounded-xl p-4 border border-border">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="type" defaultChecked className="accent-primary w-4 h-4" />
                      <div>
                        <span className="font-medium text-sm">{t("Free Consultation (Phone/Video)", "निःशुल्क परामर्श (फ़ोन/वीडियो)")}</span>
                      </div>
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-xl bg-primary py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
                  >
                    {t("Book Free Consultation", "निःशुल्क परामर्श बुक करें")}
                  </motion.button>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2} direction="right">
                <div className="glass-card rounded-2xl p-6 mb-6">
                  <h4 className="font-heading font-semibold mb-4">{t("What You Get", "आपको क्या मिलेगा")}</h4>
                  <div className="space-y-3">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <b.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-heading font-semibold mb-4">{t("Contact Information", "संपर्क जानकारी")}</h4>
                  <div className="space-y-3 text-sm">
                    <a href="tel:+918433284427" className="flex items-center gap-3 text-primary hover:underline">
                      <Phone className="w-4 h-4" /> +91-8433284427
                    </a>
                    <a href="mailto:engineersolarwala2020@gmail.com" className="flex items-center gap-3 hover:text-primary">
                      <Mail className="w-4 h-4" /> engineersolarwala2020@gmail.com
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                      {t("Uttar Pradesh, India", "उत्तर प्रदेश, भारत")}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
