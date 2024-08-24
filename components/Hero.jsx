import { SiteInfo } from "../app/data";
import { Open_Sans, Aref_Ruqaa, Lemonada } from "next/font/google";
import Button from "./buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const openSans = Open_Sans({ subsets: ["latin"] });
const lemonda = Lemonada({ subsets: ["latin"] });
const arefRuqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: "400" });
function Hero() {
  return (
    <section className={`${arefRuqaa.className}`}>
      <div className="bg-[url('/images/hero.webp')] h-[550px] lg:h-screen bg-no-repeat bg-center bg-cover relative ">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="site-description absolute inset-0 z-10 w-4/5 mx-auto h-full py-16 text-center flex flex-col justify-around">
          <h1
            className="text-white text-xl md:text-4xl lg:text-7xl font-semibold mb-8 lg:mb-20 flex flex-col animate-slidein300"
            style={{ lineHeight: 1.6 }}
          >
            {SiteInfo.title}&nbsp; {SiteInfo.mobileNumber}
          </h1>
          <p
            className={`text-gray-400 text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed text-center animate-slidein700 ${lemonda.className}`}
          >
            ديانه نقل عفش وانيت نقل اثاث بجميع مناطق الرياض
          </p>
          <div className={`mt-12 lg:mt-40 ${openSans.className}`}>
            <Button
              href={`tel:${SiteInfo.mobileNumber}`}
              text={"اتصل بنا"}
              styles={
                "themeBgColor hoverBgColor text-white rounded-xl p-2 w-28 block mx-auto flex items-center justify-center gap-3"
              }
            >
              <FontAwesomeIcon icon={faPhone} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
