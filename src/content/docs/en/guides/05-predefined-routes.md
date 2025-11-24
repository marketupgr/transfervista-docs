---
title: Pre-Defined Locations
description: Learn how to configure fixed routes, areas, and prices so customers can book only specific transfer routes.
---

# Pre-Defined Pickup & Drop-Off Locations

This guide explains how to configure your TransferVista account so that customers can **only book transfers between specific fixed locations**, such as:

- Airport → Hotel  
- Hotel → Airport  
- Any other pair of pre-defined destination points

This setup is ideal for companies that do **not** offer open-address transfers and want to restrict bookings to a limited set of routes.

---

## 1. Add Your Vehicles  
Before defining prices or routes, you must add your vehicles.  
All pricing rules must be linked to at least one vehicle.

1. Go to **Settings → Vehicles**  
2. Click **Add Vehicle**  
3. Fill in the required details (capacity, bags, vehicle type, etc.)  
4. Save your vehicle  
5. Repeat for each additional vehicle you operate

> **Important:** You cannot create pricing rules unless vehicles exist.

---

## 2. Define Your Availability Zones  
Availability Zones define where your company is allowed to operate.  
Customers *cannot* book transfers outside these zones.

To configure:

1. Go to **Settings → Availability Zones**
2. Click **Create Zone**
3. Draw a zone around your first location (e.g., an airport)
4. Create a second zone around your second location (e.g., a hotel)
5. Save both zones

**Example scenario:**

- Zone 1 → Antalya Airport  
- Zone 2 → Rixos Premium Hotel  

With these zones, the system will allow bookings **only between these two points**.

---

## 3. Create Areas for Fixed Locations  
Areas are used to define **fixed pickup and drop-off points** that appear:

- In your Booking Form address picker  
- In your Price List (when pricing by route)

To configure:

1. Go to **Settings → Areas**
2. Create an Area for your first location (e.g., Antalya Airport)
3. Draw the boundary or point on the map
4. Enable **Show this area in the booking form address picker**
5. Repeat for your second location (e.g., Rixos Premium Hotel)
6. Save both areas

---

## 4. Create Your Pricing Rules (By Route)

Now that your vehicles, zones, and areas exist, set up your fixed pricing:

1. Go to **Settings → Price List**
2. Click **New Entries**
3. Choose **Add Prices by Route**
4. Select the vehicle you want to assign a price to
5. Choose:
   - **Pickup Area**
   - **Drop-off Area**
6. Enter your fixed price
7. Enable **Reverse Route** to automatically generate the return price  
8. Save

Repeat for all vehicles or additional routes.

---

## 5. Test Your Booking Form  
To verify everything works as expected:

1. Open your public booking form URL  
2. Select a pickup location  
3. Ensure only your defined fixed areas appear  
4. Select a drop-off location  
5. Check that the correct price is displayed  
6. Confirm that **no other routes or free-address options are available**

If everything was set up correctly, customers will only be able to book the routes you explicitly defined.

---

## Summary

To offer transfers exclusively between predefined locations, you must:

1. **Create Vehicles** – pricing requires at least one vehicle  
2. **Draw Availability Zones** – restrict operational boundaries  
3. **Create Areas** – define fixed pickup/drop-off points  
4. **Add Pricing Rules by Route** – assign fixed prices to specific routes  
5. **Test Your Booking Form** – ensure only your routes are selectable  

With this setup, your booking system will support **only the specific routes you want**, with fixed pricing and no random address entries.

---

If you want, I can also generate the **Greek version**, or place this in a **new .md file** inside your documentation structure.
