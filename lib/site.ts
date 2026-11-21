export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const site = {
  name: "Frontier Family Dental",
  shortName: "Frontier Family Dental",
  title: "Dentist in Powell | Frontier Family Dental | Powell Dentist",
  description:
    "Frontier Family Dental is a dentist in Powell, WY and serving the Big Horn Basin with excellent, affordable dental care in Powell",
  phoneDisplay: "307.754.4554",
  phoneHref: "tel:307-754-4554",
  address: {
    street: "303 N Division St",
    city: "Powell",
    region: "WY",
    postalCode: "82435",
    country: "US",
  },
  addressLine: "303 N Division St., Powell, Wyoming",
  serviceArea: "Serving Powell, WY and the rest of the Big Horn Basin",
  dentist: "Dr. Williams",
  affiliation: "White Cap Institute",
  experience: "over 40 years of combined dental care experience",
  copyright: "© 2026 Frontier Family Dental",
  credit: {
    label: "Powered by LocalFresh",
    href: "https://localfresh.com/",
  },
  social: [
    {
      label: "Google",
      href: "https://www.google.com/search?hl=en-US&gl=us&q=Frontier+Family+Dental,+303+N+Division+St,+Powell,+WY+82435&ludocid=5304372578879638569&lsig=AB86z5X0zeGxVBXFa5QZPAh1pbEE",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Frontier-Family-Dental-559942360697116",
    },
    {
      label: "Instagram",
      href: "https://myfrontierfamilydental.com/",
    },
  ],
} as const;

export const serviceLinks: NavLink[] = [
  {
    label: "Dental Implants",
    href: "/services/dental-implants",
    description: "Tooth replacement and denture stability",
  },
  {
    label: "Preventative Dental Care",
    href: "/services/preventative-dental-care",
    description: "Brushing, flossing, and checkups",
  },
  {
    label: "Restorative Dental Care",
    href: "/services/restorative-dental-care",
    description: "Comfort, function, and a beautiful smile",
  },
  {
    label: "Cosmetic Dental Care",
    href: "/services/cosmetic-dental-care",
    description: "Skill and artistry for a healthy smile",
  },
];

export const primaryNav: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [{ label: "FAQ", href: "/about/faq", description: "Common questions" }],
  },
  {
    label: "Services",
    href: "/services",
    children: serviceLinks,
  },
  { label: "Leave Us a Review", href: "/reviews" },
  { label: "Blog", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Leave Us a Review", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/news" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

export const serviceCards = [
  {
    title: "Emergency Care",
    href: "/contact",
    cta: "CONTACT US",
    icon: "emergency" as const,
    body: "There is nothing more concerning than when an unexpected problem pops up. Whether it’s a toothache, a broken tooth, or trauma, the best dentist you can turn to is Dr. Williams and our friendly staff at Frontier Family Dental. We will get you back to your busy life. Same-day emergency care is always our goal!",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/services/cosmetic-dental-care",
    cta: "LEARN MORE",
    icon: "cosmetic" as const,
    body: "Having a healthy mouth is very important, but we can help you make it look great too! If you are looking for a great cosmetic dentist in Powell, look no further than Dr. Williams. With the perfect blend of skill and artistry, we can keep your mouth healthy and beautiful.",
  },
  {
    title: "Family Dentistry",
    href: "/services",
    cta: "FIND OUT MORE",
    icon: "family" as const,
    body: "There is nothing more important than family! Looking for the right person to trust with your oral health shouldn’t be a compromise. All of us at Frontier Family Dental are committed to you and will treat you like you are a member of our family - because you are!",
  },
  {
    title: "Implant Dentistry",
    href: "/services/restorative-dental-care",
    cta: "EXPLORE DENTAL IMPLANTS",
    icon: "implant" as const,
    body: "Missing a tooth and self-conscious? Maybe you have some dentures that just don’t stay put? Implants offer some of the best options for tooth replacement and denture stability. Dr. Williams has trained with the White Cap Institute, and can help with your implant needs right here in Powell, Wyoming.",
  },
] as const;

export const allRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/about/faq", label: "FAQ" },
  { href: "/services", label: "Services" },
  { href: "/services/dental-implants", label: "Dental Implants" },
  { href: "/services/preventative-dental-care", label: "Preventative Dental Care" },
  { href: "/services/restorative-dental-care", label: "Restorative Dental Care" },
  { href: "/services/cosmetic-dental-care", label: "Cosmetic Dental Care" },
  { href: "/reviews", label: "Leave Us a Review" },
  { href: "/news", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/sitemap", label: "Sitemap" },
] as const;
