const fs = require('fs');

let content = fs.readFileSync('d:\\Atd Leads\\realEstate\\src\\data\\properties.ts', 'utf8');

// The assignment map
const imageMap = {
  "prop-001": ["/images/properties/house-1.jpg"],
  "prop-002": ["/images/properties/flat-1.jpg"],
  "prop-003": ["/images/properties/plot-1.jpg"],
  "prop-004": ["/images/properties/shop-1.jpg"],
  "prop-005": ["/images/properties/portion-1.jpg"],
  "prop-006": ["/images/properties/house-2.jpg"],
  "prop-007": ["/images/properties/flat-2.jpg"],
  "prop-008": ["/images/properties/house-3.jpg"],
  "prop-009": ["/images/properties/plot-2.jpg"],
  "prop-010": ["/images/properties/portion-2.jpg"],
  "prop-011": ["/images/properties/shop-1.jpg"], // Reusing shop-1
  "prop-012": ["/images/properties/house-4.jpg"],
  "prop-013": ["/images/properties/house-5.jpg"],
  "prop-014": ["/images/properties/plot-2.jpg"], // Using plot-2
};

// Regex to match the id and then the images array
const propertiesRegex = /id:\s*"(prop-\d{3})",([\s\S]*?)images:\s*\[([\s\S]*?)\],/g;

const newContent = content.replace(propertiesRegex, (match, id, middle, imagesInner) => {
  const imagesArray = imageMap[id];
  if (imagesArray) {
    const newImagesStr = imagesArray.map(url => `\n      "${url}",`).join('') + "\n    ";
    return `id: "${id}",${middle}images: [${newImagesStr}],`;
  }
  return match;
});

fs.writeFileSync('d:\\Atd Leads\\realEstate\\src\\data\\properties.ts', newContent);
console.log('Images fixed with local paths successfully');
