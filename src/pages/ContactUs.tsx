import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageSquare, Sun, CheckCircle, Award, Star, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import professionalHero from "@/assets/professional-hero.png";

const ContactUs = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", service: "", message: "" });

  const services = [
    { value: "installation", label: t("Solar Panel Installation", "सोलर पैनल इंस्टॉलेशन") },
    { value: "consultancy", label: t("Consultancy & Energy Audit", "परामर्श और ऊर्जा ऑडिट") },
    { value: "subsidy", label: t("Government Subsidy Support", "सरकारी सब्सिडी सहायता") },
    { value: "franchise", label: t("Franchise Partner Setup", "फ्रैंचाइज़ पार्टनर सेटअप") },
    { value: "training", label: t("Staff Training & Workshops", "स्टाफ प्रशिक्षण और कार्यशालाएं") },
    { value: "maintenance", label: t("Maintenance & AMC", "रखरखाव और AMC") },
  ];

  const offices = [
    {
      title: t("Corporate Office", "मुख्य कार्यालय"),
      address: t("Sarai Sahjadi, Banthara Bazaar, Near Ramada Plaza, Kanpur Road, Lucknow-226401", "सराय सहजादी, बंथरा बाज़ार, रामाडा प्लाज़ा के पास, कानपुर रोड, लखनऊ-226401"),
    },
    {
      title: t("Branch Office", "शाखा कार्यालय"),
      address: t("Unit No.-625, Crescent Heights, Ansal API, Shaheed Path, Lucknow-226030", "यूनिट नं.-625, क्रिसेंट हाइट्स, अंसल API, शहीद पथ, लखनऊ-226030"),
    },
    {
      title: t("SGPGI Branch", "SGPGI शाखा"),
      address: t("House No. 590P/031, Gangajipuram Colony, Charan Bhatta Road, SGPGI, Lucknow-226014", "मकान नं. 590P/031, गंगाजीपुरम कॉलोनी, चरन भट्टा रोड, SGPGI, लखनऊ-226014"),
    },
  ];

  const contactCards = [
    { icon: Phone, title: t("Call Us", "कॉल करें"), lines: ["+91 8433284427"], color: "bg-blue-500/10 text-blue-500", link: "tel:+918433284427" },
    { icon: Mail, title: t("Email Us", "ईमेल करें"), lines: ["engineersolarwala2020@gmail.com"], color: "bg-purple-500/10 text-purple-500", link: "mailto:engineersolarwala2020@gmail.com" },
    { icon: Clock, title: t("Working Hours", "कार्य समय"), lines: [t("Mon - Sat: 9AM - 7PM", "सोम - शनि: 9AM - 7PM"), t("Sunday: By Appointment", "रविवार: अपॉइंटमेंट पर")], color: "bg-green-500/10 text-green-500" },
    { icon: MessageSquare, title: t("Toll Free", "टोल फ्री"), lines: ["02269622226"], color: "bg-orange-500/10 text-orange-500", link: "tel:02269622226" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // recaptcha validation
    if (!captchaToken) {
      toast({
        title: t("reCAPTCHA Required!", "रीकैप्चा आवश्यक है!"),
        description: t("Please verify that you are not a robot.", "कृपया सत्यापित करें कि आप रोबोट नहीं हैं।"),
        variant: "destructive"
      });
      return;
    }

    // Phone validation
    if (form.phone.length !== 10) {
      toast({
        title: t("Invalid Phone!", "अमान्य फोन!"),
        description: t("Please enter a valid 10-digit phone number.", "कृपया 10-अंकों का मान्य फोन नंबर दर्ज करें।"),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS Setup
      const result = await emailjs.send(
        "service_lyfpj6s", // Service ID
        "template_an9moxw", // Template ID
        {
          full_name: form.name,
          phone_number: form.phone,
          email: form.email,
          service: services.find(s => s.value === form.service)?.label || form.service,
          subject: form.subject,
          message: form.message,
          submitted_time: new Date().toLocaleString(),
          to_name: "SGPGI Solar Wala",
          'g-recaptcha-response': captchaToken
        },
        "0BQtmo6yTT2lNejqm" // Public Key
      );

      if (result.status === 200) {
        toast({
          title: t("Message Sent!", "संदेश भेजा गया!"),
          description: t("Thank you for reaching out. We'll get back to you within 24 hours.", "संपर्क करने के लिए धन्यवाद। हम 24 घंटे के भीतर आपसे संपर्क करेंगे।")
        });
        setForm({ name: "", phone: "", email: "", subject: "", service: "", message: "" });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: t("Send Failed", "भेजना विफल रहा"),
        description: t("Something went wrong. Please try again or call us directly.", "कुछ गलत हो गया। कृपया पुन: प्रयास करें या हमें सीधे कॉल करें।"),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img src={professionalHero} alt="Contact Sainik Solar" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64 opacity-20" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[100px] -ml-32 -mb-32 opacity-20" />
          <Sun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary/10 animate-pulse" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black tracking-[0.2em] uppercase mb-6">
              {t("24/7 Support", "24/7 सहायता")}
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
              {t("Get In Touch", "संपर्क करें")}
            </h1>
            <p className="max-w-2xl mx-auto text-xl opacity-90 font-medium leading-relaxed mb-10">
              {t("Have questions about solar? Our engineers are ready to guide you towards a sustainable and profitable future.", "सोलर के बारे में सवाल हैं? हमारे इंजीनियर एक टिकाऊ और लाभदायक भविष्य की ओर आपका मार्गदर्शन करने के लिए तैयार हैं।")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-bold">{t("Free Consultation", "निःशुल्क परामर्श")}</span>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-bold">{t("Expert Engineers", "विशेषज्ञ इंजीनियर")}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactCards.map((c, i) => {
              const CardElement = c.link ? "a" : "div";
              return (
                <AnimatedSection key={i} delay={i * 0.1} direction="up">
                  <CardElement
                    href={c.link || undefined}
                    className={`block group bg-card rounded-[2rem] p-7 text-center h-full border border-primary/5 hover:border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)] transition-all duration-500 ${c.link ? "hover:-translate-y-1 cursor-pointer outline-none focus:ring-2 focus:ring-primary" : ""}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${c.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <c.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-black text-lg mb-3 group-hover:text-primary transition-colors">{c.title}</h3>
                    {c.lines.map((l, j) => (
                      <p key={j} className="text-sm text-muted-foreground font-medium leading-relaxed">{l}</p>
                    ))}
                  </CardElement>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Contact Form + Offices */}
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-primary/10">
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">{t("Send a Message", "संदेश भेजें")}</span>
                  <h2 className="text-3xl font-heading font-black mb-8">{t("We'd Love to Hear From You", "हम आपसे सुनना चाहेंगे")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input
                        className="w-full rounded-2xl border border-primary/10 bg-[#FDF7F2] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium transition-shadow"
                        placeholder={t("Full Name *", "पूरा नाम *")}
                        required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                      <input
                        className="w-full rounded-2xl border border-primary/10 bg-[#FDF7F2] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                        placeholder={t("Phone Number * (10 Digits)", "फोन नंबर * (10 अंक)")}
                        type="tel"
                        maxLength={10}
                        required value={form.phone}
                        onChange={e => {
                          const val = e.target.value.replace(/\D/g, "");
                          if (val.length <= 10) setForm({ ...form, phone: val });
                        }}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input
                        className="w-full rounded-2xl border border-primary/10 bg-[#FDF7F2] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                        placeholder={t("Email Address", "ईमेल")}
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                      <select
                        className="w-full rounded-2xl border border-primary/10 bg-[#FDF7F2] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium appearance-none"
                        required
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="" disabled>{t("Select Service *", "सेवा चुनें *")}</option>
                        {services.map(s => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                    <input
                      className="w-full rounded-2xl border border-primary/10 bg-[#FDF7F2] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                      placeholder={t("Subject", "विषय")}
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    />
                    <textarea
                      className="w-full rounded-2xl border border-primary/10 bg-[#FDF7F2] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[130px] font-medium resize-none"
                      placeholder={t("Your Message *", "आपका संदेश *")}
                      required value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                    <div className="py-2">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LcI9SQtAAAAAJ8ES-XR0bj74mefmiUhQ70GILGa"
                        onChange={(token) => setCaptchaToken(token)}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-black text-primary-foreground hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.25)] text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> {t("Sending...", "भेज रहा है...")}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> {t("Send Message", "संदेश भेजें")}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">{t("Find Us", "हमें खोजें")}</span>
                <h2 className="text-3xl font-heading font-black mb-8">{t("Our Offices", "हमारे कार्यालय")}</h2>
                <div className="space-y-5">
                  {offices.map((o, i) => (
                    <div key={i} className="group bg-white rounded-2xl p-6 border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-black text-base mb-1 group-hover:text-primary transition-colors">{o.title}</h4>
                          <p className="text-sm text-muted-foreground font-medium leading-relaxed">{o.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick call box */}
                <div className="mt-8 bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                  <p className="font-black text-lg mb-1 relative z-10">{t("Need Immediate Help?", "तुरंत सहायता चाहिए?")}</p>
                  <p className="text-sm opacity-70 mb-4 relative z-10">{t("Call us directly — our experts are available Mon-Sat 9AM-7PM.", "सीधे कॉल करें — हमारे विशेषज्ञ सोम-शनि 9AM-7PM उपलब्ध हैं।")}</p>
                  <a href="tel:+918433284427" className="inline-flex items-center gap-2 rounded-full bg-primary text-gray-900 px-6 py-3 font-black text-sm hover:bg-white transition-all relative z-10">
                    <Phone className="w-4 h-4" /> +91 8433284427
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gradient-to-r from-primary/10 via-orange-50 to-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {[
              { icon: Award, value: "UPNEDA", label: t("Empaneled Firm", "पैनलबद्ध फर्म"), sub: t("Government Certified", "सरकारी प्रमाणित") },
              { icon: Star, value: "4.9★", label: t("Customer Rating", "ग्राहक रेटिंग"), sub: t("From 2000+ installations", "2000+ इंस्टॉलेशन से") },
              { icon: Clock, title: t("Response", "प्रतिक्रिया"), value: "< 24h", label: t("Response Time", "प्रतिक्रिया समय"), sub: t("We reply fast, always", "हम हमेशा जल्दी जवाब देते हैं") },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 px-10 py-8 flex-1 justify-center group hover:bg-white/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-black text-foreground leading-none mb-0.5">{item.value}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
