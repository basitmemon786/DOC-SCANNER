const fs=require('fs'),p='android/app/src/main/AndroidManifest.xml';
let m=fs.readFileSync(p,'utf8');
if(!m.includes('android.permission.CAMERA')){
  m=m.replace('</manifest>','    <uses-permission android:name="android.permission.CAMERA" />\n</manifest>');
  fs.writeFileSync(p,m);console.log('CAMERA permission added');
}
