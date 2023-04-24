/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
// import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#f2f5f8",
          surface: "#ffffff",
          primary: "#344767",
          secondary: "#334155",
          accent: "#705CF6",
          error: "#ef476f",
          info: "#2196F3",
          success: "#06d6a0",
          "on-success": "#ffffff",
          warning: "#ffd166",
        },
      },
      dark: {
        colors: {
          background: "#111b27",
          surface: "#1E293B",
          primary: "#705CF6",
          secondary: "#598EF3",
          accent: "#705CF6",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
  // icons: {
  //   defaultSet: "mdi",
  //   aliases,
  //   sets: {
  //     mdi,
  //   },
  // },
  directives: {
    "no-toolbar": {
      inserted(el: { classList: { add: (arg0: string) => void } }) {
        el.classList.add("no-toolbar");
      },
    },
  },
  defaults: {
    VCard: {
      "elevation": 0,
      "border": false,
      "rounded": "xl"
    },
  },
});
