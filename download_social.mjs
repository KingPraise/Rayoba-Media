import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const ids = [
  '1Fpx0jilTYNBh1N8WW36qEDRYnOcpU6GZ', '1UWWrAPW0xn5Hos8ojum6eX7_9WbgLoya', '11RfQQ_AhNjamajUimBrznsXmFFiupF8g',
  '1FvypIXW8z6SQ3tu2xPpTNIBtmOtAlbgP', '1OD4l6uU_6KOCK8eyCNv6yqiAfhy-teBJ', '1xc_EYZjYb0Rd6jt8EdVyP0_I9h5Pr5Ph',
  '1RHvOGgZvu-mwTRCISZ0u70lb9JM1fkUd', '1RI73fb9eGVmfzajN0Oo6xYh3WxsL0R8a', '11biX6blpvmplHpx0czlM02bOFX87WKNB',
  '11Rle7m1tLM5ayuIEpQdQ1nUB_WGFFRn4', '11a9TvLb0fvXZ0zj2n6ITwc1BKNdRF056'
];

const outDir = path.join(process.cwd(), 'public', 'social-media');
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
