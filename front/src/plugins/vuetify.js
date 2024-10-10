// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: "#f0bf58",
          secondary: "#333333",
          background: "#0f0f0f",
        },
      },
    },
  },
});
