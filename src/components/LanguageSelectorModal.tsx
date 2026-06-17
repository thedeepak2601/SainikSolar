import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Globe } from "lucide-react";

const LanguageSelectorModal = () => {
    const { lang, setLang, hasSelectedLanguage, completeLanguageSelection } = useLanguage();

    if (hasSelectedLanguage) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-primary/20"
                >
                    <div className="p-8 text-center">
                        <div className="flex items-center justify-center mx-auto mb-6">
                            <img src="/logo.png" alt="Sainik Solar Logo" className="h-20 w-auto object-contain drop-shadow-md" />
                        </div>
                        <h2 className="text-3xl font-heading font-black mb-2">Welcome to Sainik Solar</h2>
                        <p className="text-muted-foreground font-medium mb-8">Please select your preferred language to continue</p>

                        <div className="grid gap-4 mb-8">
                            <button
                                onClick={() => setLang("en")}
                                className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${lang === "en" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                                    }`}
                            >
                                <div className="text-left">
                                    <p className="text-xl font-black">English</p>
                                    <p className="text-sm text-muted-foreground font-medium">Continue in English</p>
                                </div>
                                {lang === "en" && <Check className="w-6 h-6 text-primary" />}
                            </button>

                            <button
                                onClick={() => setLang("hi")}
                                className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${lang === "hi" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                                    }`}
                            >
                                <div className="text-left">
                                    <p className="text-xl font-black">हिन्दी (Hindi)</p>
                                    <p className="text-sm text-muted-foreground font-medium">हिन्दी में जारी रखें</p>
                                </div>
                                {lang === "hi" && <Check className="w-6 h-6 text-primary" />}
                            </button>
                        </div>

                        <button
                            onClick={completeLanguageSelection}
                            className="w-full py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-orange-600 transition-all shadow-xl shadow-primary/20"
                        >
                            {lang === "en" ? "Start Journey" : "शुरू करें"}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LanguageSelectorModal;
