var t = 0; //time
var mode = 0; 
//mode: 0タイトル画面　1menu画面　2score mode画面　3story mode画面　
//mode: -1設定画面  -2操作方法画面
//mode 10-50scoremodeのマップ  50-99storymodeのマップ
//storymode: 各ステージ10マップ　ライフ制(50-59,60-69,70-79,80-89)
var animationmax = 1; //nextmodeにうつるタイミング
var animationcnt=0; //アニメーションのカウンター 1でスタート -1処理前
var nextmode=0; //次にうつるモード

// サイズを指定
const width = 960;
const height = 640;

//score関数
var score=0;
var score_bonus=0;
var score_rank;
var set_check=false;

var wall_r=false, wall_l=false, wall_u=false, wall_d=false;

//制限時間
var limit_time=10*60*60;//min*sec*60

//ハイスコア認定
var easy_hi;
var normal_hi;
var hard_hi;
var exhard_hi;
var hi_check=false;
var num_rec=0;

var death=0; //deathカウント
var death_check=false;

var goal_check=false;//goal

var save_check=false;//savepointセット
var realsave=true;//save存在関数

var loc_check=false;//座標変更関数
var oneup_check=false;// 1UPカウント
var realoneup=true;//存在関数

var warp_a=false,warp_b=false,warp_c=false;


var Life;//残機カウント
var life;
var life_check=false;
var check=true;

var clear_check=false;

var text_trans=1;

//色一覧
const black="rgba(0,0,0,1.0)";
const black1="rgba(0,0,1,1.0)";
const white="rgba(255,255,255,1.0)";
const white_t="rgba(255,255,255,0.8)";
const gray="rgba(128,128,128,1.0)";
const lightgray="rgba(230,230,230,1.0)";
const skyblue="rgba(102,204,204,1.0)";
const blue="rgba(0,0,255,1.0)";
const red="rgba(255,0,0,1.0)";
const yellow_green="rgba(154, 205, 50,1.0)";
const yellow_green_t="rgba(154, 205, 50,0.6)";
const yellow_thick="rgba(237,208,23)";
const pastle_green="rgba(173,255,173,1.0)";
const pastle_parple="rgba(221,188,255,1.0)";
const pastle_parple_z="rgba(221,188,255,0.8)";
const startcol_1="rgba(204,204,255,1.0)";
const startcol_2="rgba(153,204,255,1.0)";
const clear_col1="rgba(255,213,128,0.93)";
const red_light="rgba(240,120,120,0.98)";
const deepskyblue="rgba(0,191,255,1.0)";
const lightgreen="rgba(0,255,0,1.0)";
const parple="rgba(200,95,204,1.0)";
const bronze="rgba(137,87,37,1.0)";
const deepskyblue2="rgba(0,192,255,1.0)";
const lightgreen2="rgba(0,254,0,1.0)";
const parple2="rgba(200,96,204,1.0)";
const bronze2="rgba(137,88,37,1.0)";


const enemy_color = "rgba(150,0,0,1.0)";
const enemycolor_r = 150;
const enemycolor_g = 0;
const enemycolor_b = 0;
const enemycol2="rgba(224,134,0,1.0)";
const enemycol2_r = 224;
const enemycol2_g = 134;
const enemycol2_b = 0;

const goalcol1="rgba(218,255,179,1.0)";
const goalcol2="rgba(255,204,153,1.0)";
const goalcol1_r = 218;
const goalcol1_g = 255;
const goalcol1_b = 179;
const goalcol2_r = 255;
const goalcol2_g = 204;
const goalcol2_b = 153;

const oneupcol="rgba(51,153,51,1.0)";
const oneupcol_r = 51;
const oneupcol_g = 153;
const oneupcol_b = 51;

const savecol="rgba(51,190,179,1.0)";
var savecolr=51;
var savecolg=190;
var savecolb=179;

//-1設定画面
var bgm_cnt=false;
var se_cnt=false;
var data_reset=false;
var resetmode=1;
var datareset_do=false;

//0タイトル画面canvas情報
var space_check=false;//spaceキー判定
var canvas0_left=30;
var canvas0_top=70;
var canvas0_width=900;
var canvas0_height=520;

var transcount=100;
var transcheck=true;

//1menu画面
var selectmode=0;
var to_play=false;
var to_story=false;
var to_title=false;
var to_config=false;
var to_control=false;
var to_record=false;

//2select画面
var to_menu=false;
var to_game=false;

//3story mode
var to_easy=false;
var to_normal=false;
var to_hard=false;
var to_extrahard=false;

//Pause画面
var pause_check =false;
var to_retry=false;

//stage遷移
var stage_check=false;
var to_next=false;
var to_select=false;

//gameover遷移
var to_storyretry=false;
var over_c=false;

//fadein,fadeout
var pa_count=0;
var page_alpha=0;
var page_alphain=1.0;
var page_check=true;
var incheck=true;

//キャラ操作速度
var acc=1;//加速度
var vec=3;//速度の絶対値
var vecx=0,realvecx=0;
var vecy=0, realvecy=0;
var vec_lim=0;
var vec_check=false;

//操作キャラ情報
var chara_x;
var chara_y;
var chara_width=20;
var chara_height=20;
var chara_alpha=1.0;
var alphacount=0;
var enemy_width=20;
var enemy_height=20;
var radius;
var a,b;

//enemy操作
var enemy_alpha=1.0;
var enecheck=false;
var enealphacount=0;
var check1=true;
var t_1;
var enemy_alpha2=1.0;
var enecheck2=false;
var enealphacount2=0;
var check2=true;
var t_2;
var enemy_alpha3=1.0;
var enecheck3=false;
var enealphacount3=0;
var check3=true;
var t_3;
var y_check;

var enemy_alpha4=1.0;
var enecheck4=false;
var enealphacount4=0;
var check4=true;
var t_4;

//mode65
var pass1=false, pass2=false, pass3=false, pass4=false;

//image
const keyimg=new Image();
keyimg.src= 'image/key.png';

//壁[左端のx, 左端のy, 横幅,縦幅]
var wall=[[30,60,10,80],[40,50,360,10],[40,140,250,10],[290,140,10,300],[400,60,10,320],[410,370,100,10],[510,380,10,60],[300,440,210,10]];
var wall1=[[140,200,20,280],[140,180,680,20],[140,480,680,20],[800,200,20,280]];
// ページの読み込みを待つ
