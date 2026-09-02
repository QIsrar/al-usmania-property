import { Property } from "@/types";

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Spacious 10 Marla House in Supply",
    slug: "spacious-10-marla-house-supply",
    purpose: "sale",
    type: "house",
    price: 32000000,
    currency: "PKR",
    areaSize: 10,
    areaUnit: "marla",
    beds: 5,
    baths: 4,
    location: "Supply, Abbottabad",
    sector: "Supply",
    coordinates: { lat: 34.1553, lng: 73.2173 },
    description:
      "A beautifully maintained 10 marla house in the heart of Supply, one of Abbottabad's most sought-after residential areas. This spacious property features five generous bedrooms, four modern bathrooms, and a bright open-plan living area that looks out onto a well-kept lawn.\n\nThe house was built with premium materials and has been lovingly maintained by the current owner. The kitchen is fully fitted with modern fixtures, and there's ample storage throughout. The location is perfect — walking distance to Supply bazaar, schools, and hospitals.\n\nIdeal for a growing family looking for a permanent home in a well-established, safe neighbourhood with all amenities within reach.",
    amenities: [
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Garage",
      "Lawn/Garden",
      "Boundary Wall",
      "Servant Quarter",
      "Double Storey",
    ],
    images: [
      "/images/properties/house-1.jpg",
      "/images/properties/house-1-interior.jpg",
      "/images/properties/house-1-kitchen.jpg",
      "/images/properties/house-1-garden.jpg",
    ],
    status: "hot",
    featured: true,
    createdAt: "2026-08-15",
  },
  {
    id: "prop-002",
    title: "Modern 3-Bed Flat Near PMA",
    slug: "modern-3-bed-flat-near-pma",
    purpose: "rent",
    type: "flat",
    price: 45000,
    currency: "PKR",
    areaSize: 1200,
    areaUnit: "sqft",
    beds: 3,
    baths: 2,
    location: "PMA Link Road, Abbottabad",
    sector: "PMA Link Road",
    coordinates: { lat: 34.1688, lng: 73.2215 },
    description:
      "A newly renovated 3-bedroom flat on PMA Link Road, perfect for families or professionals who want easy access to the main road and commercial areas. The flat has been freshly painted with modern finishes throughout.\n\nEach bedroom is a good size with built-in wardrobes. The drawing room is spacious enough for comfortable family gatherings, and the kitchen comes fitted with cabinets and a gas connection. Two well-tiled bathrooms complete the layout.\n\nThis is one of the best rental options in the PMA area right now — clean, ready to move in, and competitively priced for the location.",
    amenities: [
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Car Parking",
      "Security",
      "Near Main Road",
      "Near Market",
    ],
    images: [
      "/images/properties/flat-1.jpg",
      "/images/properties/flat-1-living.jpg",
      "/images/properties/flat-1-bedroom.jpg",
    ],
    status: "new",
    featured: true,
    createdAt: "2026-08-28",
  },
  {
    id: "prop-003",
    title: "7 Marla Plot in Jinnahabad",
    slug: "7-marla-plot-jinnahabad",
    purpose: "sale",
    type: "plot",
    price: 14000000,
    currency: "PKR",
    areaSize: 7,
    areaUnit: "marla",
    beds: 0,
    baths: 0,
    location: "Jinnahabad, Abbottabad",
    sector: "Jinnahabad",
    coordinates: { lat: 34.1730, lng: 73.2250 },
    description:
      "A level 7 marla residential plot in Jinnahabad, one of Abbottabad's most established residential sectors. The plot is ideally situated on a 30-foot wide road with all utilities available, including gas, electricity, and water supply connections.\n\nThe plot has a clear title and all documents are in order for immediate transfer. The surrounding area is fully developed with constructed houses, making this a safe and reliable investment.\n\nPerfect for someone looking to build their dream home in a central Abbottabad location with good connectivity to schools, hospitals, and markets.",
    amenities: [
      "Sui Gas Available",
      "Electricity Available",
      "Water Supply",
      "30ft Road",
      "Level Ground",
      "Boundary Wall",
    ],
    images: [
      "/images/properties/plot-1.jpg",
      "/images/properties/plot-1-area.jpg",
    ],
    status: "none",
    featured: true,
    createdAt: "2026-08-10",
  },
  {
    id: "prop-004",
    title: "Commercial Shop on Mansehra Road",
    slug: "commercial-shop-mansehra-road",
    purpose: "sale",
    type: "commercial",
    price: 8500000,
    currency: "PKR",
    areaSize: 400,
    areaUnit: "sqft",
    beds: 0,
    baths: 1,
    location: "Mansehra Road, Abbottabad",
    sector: "Mansehra Road",
    coordinates: { lat: 34.1620, lng: 73.2300 },
    description:
      "A ground-floor commercial shop on the busy Mansehra Road, offering excellent visibility and foot traffic. The 400 sqft space is currently unfurnished and ready for any retail or office use.\n\nThe shop faces the main road directly and has its own shutter entrance. With a washroom included and electricity already connected, it's move-in ready for business.\n\nMansehra Road is one of Abbottabad's primary commercial arteries, making this an excellent investment for business owners or investors looking for rental income.",
    amenities: [
      "Main Road Facing",
      "Shutter Entrance",
      "Electricity",
      "Washroom",
      "Commercial Zone",
    ],
    images: [
      "/images/properties/shop-1.jpg",
      "/images/properties/shop-1-front.jpg",
    ],
    status: "none",
    featured: false,
    createdAt: "2026-07-20",
  },
  {
    id: "prop-005",
    title: "5 Marla Upper Portion in Mandian",
    slug: "5-marla-upper-portion-mandian",
    purpose: "rent",
    type: "portion",
    price: 25000,
    currency: "PKR",
    areaSize: 5,
    areaUnit: "marla",
    beds: 2,
    baths: 1,
    location: "Mandian, Abbottabad",
    sector: "Mandian",
    coordinates: { lat: 34.1890, lng: 73.2340 },
    description:
      "A well-maintained upper portion in the quiet residential area of Mandian. This 2-bedroom unit is ideal for a small family or a couple looking for an affordable home in a peaceful setting.\n\nThe portion includes a separate entrance, a compact kitchen with gas fitting, and a clean bathroom. Both bedrooms have good natural light and ventilation — the hillside views from the windows are a genuine bonus.\n\nMandian is known for its calm, family-friendly environment while still being a short drive from the main city centre and PMA.",
    amenities: [
      "Separate Entrance",
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Mountain Views",
      "Near Schools",
    ],
    images: [
      "/images/properties/portion-1.jpg",
      "/images/properties/portion-1-bedroom.jpg",
    ],
    status: "new",
    featured: true,
    createdAt: "2026-08-25",
  },
  {
    id: "prop-006",
    title: "1 Kanal House with Garden in Sarban Hills",
    slug: "1-kanal-house-garden-sarban-hills",
    purpose: "sale",
    type: "house",
    price: 65000000,
    currency: "PKR",
    areaSize: 1,
    areaUnit: "kanal",
    beds: 6,
    baths: 5,
    location: "Sarban Hills, Abbottabad",
    sector: "Sarban Hills",
    coordinates: { lat: 34.1500, lng: 73.2100 },
    description:
      "An impressive 1 kanal house in the prestigious Sarban Hills area, offering stunning mountain views and a large, mature garden. This is one of those rare properties that combines space, location, and natural beauty.\n\nThe house features six bedrooms across two floors, five bathrooms, a large drawing room, a separate dining room, and a modern kitchen. The servant quarter at the rear provides additional convenience. The garden is the real highlight — well-established trees, a covered sitting area, and enough space for children to play freely.\n\nSarban Hills is one of Abbottabad's premium addresses, known for its peaceful environment and proximity to good schools. This property rarely comes to market — serious buyers only.",
    amenities: [
      "Sui Gas",
      "Electricity",
      "Water Bore",
      "Double Garage",
      "Large Garden",
      "Servant Quarter",
      "Mountain Views",
      "Boundary Wall",
      "CCTV Ready",
      "Double Storey",
    ],
    images: [
      "/images/properties/house-2.jpg",
      "/images/properties/house-2-garden.jpg",
      "/images/properties/house-2-living.jpg",
      "/images/properties/house-2-kitchen.jpg",
    ],
    status: "hot",
    featured: true,
    createdAt: "2026-08-20",
  },
  {
    id: "prop-007",
    title: "2-Bed Flat in Cantt Area",
    slug: "2-bed-flat-cantt-area",
    purpose: "rent",
    type: "flat",
    price: 35000,
    currency: "PKR",
    areaSize: 900,
    areaUnit: "sqft",
    beds: 2,
    baths: 1,
    location: "Cantt, Abbottabad",
    sector: "Cantt",
    coordinates: { lat: 34.1600, lng: 73.2200 },
    description:
      "A neat and tidy 2-bedroom flat in the Cantt area, available for immediate move-in. The flat is on the second floor of a well-maintained building with parking available.\n\nThe layout is simple and practical — two decent-sized bedrooms, one bathroom, a combined kitchen and dining area, and a small balcony overlooking the street. All basic fittings are included.\n\nThe Cantt location offers excellent security and a well-organised neighbourhood, with easy access to the Mall Road and main commercial areas.",
    amenities: [
      "Electricity",
      "Sui Gas",
      "Water Supply",
      "Balcony",
      "Car Parking",
      "Near Mall Road",
    ],
    images: [
      "/images/properties/flat-2.jpg",
      "/images/properties/flat-2-living.jpg",
    ],
    status: "none",
    featured: false,
    createdAt: "2026-08-05",
  },
  {
    id: "prop-008",
    title: "5 Marla New House in Mirpur",
    slug: "5-marla-new-house-mirpur",
    purpose: "sale",
    type: "house",
    price: 18500000,
    currency: "PKR",
    areaSize: 5,
    areaUnit: "marla",
    beds: 3,
    baths: 2,
    location: "Mirpur, Abbottabad",
    sector: "Mirpur",
    coordinates: { lat: 34.1750, lng: 73.2050 },
    description:
      "A brand new 5 marla house in Mirpur, ready for its first owner. This property has been constructed to a high standard with quality materials and modern design sensibilities.\n\nThe ground floor has a welcoming drawing room, kitchen, and one bedroom with attached bath. The first floor features two more bedrooms, a bathroom, and a family lounge area. The rooftop is accessible and offers pleasant views of the surrounding hills.\n\nMirpur is an up-and-coming area with improving infrastructure, making this an excellent entry-point purchase for first-time buyers or a solid investment property.",
    amenities: [
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Car Parking",
      "Rooftop Access",
      "New Construction",
      "Double Storey",
    ],
    images: [
      "/images/properties/house-3.jpg",
      "/images/properties/house-3-interior.jpg",
      "/images/properties/house-3-rooftop.jpg",
    ],
    status: "new",
    featured: true,
    createdAt: "2026-08-30",
  },
  {
    id: "prop-009",
    title: "10 Marla Plot in Kehal",
    slug: "10-marla-plot-kehal",
    purpose: "sale",
    type: "plot",
    price: 10000000,
    currency: "PKR",
    areaSize: 10,
    areaUnit: "marla",
    beds: 0,
    baths: 0,
    location: "Kehal, Abbottabad",
    sector: "Kehal",
    coordinates: { lat: 34.1450, lng: 73.2150 },
    description:
      "A well-located 10 marla residential plot in Kehal, an area that has seen significant development in recent years. The plot is level, faces a 25-foot road, and has gas and electricity available.\n\nThe surrounding area is a mix of new and established construction, and the neighbourhood has a settled, family-oriented feel. Schools and a small local market are within walking distance.\n\nThis plot offers good value for the size and location — ideal for someone planning to build over the next 1–2 years or for long-term investment.",
    amenities: [
      "Level Ground",
      "Gas Available",
      "Electricity Available",
      "25ft Road",
      "Near Schools",
    ],
    images: [
      "/images/properties/plot-2.jpg",
      "/images/properties/plot-2-road.jpg",
    ],
    status: "reduced",
    featured: false,
    createdAt: "2026-07-15",
  },
  {
    id: "prop-010",
    title: "Ground Floor Portion in Supply",
    slug: "ground-floor-portion-supply",
    purpose: "rent",
    type: "portion",
    price: 30000,
    currency: "PKR",
    areaSize: 7,
    areaUnit: "marla",
    beds: 3,
    baths: 2,
    location: "Supply, Abbottabad",
    sector: "Supply",
    coordinates: { lat: 34.1560, lng: 73.2180 },
    description:
      "A spacious ground floor portion in the Supply area, one of the most convenient locations in Abbottabad. This 3-bedroom unit offers the comfort and privacy of a house at a fraction of the price.\n\nThe portion has its own separate entrance and a small front yard. The rooms are generous in size with good ceiling height, and the kitchen is fully functional with gas and water connections. The location is hard to beat — Supply bazaar, ATMs, hospitals, and schools are all within a 5-minute walk.\n\nPerfect for a family that wants central Abbottabad living without the high rent of a full house.",
    amenities: [
      "Separate Entrance",
      "Front Yard",
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Near Market",
      "Near Hospital",
    ],
    images: [
      "/images/properties/portion-2.jpg",
      "/images/properties/portion-2-kitchen.jpg",
    ],
    status: "none",
    featured: true,
    createdAt: "2026-08-22",
  },
  {
    id: "prop-011",
    title: "Shop for Rent Near Fawara Chowk",
    slug: "shop-for-rent-fawara-chowk",
    purpose: "rent",
    type: "commercial",
    price: 40000,
    currency: "PKR",
    areaSize: 300,
    areaUnit: "sqft",
    beds: 0,
    baths: 0,
    location: "Fawara Chowk, Abbottabad",
    sector: "Fawara Chowk",
    coordinates: { lat: 34.1680, lng: 73.2190 },
    description:
      "A well-positioned 300 sqft commercial shop near Fawara Chowk, one of Abbottabad's busiest intersections. The shop is ground-level with a roll-up shutter and glass frontage, making it suitable for retail, a small office, or a food outlet.\n\nThe area sees heavy foot traffic throughout the day, and parking is available nearby. Electricity is connected, and a shared washroom facility is accessible on the same floor.\n\nThis is a prime location for anyone starting a new business or expanding into central Abbottabad.",
    amenities: [
      "Glass Frontage",
      "Shutter Entrance",
      "Electricity",
      "High Foot Traffic",
      "Near Parking",
    ],
    images: [
      "/images/properties/shop-2.jpg",
    ],
    status: "none",
    featured: false,
    createdAt: "2026-08-01",
  },
  {
    id: "prop-012",
    title: "8 Marla House in Jinnahabad – Well Maintained",
    slug: "8-marla-house-jinnahabad-well-maintained",
    purpose: "sale",
    type: "house",
    price: 27000000,
    currency: "PKR",
    areaSize: 8,
    areaUnit: "marla",
    beds: 4,
    baths: 3,
    location: "Jinnahabad, Abbottabad",
    sector: "Jinnahabad",
    coordinates: { lat: 34.1735, lng: 73.2255 },
    description:
      "A well-maintained 8 marla house in Jinnahabad, ready for immediate occupancy. The property has been well looked after by the current owner and is in excellent condition throughout.\n\nThe house features four bedrooms, three bathrooms, a large drawing room, a separate TV lounge, and a modern kitchen. A small courtyard at the back adds extra outdoor space. The boundary walls provide complete privacy.\n\nJinnahabad is a mature, well-connected residential area with reliable utilities and good road access to all parts of Abbottabad. A solid family home.",
    amenities: [
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Courtyard",
      "Boundary Wall",
      "TV Lounge",
      "Double Storey",
      "Near Schools",
    ],
    images: [
      "/images/properties/house-4.jpg",
      "/images/properties/house-4-drawing.jpg",
      "/images/properties/house-4-kitchen.jpg",
    ],
    status: "none",
    featured: true,
    createdAt: "2026-08-18",
  },
  {
    id: "prop-013",
    title: "3 Marla House for Rent in Nawanshehr",
    slug: "3-marla-house-rent-nawanshehr",
    purpose: "rent",
    type: "house",
    price: 22000,
    currency: "PKR",
    areaSize: 3,
    areaUnit: "marla",
    beds: 2,
    baths: 1,
    location: "Nawanshehr, Abbottabad",
    sector: "Nawanshehr",
    coordinates: { lat: 34.1700, lng: 73.2280 },
    description:
      "A compact but comfortable 3 marla house available for rent in Nawanshehr. This single-storey house has two bedrooms, one bathroom, a small kitchen, and a courtyard — simple, clean, and functional.\n\nThe house is suitable for a small family or a single person looking for affordable, independent accommodation in a central Abbottabad location. Nawanshehr is close to the main bazaar areas and well-served by public transport.\n\nAn honest, no-frills option for those who prioritise location and affordability.",
    amenities: [
      "Sui Gas",
      "Electricity",
      "Water Supply",
      "Courtyard",
      "Near Public Transport",
    ],
    images: [
      "/images/properties/house-5.jpg",
      "/images/properties/house-5-courtyard.jpg",
    ],
    status: "none",
    featured: false,
    createdAt: "2026-08-12",
  },
  {
    id: "prop-014",
    title: "5 Marla Plot in Supply – Corner",
    slug: "5-marla-corner-plot-supply",
    purpose: "sale",
    type: "plot",
    price: 12000000,
    currency: "PKR",
    areaSize: 5,
    areaUnit: "marla",
    beds: 0,
    baths: 0,
    location: "Supply, Abbottabad",
    sector: "Supply",
    coordinates: { lat: 34.1555, lng: 73.2175 },
    description:
      "A premium corner plot in the Supply area — 5 marla with two-side open access. Corner plots in Supply are increasingly rare, and this one comes with all utilities already available at the boundary.\n\nThe plot is level and ready for construction. The two-side open layout means better light, ventilation, and design flexibility for the future house.\n\nSupply is one of Abbottabad's most desirable residential areas, and corner plots here hold their value exceptionally well. Don't wait on this one.",
    amenities: [
      "Corner Plot",
      "Two-Side Open",
      "Level Ground",
      "Gas Available",
      "Electricity Available",
      "Water Available",
      "30ft Road",
    ],
    images: [
      "/images/properties/plot-3.jpg",
    ],
    status: "hot",
    featured: false,
    createdAt: "2026-08-26",
  },
];

/**
 * Get all unique sectors from properties
 */
export function getSectors(): string[] {
  const sectors = new Set(properties.map((p) => p.sector));
  return Array.from(sectors).sort();
}

/**
 * Get featured properties
 */
export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

/**
 * Get property by slug
 */
export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

/**
 * Get similar properties (same type or sector, excluding current)
 */
export function getSimilarProperties(
  property: Property,
  limit = 3
): Property[] {
  return properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.type === property.type || p.sector === property.sector)
    )
    .slice(0, limit);
}

/**
 * Get properties count by type
 */
export function getPropertyCountByType(): Record<string, number> {
  const counts: Record<string, number> = {};
  properties.forEach((p) => {
    counts[p.type] = (counts[p.type] || 0) + 1;
  });
  return counts;
}
