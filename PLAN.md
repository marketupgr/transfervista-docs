# TransferVista Documentation Plan

This document outlines the comprehensive documentation structure for TransferVista, a SaaS application for transfer and tour booking management.

## Overview

- **Total Pages**: 46 documentation pages
- **Sections**: 14 main sections
- **Platform**: Astro Starlight

---

## Key Concepts

### Areas vs Availability Zones

TransferVista uses two distinct geographic zone systems:

| Concept | Location | Purpose |
|---------|----------|---------|
| **Areas** | Catalog > Areas | Define zones for **pricing calculations**. Used to set prices between origin and destination zones. |
| **Availability Zones** | Availability > Zones | Define **where your service operates**. Controls which locations customers can book transfers to/from. |

**Example**: You might have an "Airport" Area that costs more than a "City Center" Area (pricing). Separately, you might have Availability Zones that cover Athens but not Thessaloniki (service boundaries).

---

## Documentation Structure

### 1. Getting Started

| Page | File | Status | Description |
|------|------|--------|-------------|
| Introduction | `getting-started/introduction.md` | Done | Overview of TransferVista, key features, target audience |
| Quick Start | `getting-started/quick-start.md` | Done | 5-minute setup guide: create account, basic settings, first booking |
| Dashboard Overview | `getting-started/dashboard-overview.md` | Done | Understanding the Dashboard, performance metrics, assignments view |

#### Content Requirements

**Introduction**
- [x] What is TransferVista?
- [x] Key features overview
- [x] Target audience (transfer companies, tour operators)

**Quick Start**
- [x] Account creation flow
- [x] Initial business setup (name, timezone, currency)
- [x] Adding first vehicle
- [x] Creating first service area
- [x] Setting up basic pricing
- [x] Receiving first booking

**Dashboard Overview**
- [x] Performance metrics explained (Bookings, Revenue, New Customers)
- [x] Date range comparisons
- [x] Revenue chart interpretation
- [x] Assignments panel (Transfers, Tours, Previous Assignments)
- [x] Quick navigation links

---

### 2. Managing Bookings

| Page | File | Status | Description |
|------|------|--------|-------------|
| Overview | `bookings/overview.md` | Done | Bookings list and filtering |
| Calendar | `bookings/calendar.md` | Done | Calendar view navigation |
| Booking Details | `bookings/booking-details.md` | Done | Individual booking view |
| Status Workflow | `bookings/status-workflow.md` | Planned | Lifecycle management |
| Assigning Operators | `bookings/assigning-operators.md` | Done | Driver assignment |
| Payments | `bookings/payments.md` | Planned | Payment handling |

#### Content Requirements

**Overview**
- [x] Bookings table columns:
  - [x] Ref, Status, Booked at, Pickup at
  - [x] Customer, Operator, Flight/Ferry
  - [x] From, Destination, Distance
  - [x] Pay on Arrival, Total, Origin
- [x] Status filters (All, Accepted, Assigned, Picked up, Completed, Cancelled)
- [x] Search and sorting
- [x] Pagination

**Calendar**
- [x] Week view navigation
- [x] Month view navigation
- [x] Day view navigation
- [x] Date picker usage
- [x] Booking display on calendar
- [x] Click-through to booking details

**Booking Details**
- [x] Booking information sections:
  - [x] Transfer details
  - [x] Contact information
  - [x] Operator assignment
  - [x] Payment information
  - [x] Extras
- [x] Route map
- [x] Flight tracking (for airport pickups):
  - [x] Real-time flight status display
  - [x] ETA updates
  - [x] Delay notifications
- [x] Messages/notes
- [x] Session information
- [x] Edit capabilities

**Status Workflow**
- [ ] Status definitions:
  - [ ] Pending Payment: Awaiting customer payment
  - [ ] Accepted: Booking received
  - [ ] Assigned: Driver allocated
  - [ ] Picked Up: Customer collected
  - [ ] Completed: Journey finished
  - [ ] Cancelled: Booking voided
- [ ] Status transition rules
- [ ] Status change notifications
- [ ] Automatic vs manual transitions

**Assigning Operators**
- [x] Operator selection dropdown
- [x] Commission visibility
- [x] Assignment notifications
- [x] Reassignment process
- [x] Unassigning operators

