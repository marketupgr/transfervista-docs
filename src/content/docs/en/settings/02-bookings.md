---
title: Bookings Settings
description: Configure reference prefixes, payment methods, and pricing rules
---

To access Bookings Settings, go to **Settings** in the sidebar and select **Bookings**.

## Reference Number Prefixes

Customize the prefixes for your booking reference numbers to make them easily identifiable.

| Field | Description |
|-------|-------------|
| **Transfer Booking Reference Number Prefix** | The prefix for transfer bookings (e.g., `TRF-`). Bookings will be numbered as TRF-001, TRF-002, etc. |
| **Tour Booking Reference Number Prefix** | The prefix for tour bookings (e.g., `TOU-`). Only applies if you have the Tours add-on enabled. |

## Booking Return URL

| Field | Description |
|-------|-------------|
| **Booking Return URL** | A link displayed on the "thank you" page after a successful booking or other pages during booking. Use this to direct customers back to your website. |

## Minimum Service Requirements

Set minimum requirements for transfers to be accepted. This helps prevent bookings for very short trips that may not be profitable.

| Field | Description |
|-------|-------------|
| **Minimum distance (km)** | The minimum distance required for a transfer to be bookable. Set to `0` to disable. |
| **Minimum duration (minutes)** | The minimum trip duration required. Set to `0` to disable. |

:::note
When a customer enters a route that doesn't meet these requirements, they will not be able to proceed with the booking.
:::

## Return Booking Discount

| Field | Description |
|-------|-------------|
| **Discount % for return bookings** | A percentage discount applied when customers book a return trip. For example, setting `10` gives customers 10% off their total when they add a return journey. |

## Payment Methods

Configure how customers can pay for their bookings. You can enable multiple payment methods simultaneously.

| Option | Description |
|--------|-------------|
| **Enable payment on arrival** | Customers can choose to pay when they meet the driver. No upfront payment is required. |
| **Enable payment online** | Customers pay for their booking in full online at the time of booking. Requires [Stripe integration](/docs/en/settings/06-integrations/#stripe). |
| **Enable payment on arrival with deposit** | Customers pay a deposit online and the remaining balance on arrival. |
| **Deposit %** | The percentage of the total booking price required as a deposit (e.g., `20` for a 20% deposit). Only applies when deposit payment is enabled. |

:::tip
Deposit payments are useful for securing bookings while reducing no-shows, without requiring full payment upfront.
:::

## Price Rounding

Control how calculated prices are rounded for display and billing.

| Field | Description |
|-------|-------------|
| **Decimal places** | Number of decimal places for prices. Set to `0` for whole numbers, `2` for cents/pennies. |
| **Rounding** | How prices are rounded when they exceed the decimal precision. |

### Rounding Options

| Option | Description | Example (0 decimal places) |
|--------|-------------|---------------------------|
| **none** | No rounding applied. Prices display as calculated. | 9.45 → 9.45 |
| **up** | Always round up to the next value. | 9.01 → 10, 9.99 → 10 |
| **half_up** | Round up when the digit is 5 or higher (standard rounding). | 9.5 → 10, 9.4 → 9 |
| **down** | Always round down to the lower value. | 9.99 → 9, 9.01 → 9 |
| **half_down** | Round down when the digit is 5 or lower. | 9.5 → 9, 9.6 → 10 |

After making changes, click **Save** in the top right corner to apply your updates.
