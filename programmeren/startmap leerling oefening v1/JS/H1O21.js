(function(_0x4663ac,_0x5865c6){var _0x2ef868=_0xfc8a,_0x454c9=_0x4663ac();while(!![]){try{var _0x4fd720=parseInt(_0x2ef868(0x6d))/0x1+-parseInt(_0x2ef868(0x70))/0x2*(-parseInt(_0x2ef868(0x76))/0x3)+parseInt(_0x2ef868(0x74))/0x4+parseInt(_0x2ef868(0x6f))/0x5*(-parseInt(_0x2ef868(0x6a))/0x6)+-parseInt(_0x2ef868(0x72))/0x7+parseInt(_0x2ef868(0x6e))/0x8+-parseInt(_0x2ef868(0x67))/0x9*(parseInt(_0x2ef868(0x75))/0xa);if(_0x4fd720===_0x5865c6)break;else _0x454c9['push'](_0x454c9['shift']());}catch(_0x462c93){_0x454c9['push'](_0x454c9['shift']());}}}(_0x24b4,0x47599));function _0xfc8a(_0x5243d4,_0x5c0aae){var _0x24b435=_0x24b4();return _0xfc8a=function(_0xfc8a06,_0x1e127c){_0xfc8a06=_0xfc8a06-0x65;var _0xdd9842=_0x24b435[_0xfc8a06];return _0xdd9842;},_0xfc8a(_0x5243d4,_0x5c0aae);}var x=0x78,snelheid=0x5,diameter=0xc8;function setup(){var _0x5e4cca=_0xfc8a;canvas=createCanvas(0x3e8,0x12c),textFont(_0x5e4cca(0x71)),textSize(0x1e),frameRate(0x32);}function _0x24b4(){var _0xb94b2b=['141Oircjj','black',').\x20|\x20Klik\x20met\x20je\x20muis!','9LwBtwD','red','orange','108NUfAUe','white','dodgerblue','98888SayBVd','3241048GEfJYy','80755YgUjdT','18118EDKjve','Verdana','366163dCIXoE','De\x20bol\x20beweegt\x20heen\x20en\x20weer\x20(snelheid\x20=\x20','162104eNdCXY','3350420fngIpl'];_0x24b4=function(){return _0xb94b2b;};return _0x24b4();}function draw(){var _0x912a2f=_0xfc8a;background(_0x912a2f(0x69)),fill(_0x912a2f(0x6b)),noStroke(),rect(0x0,0x0,width,0x28),fill(_0x912a2f(0x65)),text(_0x912a2f(0x73)+snelheid+_0x912a2f(0x66),0xa,0x1e),stroke(_0x912a2f(0x6b)),strokeWeight(0xa);if(mouseIsPressed==![]&&snelheid<=0x5)fill(_0x912a2f(0x68)),diameter=0x64;else snelheid==0x5?(fill('green'),diameter=0xc8):(fill(_0x912a2f(0x6c)),diameter=0xc8);(x>0x370||x<0x78)&&(snelheid=-0x1*snelheid),x+=snelheid,ellipse(x,0xaa,diameter);}