**Payments**
- [ ] Payment methods
    - [ ] Pay on Arrival
    - [ ] Online Payment (Note Stripe Integration is required)
    - [ ] On Arrival with Deposit
- [ ] Pay on arrival workflow
- [ ] Online payment status
- [ ] Deposit handling
- [ ] Payment confirmation

---

### 3. Driver Experience

> **Note**: This section covers the driver's perspective when using TransferVista. Drivers log in to view their assignments and manage booking statuses.

| Page | File | Status | Description |
|------|------|--------|-------------|
| Overview | `drivers/overview.md` | Planned | Introduction to the driver interface |
| Viewing Assignments | `drivers/viewing-assignments.md` | Planned | How drivers see and access their assigned bookings |
| Managing Bookings | `drivers/managing-bookings.md` | Planned | Updating booking status and completing transfers |

#### Content Requirements

**Overview**
- [ ] What drivers see when they log in
- [ ] Driver dashboard layout
- [ ] Navigation for drivers
- [ ] Mobile-friendly interface notes
- [ ] Driver role permissions (what they can/cannot access)

**Viewing Assignments**
- [ ] Assignments list/panel
- [ ] Filtering by date (today, upcoming, past)
- [ ] Assignment details visible to drivers:
  - [ ] Pickup location and address
  - [ ] Drop-off location and address
  - [ ] Pickup date and time
  - [ ] Customer name
  - [ ] Customer phone number
  - [ ] Number of passengers
  - [ ] Luggage count
  - [ ] Vehicle assigned
  - [ ] Special instructions/notes
  - [ ] Flight/ferry details (if applicable)
- [ ] Viewing route on map
- [ ] Accessing customer contact information
- [ ] Price visibility (based on permissions)
- [ ] Commission visibility (based on permissions)

**Managing Bookings**
- [ ] Updating booking status:
  - [ ] Marking as "Picked Up" when customer is collected
  - [ ] Marking as "Completed" when journey is finished
- [ ] Status update workflow
- [ ] Confirmation prompts
- [ ] What happens after status change:
  - [ ] Notifications sent to customer/manager
  - [ ] Booking moves to completed list
- [ ] Viewing completed/past assignments
- [ ] Notes or issues reporting (if applicable)

---

### 4. Settings & Configuration

| Page | File | Status | Description |
|------|------|--------|-------------|
| General | `settings/general.md` | Done | Business name, subdomain, timezone, language, currency, support info |
| Bookings | `settings/bookings.md` | Done | Reference prefixes, payment methods, pricing rules |
| Forms & Documents | `settings/forms-documents.md` | Done | Vouchers, agreements, signatures, invoices |
| Branding | `settings/branding.md` | Done | Logo, colors, visual identity |
| Permissions | `settings/permissions.md` | Planned | Role-based access for drivers |
| Integrations | `settings/integrations.md` | Done | Third-party service connections |

#### Content Requirements

