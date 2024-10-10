// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: "rgb(255, 203, 0)",
          secondary: "rgb(17, 26, 70)",
          background: 'rgb(0, 6, 20)'
        },
      },
    },
  },
});
