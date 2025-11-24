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
      },
      sidebar: [
        {
          label: "Get started",
          translations: {
            el: "Ξεκινώντας",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Navigation",
          translations: {
            el: "Μενού πλοήγησης",
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
