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
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
            { label: "Dashboard Overview", slug: "getting-started/dashboard-overview" },
          ],
        },
        {
          label: "Settings",
          items: [
            { label: "General", slug: "settings/general" },
            { label: "Bookings", slug: "settings/bookings" },
            { label: "Forms & Documents", slug: "settings/forms-documents" },
            { label: "Branding", slug: "settings/branding" },
            { label: "Permissions", slug: "settings/permissions" },
            { label: "Integrations", slug: "settings/integrations" },
          ],
        },
        {
          label: "Catalog",
          items: [
            { label: "Vehicles", slug: "catalog/vehicles" },
            { label: "Areas", slug: "catalog/areas" },
            { label: "Price Lists", slug: "catalog/price-lists" },
            { label: "Extras", slug: "catalog/extras" },
          ],
        },
        {
          label: "Availability",
          items: [
            { label: "Overview", slug: "availability/overview" },
            { label: "Zones", slug: "availability/zones" },
            { label: "Rules & Scheduling", slug: "availability/rules-scheduling" },
          ],
        },
        {
          label: "Bookings",
          items: [
            { label: "Overview", slug: "bookings/overview" },
            { label: "Transfers", slug: "bookings/transfers" },
            { label: "Tours", slug: "bookings/tours" },
            { label: "Calendar View", slug: "bookings/calendar" },
            { label: "Booking Details", slug: "bookings/booking-details" },
            { label: "Status Workflow", slug: "bookings/status-workflow" },
            { label: "Assigning Operators", slug: "bookings/assigning-operators" },
            { label: "Payments", slug: "bookings/payments" },
          ],
        },
        {
          label: "Customers",
          items: [
            { label: "Managing Customers", slug: "customers/managing-customers" },
          ],
        },
        {
          label: "Team Management",
          items: [
            { label: "Members", slug: "team/members" },
            { label: "Drivers", slug: "team/drivers" },
          ],
        },
        {
          label: "Partners",
          items: [
            { label: "Overview", slug: "partners/overview" },
            { label: "Booking Partners", slug: "partners/booking-partners" },
            { label: "Transfer Operators", slug: "partners/transfer-operators" },
            { label: "Configuration", slug: "partners/configuration" },
          ],
        },
        {
          label: "Tours",
          badge: "Add-on",
          items: [
            { label: "Configuration", slug: "tours/configuration" },
          ],
        },
        {
          label: "Coupons",
          items: [
            { label: "Creating Coupons", slug: "coupons/creating-coupons" },
          ],
        },
        {
          label: "Communications",
          items: [
            { label: "Email Templates", slug: "communications/email-templates" },
            { label: "Email History", slug: "communications/email-history" },
          ],
        },
        {
          label: "Reports & Invoices",
          items: [
            { label: "Generating Reports", slug: "reports/generating-reports" },
            { label: "Managing Invoices", slug: "invoices/managing-invoices" },
          ],
        },
        {
          label: "Booking Form",
          items: [
            { label: "Overview", slug: "booking-form/overview" },
            { label: "Transfer Bookings", slug: "booking-form/transfers" },
            { label: "Tour Enquiries", slug: "booking-form/tours" },
            { label: "Multi-Language", slug: "booking-form/multi-language" },
          ],
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
