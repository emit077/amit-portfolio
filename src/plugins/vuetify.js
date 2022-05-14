// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "theme_light",
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
    themes: {
      theme_dark: {
        dark: true,
        colors: {
          background: "#000000",
          surface: "#FFFFFF",
          primary: "#6200EE",
          secondary: "#03DAC6",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          lightbulb: "#FB8C00",
          title: "#FB8C00",
        },
      },
      theme_light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#6200EE",
          secondary: "#03DAC6",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          lightbulb: "#4CAF50",
          title: "#4CAF50",
        },
      },
    },
  },
});
