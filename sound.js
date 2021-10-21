//sound設定////////////////////////
const se_1=new Howl({
    src: 'sound/se1.mp3',
    volume: 0.24,
    loop: false,
    format: ['mp3'],
});
const se_decide=new Howl({
    src: 'sound/se_decide.wav',
    volume: 0.4,
    loop: false,
    format: ['mp3'],
});
const se_cursor=new Howl({
    src: 'sound/se_cursor.mp3',
    volume: 0.7,
    loop: false,
    format: ['mp3'],
});
const se_cancel=new Howl({
    src: 'sound/se_cancel.mp3',
    volume: 1,
    loop: false,
    format: ['mp3'],
});
const se_pause=new Howl({
    src: 'sound/se_pause.mp3',
    volume: 0.7,
    loop: false,
    format: ['mp3'],
});
const se_stageclear=new Howl({
    src: 'sound/se_stageclear.mp3',
    volume: 0.7,
    loop: false,
    format: ['mp3'],
});
var se_stageclear_check=true;
const se_storyclear=new Howl({
    src: 'sound/se_storyclear.mp3',
    volume: 0.7,
    loop: false,
    format: ['mp3'],
    //license: kurage-kosho
});
var se_storyclear_check=true;

const se_hit=new Howl({
    src: 'sound/se_hit.mp3',
    volume: 0.6,
    loop: false,
    format: ['mp3'],
    //license: free kurage-kosho
});
const se_save=new Howl({
    src: 'sound/se_save.mp3',
    volume: 0.5,
    loop: false,
    format: ['mp3'],
    //license: free kurage-kosho
});
const se_warp=new Howl({
    src: 'sound/se_warp.mp3',
    volume: 0.7,
    rate: 1.5,//再生速度
    loop: false,
    format: ['mp3'],
    //license: otologic
});
var se_warp_check=true;
const se_lifeup=new Howl({
    src: 'sound/se_lifeup.mp3',
    volume: 0.7,
    rate: 1,//再生速度
    loop: false,
    format: ['mp3'],
    //license: otologic
});
var se_warp_check=true;
const se_keyopen=new Howl({
    src: 'sound/se_keyopen.mp3',
    volume: 0.7,
    rate: 1,
    loop: false,
    format: ['mp3'],
});
var se_keyopen1_check=true;
var se_keyopen2_check=true;
var se_keyopen3_check=true;
var se_keyopen4_check=true;

var bgm1_v=0.2;
var bgm1_v_c=true;
const　bgm1=new Howl({
    src: 'sound/Junkbox.mp3',
    volume: bgm1_v,
    html5: true,
    loop: true,
    format: ['mp3'],
    sprite: {
        play1: [2300,82500,true],//2-86s
        //play1: [80000,4800,true],//84800
    },
});
var bgm1_check=true;


const bgmeasy=new Howl({
    src: 'sound/easystage.wav',
    volume: 0.2,
    loop: true,
    format: ['mp3'],
});
var bgmeasy_check=true;

const bgmnormal=new Howl({
    src: 'sound/Hyperbolic Bloom.mp3',
    volume: 0.2,
    loop: true,
    format: ['mp3'],
    fade: (1,0,1000),//?????
    sprite: {
        play1: [1000,116000,true],
    } 
});
var bgmnormal_check=true;

/////////////////////////////////////