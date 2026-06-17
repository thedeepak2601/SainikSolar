import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, ZoomIn, Award, Star, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import galleryResidential from "@/assets/gallery-residential.jpg";
import galleryCommercial from "@/assets/gallery-commercial.jpg";
import galleryIndustrial from "@/assets/gallery-industrial.jpg";
import galleryGround from "@/assets/gallery-ground.jpg";
import galleryRooftop from "@/assets/gallery-rooftop.jpg";
import heroSolar from "@/assets/hero-solar.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  const images = [
    { src: galleryResidential, title: t("Residential Installation", "आवासीय इंस्टॉलेशन"), tag: t("Residential", "आवासीय") },
    { src: galleryCommercial, title: t("Commercial Solar Farm", "व्यावसायिक सोलर फार्म"), tag: t("Commercial", "व्यावसायिक") },
    { src: galleryIndustrial, title: t("Industrial Installation", "औद्योगिक इंस्टॉलेशन"), tag: t("Industrial", "औद्योगिक") },
    { src: galleryGround, title: t("Ground Mount Solar", "ग्राउंड माउंट सोलर"), tag: t("Ground Mount", "ग्राउंड माउंट") },
    { src: galleryRooftop, title: t("Rooftop Solar", "रूफटॉप सोलर"), tag: t("Rooftop", "रूफटॉप") },
    { src: heroSolar, title: t("Premium Rooftop", "प्रीमियम रूफटॉप"), tag: t("Premium", "प्रीमियम") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img src={galleryRooftop} alt="Solar Gallery" className="w-full h-full object-cover opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black tracking-[0.2em] uppercase mb-6">
                {t("Our Work", "हमारा काम")}
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                {t("Our Solar Installations", "हमारी सोलर इंस्टॉलेशन")}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium">
                {t("See our premium solar panel installations across Uttar Pradesh.", "उत्तर प्रदेश भर में हमारी प्रीमियम सोलर पैनल इंस्टॉलेशन देखें।")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Project Portfolio", "प्रोजेक्ट पोर्टफोलियो")}</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
              {t("2000+ Projects Delivered", "2000+ प्रोजेक्ट्स डिलीवर किए")}
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
              {t("Every installation reflects our commitment to quality and excellence.", "हर इंस्टॉलेशन गुणवत्ता और उत्कृष्टता के प्रति हमारी प्रतिबद्धता को दर्शाती है।")}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div
                  className="group relative rounded-[2rem] overflow-hidden cursor-pointer border border-primary/5 hover:border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelected(img)}
                >
                  <img src={img.src} alt={img.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  {/* tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-xs font-black text-white uppercase tracking-wider backdrop-blur-sm">
                    {img.tag}
                  </div>
                  {/* zoom icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  {/* title */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="font-heading font-black text-white text-xl leading-tight">{img.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gradient-to-r from-primary/10 via-orange-50 to-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {[
              { icon: Award, value: "2000+", label: t("Projects Installed", "प्रोजेक्ट्स इंस्टॉल"), sub: t("Across Uttar Pradesh", "उत्तर प्रदेश भर में") },
              { icon: Star, value: "4.9★", label: t("Average Rating", "औसत रेटिंग"), sub: t("From verified customers", "सत्यापित ग्राहकों से") },
              { icon: CheckCircle, value: "15+", label: t("Years Experience", "वर्षों का अनुभव"), sub: t("In solar energy sector", "सोलर ऊर्जा क्षेत्र में") },
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

      {/* CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] -ml-64 -mb-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">
              {t("Ready for Your Own", "क्या आप अपनी")} <br />
              <span className="text-primary">{t("Solar Installation?", "सोलर इंस्टॉलेशन के लिए तैयार हैं?")}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/consultation" className="inline-flex items-center gap-3 rounded-full bg-primary text-gray-900 px-10 py-5 font-black text-lg hover:bg-white transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                {t("Get Free Consultation", "निःशुल्क परामर्श लें")} <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+918433284427" className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 px-10 py-5 font-black text-lg hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5" /> +91 8433284427
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" onClick={() => setSelected(null)}>
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="text-center" onClick={e => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                src={selected.src}
                alt={selected.title}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
              />
              <p className="mt-4 text-white font-black text-xl">{selected.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
