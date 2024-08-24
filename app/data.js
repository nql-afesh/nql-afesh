import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const NavLinks = [
  {
    id: 1,
    name: "الرئيسية",
    url: "/",
  },
  {
    id: 2,
    name: "خدمات",
    url: "/services",
  },
  {
    id: 3,
    name: "حول شركتنا",
    url: "/about",
  },
  {
    id: 4,
    name: "المدونة",
    url: "/blog",
  },
  {
    id: 5,
    name: "الاتصال",
    url: "/contact",
  },
];

export const SiteInfo = {
  title: " النسر لنقل العفش بالرياض مع الفك والتركيب والتغليف",
  description: "ديانه نقل عفش وانيت نقل اثاث بجميع مناطق الرياض",
  fullDescription: "نقل عفش بأفضل الأسعار بالرياض مع الفك والتركيب والتغليف",
  heroImage: "/images/hero.webp",
  mobileNumber: "00966506053405",
  whatsappNumber: "966506053405",
};

export const ServicesList = [
  {
    id: 1,
    link: "/",
    title: "نقل الاثاث داخل الرياض",
    image: "/images/1.jpeg",
    description:
      "شركة نقل اثاث بالرياض أحد أنواع الشركات الخدمية المهمة التي ظهرت في الآونة الأخيرة والسبب في ذلك هو صعوبة نقل العفش بالرياض",
  },
  {
    id: 2,
    link: "/",
    title: "فك وتركيب وتغليف الاثاث    ",
    image: "/images/2.jpeg",
    description:
      "عملية فك و تركيب الأثاث لدى شركه خليج الرياض بالاعتماد على فنيين و عمال  لفك و تركيب الأثاث يعمل كل منهم في أكثر من مجال النجاره , فني تكييفات , كهربائي",
  },
  {
    id: 3,
    link: "/",
    title: "تخزين الاثاث",
    image: "/images/3.jpeg",
    description:
      "تمتلك شركة خليج الرياض العديد من الإمكانيات لتخزين العفش في المخازن المجهزة بأحدث الإمكانيات من أجل الحفاظ على العفش من الغبار والرطوبة التي تتعرض لها عند نزول الأمطار.",
  },
];

export const MapShareLinks = [
  {
    id: 1,
    title: "Google",
    url: "https://google.com",
    image: "/images/google_map_white_small.webp",
  },
  {
    id: 2,
    title: "Waze",
    url: "https://waze.com",
    image: "/images/waze_white_small.webp",
  },
  {
    id: 3,
    title: "Moovit",
    url: "https://moovit.com",
    image: "/images/moovit_white_small.webp",
  },
];

export const SocialShareLinks = [
  {
    id: 1,
    title: "Facebook",
    url: "https://facebook.com",
    icon: faFacebookF,
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com",
    icon: faTwitter,
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://instagram.com",
    icon: faInstagram,
  },
];

export const ContactInfo = [
  {
    id: 1,
    name: "الواتساب",
    href: `https://wa.me/${SiteInfo.whatsappNumber}`,
    icon: faWhatsapp,
    text: `00${SiteInfo.whatsappNumber}`,
  },
  {
    id: 2,
    name: "الهاتف",
    href: `tel:${SiteInfo.mobileNumber}`,
    icon: faPhone,
    text: `${SiteInfo.mobileNumber}`,
  },
];

export const AboutCompany = [
  {
    id: 1,
    title:
      "فك وتركيب جميع انواع الأثاث المنزلي والمكتبي، فك وتركيب جميع انواع غرف النوم (غرف امريكي، غرف إيطالي، غرف تركي، غرف ماليزي، غرف صيني، غرف ايكيا، غرف وطني), فك وتركيب المكيفات الاسبلت والشباك بأيدي فنين متخصصون في مجال التبريد والتكيف, فك وتركيب المطابخ الجاهزه والتفصيل بأيدي فنين محترفين وعمالة مدربه علي المحافظة على الأثاث من اي اضرار او خدوش",
  },
  {
    id: 2,
    title:
      "يوجد لدينا جميع انواع السيارات الكبيره والصغيره لتلبية احتياجات العميل لنقل كافة الأغراض بكل سهوله ويسر وأمان, متواجدين في جميع أحياء الرياض (شمال الرياض، جنوب الرياض، شرق الرياض، غرب الرياض)",
  },
  {
    id: 3,
    title:
      "أسعارنا تبدأ من 150ريال الي 450ريال وعلي حسب الأغراض يتم الاتفاق, فك وتركيب مكيف اسبلت الحبه 150ريال مشوار الديانه 150ريال بدون عمال",
  },
  {
    id: 4,
    title:
      "يوجد لدينا توصيل للجمعيات الخيريه بسعر مخفض, كما يوجد لدينا خدمه للتخلص من العفش التالف بسعر مناسب جدا, اتصل نصل جوال واتساب 0506053405 خدمة 24 ساعه على مدار الاسبوع",
  },
];

export const BlogList = [
  {
    id: 1,
    title: "شركة نقل اثاث بالرياض",
    description:
      "تعد شركة نقل عفش بالرياض من الشركات الهامة في المملكة العربية السعودية، وتحديدًا في العاصمة الرياض، حيث توجد العديد من الشركات المتخصصة",
    image: "/images/1.jpeg",
    link: "/",
  },
  {
    id: 2,
    title: "شركة نقل اثاث بالرياض",
    description:
      "تعد شركة نقل عفش بالرياض من الشركات الهامة في المملكة العربية السعودية، وتحديدًا في العاصمة الرياض، حيث توجد العديد من الشركات المتخصصة",
    image: "/images/2.jpeg",
    link: "/",
  },
  {
    id: 3,
    title: "شركة نقل اثاث بالرياض",
    description:
      "تعد شركة نقل عفش بالرياض من الشركات الهامة في المملكة العربية السعودية، وتحديدًا في العاصمة الرياض، حيث توجد العديد من الشركات المتخصصة",
    image: "/images/3.jpeg",
    link: "/",
  },
  {
    id: 4,
    title: "شركة نقل اثاث بالرياض",
    description:
      "تعد شركة نقل عفش بالرياض من الشركات الهامة في المملكة العربية السعودية، وتحديدًا في العاصمة الرياض، حيث توجد العديد من الشركات المتخصصة",
    image: "/images/4.jpeg",
    link: "/",
  },
];
