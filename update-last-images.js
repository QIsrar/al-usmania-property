const fs = require('fs');

let content = fs.readFileSync('d:\\Atd Leads\\realEstate\\src\\data\\properties.ts', 'utf8');

// Replace shop-1 for prop-011
content = content.replace(/id: "prop-011",([\s\S]*?)images:\s*\[\s*\"\/images\/properties\/shop-1.jpg\",\s*\],/, 'id: "prop-011",$1images: [\n      "/images/properties/shop-2.jpg",\n    ],');

// Replace plot-2 for prop-014
content = content.replace(/id: "prop-014",([\s\S]*?)images:\s*\[\s*\"\/images\/properties\/plot-2.jpg\",\s*\],/, 'id: "prop-014",$1images: [\n      "/images/properties/plot-3.jpg",\n    ],');

fs.writeFileSync('d:\\Atd Leads\\realEstate\\src\\data\\properties.ts', content);
console.log('Done');
