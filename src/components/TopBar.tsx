import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface TopBarProps {
    isVisible: boolean;
}

const TopBar = ({ isVisible }: TopBarProps) => {
    const { t } = useLanguage();

    const variants = {
        visible: { height: "auto", opacity: 1 },
        hidden: { height: 0, opacity: 0 }
    };

    return (
        <motion.div
            initial="visible"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#1C2833] text-white hidden md:block overflow-hidden"
        >
            <div className="py-2 border-b border-white/5">
                <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-[#E67E22]" />
                            <span>+91 8433284427</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-[#E67E22]" />
                            <span>engineersolarwala2020@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-[#E67E22]" />
                        <span>{t("Lucknow, Uttar Pradesh, India", "लखनऊ, उत्तर प्रदेश, भारत")}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TopBar;
