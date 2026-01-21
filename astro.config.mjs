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
        },
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        { label: "Bookings", autogenerate: { directory: "bookings" } },
        { label: "Driver Experience", autogenerate: { directory: "drivers" } },
        { label: "Settings", autogenerate: { directory: "settings" } },
        { label: "Catalog", autogenerate: { directory: "catalog" } },
        { label: "Availability", autogenerate: { directory: "availability" } },
        { label: "Team Management", autogenerate: { directory: "team" } },
        {
          label: "Communications",
          autogenerate: { directory: "communications" },
        },
        { label: "Partners", autogenerate: { directory: "partners" } },
        {
          label: "Tours",
          badge: "Add-on",
          autogenerate: { directory: "tours" },
        },
        { label: "Reports & Invoices", autogenerate: { directory: "reports" } },
        { label: "Booking Form", autogenerate: { directory: "booking-form" } },
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
