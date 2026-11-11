import React, { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_SITE_CONFIG } from "../config/siteConfig";
import { THEME_PRESETS } from "../config/themePresets";
import { CourseCategory, SiteConfig, ThemePresetId } from "../types/siteConfig";

const STORAGE_KEY = "shaheed_pramod_site_config_v3";

export type CourseFilterSelection = "All" | CourseCategory;

export interface AdmissionPrefill {
  course: string;
  name?: string;
  phone?: string;
  email?: string;
}

interface SiteConfigContextValue {
  config: SiteConfig;
  isCustomized: boolean;
  updateConfig: (next: SiteConfig) => void;
  setThemePreset: (preset: ThemePresetId) => void;
  resetConfig: () => void;
  selectedCourseForAdmission: string;
  setSelectedCourseForAdmission: (courseTitle: string) => void;
  admissionPrefill: AdmissionPrefill;
  applyToAdmission: (prefill: AdmissionPrefill) => void;
  courseCategoryFilter: CourseFilterSelection;
  setCourseCategoryFilter: (cat: CourseFilterSelection) => void;
  isConfigDrawerOpen: boolean;
  setConfigDrawerOpen: (open: boolean) => void;
}

const SiteConfigContext = createContext<SiteConfigContextValue | null>(null);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<SiteConfig>;
        return { ...DEFAULT_SITE_CONFIG, ...parsed };
      }
    } catch {
      // Ignore malformed localStorage and fall back to default config
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [isCustomized, setIsCustomized] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const defaultCourse = DEFAULT_SITE_CONFIG.coursesSection.items[0]?.title ?? "B.Ed";
  const [admissionPrefill, setAdmissionPrefill] = useState<AdmissionPrefill>({
    course: defaultCourse,
  });
  const [courseCategoryFilter, setCourseCategoryFilter] = useState<CourseFilterSelection>("All");
  const [isConfigDrawerOpen, setConfigDrawerOpen] = useState<boolean>(false);

  // Sync page title & CSS theme variables dynamically
  useEffect(() => {
    document.title = `${config.branding.groupName} ${config.branding.groupSubtitle} | Muzaffarpur, Bihar`;
    const activeTheme = THEME_PRESETS[config.themePreset] ?? THEME_PRESETS["garnet-amber"];
    const root = document.documentElement;
    for (const [varName, value] of Object.entries(activeTheme.vars)) {
      root.style.setProperty(varName, value);
    }
  }, [config.branding.groupName, config.branding.groupSubtitle, config.themePreset]);

  const updateConfig = (next: SiteConfig) => {
    setConfig(next);
    setIsCustomized(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }
  };

  const setThemePreset = (preset: ThemePresetId) => {
    updateConfig({ ...config, themePreset: preset });
  };

  const resetConfig = () => {
    setConfig(DEFAULT_SITE_CONFIG);
    setIsCustomized(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const setSelectedCourseForAdmission = (courseTitle: string) => {
    setAdmissionPrefill((prev) => ({ ...prev, course: courseTitle }));
  };

  const applyToAdmission = (prefill: AdmissionPrefill) => {
    setAdmissionPrefill((prev) => ({ ...prev, ...prefill }));
    const el = document.getElementById("admission");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        isCustomized,
        updateConfig,
        setThemePreset,
        resetConfig,
        selectedCourseForAdmission: admissionPrefill.course,
        setSelectedCourseForAdmission,
        admissionPrefill,
        applyToAdmission,
        courseCategoryFilter,
        setCourseCategoryFilter,
        isConfigDrawerOpen,
        setConfigDrawerOpen,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
};

export function useSiteConfig(): SiteConfigContextValue {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) {
    throw new Error("useSiteConfig must be used inside SiteConfigProvider");
  }
  return ctx;
}
