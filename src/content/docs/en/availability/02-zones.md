---
title: Availability Zones
description: Define geographic zones where your transfer services operate
sidebar:
    badge:
        text: Required Setup
        variant: caution
---

Availability Zones define **where** pick-ups and drop-offs are available. They are different from [Catalog > Areas](/docs/en/catalog/02-areas), which are used for **pricing**. Availability Zones control which pickup and drop-off locations customers can choose on the [booking form](/docs/en/booking-form/01-overview).

Go to **Business > Availability** in the sidebar and open the **Zones** tab.

![Availability Zones — Draw Zone, Full Service and Cross Zone Only, map with zones](../../../../assets/screenshots/availability-zones.png)

## Zone types

- **Full Service** – Routes can start, end, or be entirely within the zone (e.g. hotel-to-hotel within a city).
- **Cross Zone Only** – The route must cross into another zone (e.g. Zone A to Zone B); both pickup and drop-off cannot be in the same zone (e.g. airport zone where transfers must go to or from another area).

:::caution
**Cross Zone Only** means both pickup and drop-off cannot be in the same zone—use for zones like airports where transfers must go to/from elsewhere.
:::

## Creating and editing zones

On the **Zones** tab you can create and manage multiple zones using the interactive map:

- Use **Draw Zone** to draw zone boundaries on the map (polygon), then choose **Full Service** or **Cross Zone Only**
- Name each zone and set its type
- Edit zone boundaries, names, or types, and delete zones as your service area changes

If a customer selects a location outside your zones, they will see that the service is not available for that request (location validation; the booking form blocks invalid pickup/drop-off choices).

## Related pages

- [Availability Overview](/docs/en/availability/01-overview)
- [Rules & Scheduling](/docs/en/availability/01-rules-scheduling) - When bookings are allowed
- [Areas](/docs/en/catalog/02-areas) - Pricing zones (different from availability zones)
