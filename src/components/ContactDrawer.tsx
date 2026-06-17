import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LayoutGrid, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Sun, X, Zap, Shield, TrendingUp, Users, GraduationCap, Wrench, ArrowRight, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface ContactDrawerProps {
    trigger?: React.ReactNode;
}

const ContactDrawer = ({ trigger }: ContactDrawerProps) => {
    const { t } = useLanguage();

    return (
        <Sheet>
            <SheetTrigger asChild>
                {trigger || (
                    <button className="group flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDF2E9] hover:bg-[#FAE5D3] transition-all duration-300 shadow-sm border border-[#F5CBA7]/30">
                        <LayoutGrid className="w-5 h-5 text-[#E67E22] group-hover:scale-110 transition-transform" />
                    </button>
                )}
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[450px] bg-white p-0 border-l border-border/40 shadow-2xl">
                <div className="h-full flex flex-col">
                    {/* Header with Logo */}
                    <div className="p-8 border-b border-gray-100 bg-gray-50/30">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <Link to="/" className="flex items-center gap-3 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E67E22] to-[#F39C12] flex items-center justify-center shadow-xl">
                                        <Sun className="w-9 h-9 text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="block font-heading font-black text-[#2C3E50] text-3xl leading-none">Engineer</span>
                                        <span className="block text-[#E67E22] font-black text-xs uppercase tracking-[0.2em] mt-1">Solar Wala</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <section className="mb-2">
                            <h3 className="text-2xl font-heading font-extrabold text-[#2C3E50] mb-4 relative inline-block">
                                {t("About Us", "हमारे बारे में")}
                                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#E67E22] rounded-full"></span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                {t(
                                    "Sainik Solar provides consultancy, installation, subsidy support, and maintenance for residential and commercial solar projects across Lucknow and nearby districts.",
                                    "सैनिक सोलर लखनऊ और आसपास के जिलों में आवासीय और कमर्शियल सोलर प्रोजेक्ट्स के लिए परामर्श, इंस्टॉलेशन, सब्सिडी सहायता और मेंटेनेंस प्रदान करता है।"
                                )}
                            </p>
                        </section>
                    </div>

                    <div className="flex-1 overflow-y-auto p-5 space-y-10">
                        {/* Additional Links */}
                        <section className="" hidden>
                            <h3 className="text-2xl font-heading font-extrabold text-[#2C3E50] mb-4 relative inline-block">
                                {t("Additional Links", "अतिरिक्त लिंक")}
                                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#E67E22] rounded-full"></span>
                            </h3>
                            <nav className="flex flex-col gap-4">
                                <Link to="/about" className="text-base text-gray-500 hover:text-[#E67E22] font-semibold transition-colors flex items-center gap-2">
                                    {t("Sign Up", "साइन अप करें")}
                                </Link>
                                <Link to="/services" className="text-base text-gray-500 hover:text-[#E67E22] font-semibold transition-colors flex items-center gap-2">
                                    {t("Log In", "लॉग इन करें")}
                                </Link>
                                <Link to="/faq" className="text-base text-gray-500 hover:text-[#E67E22] font-semibold transition-colors flex items-center gap-2">
                                    {t("FAQ", "सामान्य प्रश्न")}
                                </Link>
                            </nav>
                        </section>

                        {/* Services */}
                        <section>
                            <h3 className="text-lg font-heading font-extrabold text-[#2C3E50] mb-4 relative inline-block">
                                {t("Our Services", "हमारी सेवाएं")}
                                <span className="absolute -bottom-1 left-0 w-10 h-1 bg-[#E67E22] rounded-full"></span>
                            </h3>
                            <div className="flex flex-col gap-1.5">
                                {[
                                    { icon: Zap, label: t("Solar Panel Installation", "सोलर पैनल इंस्टॉलेशन"), to: "/services/installation" },
                                    { icon: Package, label: t("Product Price List", "प्रोडक्ट मूल्य सूची"), to: "/product" },
                                    { icon: Shield, label: t("Consultancy & Energy Audit", "परामर्श और ऊर्जा ऑडिट"), to: "/services/consultancy" },
                                    { icon: TrendingUp, label: t("Government Subsidy Support", "सरकारी सब्सिडी सहायता"), to: "/services/subsidy" },
                                    { icon: Users, label: t("Franchise Partner Setup", "फ्रैंचाइज़ पार्टनर सेटअप"), to: "/services/franchise" },
                                    { icon: GraduationCap, label: t("Staff Training & Workshops", "स्टाफ प्रशिक्षण"), to: "/services/training" },
                                    { icon: Wrench, label: t("Maintenance & AMC", "रखरखाव और AMC"), to: "/services/maintenance" },
                                ].map((s, i) => (
                                    <Link
                                        key={i}
                                        to={s.to}
                                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-[#FDF2E9] border border-transparent hover:border-[#F5CBA7]/50 transition-all duration-200"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#FDF2E9] group-hover:bg-[#E67E22]/15 flex items-center justify-center shrink-0 transition-colors">
                                            <s.icon className="w-4 h-4 text-[#E67E22]" />
                                        </div>
                                        <span className="flex-1 text-sm font-semibold text-gray-700 group-hover:text-[#E67E22] transition-colors">{s.label}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#E67E22] group-hover:translate-x-0.5 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Contact Info */}
                        <section>
                            <h3 className="text-2xl font-heading font-extrabold text-[#2C3E50] mb-6 relative inline-block">
                                {t("Contact Info", "संपर्क जानकारी")}
                                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#E67E22] rounded-full"></span>
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] flex items-center justify-center shrink-0 border border-[#AED6F1]/30">
                                        <MapPin className="w-5 h-5 text-[#3498DB]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase text-[#2C3E50] tracking-widest mb-1">{t("ADDRESS", "पता")}</p>
                                        <p className="text-sm font-semibold text-gray-600">Sarai Sahjadi, Banthara Bazaar, Kanpur Road, Lucknow–226401</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] flex items-center justify-center shrink-0 border border-[#AED6F1]/30">
                                        <Mail className="w-5 h-5 text-[#3498DB]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase text-[#2C3E50] tracking-widest mb-1">{t("EMAIL", "ईमेल")}</p>
                                        <a href="mailto:engineersolarwala2020@gmail.com" className="text-sm font-semibold text-gray-600 break-all hover:text-[#E67E22] transition-colors">engineersolarwala2020@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] flex items-center justify-center shrink-0 border border-[#AED6F1]/30">
                                        <Phone className="w-5 h-5 text-[#3498DB]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase text-[#2C3E50] tracking-widest mb-1">{t("PHONE", "फ़ोन")}</p>
                                        <a href="tel:+918433284427" className="text-sm font-extrabold text-[#2C3E50] hover:text-[#E67E22] transition-colors">+91 8433284427</a>
                                        <p className="text-xs text-gray-400 font-medium mt-0.5">{t("Toll Free", "टोल फ्री")}: 02269622226</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Connect With Us */}
                        <section className="pb-8">
                            <h3 className="text-2xl font-heading font-extrabold text-[#2C3E50] mb-6 relative inline-block">
                                {t("Connect With Us", "हमसे जुड़ें")}
                                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#E67E22] rounded-full"></span>
                            </h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Facebook, color: "bg-[#3498DB] hover:bg-[#2980B9]" },
                                    { icon: Instagram, color: "bg-[#E67E22] hover:bg-[#D35400]" },
                                    { icon: Youtube, color: "bg-[#C0392B] hover:bg-[#A93226]" },
                                    { icon: Sun, color: "bg-[#F1C40F] hover:bg-[#F39C12]" },
                                    { icon: X, color: "bg-black hover:bg-gray-800" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ContactDrawer;
