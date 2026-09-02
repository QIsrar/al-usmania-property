const fs = require('fs');

let content = fs.readFileSync('d:\\Atd Leads\\realEstate\\src\\data\\properties.ts', 'utf8');

const houseImages = [
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
];

const flatImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1502672260266-1c1de2d93688?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
];

const plotImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800",
];

const shopImages = [
  "https://images.unsplash.com/photo-1555529771-835f59bfc50c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
];

const portionImages = [
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
];

let hIdx = 0, fIdx = 0, pIdx = 0, sIdx = 0, ptIdx = 0;

// Simple regex replace on the properties array
const propertiesRegex = /type:\s*"(house|flat|plot|commercial|portion)",[\s\S]*?images:\s*\[([\s\S]*?)\],/g;

const newContent = content.replace(propertiesRegex, (match, type, imagesInner) => {
  let imagesArray = [];
  
  if (type === 'house') {
    imagesArray = [houseImages[hIdx % houseImages.length], houseImages[(hIdx + 1) % houseImages.length], houseImages[(hIdx + 2) % houseImages.length]];
    hIdx += 3;
  } else if (type === 'flat') {
    imagesArray = [flatImages[fIdx % flatImages.length], flatImages[(fIdx + 1) % flatImages.length]];
    fIdx += 2;
  } else if (type === 'plot') {
    imagesArray = [plotImages[pIdx % plotImages.length], plotImages[(pIdx + 1) % plotImages.length]];
    pIdx += 2;
  } else if (type === 'commercial') {
    imagesArray = [shopImages[sIdx % shopImages.length]];
    sIdx += 1;
  } else if (type === 'portion') {
    imagesArray = [portionImages[ptIdx % portionImages.length], portionImages[(ptIdx + 1) % portionImages.length]];
    ptIdx += 2;
  }
  
  const newImagesStr = imagesArray.map(url => `\n      "${url}",`).join('') + "\n    ";
  
  return match.replace(imagesInner, newImagesStr);
});

fs.writeFileSync('d:\\Atd Leads\\realEstate\\src\\data\\properties.ts', newContent);
console.log('Images updated successfully');
