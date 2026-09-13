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
          translations: {
            el: "Αρχιζοντας",
          },
        },
        {
          label: "Bookings",
          autogenerate: { directory: "bookings" },
          translations: {
            el: "Κρατήσεις",
          },
        },
        {
          label: "Driver Experience",
          autogenerate: { directory: "drivers" },
          translations: {
            el: "Εμπειρία οδηγού",
          },
        },
        {
          label: "Settings",
          autogenerate: { directory: "settings" },
          translations: {
            el: "Ρυθμίσεις",
          },
        },
        {
          label: "Catalog",
          autogenerate: { directory: "catalog" },
          translations: {
            el: "Κατάλογος",
          },
        },
        {
          label: "Availability",
          autogenerate: { directory: "availability" },
          translations: {
            el: "Διαθεσιμότητα",
          },
        },
        {
          label: "Team Management",
          autogenerate: { directory: "team" },
          translations: {
            el: "Διαχείριση ομάδας",
          },
        },
        {
          label: "Communications",
          autogenerate: { directory: "communications" },
          translations: {
            el: "Επικοινωνία",
          },
        },
        {
          label: "Partners",
          autogenerate: { directory: "partners" },
          translations: {
            el: "Συνεργάτες",
          },
        },
        {
          label: "Tours",
          badge: "Add-on",
          autogenerate: { directory: "tours" },
          translations: {
            el: "Εκδρομες",
          },
        },
        {
          label: "Reports & Invoices",
          autogenerate: { directory: "reports" },
          translations: {
            el: "Αναφορές & Τιμολόγια",
          },
        },
        {
          label: "Booking Form",
          autogenerate: { directory: "booking-form" },
          translations: {
            el: "Φόρμα κράτησης",
          },
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