**General Settings**
- [x] Business name configuration
- [x] Subdomain setup (note: contact support to change)
- [x] Timezone selection and importance
- [x] Default language for booking form
- [x] Currency selection (note: doesn't convert existing prices)
- [x] Terms and Conditions URL
- [x] Privacy Policy URL
- [x] Support website/email/phone
- [x] Review link (for completed booking emails)

**Bookings Settings**
- [x] Transfer reference prefix (e.g., TRF)
- [x] Tour reference prefix (e.g., TOU)
- [x] Return URL configuration
- [x] Minimum distance settings
- [x] Minimum duration settings
- [x] Return trip discount percentage
- [x] Payment methods:
  - [x] Pay on arrival
  - [x] Online payment (Stripe)
  - [x] Deposit percentage
- [x] Price rounding options

**Forms & Documents**
- [x] Transfer Voucher settings
- [x] Voucher display options:
  - [x] Show/hide payment method on voucher
  - [x] Show/hide price on voucher
- [x] Agreement/Consent text:
  - [x] English version
  - [x] Localized versions (Greek, Spanish, French, Italian, Turkish)
- [x] Signature image upload
- [x] Invoice customization
- [x] Code/template editing

**Branding**
- [x] Logo upload requirements (dimensions, format)
- [x] Brand color picker
- [x] Base colors configuration
- [x] Text color settings
- [x] Preview on booking form

**Permissions**
- [ ] Driver role permissions:
  - [ ] See price toggle
  - [ ] See commission toggle
- [ ] Permission inheritance explanation

**Integrations**
- [x] Stripe setup:
  - [x] Account connection
  - [x] Payment processing flow
  - [x] Webhook configuration
- [x] Google Calendar:
  - [x] OAuth connection
  - [x] Sync settings
  - [x] Event creation
- [x] Google Analytics:
  - [x] Tracking ID setup
  - [x] Events tracked
- [x] Google Ads:
  - [x] Conversion tracking
  - [x] Tag configuration

---

### 5. Catalog Management

| Page | File | Status | Description |
|------|------|--------|-------------|
| Vehicles | `catalog/vehicles.md` | Done | Fleet management |
| Areas | `catalog/areas.md` | Done | Pricing zones for route-based pricing |
| Price Lists | `catalog/price-lists.md` | Planned | Pricing configuration |
| Extras | `catalog/extras.md` | Done | Add-on services |

#### Content Requirements

**Vehicles**
- [x] Adding a new vehicle
- [x] Vehicle image upload
- [x] Title/name configuration
- [x] Passenger capacity setting
- [x] Luggage capacity setting
- [x] Editing existing vehicles
- [x] Deleting vehicles
- [x] Vehicle display on booking form

**Areas (Pricing Zones)**

> **Note**: Areas are used for **pricing rules** - they define geographic zones that are referenced in price lists to calculate route-based pricing. Areas are different from Availability Zones (see Section 4).

- [x] Understanding Areas vs Availability Zones
- [x] Interactive map interface
- [x] Creating pricing areas:
  - [x] Polygon drawing tool
  - [x] Area naming conventions
- [x] Location types:
  - [x] Airport
  - [x] Port
  - [x] Hotel
  - [x] Other
- [x] How Areas connect to Price Lists
- [x] Area-to-Area pricing (origin → destination)
- [x] Editing area boundaries
- [x] Deleting areas
- [ ] Area overlap handling and priority

**Price Lists**
- [ ] Base price list vs Partner price lists
- [ ] Creating a new price list
- [ ] Pricing dimensions:
  - [ ] By route (Area → Area)
  - [ ] By group/zone
  - [ ] By vehicle type
  - [ ] By time of day
  - [ ] By kilometer
  - [ ] EUR per KM rates
  - [ ] Flat price option
- [ ] Discount configuration
- [ ] Assigning price lists to partners
- [ ] Price list priority/fallback
- [ ] Relationship between Areas and pricing rules

**Extras**
- [x] Creating extra services (e.g., child seat, meet & greet)
- [x] Extra pricing
- [ ] Availability per vehicle type
- [x] Display on booking form
- [x] Extras in booking details

---

### 6. Availability

| Page | File | Status | Description |
|------|------|--------|-------------|
| Overview | `availability/overview.md` | Planned | Understanding availability configuration |
| Zones | `availability/zones.md` | Planned | Geographic zones where transfers are available |
| Rules & Scheduling | `availability/rules-scheduling.md` | Planned | Availability rules, closed hours, and date exceptions |

#### Content Requirements

**Overview**

> **Important**: Availability settings control **when** and **where** customers can book transfers. This is separate from pricing configuration (see Catalog > Areas).

- [ ] Understanding the availability system
- [ ] Difference between Availability Zones and Pricing Areas
- [ ] How availability rules are evaluated
- [ ] Impact on customer booking form

**Availability Zones**

> **Note**: Availability Zones define the **geographic boundaries** where your transfer service operates. These are different from Catalog Areas which are used for pricing.

- [ ] Understanding Availability Zones vs Pricing Areas:
  - [ ] Availability Zones: Where you offer service
  - [ ] Pricing Areas: How you calculate prices
- [ ] Zone types:
  - [ ] **Full Service**: Routes can start, end, or be entirely within the zone (e.g., hotel-to-hotel within city)
  - [ ] **Cross Zone Only**: Routes must cross into another zone - both pickup and dropoff cannot be in the same zone (e.g., airport zone where transfers must go to/from another area)
- [ ] Creating availability zones:
  - [ ] Interactive map interface
  - [ ] Drawing zone boundaries (polygon tool)
  - [ ] Zone naming
  - [ ] Selecting zone type (Full Service or Cross Zone Only)
- [ ] Multiple zone management
- [ ] Editing zone boundaries
- [ ] Deleting zones
- [ ] How zones affect the booking form:
  - [ ] Location validation
  - [ ] "Service not available" messages

**Rules & Scheduling**

This page covers three related features for controlling when bookings can be made:

*Availability Rules*
- [ ] Understanding availability rules
- [ ] Rule configuration options:
  - [ ] Day of week selection (Mon-Sun)
  - [ ] Month selection (Jan-Dec)
  - [ ] Time range (start time - end time)
  - [ ] Advance booking margin (minimum notice period)
- [ ] Rule description field
- [ ] Seasonal availability:
  - [ ] Summer/winter schedules
  - [ ] Holiday periods
- [ ] Creating, editing, and deleting rules

*Closed Hours*
- [ ] Purpose of closed hours
- [ ] Enabling closed hours
- [ ] Configuration:
  - [ ] Start time (when closed period begins)
  - [ ] End time (when closed period ends)
  - [ ] Pickup cutoff (earliest allowed pickup time for bookings made during closed hours)
- [ ] Example: If closed hours are 22:00-06:00 with an 08:00 cutoff, a customer booking at 23:00 can only schedule a pickup for 08:00 or later
- [ ] Use cases:
  - [ ] Night hours
  - [ ] Office hours only

*Unavailable Dates (Exceptions)*
- [ ] Purpose of date exceptions
- [ ] Adding unavailable dates:
  - [ ] Date picker calendar
  - [ ] Selecting specific dates
- [ ] Common use cases:
  - [ ] Public holidays
  - [ ] Company holidays
  - [ ] Special events
- [ ] Removing unavailable dates

---

### 7. Customers

| Page | File | Status | Description |
|------|------|--------|-------------|
| Managing Customers | `customers/managing-customers.md` | Planned | Customer records |

#### Content Requirements

**Managing Customers**
- [ ] Customer table columns:
  - [ ] Name, Email, Country
  - [ ] Address, Postcode, Phone, Notes
- [ ] Viewing customer details
- [ ] Customer booking history
- [ ] Editing customer information
- [ ] Customer notes
- [ ] Search and filtering

---

### 8. Team Management

> **Note**: Operators are the people or businesses who fulfill transfer bookings. There are two types:
> - **Drivers**: Individual operators, either company staff or freelancers
> - **Partners**: External businesses that can be assigned transfers (see Partners section)

| Page | File | Status | Description |
|------|------|--------|-------------|
| Members | `team/members.md` | Planned | Team member roles |
| Drivers | `team/drivers.md` | Planned | Driver management |

#### Content Requirements

**Members**
- [ ] Inviting new members
- [ ] Member roles:
  - [ ] Owner: Full access
  - [ ] Manager: Operational access
  - [ ] Staff: Limited access
  - [ ] Driver: Assignment-only access
- [ ] Role permissions matrix
- [ ] Removing members
- [ ] Member list management

**Drivers**
- [ ] Adding drivers
- [ ] Driver profile:
  - [ ] Photo upload
  - [ ] Name
  - [ ] Phone number
  - [ ] Commission percentage
- [ ] Commission fee calculation
- [ ] Driver availability
- [ ] Performance tracking

---

### 9. Partners

> **Note**: Partners are external business entities that work with your transfer company. There are two types of partners: **Booking Partners** (who can create bookings on behalf of customers with commission) and **Transfer Operator Partners** (who can be assigned to fulfill transfer bookings).

| Page | File | Status | Description |
|------|------|--------|-------------|
| Overview | `partners/overview.md` | Planned | Understanding partner types and capabilities |
| Booking Partners | `partners/booking-partners.md` | Planned | Partners who book transfers with commission |
| Transfer Operators | `partners/transfer-operators.md` | Planned | Partners who fulfill transfer assignments |

#### Content Requirements

**Overview**

> **Key Concept**: A single partner can be configured as both a Booking Partner AND a Transfer Operator Partner, or just one of these roles.

- [ ] What is a partner?
- [ ] Partner types explained:
  - [ ] **Booking Partner**: Has their own booking URL, can create bookings like customers, commission is added on top of prices
  - [ ] **Transfer Operator Partner**: Can be assigned to transfer bookings, receives notifications about assignments
- [ ] When to use each type
- [ ] Partner vs Member/Operator distinction
- [ ] Partner list view and management

**Booking Partners**
- [ ] What is a Booking Partner?
- [ ] Creating a booking partner:
  - [ ] Partner name/business/title
  - [ ] Contact information (name, email, phone)
  - [ ] Enable "Can Book Transfers" checkbox
  - [ ] Enable "Can Book Tours" checkbox (if Tours add-on enabled)
- [ ] Booking Link:
  - [ ] Unique partner booking URL
  - [ ] How partners use the booking link
  - [ ] Copy link to clipboard
  - [ ] Download QR code (PNG)
- [ ] Allowed Booking Addresses:
  - [ ] Restricting which addresses partner can book to/from
  - [ ] Adding address restrictions
  - [ ] No restrictions = any address allowed
- [ ] Booking Commission Rates:
  - [ ] How commission works (increases total amount)
  - [ ] Example: 10% on $100 = $110 charge
  - [ ] Setting commission by Price List Group
  - [ ] Commission Rate percentage
  - [ ] Multiple commission rates for different groups
- [ ] Partner Users:
  - [ ] Inviting users to partner dashboard
  - [ ] User can create and view bookings
  - [ ] User status (Invited, Active)
  - [ ] Removing users
- [ ] Partner Landing Page (Add-on):
  - [ ] Partner Logo upload
  - [ ] Hero Image upload
- [ ] API Access:
  - [ ] Creating API credentials
  - [ ] API key management
  - [ ] Booking via API

**Transfer Operator Partners**
- [ ] What is a Transfer Operator Partner?
- [ ] Creating a transfer operator partner:
  - [ ] Partner name/business/title
  - [ ] Contact information
  - [ ] Enable "Is a transfer partner/operator" checkbox
- [ ] Assignment workflow:
  - [ ] Assigning partner to transfers
  - [ ] Partner receives assignment requests
  - [ ] Accept/decline assignments
  - [ ] Notifications for assignments
- [ ] Difference from internal Operators:
  - [ ] Partners are external companies
  - [ ] Operators are individual drivers
- [ ] Partner as operator on booking detail page

**Partner Configuration**
- [ ] Editing partner details
- [ ] Partner contact information:
  - [ ] Name/Business/Title
  - [ ] Contact Name
  - [ ] Contact Email
  - [ ] Contact Phone
- [ ] Partner capabilities toggles:
  - [ ] Can Book Transfers
  - [ ] Can Book Tours
  - [ ] Is a transfer partner/operator
- [ ] Viewing partner details page
- [ ] Deleting partners
- [ ] Partner table columns:
  - [ ] #, Name, Contact Name, Contact Email, Contact Phone, Actions

---

### 10. Tours `Add-on`

> **Note**: Tours is an add-on feature that must be enabled separately.

| Page | File | Status | Description |
|------|------|--------|-------------|
| Configuration | `tours/configuration.md` | Planned | Tour setup |

#### Content Requirements

**Configuration**
- [ ] Enabling the Tours add-on
- [ ] Creating a new tour
- [ ] Tour fields:
  - [ ] Title
  - [ ] Location
  - [ ] Activity type
  - [ ] Category
- [ ] Tour description
- [ ] Tour pricing
- [ ] Tour availability
- [ ] Editing tours
- [ ] Deleting tours
- [ ] Tours in booking form
- [ ] Tour enquiry workflow

---

### 11. Communications

| Page | File | Status | Description |
|------|------|--------|-------------|
| Email Templates | `communications/email-templates.md` | Planned | Notification templates |
| Email History | `communications/email-history.md` | Planned | Sent email logs |

#### Content Requirements

**Email Templates**
- [ ] Template categories by recipient:
  - [ ] Customer notifications
  - [ ] Manager notifications
  - [ ] Driver notifications
- [ ] Available templates:
  - [ ] Customer: Accepted, Assigned, Cancelled, Completed, Return reminder
  - [ ] Manager: Accepted, Cancelled, Completed, Picked Up
  - [ ] Driver: Assigned, Cancelled, Completed
- [ ] Enabling/disabling templates
- [ ] Template customization (coming soon feature)
- [ ] Template variables/placeholders

**Email History**
- [ ] Email log table:
  - [ ] Status (sent, failed, pending)
  - [ ] Recipient (To)
  - [ ] Subject line
  - [ ] Date/time sent
- [ ] Filtering and sorting
- [ ] Email delivery troubleshooting

---

### 12. Reports & Invoices

| Page | File | Status | Description |
|------|------|--------|-------------|
| Generating Reports | `reports/generating-reports.md` | Planned | Business reports |
| Managing Invoices | `invoices/managing-invoices.md` | Planned | Invoice management |

#### Content Requirements

**Generating Reports**
- [ ] Report types:
  - [ ] Transfers assigned to Drivers or Partner Operators
  - [ ] Bookings by Partner
- [ ] Date range selection
- [ ] Report generation process
- [ ] Report metrics displayed:
  - [ ] Total bookings
  - [ ] Total revenue
  - [ ] Average booking value
  - [ ] Total distance (for operator reports)
  - [ ] Commission/fees breakdown
- [ ] Detailed statistics per operator/partner
- [ ] Creating invoices directly from reports:
  - [ ] Generate invoice for operator/driver commission
  - [ ] Pre-filled invoice with booking period details

**Managing Invoices**
- [ ] Invoice table columns:
  - [ ] Invoice number
  - [ ] Status
  - [ ] Date
  - [ ] Invoiced To
  - [ ] PDF download
  - [ ] Actions
- [ ] Invoice creation (if manual)
- [ ] PDF download
- [ ] Invoice status workflow

---

### 13. Customer Booking Form

| Page | File | Status | Description |
|------|------|--------|-------------|
| Overview | `booking-form/overview.md` | Planned | Booking form introduction |
| Transfer Bookings | `booking-form/transfers.md` | Planned | Transfer booking flow |
| Tour Enquiries | `booking-form/tours.md` | Planned | Tour enquiry flow |
| Multi-Language | `booking-form/multi-language.md` | Planned | Language support |

#### Content Requirements

**Overview**
- [ ] Booking form URL structure (subdomain)
- [ ] Embedding options (if applicable)
- [ ] Form appearance (branding applied)
- [ ] Customer experience overview

**Transfer Bookings**
- [ ] Booking flow steps:
  1. [ ] Select pickup location (From)
  2. [ ] Select destination (To)
  3. [ ] Return trip toggle
  4. [ ] Pickup date selection
  5. [ ] Pickup time selection
  6. [ ] Passengers count
  7. [ ] Luggage count
  8. [ ] Vehicle selection
  9. [ ] Extras selection
  10. [ ] Customer details
  11. [ ] Payment
  12. [ ] Confirmation
- [ ] Form validation messages
- [ ] Pricing display
- [ ] Coupon code entry

**Tour Enquiries**
- [ ] Tour selection flow:
  1. [ ] Browse available tours
  2. [ ] Select tour
  3. [ ] Enter details
  4. [ ] Submit enquiry
- [ ] Enquiry confirmation
- [ ] Follow-up process

**Multi-Language**
- [ ] Supported languages:
  - [ ] English
  - [ ] Greek (Ελληνικά)
  - [ ] Spanish (Español)
  - [ ] French (Français)
  - [ ] Italian (Italiano)
  - [ ] Turkish (Türkçe)
- [ ] Language selector usage
- [ ] Default language setting
- [ ] Translation coverage

---

## Notes

### Excluded Sections
The following sections are intentionally excluded from this documentation:
- **Admin Panel**: Internal/system administration, not customer-facing
- **Billing**: Subscription management handled separately
- **Add-ons**: Marketplace features, not core functionality

### Future Enhancements
- [ ] Add video tutorials for complex workflows
- [ ] Include annotated screenshots
- [ ] Create troubleshooting/FAQ section
- [ ] Add API documentation (if applicable)
- [ ] Create glossary of terms

### Content Guidelines
- Use clear, concise language
- Include step-by-step instructions with numbered lists
- Add screenshots for visual guidance
- Provide examples where helpful
- Link related pages for cross-reference
- Keep content up-to-date with application changes
