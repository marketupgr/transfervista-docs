// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TransferVista Documentation",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        el: {
          label: "Ελληνικά",
        },
      },
      social: [
        {
          icon: "document",
          label: "Website",
          href: "https://transfervista.com",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
