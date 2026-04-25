// ========================================
// THEME CONFIGURATION FILE
// ========================================
// Edit this file to customize your portfolio's colors and theme
// All sections are typed for safety and autocomplete

export interface ThemeColors {
  // Light Theme Colors
  light: {
    background: string;      // Main background color
    foreground: string;      // Main text color (RGB format: "14 5 22")
    primary: string;         // Primary brand color
    primaryLight: string;    // Lighter version of primary (for hovers, backgrounds)
    primaryDark: string;     // Darker version of primary (for active states)
    blackLight: string;      // Secondary text color
    glass: string;           // Glass effect background
  };
  
  // Dark Theme Colors
  dark: {
    background: string;      // Main background color for dark mode
    foreground: string;      // Main text color for dark mode (RGB format)
    primary: string;         // Primary brand color (can be same as light)
    primaryLight: string;    // Lighter version for dark mode
    primaryDark: string;     // Darker version for dark mode
    blackLight: string;      // Secondary text color for dark mode
    glass: string;           // Glass effect for dark mode
  };
}

// ========================================
// 👇 EDIT YOUR THEME COLORS BELOW 👇
// ========================================

export const themeColors: ThemeColors = {
  light: {
    background: "#ffffff",
    foreground: "14 5 22",        // RGB format (no #)
    primary: "#7b2cbf",           // Purple - change to your brand color
    primaryLight: "#7a2cbf0f",    // Very light purple with opacity
    primaryDark: "#4a148c",       // Dark purple for hover states
    blackLight: "#666666",        // Gray for secondary text
    glass: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    background: "#0e0516",        // Dark purple-black background
    foreground: "237 237 237",    // Light gray text (RGB format)
    primary: "#7b2cbf",           // Same purple as light mode
    primaryLight: "#7a2cbf36",    // More visible in dark mode
    primaryDark: "#9d4edd",       // Lighter purple for dark mode contrast
    blackLight: "#99a1af",        // Cool gray for secondary text
    glass: "rgba(14, 5, 22, 0.05)",
  },
};

// ========================================
// THEME SETTINGS
// ========================================

export const themeSettings = {
  // Enable/disable theme toggle button in navbar
  enableThemeToggle: true,
  
  // Default theme behavior: 'system' | 'light' | 'dark'
  // 'system' = follows user's device preference
  defaultTheme: "system" as "system" | "light" | "dark",
  
  // Allow users to override system theme with manual toggle
  allowManualOverride: true,
};
