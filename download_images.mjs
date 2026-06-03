import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const ids = [
  '1Hzlv4Ck6ON-bTX1VlWbRZVbw4CTG75iE', '1HZs7TjF7XUHGI-k9TLUCfpuNS1FqWnXC', '1HkUS8IRnfaChsKMz-b8bS80ofrxAAL91',
  '1HvTcirg4kLocA3CIU-ojNkeKNq9VnMht', '1HWM4iRcTSvK936-S6Zp52qgriw28h8nG', '1Hk3aiR2zkYVPOb1A3esHGOm2CmlpECAS',
  '1HxpWN4UaPUHQVu_nH5az3C61FDabMD4V', '1HPw1Ug8jlMGO4h44eUfGYxUpwmGh4CTT', '1H1ndy7s82mXyZbJ153Pa5sQgw6ErGLho',
  '1H2WW9toepX98gQb4ZZVCuI5K4v1mYRzg', '1H4n9-zJIiOn6plv4sLNSRSfeU1XOqxfO', '1G6Nx6PJQwM9IUieR3CD2xNAsquatEK9w',
  '1HPQoOWrX3x70tnBumdi9TBqovwpTObwt', '1GRzoSAf23rr-aoKr2txhEI4Iv3n6-4XI', '1HISFfGeDA-gjH0ogbOov3Ucve4nU6MXT',
  '1HK0EugsuzuQkOTKkuoYa5DGAkOLKd94-', '1HOjyJr-k1-3vAJEldfDbdTw12ekEpTp8', '1H_9VCkkS_Y5lQXv7k7TnFtdSo-oaqv4P',
  '1HXDAIPWqbdufdYx9ZDno-VlQARE8K0Ve', '1HW-xlgdVpnzrt_wgDNuIA8O8lP7lhthi', '1GKA42WC4Q_oizs64Fttc-vyceEllTnUc',
  '1GNUH8GKT76f0uye2DpfOS6lD27cGA6SB', '1GGAdMoVLMvpTSFqCe6AemThw_BL2a6fG', '1GOrpmtlLTr-85JDK9vjSjqRVEh9K8Y_Y',
  '1H61exhDI2ms1Jm-FqQPvqBIhLH4WiLDO', '1HwSB_03NxnIbiZMpJ8tbKQFfExfvbunu', '1Gp5bAoC9tDkprRsWbA-nHBl6ViCY6-R8',
  '1GWCsDNcBvxQGtVMKL9eUjESeZ1nm9A9o', '1GRWGSob1j3Qc0cxhbRDNFWjRiZyR-uAa', '1GeHMunxmcLUQemgRgG_eNG-Ni55egNtP',
  '1G26IcKxDOpxG98A-_m_vR5hJd8Dq8mIL', '1HyYdXGEDYAZ924yo_pnTejEPzkuWwLJE', '1O-AjusVDv8lrlXWlkk2MrWNtfdUYn6Zd',
  '1O1XCKGXCXRIO6poygwJe5MP_yJRJ-N3V', '1OU11QgCDAzrLEQatq5R5CLkOwhU2LnvZ', '1AB2_NYdResQqrPenv8Y5lTTN_sOoYkwM'
];

const outDir = path.join(process.cwd(), 'public', 'creative-design');
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
