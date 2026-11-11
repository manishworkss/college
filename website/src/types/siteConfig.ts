export type CourseCategory = "Education" | "Nursing" | "Higher Education";
export type GalleryCategory = "All" | "Academics & Labs" | "Nursing & Health" | "Events & Samaroh";

export interface AnnouncementItem {
  id: string;
  text: string;
  badge?: string;
  targetHref: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  highlight: string;
  image: string;
  mobileImage?: string;
  targetHref: string;
  ctaLabel: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface AccreditationSeal {
  code: string;
  name: string;
  subtitle: string;
}

export interface InstitutionItem {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  established: string;
  affiliation: string;
  description: string;
  programs: string[];
  image: string;
  link: string;
  helpline: string;
}

export interface CourseItem {
  id: string;
  title: string;
  fullName: string;
  category: CourseCategory;
  duration: string;
  eligibility: string;
  scope: string;
  affiliation: string;
  highlights: string[];
  departmentKey: "bed" | "higher" | "nursing";
  image: string;
  posterAspect: "square" | "portrait";
}

export interface DirectorProfile {
  name: string;
  role: string;
  sectionLabel: string;
  headline: string;
  image: string;
  paragraphs: string[];
  stats: StatItem[];
}

export interface MissionVisionItem {
  id: "mission" | "vision" | "why";
  tabLabel: string;
  heading: string;
  statement: string;
  points: string[];
}

export interface FacilityItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  course: string;
  batch: string;
  rating: number;
  review: string;
  photo?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  caption: string;
  image: string;
}

export interface DepartmentHelpline {
  key: "bed" | "higher" | "nursing";
  name: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappRaw: string;
  coursesCovered: string[];
}

export interface SocialLink {
  id: "facebook" | "instagram" | "youtube";
  label: string;
  href: string;
}

export type ThemePresetId = "garnet-amber" | "royal-gold" | "teal-navy";

export interface CareerTrackItem {
  id: string;
  wing: string;
  sector: string;
  roles: string;
  highlights: string;
}

export interface CampusNoticeItem {
  id: string;
  dateLabel: string;
  tag: string;
  title: string;
  summary: string;
  targetHref: string;
}

export interface SiteConfig {
  themePreset: ThemePresetId;
  branding: {
    groupName: string;
    groupSubtitle: string;
    tagline: string;
    logoUrl: string;
    logoAlt: string;
    establishedYear: string;
    admissionsBadge: string;
    copyrightYear: string;
  };
  announcements: AnnouncementItem[];
  navigation: NavLinkItem[];
  heroSlides: HeroSlide[];
  heroStats: StatItem[];
  accreditations: AccreditationSeal[];
  institutions: {
    heading: string;
    subtitle: string;
    items: InstitutionItem[];
  };
  coursesSection: {
    heading: string;
    subtitle: string;
    items: CourseItem[];
  };
  aboutSection: {
    director: DirectorProfile;
    tabs: MissionVisionItem[];
  };
  careerTracks: {
    heading: string;
    subtitle: string;
    items: CareerTrackItem[];
  };
  campusNotices: {
    heading: string;
    subtitle: string;
    items: CampusNoticeItem[];
  };
  facilitiesSection: {
    heading: string;
    subtitle: string;
    items: FacilityItem[];
  };
  testimonialsSection: {
    heading: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  admissionSection: {
    heading: string;
    subtitle: string;
    bsccHighlight: string;
    steps: string[];
    defaultWhatsapp: string;
  };
  gallerySection: {
    heading: string;
    subtitle: string;
    items: GalleryItem[];
  };
  contactSection: {
    heading: string;
    subtitle: string;
    address: string;
    pinCode: string;
    phones: string[];
    email: string;
    officeHours: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  departments: DepartmentHelpline[];
  socialLinks: SocialLink[];
}

