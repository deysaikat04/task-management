/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: "500px", //min-width: 500px
      sm: "567px", //min-width: 567px
      smd: "570px", // min-width: 570px
      md: "768px", //min-width: 768px
      lg: "1024px", //min-width: 1024px
      tablet: "1050px", //min-width: 1050px
      xl: "1200px", //min-width: 1200px
      "2xl": "1500px", //min-width: 1500px
      "3xl": "1920px", //min-width: 1920px
      tall: { raw: "(min-height: 600px)" }
    },
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"]
      },
      colors: {
        link: "var(--link-color)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        rent: "#48A1F2",
        water: "#8580F3",
        councilTax: "#FF7C7C",
        energy: "#4FD3BC",
        Grey50v3: "#f2f2f5",
        Grey900v3: "#09090E",
        Grey500v3: "#848487",
        darkgray: "#b5b5b7",
        placeTag: "#09090e",
        links: "#0f5cf0",
        lightgray: "#6b6b6e",
        lightSilver: "#DFE1E8"
      },
      fontSize: {
        "2xs": "10px",
        "3xl": "32px"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        },
        "random-active-count-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "random-active-count-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "random-active-count-fade-in": "random-active-count-fade-in 1.5s ease-out",
        "random-active-count-fade-out": "random-active-count-fade-out 1.5s ease-out"
      },
      boxShadow: {
        plPrimary: "0px 0px 8px 0px rgba(0, 0, 0, 0.10)",
        top: "0px -4px 3px 0px rgba(82, 82, 82, 0.10)"
      },
      transitionProperty: {
        top: "top"
      }
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" }
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" }
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" }
      },
      pulse: {
        "0%": {
          opacity: "1"
        },
        "100%": {
          opacity: "1"
        },
        "50%": {
          opacity: ".5"
        }
      }
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      spin: "spin 1s linear infinite;",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
    }
  },
  plugins: [require("tailwindcss-animate")]
};
