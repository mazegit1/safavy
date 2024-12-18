import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoBusiness } from "react-icons/io5";
import { FaLaptop, FaMoneyBillWave, FaLanguage } from "react-icons/fa";
import { GiComputerFan } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaOpencart } from "react-icons/fa";
import { IoMdReturnRight } from "react-icons/io";
import infoimg from '../images/Infoimg.svg'
import HeroBanner from "../components/HeroBanner";
const slides = [
  { icon: <IoBusiness />, title: "Biznes" },
  { icon: <FaLaptop />, title: "Proqramlaşdırma" },
  { icon: <GiComputerFan />, title: "Fərdi inkişaf" },
  { icon: <FaMoneyBillWave />, title: "Maliyyə" },
  { icon: <MdDesignServices />, title: "Dizayn" },
  { icon: <SiGooglemarketingplatform />, title: "Marketing" },
  { icon: <FaLanguage />, title: "Xarici dil" },
  { icon: <FaOpencart />, title: "Satış" },
];
import Ad from "../components/Ad";
import Statistics from '../components/Statistics'
const AnaSehife = () => {
  const [visibleSlides, setVisibleSlides] = useState(slides.slice(0, 4)); // Start with 4 slides
  const [buttonClicked, setButtonClicked] = useState(false);

  const addSlide = () => {
    setButtonClicked(true); // Trigger button animation
    setTimeout(() => setButtonClicked(false), 300); // Reset button animation after duration

    setVisibleSlides((prev) => {
      const newSlideIndex = (slides.indexOf(prev[prev.length - 1]) + 1) % slides.length;
      return [...prev.slice(1), slides[newSlideIndex]];
    });
  };

  return (
    <>
        <HeroBanner/>
    <div className="hero mt-20 md:mt-32 flex flex-col items-center">
      {/* Heading */}
      <div className="hero-top text-center mb-10">
        <h1 className="text-[#0B4871] text-3xl font-bold">Tədris Sahələri</h1>
        <h3 className="text-[#BFBFBF] mt-2">
          Hansı sahələr üzrə tədris proqramları mövcuddur?
        </h3>
      </div>

      {/* Slides */}
      <div className="relative flex items-center justify-center w-full max-w-screen-lg overflow-hidden">
        <div className="flex space-x-3">
          <AnimatePresence>
            {visibleSlides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 0.5 },
                  scale: { type: "spring", stiffness: 120 },
                }}
                className="flex items-center justify-between bg-white border border-[#0B4871] rounded-full px-5 py-2 w-60 shadow-md"
              >
                <div className="wrapper flex items-center space-x-3 text-[#0B4871]">
                  <div className="text-2xl">{slide.icon}</div>
                  <h1 className="text-sm md:text-base">{slide.title}</h1>
                </div>
                <IoMdReturnRight className="text-[#0B4871] text-xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="mt-6 flex justify-center space-x-3">
        <motion.button
          onClick={addSlide}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: buttonClicked ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0B4871] text-white px-4 py-2 rounded-full hover:bg-[#06344C] transition-all"
        >
          Next Slide
        </motion.button>
      </div>
    </div>
    <div className="info flex flex-col md:flex-row items-center justify-between gap-56 px-56 py-12 bg-gradient-to-b  rounded-lg shadow-md text-black">
  <motion.div 
    className="info-left flex-1" 
    initial={{ opacity: 0, x: -50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Niyə <span className="text-blue-800">Safavy?</span></h1>
    <h3 className="text-lg md:text-xl leading-relaxed">
      Biz inanırıq ki, öyrənmək hər kəsin haqqıdır. Elm və bacarıqların öyrənilməsi insanlara əlçatan olmalıdır. İnsanlar təkmilləşdikcə, inkişaf etdikcə dünya daha gözəl bir yerə çevrilə bilər. Biz milyonlarla insana istədiyi ixtisası asanlıqla öyrənməyə şərait yaradırıq. Peşəkar şəkildə çəkilmiş video dərsliklər istifadəçilərə zamana və pula qənaət etməyə, öyrənmə sürətini artırmağa kömək edir. Biz kursları və ixtisasları hazırlayarkən yalnız peşəkar təlimçiləri dəvət etməyə çalışırıq. Görünən minlərlə kursun arxasında rəqəmsal, istehsal, marketinq, satış, menecment komandamız platformanın daha keyfiyyətli çalışması və təhsilin daha çox insana əlçatan olması üçün çalışır. Safavy.org-un əsası 2020-ci ildə Bakı, Azərbaycanda 5 nəfər təsisçi tərəfindən qoyulmuşdur. Şirkət gəlir qazandığı ilk gündən mənfəətinin 5%-ni kimsəsiz uşaqların təhsili üçün xərcləyir.
    </h3>
  </motion.div>
  
  <motion.div 
    className="info-right flex-1" 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <img 
      src={infoimg} 
      alt="" 
      className="rounded-lg shadow-xl max-w-full object-cover"
    />
  </motion.div>
</div>
<Ad/>
<Statistics/>

    </>
  );
};

export default AnaSehife;
