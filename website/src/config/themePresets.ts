import { ThemePresetId } from "../types/siteConfig";

export interface ThemePresetDefinition {
  id: ThemePresetId;
  label: string;
  tagline: string;
  swatchPrimary: string;
  swatchAccent: string;
  vars: {
    "--sp-primary": string;
    "--sp-deep": string;
    "--sp-hero-via": string;
    "--sp-accent": string;
    "--sp-accent-soft": string;
    "--sp-accent-ink": string;
    "--sp-gold-text": string;
    "--sp-surface": string;
  };
}

export const THEME_PRESETS: Record<ThemePresetId, ThemePresetDefinition> = {
  "garnet-amber": {
    id: "garnet-amber",
    label: "Flagship Garnet",
    tagline: "Crimson & Saffron University Style",
    swatchPrimary: "#8B1538",
    swatchAccent: "#F59E0B",
    vars: {
      "--sp-primary": "#8B1538",
      "--sp-deep": "#0B1A3A",
      "--sp-hero-via": "#561233",
      "--sp-accent": "#F59E0B",
      "--sp-accent-soft": "#FEF3C7",
      "--sp-accent-ink": "#0B1A3A",
      "--sp-gold-text": "#B45309",
      "--sp-surface": "#FAF8F6",
    },
  },
  "royal-gold": {
    id: "royal-gold",
    label: "Royal Heritage",
    tagline: "Classic Navy & Academic Gold",
    swatchPrimary: "#002366",
    swatchAccent: "#D4AF37",
    vars: {
      "--sp-primary": "#002366",
      "--sp-deep": "#001642",
      "--sp-hero-via": "#0A3586",
      "--sp-accent": "#D4AF37",
      "--sp-accent-soft": "#F4E4A6",
      "--sp-accent-ink": "#001642",
      "--sp-gold-text": "#9A740D",
      "--sp-surface": "#F8FAFC",
    },
  },
  "teal-navy": {
    id: "teal-navy",
    label: "Campus Teal",
    tagline: "Deep Navy, Clinical Teal & Orange",
    swatchPrimary: "#0F5257",
    swatchAccent: "#F97316",
    vars: {
      "--sp-primary": "#0F5257",
      "--sp-deep": "#082032",
      "--sp-hero-via": "#12485B",
      "--sp-accent": "#F97316",
      "--sp-accent-soft": "#FFEDD5",
      "--sp-accent-ink": "#082032",
      "--sp-gold-text": "#C2410C",
      "--sp-surface": "#F6FAFA",
    },
  },
};

export const THEME_PRESET_LIST: ThemePresetDefinition[] = Object.values(THEME_PRESETS);

