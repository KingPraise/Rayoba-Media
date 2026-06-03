import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const ids = [
  '1PA21NejgkuDDW8NSVVp-cjL4sQdKJWFg', '1PZ_AtBxxkB6YvQwkl3uoD-lxSjNdTURm', '1QDXOUzdTq4arqmRdxhq3KdwUtKQdA3wU',
  '1QBCxH2We5L3weVsqBC1o-608UsFjMyuH', '1QGIcTZG78JN3u4QcH4p9m-W98yQD1B8o', '1PUzArQZOadmc9C4Cn59_yPML_QMvOoB9',
  '1PWvMYAjuUSo0OUpOrfJ74BH2AZzw4y_i', '1PXPdGzy9F_4nZ54fpdTaec_h6zgEIPLa', '1PnoIV_AS50d23qM-147oPLAh0sn5Pb7B',
  '1Q2zE9XYHQwbk6gr_SPPeRaQ6Q_iHWY8y', '1Pzz-87K9yNUdchbL8mx6Ubt2QLnPvElc'
];

const outDir = path.join(process.cwd(), 'public', 'book-design');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function download() {
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const url = `https://drive.google.com/uc?export=download&id=${id}`;
    const dest = path.join(outDir, `img_${i + 1}.jpg`);
    
    if (fs.existsSync(dest)) continue;
    
    try {
      console.log(`Downloading ${i + 1}/${ids.length}: ${id}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      const fileStream = fs.createWriteStream(dest);
      await pipeline(res.body, fileStream);
    } catch (e) {
      console.error(`Failed ${id}: ${e.message}`);
    }
  }
}

download().then(() => console.log('Done'));
