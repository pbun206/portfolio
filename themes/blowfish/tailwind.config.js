module.exports = {
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "853px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      ...require('tailwindcss/colors'),
      transparent: "transparent",
      neutral: {
        DEFAULT: "var(--color-neutral)",
        50: "var(--color-neutral-50)",
        100: "var(--color-neutral-100)",
        200: "var(--color-neutral-200)",
        300: "var(--color-neutral-300)",
        400: "var(--color-neutral-400)",
        500: "var(--color-neutral-500)",
        600: "var(--color-neutral-600)",
        700: "var(--color-neutral-700)",
        800: "var(--color-neutral-800)",
        900: "var(--color-neutral-900)",
      },
      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {
        50: "var(--color-secondary-50)",
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
      },
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.neutral.700 / 1"),
            "--tw-prose-headings": theme("colors.neutral.800 / 1"),
            "--tw-prose-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-links": theme("colors.primary.600 / 1"),
            "--tw-prose-bold": "inherit",
            "--tw-prose-counters": theme("colors.neutral.800 / 1"),
            "--tw-prose-bullets": theme("colors.neutral.500 / 1"),
            "--tw-prose-quotes": theme("colors.neutral.700 / 1"),
            "--tw-prose-quote-borders": theme("colors.primary.500 / 1"),
            "--tw-prose-captions": theme("colors.neutral.500 / 1"),
            "--tw-prose-code": theme("colors.secondary.700 / 1"),
            "--tw-prose-pre-code": theme("colors.neutral.700 / 1"),
            "--tw-prose-pre-bg": theme("colors.neutral.50 / 1"),
            "--tw-prose-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-td-borders": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-body": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-headings": theme("colors.neutral.50 / 1"),
            "--tw-prose-invert-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-links": theme("colors.primary.400 / 1"),
            "--tw-prose-invert-bold": theme("colors.neutral.DEFAULT / 1"),
            "--tw-prose-invert-counters": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-bullets": theme("colors.neutral.600 / 1"),
            "--tw-prose-invert-quotes": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.600 / 1"),
            "--tw-prose-invert-captions": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-code": theme("colors.secondary.400 / 1"),
            "--tw-prose-invert-pre-code": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-pre-bg": theme("colors.neutral.700 / 1"),
            "--tw-prose-invert-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-td-borders": theme("colors.neutral.700 / 1"),
            a: {
              textDecoration: "none",
              textDecorationColor: theme("colors.primary.300 / 1"),
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.primary.600 / 1"),
                textDecoration: "none",
                borderRadius: "0.09rem",
              },
            },
            "a code": {
              color: "var(--tw-prose-code)",
            },
            hr: {
              border: '0.8px solid theme("colors.neutral.300 / 1")',
            },
            kbd: {
              backgroundColor: theme("colors.neutral.200 / 1"),
              padding: "0.1rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            },
            mark: {
              color: theme("colors.neutral.800 / 1"),
              backgroundColor: theme("colors.primary.600 / 1"),
              padding: "0.1rem 0.2rem",
              borderRadius: "0.25rem",
            },
            code: {
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              display: "none",
            },
            "code::after": {
              display: "none",
            },
            "p::before": {
              display: "none",
            },
            "p::after": {
              display: "none",
            },
            "a.active": {
              "text-decoration-color": theme("colors.primary.600 / 1"),
            },
            "p.active": {
              "text-decoration-color": theme("colors.primary.600 / 1"),
            },
          },
        },
        invert: {
          css: {
            a: {
              textDecorationColor: theme("colors.neutral.600 / 1"),
              "&:hover": {
                color: theme("colors.primary.400 / 1"),
              },
            },
            kbd: {
              color: theme("colors.neutral.200 / 1"),
              backgroundColor: theme("colors.neutral.700 / 1"),
            },
            mark: {
              backgroundColor: theme("colors.primary.400 / 1"),
            },
            "code:not(pre code)": {
              backgroundColor: theme("colors.zinc.900 / 0.7"),
            },
            "a.active": {
              "text-decoration-color": theme("colors.primary.400 / 1"),
            },
            "p.active": {
              "text-decoration-color": theme("colors.primary.400 / 1"),
            },
            hr: {
              border: '0.8px solid theme("colors.neutral.500 / 1")',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
