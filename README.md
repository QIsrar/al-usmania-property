# AL-Usmania Property

**Abbottabad Property, Handled Honestly**

A production-grade, mobile-first real estate agency website for AL-Usmania Property — a trusted residential and commercial property dealer based in Abbottabad, Khyber Pakhtunkhwa, Pakistan.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Images**: `next/image` with lazy loading
- **Data**: Static TypeScript data files (CMS-ready structure)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## How to Add/Edit Properties

All property listings are stored in a single data file:

```
src/data/properties.ts
```

### Adding a New Property

1. Open `src/data/properties.ts`
2. Add a new object to the `properties` array following this structure:

```typescript
{
  id: "prop-015",                              // Unique ID
  title: "Your Property Title",                // Display title
  slug: "your-property-title",                 // URL-safe slug (lowercase, hyphens)
  purpose: "sale",                             // "sale" or "rent"
  type: "house",                               // "house" | "flat" | "plot" | "commercial" | "portion"
  price: 25000000,                             // Number: sale price in PKR, or monthly rent
  currency: "PKR",                             // Always "PKR"
  areaSize: 10,                                // Numeric size
  areaUnit: "marla",                           // "marla" | "kanal" | "sqft"
  beds: 4,                                     // Number of bedrooms (0 for plots)
  baths: 3,                                    // Number of bathrooms (0 for plots)
  location: "Supply, Abbottabad",              // Human-readable location
  sector: "Supply",                            // Must match an area name for filtering
  coordinates: { lat: 34.1553, lng: 73.2173 }, // Google Maps coordinates
  description: "Paragraph 1\n\nParagraph 2",   // Editorial description (use \n\n for paragraphs)
  amenities: ["Sui Gas", "Electricity", ...],  // Array of amenity strings
  images: ["/images/properties/my-photo.jpg"], // Array of image paths (in public/images/properties/)
  status: "new",                               // "new" | "hot" | "reduced" | "none"
  featured: true,                              // Show on homepage featured section?
  createdAt: "2026-09-01",                     // Date string (YYYY-MM-DD)
}
```

### Adding Property Photos

1. Place your photos in `public/images/properties/`
2. Reference them in the property's `images` array as `/images/properties/filename.jpg`
3. Use descriptive filenames like `house-5-exterior.jpg`

### Editing Areas

Areas are in `src/data/areas.ts` — add new Abbottabad sectors as needed.

### Editing Testimonials

Testimonials are in `src/data/testimonials.ts` — add real client reviews.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout + SEO
│   ├── properties/         # Browse + Detail pages
│   ├── about/              # About page
│   ├── areas/              # Areas We Serve
│   ├── contact/            # Contact page
│   └── sell/               # Sell Your Property (lead gen)
├── components/
│   ├── layout/             # Header, Footer, WhatsApp float
│   └── ui/                 # PropertyCard, SearchBar, Badge, etc.
├── data/                   # Property listings, areas, testimonials
├── lib/                    # Utils, constants, helpers
└── types/                  # TypeScript interfaces
```

## Contact

- **Business**: AL-Usmania Property
- **Owner**: Qazi Sher Khan
- **Phone**: 0321-9981683 / 0322-6634463
- **Location**: Bara Tower, Shop No. 1, PMA Link Road, Abbottabad
- **Facebook**: [AL-Usmania Property](https://www.facebook.com/profile.php?id=100064006479041)
