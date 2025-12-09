// @ts-check

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://transfervista.com",
  base: "/docs",
  trailingSlash: "ignore",
  integrations: [
    starlight({
      title: "TransferVista Documentation",
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
          el: {
            label: "Ελληνικά",
            lang: "el",
          },
          es: {
            label: "Español",
            lang: "es",
          },
          fr: {
            label: "Français",
            lang: "fr",
          },
          it: {
            label: "Italiano",
            lang: "it",
          },
          de: {
            label: "Deutsch",
            lang: "de",
          }
      },
      sidebar: [
        {
          label: "Get started",
          translations: {
            el: "Ξεκινώντας",
            es: "Empezar",
            fr: "Commencer",
            it: "Iniziare",
            de: "Anfangen",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Navigation",
          translations: {
            el: "Μενού πλοήγησης",
            es: "Navegación",
            fr: "Navigation",
            it: "Navigazione",
            de: "Navigationsleiste",
          },
          autogenerate: { directory: "navigation" },
        },
      ],
      social: [
        {
          icon: "document",
          label: "Website",
          href: "https://transfervista.com",
        },
      ],
    }),
  ],
});
