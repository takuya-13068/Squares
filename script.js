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

function Lifeset(){
    if(mode>=50 && mode<60){
        Life=15;
    }
    else if(mode<70){
        Life=30;
    }
    else if(mode<80){
        Life=30;
    }
    else{
        Life=0;
    }
    return Life;
}

function location_chara(){
    if (mode==0 || (mode>9 && mode<50) || (mode>49 && mode<56) || (mode==60)){
        chara_x=200;
        chara_y=330;
        chara_width=20;
        chara_height=20;
    }
    else if(mode==61){
        if(loc_check){
            chara_x=660;
            chara_y=510;
        }
        else{
            chara_x=140;
            chara_y=150;
            chara_width=20;
            chara_height=20;
        }
    }
    else if(mode==62){
        if(warp_a){
            chara_x=180;
            chara_y=150;
            warp_a=false;
        }
        else if(warp_b){
            chara_x=710;
            chara_y=510;
            warp_b=false;
        }
        else if(warp_c){
            chara_x=710;
            chara_y=270;
            warp_c=false;
        }
        else if(loc_check){
            chara_x=460;
            chara_y=500;
        }
        else{
            chara_x=180;
            chara_y=390;
            chara_width=20;
            chara_height=20;
        }
    }
    else if(mode==63){
        if(loc_check){
            chara_x=770;
            chara_y=370;
        }
        else{
            chara_x=200;
            chara_y=210;
            chara_width=20;
            chara_height=20;
        }
    }
    else if(mode==64){
        if(loc_check){
            chara_x=410;
            chara_y=150;
        }
        else{
            chara_x=220;
            chara_y=160;
            chara_width=20;
            chara_height=20;
        }
    }
    else if(mode==65){
        if(loc_check){
            chara_x=480;
            chara_y=470;
        }
        else{
            chara_x=80;
            chara_y=120;
            chara_width=20;
            chara_height=20;
        }
    }
    else if(mode==70){
        chara_x=260;
        chara_y=280;
        chara_width=20;
        chara_height=20;
    }
    else if(mode==71){
        chara_x=150;
        chara_y=150;
        chara_width=20;
        chara_height=20;
    }
    else if(mode==72){
        chara_x=470;
        chara_y=160;
        chara_width=20;
        chara_height=20;
    }
    else if(mode==73){
        chara_x=220;
        chara_y=320;
        chara_width=20;
        chara_height=20;
    }

    else if (mode==13){ 
        chara_x=50;
        chara_y=80;
        chara_width=20;
        chara_height=20;
    }
}

function text_ani(x,y,z){
    if (transcheck==true){ //消えていく
        if (transcount>x*100){ 
            text_trans-=y;
            transcount-=y*100;
        }
        else{
            text_trans=x;
            transcheck=false;
        }
    }
    else{
        if (transcount<100){ //浮き上がる
            text_trans+=z;
            transcount+=z*100;
        }
        else{
            text_trans=1;
            transcheck=true;
        }
    }
    return 0;
}


function touchwall(x,y){
    var imageData = ctx2d.getImageData(x, y, 1, 1);
    var data = imageData.data;//[r,g,b,透明]の４情報
    if(mode==65){
        var a = data[0]==0 && data[1]==0 && data[2]==0;//black
        var b = data[0]==0 && data[1]==255 && data[2]==0;//pass2 lightgreen
        var c = data[0]==200 && data[1]==95 && data[2]==204;//pass3 parple
        var d = data[0]==137 && data[1]==87 && data[2]==37;//pass4 bronze
        var e = data[0]==0 && data[1]==191 && data[2]==255;//pass1 deepskyblue
        if(a || b || c || d || e){
            return 0;}
        else{
            return 1;}}
    else{
        if (data[0]==0 && data[1]==0 && data[2]==0) {//壁に当たっている時
            return 0;}
        else {//壁に当たってない時
            return 1;}}
    
}

function keypress(mykey,mykeycode){ //キー入力イベント
    if (mykey==" " && mode==0){ //タイトル画面のキー入力
        space_check=true;
        se_1.play();
        if(bgm0_check){
            bgm0.play();
            bgm0_check=false;}
    }

    else if (mode==1){ //セレクト画面
        if (mykeycode==40 && (selectmode!=5)){
            selectmode+=1;//矢印を下に選択
            se_cursor.play();
        }
        if (mykeycode==38 && selectmode!=0){
            selectmode-=1;//矢印を上に選択
            se_cursor.play();
        }
        if (mykey==" "){ //spaceキー
            if (selectmode==0){ //Play画面へ
                to_play=true;
            }
            if (selectmode==1){ //story画面へ
                to_story=true;
            }
            if (selectmode==2){ //タイトル画面へ
                to_title=true;
            }
            if (selectmode==3){ //設定画面へ
                to_config=true;
            }
            if (selectmode==4){ //操作方法画面へ
                to_control=true;
            }
            if (selectmode==5){ //record画面へ
                to_record=true;
            }
            se_decide.play();
        }
    }

    else if (mode==-1){//設定画面
        if(data_reset){//reset画面
            if(datareset_do && mykey==" "){
                to_title=true;
            }
            if(mykeycode==37 && (resetmode!=0)){
                resetmode-=1;
                se_cursor.play();}
            else if(mykeycode==39 && (resetmode!=1)){
                resetmode+=1;
                se_cursor.play();}
            else if(mykey==" " && resetmode==0){//reset
                datareset_do=true;
                resetmode=1;//関数初期化
                se_decide.play();
                // data初期化
                localStorage.clear();}
            else if(mykey==" " && resetmode==1){//cancel
                data_reset=false;
                se_cancel.play();}
        }

        //最初の画面
        else if (mykeycode==40 && (selectmode!=3)){
            selectmode+=1;//矢印を下に選択
            se_cursor.play();}
        else if (mykeycode==38 && selectmode!=0){
            selectmode-=1;//矢印を上に選択
            se_cursor.play();}
        else if (mykey==" "){ //spaceキー
            if (selectmode==0){ //Play画面へ
                bgm_cnt=true;}
            if (selectmode==1){ //story画面へ
                se_cnt=true;}
            if (selectmode==2){ //タイトル画面へ
                data_reset=true;}
            if (selectmode==3){ //menu画面へ
                to_menu=true;}
            se_decide.play();
        }
        
    }


    else if (mode==-2){//操作方法画面
        if (mykey==" "){
            to_menu=true;
            se_cancel.play();
        }
        
    }

    else if(mode==5){ //record画面の操作
        if (mykey==" "){
            to_menu=true;
            se_cancel.play();
        }
        if(mykeycode==39 && (selectmode!=1)){//右操作
            selectmode+=1;
            se_cursor.play();
        }
        if(mykeycode==37 && (selectmode!=0)){//左操作
            selectmode-=1;
            se_cursor.play();
        }
    }

    else if (mode==2){ //score画面
        if (mykeycode==40 && (selectmode!=3)){
            selectmode+=1;//矢印を下に選択
            se_cursor.play();
        }
        else if (mykeycode==38 && selectmode!=0){
            selectmode-=1;//矢印を上に選択
            se_cursor.play();
        }
        if (mykey==" "){ //spaceキー
            if (selectmode==3){ //戻る画面へ
                to_menu=true;
            }
            else {
                to_game=true;
            }
            se_decide.play();
        }    
    }
    else if (mode==3){ //storymode選択画面
        if (mykeycode==40 && (selectmode!=4)){
            selectmode+=1;//矢印を下に選択
            se_cursor.play();
        }
        else if (mykeycode==38 && selectmode!=0){
            selectmode-=1;//矢印を上に選択
            se_cursor.play();
        }
        if (mykey==" "){ //spaceキー
            if (selectmode==0){ //easy mode
                to_easy=true;
            }
            else if (selectmode==1){ //normal mode
                to_normal=true;
            }
            else if (selectmode==2){ //hard mode
                to_hard=true;
            }
            /*else if (selectmode==3){ //extrahard mode
                to_extrahard=true;
            }*/
            else if (selectmode==4){ //戻る画面へ
                to_menu=true;
            }
            se_decide.play();
        }    
    }

    else if (mode > 9 && stage_check==true){ //NEXTstage
        if(clear_check){ //clear画面での操作
            if (mykeycode==39 && (selectmode!=1)){
                selectmode+=1;//マークを下に選択
                se_cursor.play();
            }
            if (mykeycode==37 && selectmode!=0){
                selectmode-=1;//マークを上に選択
                se_cursor.play();
            }
        }
        else{
            if (mykeycode==40 && (selectmode!=2)){
                selectmode+=1;//マークを下に選択
                se_cursor.play();
            }
            if (mykeycode==38 && selectmode!=0){
                selectmode-=1;//マークを上に選択
                se_cursor.play();
            }
        }
        if (mykey==" "){ //spaceキー
            if (selectmode==0){ 
                if(life_check){//storymode retry
                    to_storyretry=true;
                }
                else if(clear_check){ //clear画面 mode3に移動
                    to_story=true;
                }
                else{//nextstage
                    to_next=true;
                }
            }
            if (selectmode==1){ //
                if(life_check){//storymode mode==3
                    to_story=true;
                }
                else if(clear_check){//clear画面タイトルへ戻る
                    to_title=true;
                }
                else{//select画面
                    to_select=true;
                }
            }
            if (selectmode==2){ //タイトル画面へ
                to_title=true;
            }
            se_decide.play();//決定SE
        }    
    }

    else if (mode > 9 && pause_check==true){//pause
        if (mykeycode==40 && (selectmode!=2)){
            selectmode+=1;//マークを下に選択
            se_cursor.play();
        }
        if (mykeycode==38 && selectmode!=0){
            selectmode-=1;//マークを上に選択
            se_cursor.play();
        }
        if (mykey==" "){ //spaceキー
            if (selectmode==0){ //次のステージ画面へ
                to_retry=true;
            }
            if (selectmode==1){ //stageselect
                to_select=true;
            }
            if (selectmode==2){ //タイトル画面へ
                to_title=true;
            }
            se_decide.play();
        }    
    }

    // Game中の動作
    else if(death_check==false && stage_check==false && pause_check==false && mode>9){
        if(mykeycode==39){　//右
            vecx=vec;
        }
        if(mykeycode==37){
            vecx=-vec;
        }
        if(mykeycode==38){ 
            vecy=-vec;
        }
        if(mykeycode==40){ 
            vecy=vec;
        }
    }

    if(mykeycode==80 && mode>9){//Pause画面の表示
        if (pause_check==false && over_c==false && stage_check==false){
            pause_check=true;
            se_pause.play();
            bgmeasy.volume(0.05);
            bgmnormal.volume(0.05);
            
        }
        else{
            pause_check=false;
            se_cancel.play();
            bgmeasy.volume(0.2);
            bgmnormal.volume(0.2);
        }
    }
}

function keyup(mykey,mykeycode){ //キーを離したイベント
    if(death_check==false && stage_check==false && pause_check==false && mode>9){
        if(mykeycode==37 || mykeycode==38 || mykeycode==39 || mykeycode==40){
            vec=3;//初期速度
            vecx=0;
            vecy=0;
            realvecx=0;
            realvecy=0;
        }
    }
}

// EnemyMotion //////////////////////////////////////
function enemy_motion1(x,k,p,lag){ //左右
    x+=k*Math.sin(t/p+lag);
    return x;
}

function enemy_motion3(y,k,p,lag){ //上下
    y+=k*Math.sin(t/p+lag);
    return y;
}

function enemy_motion4(x,k,p){//直進運動　
    x+=(k*t/60)%p;
    return x;
}
function enemy_motion_cannon(x,k,p){//直進運動　
    if(enecheck){
        enealphacount+=100;
        enecheck=false;
    }
    else if(enealphacount>0){
        enemy_alpha+=0.001;
        enealphacount-=0.1;
    }
    else{
        if(check1){
            t_1=t;
            check1=false;
        }
        enemy_alpha=1;
        x+=(k*(t-t_1)/60);//pでのあまり分だけ進む
        if(x-p/2<p){
            enecheck=true;
            check1=true;
            enemy_alpha=0;
        }
    }
    return x;
}

function enemy_motion_cannon2(x,k,p){//直進運動ver2
    if(enecheck2){
        enealphacount2+=100;
        enecheck2=false;
    }
    else if(enealphacount2>0){
        enemy_alpha2+=0.002;
        enealphacount2-=0.2;
    }
    else{
        if(check2){
            t_2=t;
            check2=false;
        }
        enemy_alpha2=1;
        x+=(k*(t-t_2)/60);//pでのあまり分だけ進む
        if(x-p/2<p){
            enecheck2=true;
            check2=true;
            enemy_alpha2=0;
        }
    }
    return x;
}

function enemy_motion_cannon3(x,y,k,p){//放物運動
    if(enecheck3){
        enealphacount3+=100;
        enecheck3=false;
    }
    else if(enealphacount3>0 ){
        enemy_alpha3+=0.004;
        enealphacount3-=0.4;
    }
    else{
        if(check3){
            enemy_alpha3=1;
            y_check=y;
            t_3=t;
            c_y=-13;
            c_g=p;
            check3=false;
        }
        //y=v_0t+1/2gt^2
        y+=c_y*(t-t_3)+c_g*((t-t_3)*(t-t_3))/2;
        x+=(k*(t-t_3)/60);//x座標進む
        if(y>y_check){
            enecheck3=true;
            c_y=0;
            c_a=0;
            check3=true;
            enemy_alpha3=0;
        }
    }
    cannon_a=x;
    cannon_b=y;
}
function enemy_motion_cannon4(x,k,p){//直進運動ver4
    if(enecheck4){
        enealphacount4+=100;
        enecheck4=false;
    }
    else if(enealphacount4>0){
        enemy_alpha4+=0.0025;
        enealphacount4-=0.25;
    }
    else{
        if(check4){
            t_4=t;
            check4=false;
        }
        enemy_alpha4=1;
        x+=(k*(t-t_4)/60);//pでのあまり分だけ進む
        if(x>p){
            enecheck4=true;
            check4=true;
            enemy_alpha4=0;
        }
    }
    return x;
}

function enemy_motionc1(x,y,radius,p,lag){
    x +=Math.cos(t/p+lag)*radius;
    y +=Math.sin(t/p+lag)*radius;
    a=x;
    b=y;
    return 0;
}
function enemy_motionc2(x,y,radius,p,lag){
    y +=Math.cos(t/p+lag)*radius;
    x +=Math.sin(t/p+lag)*radius;
    a=x;
    b=y;
    return 0;
}
function enemy_motion5(x,r,p,lag){ //回転ver.1
    if (0 < t%60 < 30) {
        x+=r*Math.sin(t/p+lag);
    }
    return x;
}
function enemy_motion6(y,r,p,lag){ //回転ver.2
    if (30 < t%60 < 60) {
        y+=r*Math.sin(t/p+lag);
    }
    return y;
}

function enemy_light(){}
////////////////////////////////////////

function score_set(){
    set_check=true;//一度だけ計算
    score = (life+1)*(10*60*60-t) + score_bonus*(10*60*60-t)*2;//ライフ数×残り時間(max10m) + ボーナス数×残り時間(max10m)*2
    if (mode>=50 && mode <= 59){//easy評価
        if(score>800000){//rankA
            score_rank=5;
        }
        else if(score>500000){//rankB
            score_rank=4;
        }
        else if(score>250000){//rankC
            score_rank=3;
        }
        else if(score>100000){//rankD
            score_rank=2;
        }
        else{ //rankE
            score_rank=1;
        }
    }
    else if(mode>=60 && mode <= 69){//normal評価
        if(score>10000){//rankA
            score_rank=5;
        }
        else if(score>8000){//rankB
            score_rank=4;
        }
        else if(score>1800){//rankC
            score_rank=3;
        }
        else if(score>1000){//rankD
            score_rank=2;
        }
        else{ //rankE
            score_rank=1;
        }
    }
    else if(mode>=70 && mode <= 79){}
    else if(mode>=80 && mode <= 89){}
}

function startarea(z){
    if (z==1){ //field No.1
        ctx2d.fillStyle=startcol_1;
        for (let i=160; i<241; i+=40){
            for(let j=200; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        for (let i=180; i<261; i+=40){
            for(let j=220; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        
        ctx2d.fillStyle=startcol_2;
        for (let i=180; i<261; i+=40){
            for(let j=200; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        for (let i=160; i<241; i+=40){
            for(let j=220; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
    }
    if(z==2){
        //startarea////////////////////
        ctx2d.fillStyle=startcol_1;
        for(let i=160; i<291; i+=40){
            for(let j=140; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=180; i<271; i+=40){
            for(let j=160; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=startcol_2;
        for(let i=180; i<281; i+=40){
            for(let j=140; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=160; i<291; i+=40){
            for(let j=160; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==3){
        //startarea
        ctx2d.fillStyle=startcol_1;
        for(let i=120; i<191; i+=40){
            for(let j=130; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=140; i<211; i+=40){
            for(let j=150; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=startcol_2;
        for(let i=140; i<211; i+=40){
            for(let j=130; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=120; i<191; i+=40){
            for(let j=150; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==4){
        ctx2d.fillStyle=startcol_1;
        for(let i=160; i<231; i+=40){
            for(let j=370; j<411; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=180; i<211; i+=40){
            for(let j=390; j<391; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=startcol_2;
        for(let i=180; i<211; i+=40){
            for(let j=370; j<411; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=160; i<231; i+=40){
            for(let j=390; j<391; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==5){
        ctx2d.fillStyle=startcol_1;
        for(let i=160; i<241; i+=40){
            for(let j=130; j<311; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=180; i<231; i+=40){
            for(let j=150; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=startcol_2;
        for(let i=180; i<241; i+=40){
            for(let j=130; j<311; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=160; i<241; i+=40){
            for(let j=150; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==6){
        ctx2d.fillStyle=startcol_1;
        ctx2d.fillRect(70,110,20,20);
        ctx2d.fillRect(90,130,20,20);
        
        ctx2d.fillStyle=startcol_2;
        ctx2d.fillRect(90,110,20,20);
        ctx2d.fillRect(70,130,20,20);
    }
    if(z==11){
        ctx2d.fillStyle=startcol_1;
        for(let i=240; i<321; i+=40){
            for(let j=260; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=260; i<321; i+=40){
            for(let j=280; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=startcol_2;
        for(let i=260; i<321; i+=40){
            for(let j=260; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=240; i<321; i+=40){
            for(let j=280; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==12){
        ctx2d.fillStyle=startcol_1;
        for(let i=140; i<181; i+=40){
            for(let j=140; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=160; i<161; i+=40){
            for(let j=160; j<161; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=startcol_2;
        for(let i=160; i<181; i+=40){
            for(let j=140; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=140; i<181; i+=40){
            for(let j=160; j<161; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==13){
        ctx2d.fillStyle=startcol_1;
        for (let i=440; i<521; i+=40){
            for(let j=140; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=420; i<521; i+=40){
            for(let j=160; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=startcol_2;
        for (let i=420; i<521; i+=40){
            for(let j=140; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=440; i<521; i+=40){
            for(let j=160; j<181; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==14){
        ctx2d.fillStyle=startcol_1;
        for (let i=200; i<241; i+=40){
            for(let j=300; j<341; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=220; i<241; i+=40){
            for(let j=320; j<341; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=startcol_2;
        for (let i=220; i<241; i+=40){
            for(let j=300; j<341; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=200; i<241; i+=40){
            for(let j=320; j<341; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
}

function gamearea(z){
    if (z==1){
        ctx2d.fillStyle=white;
        for (let i=280; i<641; i+=40){
            for(let j=200; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        for (let i=300; i<661; i+=40){
            for(let j=220; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        
        ctx2d.fillStyle=lightgray;
        for (let i=300; i<661; i+=40){
            for(let j=200; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        for (let i=280; i<641; i+=40){
            for(let j=220; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
    }
    else if(z==2){
        //filedarea///////////////////////////
        ctx2d.fillStyle=white;
        for(let i=160; i<291; i+=40){
            for(let j=200; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=180; i<271; i+=40){
            for(let j=220; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=420; i<531; i+=40){
            for(let j=140; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=400; i<551; i+=40){
            for(let j=160; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=660; i<781; i+=40){
            for(let j=140; j<431; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=680; i<761; i+=40){
            for(let j=160; j<451; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=300; i<391; i+=40){
            for(let j=420; j<501; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=320; i<371; i+=40){
            for(let j=440; j<481; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=540; i<641; i+=40){
            for(let j=140; j<221; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=560; i<661; i+=40){
            for(let j=160; j<201; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }

        ctx2d.fillStyle=lightgray;
        for(let i=180; i<271; i+=40){
            for(let j=200; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=160; i<291; i+=40){
            for(let j=220; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=400; i<551; i+=40){
            for(let j=140; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=420; i<531; i+=40){
            for(let j=160; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        
        for(let i=680; i<761; i+=40){
            for(let j=140; j<431; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=660; i<781; i+=40){
            for(let j=160; j<451; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=320; i<371; i+=40){
            for(let j=420; j<501; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=300; i<391; i+=40){
            for(let j=440; j<481; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=560; i<661; i+=40){
            for(let j=140; j<221; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=540; i<641; i+=40){
            for(let j=160; j<201; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==3){
        ctx2d.fillStyle=white;
        for(let i=200; i<840; i+=40){
            for(let j=130; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<840; i+=40){
            for(let j=150; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=700; i<840; i+=40){
            for(let j=190; j<501; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=720; i<840; i+=40){
            for(let j=210; j<481; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<840; i+=40){
            for(let j=490; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=260; i<840; i+=40){
            for(let j=510; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=160; i<220; i+=40){
            for(let j=250; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=140; i<240; i+=40){
            for(let j=270; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=200; i<640; i+=40){
            for(let j=250; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<620; i+=40){
            for(let j=270; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=540; i<600; i+=40){
            for(let j=310; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=560; i<620; i+=40){
            for(let j=330; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=380; i<540; i+=40){
            for(let j=390; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=400; i<560; i+=40){
            for(let j=410; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        ctx2d.fillRect(840,330,20,20);
        ctx2d.fillRect(840,370,20,20);
        ctx2d.fillRect(860,350,20,20);

        

        ctx2d.fillStyle=lightgray;
        for(let i=220; i<841; i+=40){
            for(let j=130; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=200; i<840; i+=40){
            for(let j=150; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=720; i<840; i+=40){
            for(let j=190; j<501; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=700; i<840; i+=40){
            for(let j=210; j<481; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=260; i<840; i+=40){
            for(let j=490; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=240; i<840; i+=40){
            for(let j=510; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=140; i<240; i+=40){
            for(let j=250; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=160; i<220; i+=40){
            for(let j=270; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=220; i<620; i+=40){
            for(let j=250; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=200; i<640; i+=40){
            for(let j=270; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=560; i<620; i+=40){
            for(let j=310; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=540; i<600; i+=40){
            for(let j=330; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=400; i<560; i+=40){
            for(let j=390; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=380; i<540; i+=40){
            for(let j=410; j<421; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillRect(860,330,20,20);
        ctx2d.fillRect(860,370,20,20);
        ctx2d.fillRect(840,350,20,20);
    }
    if(z==4){
        ctx2d.fillStyle=white;
        for(let i=220; i<690; i+=40){
            for(let j=130; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=150; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=250; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=270; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=370; j<411; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=390; j<411; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=490; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=510; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=lightgray;
        for(let i=240; i<690; i+=40){
            for(let j=130; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=150; j<171; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=250; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=270; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=370; j<411; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=390; j<411; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=240; i<690; i+=40){
            for(let j=490; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=220; i<690; i+=40){
            for(let j=510; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==5){
        ctx2d.fillStyle=white;
        for(let i=260; i<790; i+=40){
            for(let j=130; j<311; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=280; i<790; i+=40){
            for(let j=150; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=260; i<790; i+=40){
            for(let j=370; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=280; i<790; i+=40){
            for(let j=390; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=680; i<790; i+=40){
            for(let j=310; j<371; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=660; i<790; i+=40){
            for(let j=330; j<371; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=lightgray;
        for(let i=280; i<790; i+=40){
            for(let j=130; j<311; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=260; i<790; i+=40){
            for(let j=150; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=280; i<790; i+=40){
            for(let j=370; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=260; i<790; i+=40){
            for(let j=390; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=660; i<790; i+=40){
            for(let j=310; j<371; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=680; i<790; i+=40){
            for(let j=330; j<371; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }

    }
    if(z==6){
        ctx2d.fillStyle=white;
        for(let i=70; i<880; i+=40){
            for(let j=210; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=90; i<880; i+=40){
            for(let j=230; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=250; i<700; i+=40){
            for(let j=110; j<230; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=270; i<700; i+=40){
            for(let j=130; j<230; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillRect(110,130,20,20);
        for(let i=130; i<151; i+=40){
            for(let j=110; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=150; i<151; i+=40){
            for(let j=130; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=810; i<811; i+=40){
            for(let j=110; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=790; i<811; i+=40){
            for(let j=130; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillRect(830,130,20,20);

        ctx2d.fillStyle=lightgray;
        for(let i=90; i<880; i+=40){
            for(let j=210; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=70; i<880; i+=40){
            for(let j=230; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=270; i<700; i+=40){
            for(let j=110; j<230; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=250; i<700; i+=40){
            for(let j=130; j<230; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillRect(110,110,20,20);
        for(let i=150; i<151; i+=40){
            for(let j=110; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=130; i<151; i+=40){
            for(let j=130; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=790; i<811; i+=40){
            for(let j=110; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=810; i<811; i+=40){
            for(let j=130; j<210; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillRect(830,110,20,20);
    }
    if(z==11){
        ctx2d.fillStyle=white;
        for (let i=320; i<621; i+=40){
            for(let j=260; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=340; i<621; i+=40){
            for(let j=280; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=lightgray;
        for (let i=340; i<621; i+=40){
            for(let j=260; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=320; i<621; i+=40){
            for(let j=280; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==12){
        ctx2d.fillStyle=white;
        for (let i=140; i<811; i+=40){
            for(let j=140; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=160; i<811; i+=40){
            for(let j=160; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        
        ctx2d.fillStyle=lightgray;
        for (let i=160; i<811; i+=40){
            for(let j=140; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=140; i<811; i+=40){
            for(let j=160; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==13){
        ctx2d.fillStyle=white;
        for (let i=180; i<781; i+=40){
            for(let j=200; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=200; i<781; i+=40){
            for(let j=220; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        
        ctx2d.fillStyle=lightgray;
        for (let i=180; i<781; i+=40){
            for(let j=220; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=200; i<781; i+=40){
            for(let j=200; j<510; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==14){
        for (let i=260; i<401; i+=40){
            for(let j=180; j<490; j+=40){
                ctx2d.fillStyle=white;
                ctx2d.fillRect(i,j,20,20);
                ctx2d.fillRect(i+20,j+20,20,20);
                ctx2d.fillStyle=lightgray;
                ctx2d.fillRect(i,j+20,20,20);
                ctx2d.fillRect(i+20,j,20,20);}}
        for (let i=400; i<700; i+=40){
            for(let j=260; j<430; j+=40){
                ctx2d.fillStyle=lightgray;
                ctx2d.fillRect(i,j,20,20);
                ctx2d.fillRect(i+20,j+20,20,20);
                ctx2d.fillStyle=white;
                ctx2d.fillRect(i,j+20,20,20);
                ctx2d.fillRect(i+20,j,20,20);}}

        ctx2d.fillStyle=white;
        for (let i=500; i<700; i+=40){
            for(let j=220; j<260; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=520; i<700; i+=40){
            for(let j=240; j<260; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=lightgray;
        for (let i=520; i<700; i+=40){
            for(let j=220; j<260; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=500; i<700; i+=40){
            for(let j=240; j<260; j+=40){
                ctx2d.fillRect(i,j,20,20);}}

        ctx2d.fillStyle=white;
        for (let i=720; i<760; i+=40){
            for(let j=280; j<380; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=700; i<760; i+=40){
            for(let j=300; j<380; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        
        ctx2d.fillStyle=lightgray;
        for (let i=700; i<760; i+=40){
            for(let j=280; j<380; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=720; i<760; i+=40){
            for(let j=300; j<380; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
}

function goalarea(z){
    if (z==1){
        ctx2d.fillStyle=goalcol1;
        for (let i=680; i<761; i+=40){
            for(let j=200; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        for (let i=700; i<781; i+=40){
            for(let j=220; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        
        ctx2d.fillStyle=goalcol2;
        for (let i=680; i<761; i+=40){
            for(let j=220; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }
        for (let i=700; i<781; i+=40){
            for(let j=200; j<480; j+=40){
                ctx2d.fillRect(i,j,20,20);
            }
        }        
    }
    if(z==2){
        //goalarea////////////////////
        ctx2d.fillStyle=goalcol1;
        for(let i=660; i<791; i+=40){
            for(let j=460; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=680; i<771; i+=40){
            for(let j=480; j<501; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        
        ctx2d.fillStyle=goalcol2;
        for(let i=680; i<761; i+=40){
            for(let j=460; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=660; i<791; i+=40){
            for(let j=480; j<501; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==3){
        //goalarea////////////////////
        ctx2d.fillStyle=goalcol1;
        for(let i=320; i<361; i+=40){
            for(let j=390; j<401; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=340; i<361; i+=40){
            for(let j=410; j<431; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        
        ctx2d.fillStyle=goalcol2;
        for(let i=340; i<361; i+=40){
            for(let j=390; j<401; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=320; i<361; i+=40){
            for(let j=410; j<431; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==4){
        ctx2d.fillStyle=goalcol1;
        for(let i=160; i<231; i+=40){
            for(let j=250; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=180; i<211; i+=40){
            for(let j=270; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=goalcol2;
        for(let i=180; i<211; i+=40){
            for(let j=250; j<291; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=160; i<231; i+=40){
            for(let j=270; j<271; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==5){
        ctx2d.fillStyle=goalcol1;
        for(let i=160; i<241; i+=40){
            for(let j=370; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=180; i<231; i+=40){
            for(let j=390; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=goalcol2;
        for(let i=180; i<241; i+=40){
            for(let j=370; j<531; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=160; i<241; i+=40){
            for(let j=390; j<511; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==6){
        ctx2d.fillStyle=goalcol1;
        ctx2d.fillRect(850,110,20,20);
        ctx2d.fillRect(870,130,20,20);
        ctx2d.fillStyle=goalcol2;
        ctx2d.fillRect(850,130,20,20);
        ctx2d.fillRect(870,110,20,20);
        
    }
    if(z==11){
        ctx2d.fillStyle=goalcol1;
        for(let i=620; i<720; i+=40){
            for(let j=260; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        for(let i=640; i<720; i+=40){
            for(let j=280; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
        ctx2d.fillStyle=goalcol2;
        for(let i=620; i<720; i+=40){
            for(let j=280; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20)}
        }
        for(let i=640; i<720; i+=40){
            for(let j=260; j<360; j+=40){
                ctx2d.fillRect(i,j,20,20);}
        }
    }
    if(z==12){
        ctx2d.fillStyle=goalcol1;
        for(let i=760; i<821; i+=40){
            for(let j=460; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for(let i=780; i<821; i+=40){
            for(let j=480; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=goalcol2;
        for(let i=780; i<821; i+=40){
            for(let j=460; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20)}}
        for(let i=760; i<821; i+=40){
            for(let j=480; j<521; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==13){
        ctx2d.fillStyle=goalcol1;
        for (let i=440; i<501; i+=40){
            for(let j=460; j<520; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=460; i<501; i+=40){
            for(let j=480; j<520; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=goalcol2;
        for (let i=460; i<501; i+=40){
            for(let j=460; j<520; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=440; i<501; i+=40){
            for(let j=480; j<520; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
    if(z==14){
        ctx2d.fillStyle=goalcol1;
        for (let i=700; i<761; i+=40){
            for(let j=220; j<261; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=720; i<761; i+=40){
            for(let j=240; j<261; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        ctx2d.fillStyle=goalcol2;
        for (let i=720; i<761; i+=40){
            for(let j=220; j<261; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
        for (let i=700; i<761; i+=40){
            for(let j=240; j<261; j+=40){
                ctx2d.fillRect(i,j,20,20);}}
    }
}

function make_shape(a,b,c,d,e,f){ //図形作成
    //描画コンテキストの取得
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        ctx2d.strokeStyle=black;
        var context = canvas.getContext('2d');
        //ここに具体的な描画内容を指定する
        //新しいパスを開始する
        context.beginPath();
        //パスの開始座標を指定する
        context.moveTo(a,b);
        //座標を指定してラインを引いていく
        context.lineTo(c,d);
        context.lineTo(e,f);
        //パスを閉じる（最後の座標から開始座標に向けてラインを引く）
        context.closePath();
        //現在のパスを輪郭表示する
        context.stroke();
        text_ani(0.5,0.02,0.02);
        var pastle_green1="rgba(173,255,173,"+text_trans+")";
        ctx2d.fillStyle=pastle_green1;
        ctx2d.fill();
    }
}

function num_plus(){
    num_rec+=35;
    return num_rec;
}

function death_fadeout(){
    if (death_check){
        if (check){
            se_hit.play();//hitSE流す
            vec=3,vecx=0,vecy=0,realvecx=0,realvecy=0;
            alphacount+=100;
            check=false;
        }
        if (alphacount>0){ //毎カウントごとに0.02ずつ落とす
            chara_alpha-=0.02;
            alphacount-=2;
        }
        else { //初期位置に戻す
            chara_alpha=1.0;
            if (mode>9 && mode<50){
                death++;
            }
            else if(mode>49){
                life--;
                if(life<0){
                    life_check=true;
                    life="Dead";
                }
            }
            location_chara();
            death_check=false;
            check=true;
        }
    }
}

///characterギミック//////////////////
function oneup(){//残機1増える
    if(oneup_check){
        se_lifeup.play();//SE再生
        if(mode==60 || mode==62 ||mode==64){
            life+=5;
        }
        else if(mode==61 || mode==63 || mode==65){
            life+=10;
        }
        else{
            life+=3;
        }
        realoneup=false;
        oneup_check=false;
    }
}

function save(){//セーブポイント
    if(save_check){
        se_save.play();//saveSE再生
        loc_check=true;
        realsave=false;
        save_check=false;
    }
}

function slow(){

}

function chara_big(){

}

function warp(){//ワープ
    if(mode==62){
        if(chara_x>=700 && chara_x<=740 && chara_y>=370 && chara_y<=410){
            if(se_warp_check){
                se_warp.play();//ワープSESE再生
                se_warp_check=false;
            }
            fadeout();
            if(page_check){
                se_warp_check=true;
                incheck=true;
                warp_a=true;
                location_chara();
            }
        }
        if(chara_x>=700 && chara_x<=740 && chara_y>=130 && chara_y<=170){
            if(se_warp_check){
                se_warp.play();//ワープSESE再生
                se_warp_check=false;
            }
            fadeout();
            if(page_check){
                se_warp_check=true;
                incheck=true;
                warp_b=true;
                location_chara();
            }
        }
        if(chara_x>=160 && chara_x<=200 && chara_y>=490 && chara_y<=530){
            if(se_warp_check){
                se_warp.play();//ワープSESE再生
                se_warp_check=false;
            }
            fadeout();
            if(page_check){
                se_warp_check=true;
                incheck=true;
                warp_c=true;
                location_chara();
            }
        }
    }
}

////////////////////////////////////////

function gameover(){ //story modeのゲームオーバー
    t--;
    over_c=true;
    stage_check=true;
    ctx2d.fillStyle=pastle_parple_z;
    ctx2d.fillRect(100,90,760,480);
    ctx2d.fillStyle=enemy_color;//
    ctx2d.font = "54px san-serif";
    ctx2d.fillText("GAME OVER", 300, 190);
    ctx2d.fillStyle=black;//
    ctx2d.font = "36px san-serif";
    ctx2d.fillText("リトライ", 350, 270);
    
    ctx2d.fillText("レベル一覧へ", 350, 370);
    
    ctx2d.fillText("タイトルに戻る", 350, 470);
    if (selectmode==0){
        make_shape(310,255,260,285,260,225); //三角形描画
    }
    else if(selectmode==1){
        make_shape(310,355,260,385,260,325); //三角形描画
    }
    else if(selectmode==2){
        make_shape(310,455,260,485,260,425);
    }

    if (to_storyretry){ //リトライ画面への遷移
        if(mode>=50 && mode<60){
            mode=50;
        }
        else if(mode>=60 && mode<70){
            mode=60;
        }
        else if(mode>=70 && mode<80){
            mode=70;
        }
        else if(mode>=80 && mode<90){
            mode=80;
        }
        loc_check=false;//save場所リセット
        to_storyretry=false;
        selectmode=0;
        stage_check=false;
        life_check=false;
        over_c=false;
        oneup_check=false;//1upオブジェクト設定
        location_chara(mode);
        t=0;//時間の初期化
        life=Life;//残機カウントの初期化
    }
    if (to_story){ //story mode画面の遷移
        se_stageclear_check=true;//SE関数リセット
        bgmeasy.volume(0.2);//volume reset
        bgmnormal.volume(0.2);
        bgmeasy.stop();
        bgmnormal.stop();

        mode=3;
        to_story=false;
        selectmode=0;
        stage_check=false;
        life_check=false;
        over_c=false;
        t=0;//時間の初期化
        life=Life;//残機カウントの初期化
    }
    if (to_title){ //タイトル画面への遷移
        se_stageclear_check=true;//SE関数リセット
        bgmeasy.volume(0.2);//volume reset
        bgmnormal.volume(0.2);
        bgmeasy.stop();
        bgmnormal.stop();

        mode=0;
        to_title=false;
        selectmode=0;
        stage_check=false;
        life_check=false;
        over_c=false;
        t=0;//時間の初期化
        life=Life;//残機カウントの初期化
    }
}

function next_stage(){
    t--;
    stage_check=true;
    vec=3,vecx=0,vecy=0,realvecx=0,realvecy=0;
    ctx2d.fillStyle=pastle_parple_z;
    ctx2d.fillRect(100,100,720,480);
    ctx2d.fillStyle=black;//
    ctx2d.font = "48px san-serif";
    ctx2d.fillText("You're GOAL!!", 300, 190);
    ctx2d.fillStyle=black;//
    ctx2d.font = "36px";
    ctx2d.fillText("次のステージへ", 350, 270);
    ctx2d.fillStyle=black;//
    ctx2d.font = "36px ";
    ctx2d.fillText("コース一覧へ", 350, 370);
    ctx2d.fillStyle=black;//
    ctx2d.font = "36px ";
    ctx2d.fillText("タイトルに戻る", 350, 470);
    //ctx2d.fillStyle=black;
    //ctx2d.font = "36px HiraMinPro-W6";
    //ctx2d.fillText("selectmode: "+selectmode, 450, 560);

    if (selectmode==0){
        make_shape(310,255,260,285,260,225); //三角形描画
    }
    else if(selectmode==1){
        make_shape(310,355,260,385,260,325); //三角形描画
    }
    else if(selectmode==2){
        make_shape(310,455,260,485,260,425);
    }

    if (to_next){ //Next画面への遷移
        mode++;
        to_next=false;
        selectmode=0;
        stage_check=false;
        oneup_check=false;//1upオブジェクト設定
        loc_check=false;//save真偽りセット
        location_chara(mode);
        t=0;
    }
    if (to_select){ //select画面の遷移
        mode=2;
        to_select=false;
        selectmode=0;
        stage_check=false;
    }
    if (to_title){ //タイトル画面への遷移
        mode=0;
        to_title=false;
        selectmode=0;
        stage_check=false;
    }
}

function next_stage1(){//story mode専用
    if(se_stageclear_check){//SE設定
        se_stageclear.play();
        bgmeasy.volume(0.05);
        bgmnormal.volume(0.05);
        se_stageclear_check=false;
    }
    t--;
    stage_check=true;
    vec=3,vecx=0,vecy=0,realvecx=0,realvecy=0;
    ctx2d.fillStyle=clear_col1;
    ctx2d.fillRect(100,90,760,480);

    ctx2d.fillStyle=black;
    ctx2d.font = "56px san-serif";
    if(mode>=50 && mode<55){//easy
        hi_check=true;
        easy_hi=Number(localStorage.getItem('easy_a'));
        if(mode-49>easy_hi){
            localStorage.setItem('easy_a', mode-49);
        }
        if(hi_check){
            ctx2d.font = "30px san-serif";
            ctx2d.fillText("New Record!", 350, 210);//??????????????????????????????????
        }
        ctx2d.font = "56px san-serif";
        ctx2d.fillText("Round"+(mode-49)+" CLEAR!!", 280, 160);
    }
    else if(mode>=60 && mode<65){//normal
        hi_check=true;
        normal_hi=Number(localStorage.getItem('normal_a'));
        if(mode-59>normal_hi){
            localStorage.setItem('normal_a', mode-59);
        }
        if(hi_check){
            ctx2d.font = "30px san-serif";
            ctx2d.fillText("New Record!", 350, 210);//??????????????????????????????????
        }
        ctx2d.font = "56px san-serif";
        ctx2d.fillText("Round"+(mode-59)+" CLEAR!!", 280, 160);
    }
    else if(mode>=70 && mode<79){//hard
        hi_check=true;
        hard_hi=Number(localStorage.getItem('hard_a'));
        if(mode-69>hard_hi){
            localStorage.setItem('hard_a', mode-69);
        }
        if(hi_check){
            ctx2d.font = "30px san-serif";
            ctx2d.fillText("New Record!", 350, 210);//??????????????????????????????????
        }
        ctx2d.font = "56px san-serif";
        ctx2d.fillText("Round"+(mode-69)+" CLEAR!!", 280, 160);
    }
    else if(mode>=80 && mode<89){//exhard
        hi_check=true;
        exhard_hi=Number(localStorage.getItem('exhard_a'));
        if(mode-79>exhard_hi){
            localStorage.setItem('exhard_a', mode-79);
        }
        if(hi_check){
            ctx2d.font = "30px san-serif";
            ctx2d.fillText("New Record!", 350, 210);//??????????????????????????????????
        }
        ctx2d.font = "56px san-serif";
        ctx2d.fillText("Round"+(mode-79)+" CLEAR!!", 280, 160);
    }
    ctx2d.font = "36px";
    ctx2d.fillText("次のステージへ", 350, 270);
    ctx2d.fillText("レベル画面へ", 350, 370);
    ctx2d.fillText("タイトルに戻る", 350, 470);
    //ctx2d.fillStyle=black;
    //ctx2d.font = "36px HiraMinPro-W6";
    //ctx2d.fillText("selectmode: "+selectmode, 450, 560);

    if (selectmode==0){
        make_shape(310,255,260,285,260,225); //三角形描画
    }
    else if(selectmode==1){
        make_shape(310,355,260,385,260,325); //三角形描画
    }
    else if(selectmode==2){
        make_shape(310,455,260,485,260,425);
    }

    if (to_next){ //Next画面への遷移
        
            se_stageclear_check=true;//SE関数リセット
            bgmeasy.volume(0.2);//volume reset
            bgmnormal.volume(0.2);

            mode++;
            to_next=false;
            selectmode=0;
            stage_check=false;
            hi_check=false;
            oneup_check=false;//1upオブジェクト設定
            loc_check=false;//save真偽りセット
            realoneup=true;
            realsave=true;
            location_chara(mode);
            incheck=true;
        
        
    }
    if (to_select){ //select画面の遷移
        se_stageclear_check=true;//SE関数リセット
        bgmeasy.volume(0.2);//volume reset
        bgmnormal.volume(0.2);
        bgmeasy.stop();
        bgmnormal.stop();


        se_stageclear_check=true;//SE関数リセット
        mode=3;
        to_select=false;
        selectmode=0;
        stage_check=false;
        hi_check=false;
    }
    if (to_title){ //タイトル画面への遷移
        se_stageclear_check=true;//SE関数リセット
        bgmeasy.volume(0.2);//volume reset
        bgmnormal.volume(0.2); 
        bgmeasy.stop();
        bgmnormal.stop();

        se_stageclear_check=true;//SE関数リセット
        mode=0;
        to_title=false;
        selectmode=0;
        stage_check=false;
        hi_check=false;
    }
}

function fadein(){ //画面の黒を取り払う
    if (page_check){
        page_alphain=1;
        pa_count=100;
        page_check=false;
    }
    
    if (pa_count>0 && page_alphain>=0){ //毎カウントごとに0.02ずつ落とす
        t--;
        page_alphain-=0.04;
        pa_count-=4;
    }
    else { //初期位置に戻す
        t--;
        page_alphain=0;
        pa_count=0;
        page_check=true;
        incheck=false;
        if(mode>9){
        }
    }
}

function fadeout(){ //画面を黒で塗りつぶす
    if (page_check){
        page_alpha=0;
        page_check=false;
    }
    
    if (pa_count<100 && page_alpha<=1){ //毎カウントごとに0.02ずつ落とす
        page_alpha+=0.025;
        pa_count+=2.5;
    }
    else { //初期位置に戻す
        page_alpha=0;
        pa_count=0;
        page_check=true;
        if(mode==3 || mode>9){
            t=0;
        }
    }
}

function storyclear(){
    if(se_storyclear_check){//SE設定
        se_storyclear.play();
        bgmeasy.volume(0.05);
        bgmnormal.volume(0.05);
        se_storyclear_check=false;
    }
    t--;
    stage_check=true;
    clear_check=true;
    vec=3,vecx=0,vecy=0,realvecx=0,realvecy=0;
    if(set_check==false){
        score_set();
    }
    ctx2d.fillStyle=clear_col1;
    ctx2d.fillRect(100,90,760,480);
    ctx2d.fillStyle=black;//
    ctx2d.font = "56px san-serif";
    ctx2d.fillText("Congraduation!", 270, 180);
    ctx2d.font = "40px san-serif";
    ctx2d.fillText("Your Score: "+ score, 280, 380);
    //score_rank出力
    rank_x=400;
    if(score_rank==5){
        ctx2d.fillText("Rank: "+"A", rank_x, 470);
    }
    else if(score_rank==4){
        ctx2d.fillText("Rank: "+"B", rank_x, 470);
    }
    else if(score_rank==3){
        ctx2d.fillText("Rank: "+"C", rank_x, 470);
    }
    else if(score_rank==2){
        ctx2d.fillText("Rank: "+"D", rank_x, 470);
    }
    else if(score_rank==1){
        ctx2d.fillText("Rank: "+"E", rank_x, 470);
    }

    if(mode==55){//easy goal
        ctx2d.font = "40px san-serif";
        ctx2d.fillText("Easy Mode CLEAR", 280, 290);

        //dataの処理
        localStorage.setItem('A_clear_easy', 'clear');
        localStorage.setItem('easy_a', "6");//攻略ステージを6
        if(score>Number(localStorage.getItem('easy_b'))){//scoreの更新
            localStorage.setItem('easy_b', score);
        }
        if(score_rank>Number(localStorage.getItem('easy_c'))){//rankの更新
            localStorage.setItem('easy_c', score_rank);
        }
        if(localStorage.getItem('A_clear_easy')=='clear' && localStorage.getItem('A_clear_normal')=='clear' && localStorage.getItem('A_clear_hard')=='clear'){
            localStorage.setItem('A_allclear', 'clear');//allclearの更新
        }
        if(life==9){//ノーミスクリア
            localStorage.setItem('A_life_easy', 'clear');
        }
        if(10*60*60-t>=5*60*60){//5分以内のクリア
            localStorage.setItem('A_5time_easy', 'clear');
        }
        if(10*60*60-t>=7*60*60){//3分以内のクリア
            localStorage.setItem('A_3time_easy', 'clear');
        }
    }

    else if(mode==65){
        ctx2d.font = "40px san-serif";
        ctx2d.fillText("Normal Mode CLEAR", 280, 290);

        //dataの処理
        localStorage.setItem('A_clear_normal', 'clear');
        localStorage.setItem('normal_a', "10");//攻略ステージを10
        if(score>Number(localStorage.getItem('normal_b'))){//scoreの更新
            localStorage.setItem('normal_b', score);
        }
        if(score_rank>Number(localStorage.getItem('normal_c'))){//rankの更新
            localStorage.setItem('normal_c', score_rank);
        }
        if(localStorage.getItem('A_clear_easy')=='clear' && localStorage.getItem('A_clear_normal')=='clear' && localStorage.getItem('A_clear_hard')=='clear'){
            localStorage.setItem('A_allclear', 'clear');//allclearの更新
        }
        if(life==Life){//ノーミスクリア
            localStorage.setItem('A_life_normal', 'clear');
        }
        if(10*60*60-t>=5*60*60){//5分以内のクリア
            localStorage.setItem('A_5time_normal', 'clear');
        }
        if(10*60*60-t>=7*60*60){//3分以内のクリア
            localStorage.setItem('A_3time_normal', 'clear');
        }
    }

    else if(mode==73){//hard modeクリア
        ctx2d.font = "40px san-serif";
        ctx2d.fillText("Hard Mode CLEAR", 280, 290);

        //dataの処理
        localStorage.setItem('A_clear_hard', 'clear');
        localStorage.setItem('hard_a', "10");//攻略ステージを10
        if(score>Number(localStorage.getItem('hard_b'))){//scoreの更新
            localStorage.setItem('hard_b', score);
        }
        if(score_rank>Number(localStorage.getItem('hard_c'))){//rankの更新
            localStorage.setItem('hard_c', score_rank);
        }
        if(localStorage.getItem('A_clear_easy')=='clear' && localStorage.getItem('A_clear_normal')=='clear' && localStorage.getItem('A_clear_hard')=='clear'){
            localStorage.setItem('A_allclear', 'clear');//allclearの更新
        }
        if(life==9){//ノーミスクリア
            localStorage.setItem('A_life_hard', 'clear');
        }
        if(10*60*60-t>=5*60*60){//5分以内のクリア
            localStorage.setItem('A_5time_hard', 'clear');
        }
        if(10*60*60-t>=7*60*60){//3分以内のクリア
            localStorage.setItem('A_3time_hard', 'clear');
        }
    }

    else if(mode>=80 && mode<89){//extrahar　modeクリア
        ctx2d.font = "40px san-serif";
        ctx2d.fillText("ExtraHard Mode CLEAR", 280, 290);

        //dataの処理
        localStorage.setItem('A_clear_exhard', 'clear');
        localStorage.setItem('exhard_a', "10");//攻略ステージを10
        if(score>Number(localStorage.getItem('exhard_b'))){//scoreの更新
            localStorage.setItem('exhard_b', score);
        }
        if(score_rank>Number(localStorage.getItem('exhard_c'))){//rankの更新
            localStorage.setItem('exhard_c', score_rank);
        }
        if(life==9){//ノーミスクリア
            localStorage.setItem('A_life_exhard', 'clear');
        }
        if(10*60*60-t<=5*60*60){//5分以内のクリア
            localStorage.setItem('A_5time_exhard', 'clear');
        }
        if(10*60*60-t<=3*60*60){//3分以内のクリア
            localStorage.setItem('A_3time_exhard', 'clear');
        }
    }

    ctx2d.font = "24px san-serif";
    ctx2d.fillText("ステージ選択へ", 250, 550);
    ctx2d.fillText("タイトルへ戻る", 530, 550);

    if (selectmode==0){
        make_shape(230,542,207,527,207,557); //三角形描画
    }
    else if(selectmode==1){
        make_shape(510,542,487,527,487,557); //三角形描画
    }

    if (incheck){
        fadein();
    }
    ctx2d.fillStyle="rgba(0,0,0,"+page_alphain+")";//fadeinの層
    ctx2d.fillRect(30,30,900,660);
    ctx2d.fillStyle="rgba(0,0,0,"+page_alpha+")";//fadeoutの層
    ctx2d.fillRect(30,30,900,660);

    if (to_story){ //story mode画面への遷移
        fadeout();
        if (page_check){
            se_storyclear_check=true;//SE関数リセット
            bgmeasy.volume(0.2);//volume reset
            bgmnormal.volume(0.2); 
            bgmeasy.stop();
            bgmnormal.stop();

            mode=3;
            to_story=false;
            selectmode=0;
            set_check=false;
            stage_check=false;
            clear_check=false;
            incheck=true;
            t=0;
        }
    }
    if (to_title){ //title画面への遷移
        fadeout();
        if (page_check){
            se_storyclear_check=true;//SE関数リセット
            bgmeasy.volume(0.2);//volume reset
            bgmnormal.volume(0.2); 
            bgmeasy.stop();
            bgmnormal.stop();
            
            mode=0;
            to_title=false;
            selectmode=0;
            set_check=false;
            stage_check=false;
            clear_check=false;
            incheck=true;
            t=0;
        }
    }
}

function pause(){ // Pause画面
    t--;
    ctx2d.fillStyle=white_t;
    ctx2d.fillRect(100,100,760,480);
    ctx2d.fillStyle=black;//
    ctx2d.font = "48px HiraMinPro-W6";
    ctx2d.fillText("Pause", 380, 190);
    ctx2d.font = "36px HiraMinPro-W6";
    ctx2d.fillText("戻る", 350, 270);
    ctx2d.font = "36px HiraMinPro-W6";
    ctx2d.fillText("ステージセレクトへ", 350, 370);
    ctx2d.font = "36px HiraMinPro-W6";
    ctx2d.fillText("タイトルに戻る", 350, 470);
    if (selectmode==0){
        make_shape(310,255,260,285,260,225); //三角形描画
    }
    else if(selectmode==1){
        make_shape(310,355,260,385,260,325); //三角形描画
    }
    else if(selectmode==2){
        make_shape(310,455,260,485,260,425);
    }
    if (to_retry){ //retryの遷移
        to_retry=false;
        selectmode=0;
        pause_check=false;
        bgmeasy.volume(0.2);//volume戻す
        bgmnormal.volume(0.2);//volume戻す
    }
    if (to_select){ //select画面の遷移
        to_select=false;
        selectmode=0;
        pause_check=false;
        life=Life;//残機カウントの初期化
        if(mode>=50 && mode<=59){
            bgmeasy.stop();//bgm停止
            bgmeasy.volume(0.2);//volume戻す
        }
        if(mode>=60 && mode<=73){
            bgmnormal.stop();//bgm停止
            bgmnormal.volume(0.2);//volume戻す
        }


        if (mode>9 && mode<50){
            mode=2;
        }
        else{
            mode=3;
        }
    }
    if (to_title){ //タイトル画面への遷移
        to_title=false;
        selectmode=0;
        pause_check=false;
        life=Life;//残機カウントの初期化
        if(mode>=50 && mode<=55){
            bgmeasy.stop();//bgm停止
        }
        if(mode>=60 && mode<=69){
            bgmnormal.stop();//bgm停止
        }
        mode=0;
    }
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//テンプレート
function game_temp1(x){
    t++;//システム系の処理
    
    ctx2d.fillStyle=white;//
    ctx2d.font = "30px san-serif";
    ctx2d.fillText("P: 一時停止", 60, 630);

    if(mode>9 && mode<50){//score mode
        ctx2d.fillText("Stage: "+x, 60, 74);
        ctx2d.font = "28px san-serif";
        ctx2d.fillText("Deaths: "+death, 500, 74);
        ctx2d.fillText("Time: "+Math.floor(t/3600)+"m"+Math.floor((t/60)%60)+"s", 710, 64);
    }

    else if(mode>=50 && mode<90){
        if(mode>=50 && mode<60){//easy mode
        ctx2d.fillText("Easy: "+x+"/6", 60, 64);}
        else if(mode>=60 && mode<70){//normal mode
        ctx2d.fillText("Normal: "+x+"/6", 60, 64);}
        else if(mode>=70 && mode<80){//hard mode
        ctx2d.fillText("Hard "+x+"/4", 60, 64);}
        else if(mode>=80 && mode<90){//extrahard mode
        ctx2d.fillText("Extrahard No."+x, 60, 64);}

        ctx2d.font = "28px san-serif";
        ctx2d.lineWidth = "4";
        ctx2d.lineJoin = "miter";
        ctx2d.miterLimit = "4"
        ctx2d.strokeStyle=white;
        ctx2d.strokeText("Life: "+life, 535, 64);
        ctx2d.font = "28px san-serif"; 

        if(life>Math.floor(Life/2)){ctx2d.fillStyle=blue;}
        else if(life>Math.floor(Life/5)){ctx2d.fillStyle=lightgreen;}
        else {ctx2d.fillStyle=red;}
        ctx2d.fillText("Life: "+life, 535, 64);
        ctx2d.fillStyle=white;
        ctx2d.fillText("残り時間: "+Math.floor((36000-t)/3600)+"m"+Math.floor((36000-t/60)%60)+"s", 685, 64);
    }
}

function game_temp2(){ //序盤ゲーム配置easy専用
    //fieldarea1
    gamearea(1);
    //startarea
    startarea(1);
    //goalarea
    goalarea(1);
    //character
    ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
    ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);
    //wall0
    ctx2d.fillStyle=black;
    ctx2d.fillRect(wall1[0][0],wall1[0][1],wall1[0][2],wall1[0][3]);
    //wall1
    ctx2d.fillStyle=black;
    ctx2d.fillRect(wall1[1][0],wall1[1][1],wall1[1][2],wall1[1][3]);
    //wall2
    ctx2d.fillStyle=black;
    ctx2d.fillRect(wall1[2][0],wall1[2][1],wall1[2][2],wall1[2][3]);
    //wall3
    ctx2d.fillStyle=black;
    ctx2d.fillRect(wall1[3][0],wall1[3][1],wall1[3][2],wall1[3][3]);
}

function game_temp3(){
    //goal判定(座標変換取りも先に書く!!)
    var imageData = ctx2d.getImageData(chara_x-1, chara_y, 1, 1);
    var data = imageData.data;//[r,g,b,透明]の４情報
    var goala= data[0]==goalcol1_r && data[1]==goalcol1_g && data[2]==goalcol1_b;
    var goalb= data[0]==goalcol2_r && data[1]==goalcol2_g && data[2]==goalcol2_b;
    imageData = ctx2d.getImageData(chara_x+chara_width+1, chara_y+chara_height, 1, 1);
    data = imageData.data;//[r,g,b,透明]の４情報
    var goalc= data[0]==goalcol1_r && data[1]==goalcol1_g && data[2]==goalcol1_b;
    var goald= data[0]==goalcol2_r && data[1]==goalcol2_g && data[2]==goalcol2_b;
    imageData = ctx2d.getImageData(chara_x+chara_width, chara_y+chara_height+1, 1, 1);
    data = imageData.data;//[r,g,b,透明]の４情報
    var goale= data[0]==goalcol1_r && data[1]==goalcol1_g && data[2]==goalcol1_b;
    var goalf= data[0]==goalcol2_r && data[1]==goalcol2_g && data[2]==goalcol2_b;
    
    if ((goala && goalc) ||(goala && goald) || (goalb && goalc) || (goalb && goald) || (goala && goale) || (goala && goalf) || (goalb && goale) || (goalb && goalf)){
        goal_check=true;
    }
    else {
        goal_check=false;
    }


    
    //キャラクターの移動処理 x
    if(vecx<realvecx) {realvecx-=0.1;}//入力値よりも大きい時実際の速度を減らす
    if(vecx>realvecx) {realvecx+=0.1;}//入力値よりも小さい時実際の速度を増やす
    if(Math.abs(vecx-realvecx)<0.1) {realvecx=vecx;}//振動が発生しないようにしている
    if(realvecx>0){
        if(touchwall(chara_x+chara_width+realvecx, chara_y) && touchwall(chara_x+chara_width+realvecx, chara_y+chara_height)){
            chara_x+=Math.min(realvecx,vec);}
    }
    else{//負の時
        if(touchwall(chara_x+realvecx, chara_y) && touchwall(chara_x+realvecx, chara_y+chara_height)){
            chara_x+=Math.max(realvecx,-vec);}
    }
    //キャラクターの移動処理 y
    if(vecy<realvecy) {realvecy-=0.1;}
    if(vecy>realvecy) {realvecy+=0.1;}
    if(Math.abs(vecy-realvecy)<0.1) {realvecy=vecy;}
    if(realvecy>0){
        if(touchwall(chara_x, chara_y+chara_height+realvecy) && touchwall(chara_x+chara_width, chara_y+chara_height+realvecy)){
            chara_y+=Math.min(realvecy,vec);}
    }
    else{//負の時
        if(touchwall(chara_x, chara_y+realvecy) && touchwall(chara_x+chara_width, chara_y+realvecy)) {
            chara_y+=Math.max(realvecy,-vec);}
    }

    //hit判定
    imagedata = ctx2d.getImageData(chara_x,chara_y,chara_width, chara_height);
    data = imagedata.data;
    const hit1= data[0]==enemycolor_r && data[1]==enemycolor_g && data[2]== enemycolor_b;
    const hit2= data[76]==enemycolor_r && data[77]==enemycolor_g && data[78]== enemycolor_b;
    const hit3= data[1520]==enemycolor_r && data[1521]==enemycolor_g && data[1522]== enemycolor_b;
    const hit4= data[1596]==enemycolor_r && data[1597]==enemycolor_g && data[1598]== enemycolor_b;
    const hit5= data[0]==enemycol2_r && data[1]==enemycol2_g && data[2]== enemycol2_b;
    const hit6= data[76]==enemycol2_r && data[77]==enemycol2_g && data[78]== enemycol2_b;
    const hit7= data[1520]==enemycol2_r && data[1521]==enemycol2_g && data[1522]== enemycol2_b;
    const hit8= data[1596]==enemycol2_r && data[1597]==enemycol2_g && data[1598]== enemycol2_b;
    if (hit1 || hit2 || hit3 || hit4 || hit5 || hit6 || hit7 || hit8){
        death_check=true;
    }

    //1UP判定
    var oneup1= data[0]==oneupcol_r && data[1]==oneupcol_g && data[2]== oneupcol_b;
    var oneup2= data[76]==oneupcol_r && data[77]==oneupcol_g && data[78]== oneupcol_b;
    var oneup3= data[1520]==oneupcol_r && data[1521]==oneupcol_g && data[1522]== oneupcol_b;
    var oneup4= data[1596]==oneupcol_r && data[1597]==oneupcol_g && data[1598]== oneupcol_b;
    if (oneup1 || oneup2 || oneup3 || oneup4){
        oneup_check=true;
    }

    //save判定
    var save1=data[0]==savecolr && data[1]==savecolg && data[2]==savecolb;
    var save2=data[76]==savecolr && data[77]==savecolg && data[78]==savecolb;
    var save3=data[1520]==savecolr && data[1521]==savecolg && data[1522]==savecolb;
    var save4=data[1596]==savecolr && data[1597]==savecolg && data[1598]==savecolb;
    if (save1 || save2 || save3 || save4){
        save_check=true;
    }

    //cannon判定


    death_fadeout();
    oneup();
    save();

    if(pause_check){ //pause画面起動
        pause();
    }
    if(mode>49 && life_check){ //story mode gameover
        gameover();
    }

    if (goal_check){ //goal判定
        if(mode>9 && mode<50){
            next_stage();
        }
        else if(mode>=50 && mode<100){
            if(mode==55 || mode==65 || mode==73){
                storyclear();
            }
            else{
                next_stage1();
            }
        }
    }
}

function game_temp4(){
    //2次元のリセット処理
    ctx2d.clearRect(0,0,width,height);
    
    ctx2d.fillStyle=lightgray;
    for(let i=30; i<930; i+=120){
        for(let j=70; j<590; j+=120){
            ctx2d.fillRect(i,j,60,60);}
    }
    //画面ごとにparpleのブロックの位置を変える
    if(mode==0){
        ctx2d.fillStyle=pastle_parple;
        ctx2d.fillRect(30,70,60,60);
        ctx2d.fillRect(30+120*7,70+120*0,60,60);

    }
    else if(mode==1){
        ctx2d.fillStyle=pastle_parple;
        ctx2d.fillRect(30+120*1,70+120*3,60,60);
        ctx2d.fillRect(30+120*6,70+120*1,60,60);
    }
    else if(mode==3){
        ctx2d.fillStyle=pastle_parple;
        ctx2d.fillRect(30+120*2,70+120*2,60,60);
        ctx2d.fillRect(30+120*4,70+120*3,60,60);
        ctx2d.fillRect(30+120*6,70+120*1,60,60);
    }
    else if(mode>=50 && mode<60){
        ctx2d.fillStyle=pastle_parple;
        ctx2d.fillRect(30+120*2,70+120*2,60,60);
        ctx2d.fillRect(30+120*4,70+120*3,60,60);
        ctx2d.fillRect(30+120*6,70+120*1,60,60);
    }

    else if(mode==65){
        ctx2d.fillStyle=pastle_parple;
        for(let i=30; i<930; i+=240){
            for(let j=70; j<590; j+=240){
                ctx2d.fillRect(i,j,60,60);}}
    }

    else if(mode>=60 && mode<72){
        ctx2d.fillStyle=pastle_parple;
        ctx2d.fillRect(30+120*0,70+120*3,60,60);
        ctx2d.fillRect(30+120*5,70+120*3,60,60);
        ctx2d.fillRect(30+120*4,70+120*0,60,60);
        ctx2d.fillRect(30+120*1,70+120*0,60,60);
    }
    else if(mode==73){
        ctx2d.fillStyle=pastle_parple;
        ctx2d.fillRect(30+120*1,70+120*3,60,60);
        ctx2d.fillRect(30+120*5,70+120*3,60,60);
        ctx2d.fillRect(30+120*3,70+120*1,60,60);
        ctx2d.fillRect(30+120*1,70+120*0,60,60);
        ctx2d.fillRect(30+120*6,70+120*2,60,60);
        ctx2d.fillRect(30+120*4,70+120*3,60,60);
    }
    
    ctx2d.fillStyle=black;//
    ctx2d.fillRect(30,30,900,40);
    ctx2d.fillStyle=black;//
    ctx2d.fillRect(30,590,900,70);
}

function gametemp_fade(){//fade画面の黒
    if (incheck){
        fadein();
    }
    ctx2d.fillStyle="rgba(0,0,0,"+page_alphain+")";//fadeinの層
    ctx2d.fillRect(30,30,900,660);

    ctx2d.fillStyle="rgba(0,0,0,"+page_alpha+")";//fadeoutの層
    ctx2d.fillRect(30,30,900,660);
}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

window.addEventListener('load', init); //ロードイベント登録
window.addEventListener('DOMContentLoaded', function(){ ///キー入力イベント登録
    window.addEventListener("keydown", function(e){
        keypress(e.key,e.keyCode);
    });
    window.addEventListener("keyup", function(e){ //キー離脱イベント登録
        keyup(e.key,e.keyCode);
    });

});


function init() {
    //ローディング処理////////////////////////////////////////

    //2Dの処理
    ctx2d=document.getElementById("myCanvas").getContext("2d");
    ctx2d.width = width;
    ctx2d.height = height;

    tick();

    function tick() {
        //dataの管理
        if(localStorage.getItem('Check')==undefined){
            //初期化の処理

            //ユーザー名
            localStorage.setItem('user', 'none');

            //ステージ達成状況Easy,Normal,Hard,Exhard:
            //A(ステージ攻略数,0-10)  B(最高スコア,0-)  C(ランク6-1(S-E),0(z))
            localStorage.setItem('easy_a', '0');
            localStorage.setItem('easy_b', '0');
            localStorage.setItem('easy_c', '0');

            localStorage.setItem('normal_a', '0');
            localStorage.setItem('normal_b', '0');
            localStorage.setItem('normal_c', '0');

            localStorage.setItem('hard_a', '0');
            localStorage.setItem('hard_b', '0');
            localStorage.setItem('hard_c', '0');

            localStorage.setItem('exhard_a', '0');
            localStorage.setItem('exhard_b', '0');
            localStorage.setItem('exhard_c', '0');

            //称号clear:ステージクリア(unclear-clear)
            localStorage.setItem('A_clear_easy', 'unclear');
            localStorage.setItem('A_clear_normal', 'unclear');
            localStorage.setItem('A_clear_hard', 'unclear');
            localStorage.setItem('A_clear_exhard', 'unclear');

            //称号allclear:easy-hardまで全てクリア
            localStorage.setItem('A_allclear', 'unclear');

            //称号rank:S,Aのランク(unclear-clear)
            //Cを使えばいいから必要ない


            //称号life: 1回も死なずにクリアできた
            localStorage.setItem('A_life_easy', 'unclear');
            localStorage.setItem('A_life_normal', 'unclear');
            localStorage.setItem('A_life_hard', 'unclear');
            localStorage.setItem('A_life_exhard', 'unclear');

            //称号3time,5time:クリアタイム3分台,5分台
            localStorage.setItem('A_3time_easy', 'unclear');
            localStorage.setItem('A_5time_easy', 'unclear');
            localStorage.setItem('A_3time_normal', 'unclear');
            localStorage.setItem('A_5time_normal', 'unclear');
            localStorage.setItem('A_3time_hard', 'unclear');
            localStorage.setItem('A_5time_hard', 'unclear');
            localStorage.setItem('A_3time_exhard', 'unclear');
            localStorage.setItem('A_5time_exhard', 'unclear');

            //称号extra:ここはやり込み要素

            //初期設定終了
            localStorage.setItem('Check', 'checked');
        }
        ////////////////////////////////////////////////
        if (mode==0) { //タイトル画面
            location_chara();
            t++;
            game_temp4();

            game_temp2();

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(500,enemy_motion3(330,130,30,0),enemy_width,enemy_height);

            ctx2d.fillStyle=black;//タイトル名
            ctx2d.font = "36px HiraMinPro-W6";
            ctx2d.fillText("Squares", 410, canvas0_top+canvas0_height/10);

            text_ani(0.3,0.04,0.03);
            var black_trans="rgba(0,0,0,"+text_trans+")";
            ctx2d.fillStyle=black_trans;// space key
            ctx2d.font = "36px HiraMinPro-W6";
            ctx2d.fillText("Press  Space  Key", 320, 560);

            gametemp_fade();

            if (space_check){ //ゲーム画面への遷移
                fadeout();
                if (page_check){
                    mode=1;
                    space_check=false;
                    incheck=true;
                }
            }
        }

        if (mode==1){ //セレクト画面
            if(bgm0_check){
                bgm0.play();
                bgm0_check=false;}
            bgm0.on('end',() => {
                if(bgm1_check){
                    bgm1.play("play1");
                    bgm1_check=false;}
            });

            game_temp4();
            
            ctx2d.fillStyle=white;
            ctx2d.font = "32px san-serif";
            ctx2d.fillText("Menu", 60,64);

            text_ani(0.3,0.01,0.01);
            var white_trans="rgba(255,255,255,"+text_trans+")";
            ctx2d.fillStyle=white_trans;
            ctx2d.fillText("Space: 決定", 700, 64);

            ctx2d.fillStyle=black;
            ctx2d.font = "30px san-serif 'Impact'";
            ctx2d.fillText("Score Mode", 400, 180);
            ctx2d.fillText("Story Mode", 400, 240);

            
            ctx2d.fillText("タイトルに戻る", 400, 300);
            ctx2d.fillText("設定", 400, 360);
            ctx2d.fillText("操作方法", 400, 420);
            ctx2d.fillText("Record", 400, 480);

            ctx2d.font = "40px 'Impact'";
            ctx2d.lineWidth = "5";
            ctx2d.lineJoin = "miter";
            ctx2d.miterLimit = "4";

            if (selectmode==0){
                make_shape(340,167,290,197,290,137); //三角形描画
            }
            if (selectmode==1){
                make_shape(340,225,290,255,290,195); //三角形描画
            } 
            else if(selectmode==2){
                make_shape(340,287,290,317,290,257); //三角形描画
            }
            else if(selectmode==3){
                make_shape(340,345,290,375,290,315); //三角形描画
            }
            else if(selectmode==4){
                make_shape(340,407,290,437,290,377); //三角形描画
            }
            else if(selectmode==5){
                make_shape(340,465,290,495,290,435); //三角形描画
            }

            gametemp_fade();

            if (to_play){ //セレクト画面への遷移
                fadeout();
                if (page_check){
                    mode=2;
                    to_play=false;
                    selectmode=0;
                    incheck=true;
                }
            }
            if (to_story){ //セレクト画面への遷移
                fadeout();
                if (page_check){
                    mode=3;
                    to_story=false;
                    selectmode=0;
                    incheck=true;
                }
            }
            if (to_title){ //タイトル画面への遷移
                fadeout();
                if (page_check){
                    mode=0;
                    to_title=false;
                    selectmode=0;
                    incheck=true;
                }
            }
            if (to_config){ //設定画面への遷移
                fadeout();
                if (page_check){
                    mode=-1;
                    to_config=false;
                    selectmode=0;
                    incheck=true;
                }
            }
            if (to_control){ //操作方法画面への遷移
                fadeout();
                if (page_check){
                    mode=-2;
                    to_control=false;
                    selectmode=0;
                    incheck=true;    
                }
            }
            if (to_record){ //record画面への遷移
                fadeout();
                if (page_check){
                    mode=5;
                    to_record=false;
                    selectmode=0;
                    incheck=true;    
                }
            }
        }

        if (mode==2){ //stageselect画面
            if(bgm0_check){
                bgm0.play();
                bgm0_check=false;}
            bgm0.on('end',() => {
                if(bgm1_check){
                    bgm1.play("play1");
                    bgm1_check=false;}
            });

            game_temp4();

            //ctx2d.fillStyle="rgba(0,0,0,1.0)";
            //ctx2d.font = "36px HiraMinPro-W6";
            //ctx2d.fillText("Mode: "+selectmode, 300, 500);
            ctx2d.fillStyle=white;
            ctx2d.font = "28px san-serif";
            ctx2d.fillText("Stage", 60, 60);

            text_ani(0.3,0.01,0.01);
            var white_trans="rgba(255,255,255,"+text_trans+")";
            ctx2d.fillStyle=white_trans;
            ctx2d.fillText("Space: 決定", 700, 64);
            ctx2d.fillStyle=black;
            ctx2d.font = "36px san-serif";
            ctx2d.fillText("Stage1", 400, 180);
    
            ctx2d.fillText("Stage2", 400, 280);
        
            ctx2d.fillText("Stage3", 400, 380);

            ctx2d.fillText("Menuに戻る", 400, 480);

            ctx2d.font = "40px 'Impact'";
            ctx2d.lineWidth = "5";
            ctx2d.lineJoin = "miter";
            ctx2d.miterLimit = "4";

            if (selectmode==0){
                make_shape(340,167,290,197,290,137); //三角形描画
            }
            else if(selectmode==1){
                make_shape(340,267,290,297,290,237); //三角形描画
            }
            else if(selectmode==2){
                make_shape(340,367,290,397,290,337); //三角形描画
            }
            else if(selectmode==3){
                make_shape(340,467,290,497,290,437); //三角形描画
            }
            

            gametemp_fade();

            if (to_game){ //プレイ画面への遷移
                fadeout();
                if(page_check){
                    t=0;
                    mode+=selectmode+8;
                    to_game=false;
                    selectmode=0;
                    location_chara();
                    incheck=true;
                }
            }
            if (to_menu){ //タイトル画面への遷移
                fadeout();
                if(page_check){
                    mode=1;
                    to_menu=false;
                    selectmode=0;
                    incheck=true;
                }
            }
        }

        if(mode==3){ //story modeの選択画面
            if(bgm0_check){
                bgm0.play();
                bgm0_check=false;}
            bgm0.on('end',() => {
                if(bgm1_check){
                    bgm1.play("play1");
                    bgm1_check=false;}
            });

            game_temp4();
            
            ctx2d.fillStyle=white;
            ctx2d.font = "24px san-serif";
            ctx2d.fillText("Story mode", 60,64);

            text_ani(0.3,0.00001,0.00001);
            var white_trans="rgba(255,255,255,"+text_trans+")";
            ctx2d.fillStyle=white_trans;
            ctx2d.fillText("Space: 決定", 750, 64);

            ctx2d.fillStyle=black;
            ctx2d.font = "30px san-serif";
            ctx2d.fillText("Easy", 400, 180);
            ctx2d.fillText("Normal", 400, 260);
            ctx2d.fillText("Hard", 400, 340);
            ctx2d.fillText("????", 400, 420);
            ctx2d.fillText("Menuに戻る", 400, 500);

            ctx2d.font = "40px 'Impact'";
            ctx2d.lineWidth = "5";
            ctx2d.lineJoin = "miter";
            ctx2d.miterLimit = "4";
            if (selectmode==0){
                make_shape(340,167,290,197,290,137); //三角形描画
            }
            else if(selectmode==1){
                make_shape(340,247,290,277,290,217); //三角形描画
            }
            else if(selectmode==2){
                make_shape(340,327,290,357,290,297); //三角形描画
            }
            else if(selectmode==3){
                make_shape(340,407,290,437,290,377); //三角形描画
            }
            else if(selectmode==4){
                make_shape(340,487,290,517,290,457); //三角形描画
            }

            if (incheck){
                fadein();
            }
            ctx2d.fillStyle="rgba(0,0,0,"+page_alphain+")";//fadeinの層
            ctx2d.fillRect(30,30,900,660);

            ctx2d.fillStyle="rgba(0,0,0,"+page_alpha+")";//fadeoutの層
            ctx2d.fillRect(30,30,900,660);

            if (to_easy){ //easyステージへの遷移
                fadeout();
                if(page_check){
                    mode=50;
                    to_easy=false;
                    selectmode=0;
                    incheck=true;
                    oneup_check=false;//1upオブジェクト設定
                    loc_check=false;//save真偽りセット
                    location_chara();
                    life=Lifeset();
                    //sound
                    bgm1.stop();//bgm停止
                    bgm0_check=true;
                    bgm1_check=true;//bgm関数初期化
                    bgmeasy.play();//easybgm開始
                    bgmeasy.fade(0,0.2,5000);//fadein
                }
            }
            if (to_normal){ //normalステージへの遷移
                fadeout();
                if(page_check){
                    mode=60;
                    to_normal=false;
                    selectmode=0;
                    incheck=true;
                    oneup_check=false;//1upオブジェクト設定
                    loc_check=false;//save真偽りセット
                    location_chara();
                    life=Lifeset();

                    bgm1.stop();//bgm停止
                    bgm0_check=true;
                    bgm1_check=true;//bgm関数初期化
                    bgmnormal.play("play1");//normalbgm再生
                    bgmnormal.fade(0,0.2,5000);//fadein
                }
            }
            if (to_hard){ //hardステージへの遷移
                fadeout();
                if(page_check){
                    mode=70;
                    to_hard=false;
                    selectmode=0;
                    incheck=true;
                    oneup_check=false;//1upオブジェクト設定
                    loc_check=false;//save真偽りセット
                    location_chara();
                    life=Lifeset();

                    bgm1.stop();//bgm停止
                    bgm0_check=true;
                    bgm1_check=true;//bgm関数初期化
                    bgmnormal.play("play1");//normalbgm再生
                    bgmnormal.fade(0,0.2,5000);//fadein
                }
            }
            if (to_extrahard){ //extrahardへの遷移
                fadeout();
                if(page_check){
                    mode=80;
                    to_extrahard=false;
                    selectmode=0;
                    incheck=true;
                    oneup_check=false;//1upオブジェクト設定
                    loc_check=false;//save真偽りセット
                    location_chara();
                    life=Lifeset();

                    bgm1.stop();//bgm停止
                    bgm0_check=true;
                    bgm1_check=true;//bgm関数初期化
                }
            }
            if (to_menu){ //タイトル画面への遷移
                fadeout();
                if(page_check){
                    mode=1;
                    to_menu=false;
                    selectmode=0;
                    incheck=true;
                }
            }
        }

        if(mode==5){ //称号
            game_temp4();
            ctx2d.fillStyle=white;//
            ctx2d.font = "24px san-serif";
            ctx2d.fillText("Record", 60, 64);
            text_ani(0.3,0.01,0.01);
            var white_trans="rgba(255,255,255,"+text_trans+")";
            ctx2d.fillStyle=white_trans;
            ctx2d.font = "24px";
            ctx2d.fillText("Space: Menu画面へ", 60, 628);
            ctx2d.font = "24px ";

            num_rec=130;
            num_recx=130;

            if(selectmode==0){
                make_shape(905,325,885,312,885,338); //三角形描画

                //称号判定
                //stage CLEAR(easy-exhard)
                if(localStorage.getItem('A_clear_easy')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・ステージクリア(Easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();
                if(localStorage.getItem('A_clear_normal')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・ステージクリア(Normal mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_clear_hard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・ステージクリア(Hard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_clear_exhard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・ステージクリア(Exhard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                //allclear
                if(localStorage.getItem('A_allclear')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・ステージクリア(Easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_rec+=40;

                //rankA(easy-exhard)、C5
                if(Number(localStorage.getItem('easy_c'))==5){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Arank(easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('normal_c')=='5'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Arank(normal mode)", num_recx, num_rec);
                }
                
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('hard_c')=='5'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Arank(hard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('exhard_c')=='5'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Arank(exhard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                //rankS(easy-exhard),C6//////////
                if(localStorage.getItem('easy_c')=='6'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Srank(easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('normal_c')=='6'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Srank(normal mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('hard_c')=='6'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Srank(hard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('exhard_c')=='6'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・Srank(exhard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_rec=130;
                num_recx=550;


                //life(easy-exhard)
                if(localStorage.getItem('A_life_easy')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・No died(easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx,num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_life_normal')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・No died(easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_life_hard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・No died(hard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_life_exhard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・No died(exhard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_rec+=40;


                //3time(easy-exhard)
                if(localStorage.getItem('A_3time_easy')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・3time(easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_3time_normal')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・3time(normal mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_3time_hard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・3time(hard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_3time_exhard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・3time(exhard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_rec+=40;
                
                //5time(easy-exhard)
                if(localStorage.getItem('A_5time_easy')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・5time(easy mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_5time_normal')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・5time(normal mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_5time_hard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・5time(hard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                if(localStorage.getItem('A_5time_exhard')=='clear'){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・5time(exhard mode)", num_recx, num_rec);
                }
                else{
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("・????????", num_recx, num_rec);
                }
                num_plus();

                ///////////////////////////////
            }
            else if(selectmode==1){
                make_shape(55,325,75,312,75,338); //三角形描画

            }



            gametemp_fade();
            if (to_menu){ //タイトル画面への遷移
                fadeout();
                if(page_check){
                    mode=1;
                    to_menu=false;
                    selectmode=0;
                    incheck=true;    
                }
            }
        }


        if (mode==10){ //stage1
            game_temp4();
            game_temp1(1);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(500,enemy_motion3(330,130,30,0),enemy_width,enemy_height);
            
            game_temp3();
        }

        if (mode==11){
            game_temp4();
            game_temp1(2);
            game_temp2();
            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(500,enemy_motion3(330,130,30,0),enemy_width,enemy_height);
            //enemy2
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(620,enemy_motion3(330,130,-40,0),enemy_width,enemy_height);
            //enemy3
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(300,enemy_motion3(290,90,40,0),enemy_width,enemy_height);
            //enemy4
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(400,enemy_motion3(370,90,-40,0),enemy_width,enemy_height);
            //enemy5
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(460,enemy_motion3(290,90,40,0),enemy_width,enemy_height);

            game_temp3();
        }

        if (mode==12){
            game_temp4();
            game_temp1(3);
            game_temp2();
            //enemy1
            ctx2d.fillStyle=enemy_color;
            enemy_motionc1(380,300,50,12,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            //enemy2
            enemy_motionc2(380,390,70,17);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            //enemy3
            enemy_motionc2(360,230,30,6);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            //enemy11
            ctx2d.fillRect(enemy_motion5(530,60,12.56,0), enemy_motion6(400,60,6.28,0),enemy_width,enemy_height);

            game_temp3();
        }

        

        if(mode==50){ //easy1
            game_temp4();
            game_temp1(1);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(300,200,40,80);
            ctx2d.fillRect(540,200,40,80);
            ctx2d.fillRect(340,400,40,80);
            ctx2d.fillRect(500,400,40,80);
            ctx2d.fillRect(420,280,40,80);
            ctx2d.fillRect(540,400,40,40);

            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(580,enemy_motion3(330,60,30,0),enemy_width,enemy_height);
            ctx2d.fillRect(620,enemy_motion3(330,130,20,0),enemy_width,enemy_height);
            
            gametemp_fade();
            game_temp3();
        }
        if(mode==51){ //easy2
            game_temp4();
            game_temp1(2);
            game_temp2();

            //1up
            if(realoneup){
                ctx2d.fillStyle=oneupcol;
                ctx2d.fillRect(420,210,30,30);
                ctx2d.font = "22px san-serif";
                ctx2d.fillStyle=white;
                ctx2d.fillText("3", 428, 233);
            }

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(300,enemy_motion3(300,90,24,0),enemy_width,enemy_height);
            ctx2d.fillRect(380,enemy_motion3(330,90,-24,0),enemy_width,enemy_height);
            ctx2d.fillRect(460,enemy_motion3(330,130,24,0),enemy_width,enemy_height);
            ctx2d.fillRect(520,enemy_motion3(330,130,-24,0),enemy_width,enemy_height);
            ctx2d.fillRect(580,enemy_motion3(330,120,28,0),enemy_width,enemy_height);
            

            gametemp_fade();
            game_temp3();
        }
        if(mode==52){ //easy3
            game_temp4();
            game_temp1(3);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemy_color;
            
            ctx2d.fillRect(470,330,20,20);
            for (let i=20; i<121; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(470,330,i,32,j);
                    ctx2d.fillRect(a,b,20,20);
                }
            }

            gametemp_fade();
            game_temp3();
        }
        if(mode==53){ //easy4
            game_temp4();
            game_temp1(4);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(280,enemy_motion3(330,130,-30,0),enemy_width,enemy_height);
            ctx2d.fillRect(300,enemy_motion3(330,130,-30,0.5),enemy_width,enemy_height);
            ctx2d.fillRect(320,enemy_motion3(330,130,-30,1),enemy_width,enemy_height);
            ctx2d.fillRect(340,enemy_motion3(330,130,-30,1.5),enemy_width,enemy_height);
            ctx2d.fillRect(360,enemy_motion3(330,130,-30,2),enemy_width,enemy_height);
            ctx2d.fillRect(380,enemy_motion3(330,130,-30,2.5),enemy_width,enemy_height);
            
            ctx2d.fillRect(440,enemy_motion3(330,130,-25,5.5),enemy_width,enemy_height);
            ctx2d.fillRect(460,enemy_motion3(330,130,-25,6),enemy_width,enemy_height);
            ctx2d.fillRect(480,enemy_motion3(330,130,-25,6.5),enemy_width,enemy_height);
            ctx2d.fillRect(500,enemy_motion3(330,130,-25,7),enemy_width,enemy_height);
            ctx2d.fillRect(520,enemy_motion3(330,130,-25,7.5),enemy_width,enemy_height);
            
            ctx2d.fillRect(580,enemy_motion3(330,130,-20,1),enemy_width,enemy_height);
            ctx2d.fillRect(600,enemy_motion3(330,130,-20,1.5),enemy_width,enemy_height);
            ctx2d.fillRect(620,enemy_motion3(330,130,-20,2),enemy_width,enemy_height);
            ctx2d.fillRect(640,enemy_motion3(330,130,-20,2.5),enemy_width,enemy_height);
            ctx2d.fillRect(660,enemy_motion3(330,130,-20,3),enemy_width,enemy_height);
            

            gametemp_fade();
            game_temp3();
        }
        if(mode==54){ //easy5
            game_temp4();
            game_temp1(5);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(280,200,10,60);
            ctx2d.fillRect(280,300,10,90);
            ctx2d.fillRect(280,430,10,50);
            ctx2d.fillRect(320,230,10,130);
            ctx2d.fillRect(280,390,90,10);
            ctx2d.fillRect(360,400,140,10);
            ctx2d.fillRect(400,360,110,10);
            ctx2d.fillRect(500,360,10,50);

            ctx2d.fillRect(330,230,100,10);
            ctx2d.fillRect(330,270,130,10);
            ctx2d.fillRect(360,310,150,10);
            ctx2d.fillRect(670,200,10,120);
            ctx2d.fillRect(620,230,10,90);
            ctx2d.fillRect(580,310,90,10);
            ctx2d.fillRect(550,270,40,10);

            ctx2d.fillRect(460,200,10,80);
            ctx2d.fillRect(500,230,10,80);
            ctx2d.fillRect(510,230,120,10);

            ctx2d.fillRect(360,310,10,90);

            ctx2d.fillRect(540,270,10,130);
            ctx2d.fillRect(320,430,10,20);
            ctx2d.fillRect(320,440,320,10);
            ctx2d.fillRect(670,360,10,120);
            ctx2d.fillRect(540,350,140,10);
            ctx2d.fillRect(540,400,100,10);
            ctx2d.fillRect(630,410,10,30);

            gametemp_fade();
            game_temp3();
        }
        if(mode==55){ //easy6
            game_temp4();
            game_temp1(6);
            game_temp2();

            //enemy
            //ctx2d.fillStyle=black;
            //ctx2d.strokeRect(440,200,100,40);
            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(440,200,100,40);
            ctx2d.fillRect(440,440,100,40);
            ctx2d.fillStyle=enemy_color;
            enemy_motionc1(350,265,65,12,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc2(350,395,65,13);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,250,50,17,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc2(500,325,50,15);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,410,50,17,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);

            gametemp_fade();
            game_temp3();
        }

        if(mode==60){ //normal1
            game_temp4();
            game_temp1(1);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(280,280,60,120);
            ctx2d.fillRect(520,280,60,120);
            ctx2d.fillRect(380,200,100,60);
            ctx2d.fillRect(380,420,100,60);
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion1(420,80,-35,0),260,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(420,80,35,1),300,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(420,80,-35,1),340,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(420,80,35,0),380,enemy_width,enemy_height*2);

            enemy_motionc1(620,240,32,20,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(620,420,32,20,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);

            gametemp_fade();
            game_temp3();
        }

        if (mode==61){
            game_temp4();
            game_temp1(2);

            startarea(3);
            goalarea(3);
            gamearea(3);
            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall
            ctx2d.fillStyle=black;
            ctx2d.fillRect(100,120,20,80);
            ctx2d.fillRect(100,120,740,10);
            ctx2d.fillRect(100,190,600,10);
            ctx2d.fillRect(690,190,10,290);
            ctx2d.fillRect(840,120,10,210);
            ctx2d.fillRect(840,390,10,170);
            ctx2d.fillRect(840,320,40,10);
            ctx2d.fillRect(840,390,40,10);
            ctx2d.fillRect(870,320,10,80);

            ctx2d.fillRect(240,480,460,10);
            ctx2d.fillRect(130,550,720,10);
            ctx2d.fillRect(130,250,10,300);
            ctx2d.fillRect(240,320,10,170);

            ctx2d.fillRect(130,240,500,10);
            ctx2d.fillRect(240,310,300,10);
            ctx2d.fillRect(620,250,10,190);
            ctx2d.fillRect(530,320,10,70);

            ctx2d.fillRect(310,380,230,10);
            ctx2d.fillRect(310,430,320,10);
            ctx2d.fillRect(310,380,10,60);

            //lifeup
            if(realoneup){
                ctx2d.fillStyle=oneupcol;
                ctx2d.fillRect(800,510,30,30);
                ctx2d.font = "22px san-serif";
                ctx2d.fillStyle=white;
                ctx2d.fillText("10", 800, 535);
            }

            //savepoint
            if(realsave){
                ctx2d.fillStyle=savecol;
                ctx2d.fillRect(660,500,30,30);
                ctx2d.font = "25px san-serif";
                ctx2d.fillStyle=black;
                ctx2d.fillText("S", 667, 525);
            }

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion1(300,100,45,0),137,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(460,100,-45,0.5),137,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(620,100,45,1.5),137,enemy_width,enemy_height);

            ctx2d.fillRect(enemy_motion1(300,100,-45,0),163,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(460,100,45,1),163,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(620,100,-45,2.5),163,enemy_width,enemy_height);

            enemy_motionc1(760,230,60,18,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(760,230,40,18,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(760,230,20,18,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            ctx2d.fillRect(760,230,enemy_width,enemy_height);
            enemy_motionc1(760,350,60,-30,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(760,350,40,-30,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(760,350,20,-30,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            ctx2d.fillRect(760,350,enemy_width,enemy_height);
            enemy_motionc1(760,470,60,18,1.5);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(760,470,40,18,1.5);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(760,470,20,18,1.5);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            ctx2d.fillRect(760,470,enemy_width,enemy_height);

            ctx2d.fillRect(enemy_motion1(250,100,-45,0),496,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(420,90,45,1),496,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(540,80,-45,2.5),496,enemy_width,enemy_height);

            ctx2d.fillRect(enemy_motion1(250,100,45,0),521,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(420,80,-45,0.5),521,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(540,80,45,1.5),521,enemy_width,enemy_height);

            enemy_motionc1(180,400,40,18,1.5);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(180,400,20,18,1.5);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            ctx2d.fillRect(180,400,enemy_width,enemy_height);
            enemy_motionc1(180,300,40,18,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(180,300,20,18,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            ctx2d.fillRect(180,300,enemy_width,enemy_height);

            ctx2d.fillRect(260,enemy_motion3(275,25,45,0),320,10);
            ctx2d.fillRect(enemy_motion1(575,35,25,1),280,10,120);
            enemy_motionc1(420,400,40,-18,0.5);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);

            //ctx2d.fillRect(enemy_motion4(540,-120),240,enemy_width,enemy_height);

            gametemp_fade();
            game_temp3();
        }

        if(mode==62){
            game_temp4();
            game_temp1(3);

            startarea(4);
            goalarea(4);
            gamearea(4);
            
            //warpエリア
            ctx2d.fillStyle=yellow_thick;
            ctx2d.fillRect(160,130,60,60);
            ctx2d.fillRect(700,130,60,60);
            ctx2d.fillRect(700,250,60,60);
            ctx2d.fillRect(700,370,60,60);
            ctx2d.fillRect(160,490,60,60);
            ctx2d.fillRect(700,490,60,60);

            ctx2d.font = "40px 'Impact'";
            ctx2d.lineWidth = "5";
            ctx2d.lineJoin = "miter";
            ctx2d.miterLimit = "4"
            ctx2d.strokeStyle=black1;
            ctx2d.strokeText("？",170,173);
            ctx2d.fillStyle = "#ffffff"
            ctx2d.fillText("？",170,173);
            ctx2d.strokeText("？",710,173);
            ctx2d.fillStyle = "#ffffff"
            ctx2d.fillText("？",710,173);
            ctx2d.strokeText("？",710,293);
            ctx2d.fillStyle = "#ffffff"
            ctx2d.fillText("？",710,293);
            ctx2d.strokeText("？",710,413);
            ctx2d.fillStyle = "#ffffff"
            ctx2d.fillText("？",710,413);
            ctx2d.strokeText("？",170,533);
            ctx2d.fillStyle = "#ffffff"
            ctx2d.fillText("？",170,533);
            ctx2d.strokeText("？",710,533);
            ctx2d.fillStyle = "#ffffff"
            ctx2d.fillText("？",710,533);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall
            ctx2d.fillStyle=black;
            ctx2d.fillRect(140,120,20,80);
            ctx2d.fillRect(140,240,20,80);
            ctx2d.fillRect(140,360,20,80);
            ctx2d.fillRect(140,480,20,80);
            ctx2d.fillRect(760,120,20,80);
            ctx2d.fillRect(760,240,20,80);
            ctx2d.fillRect(760,360,20,80);
            ctx2d.fillRect(760,480,20,80);
            ctx2d.fillRect(140,120,640,10);
            ctx2d.fillRect(140,240,640,10);
            ctx2d.fillRect(140,360,640,10);
            ctx2d.fillRect(140,480,640,10);
            ctx2d.fillRect(140,190,640,10);
            ctx2d.fillRect(140,310,640,10);
            ctx2d.fillRect(140,430,640,10);
            ctx2d.fillRect(140,550,640,10);

            //lifeup
            if(realoneup){
                ctx2d.fillStyle=oneupcol;
                ctx2d.fillRect(565,160,30,30);
                ctx2d.font = "25px san-serif";
                ctx2d.fillStyle=white;
                ctx2d.fillText("5", 572, 185);
            }
            
            //savepoint
            if(realsave){
                ctx2d.fillStyle=savecol;
                ctx2d.fillRect(460,500,30,30);
                ctx2d.font = "25px san-serif";
                ctx2d.fillStyle=black;
                ctx2d.fillText("S", 467, 525);
            }

            //enemy move
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(300,enemy_motion3(330,80,24,0),enemy_width,enemy_height);
            ctx2d.fillRect(400,enemy_motion3(210,80,24,0.5),enemy_width,enemy_height);
            ctx2d.fillRect(400,enemy_motion3(450,80,-24,0.8),enemy_width,enemy_height);
            ctx2d.fillRect(570,enemy_motion3(200,70,20,0),enemy_width,40);
            ctx2d.fillRect(500,enemy_motion3(450,80,20,0),40,enemy_height);
            ctx2d.fillRect(enemy_motion4(460,-60,200),160,20,enemy_height);
            ctx2d.fillRect(enemy_motion4(650,-90,250),130,20,enemy_height);
            ctx2d.fillRect(640,enemy_motion3(510,20,20,0),20,enemy_height);
            ctx2d.fillRect(620,enemy_motion3(510,20,20,-0.6),20,enemy_height);
            ctx2d.fillRect(600,enemy_motion3(510,20,20,-1.2),20,enemy_height);
            ctx2d.fillRect(580,enemy_motion3(510,20,20,-1.8),20,enemy_height);
            ctx2d.fillRect(560,enemy_motion3(510,20,20,-2.4),20,enemy_height);

            ctx2d.fillRect(340,enemy_motion3(510,20,20,-2.4),20,enemy_height);
            ctx2d.fillRect(320,enemy_motion3(510,20,20,-3),20,enemy_height);
            ctx2d.fillRect(300,enemy_motion3(510,20,20,-3.6),20,enemy_height);
            ctx2d.fillRect(280,enemy_motion3(510,20,20,-4.2),20,enemy_height);
            ctx2d.fillRect(260,enemy_motion3(510,20,20,-4.8),20,enemy_height);
            ctx2d.fillRect(240,enemy_motion3(510,20,20,-5.4),20,enemy_height);

            
            //enemy static
            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(440,250,20,33);
            ctx2d.fillRect(425,250,50,20);
            ctx2d.fillRect(530,287,40,23);
            ctx2d.fillRect(260,250,20,33);
            ctx2d.fillRect(245,250,50,20);
            ctx2d.fillRect(340,277,20,33);
            ctx2d.fillRect(323,290,17,20);
            ctx2d.fillRect(670,250,20,33);

            warp(62);

            gametemp_fade();//warpのため
            game_temp3();
        }

        if(mode==63){
            game_temp4();
            game_temp1(4);
            startarea(5);
            goalarea(5);
            gamearea(5);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall
            ctx2d.fillStyle=black;
            ctx2d.fillRect(140,120,20,190);
            ctx2d.fillRect(140,360,20,190);
            ctx2d.fillRect(650,310,10,60);
            ctx2d.fillRect(800,120,10,440);

            ctx2d.fillRect(140,120,670,10);
            ctx2d.fillRect(140,310,510,10);
            ctx2d.fillRect(140,360,510,10);
            ctx2d.fillRect(140,550,670,10);

            //lifeup
            if(realoneup){
                ctx2d.fillStyle=oneupcol;
                ctx2d.fillRect(725,520,30,30);
                ctx2d.font = "22px san-serif";
                ctx2d.fillStyle=white;
                ctx2d.fillText("10", 725, 545);
            }
            
            //savepoint
            if(realsave){
                ctx2d.fillStyle=savecol;
                ctx2d.fillRect(770,350,30,30);
                ctx2d.font = "25px san-serif";
                ctx2d.fillStyle=black;
                ctx2d.fillText("S", 777, 375);
            }
            
            //enemy static
            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(360,130,110,20);
            ctx2d.fillRect(550,190,40,20);
            ctx2d.fillRect(760,480,40,20);
            ctx2d.fillRect(430,420,20,80);
            ctx2d.fillRect(290,370,10,40);
            ctx2d.fillRect(290,510,10,40);
            ctx2d.fillRect(660,330,40,10);
            ctx2d.fillRect(760,330,40,10);

            
            //enemy move
            ctx2d.fillStyle="rgba(150,0,0,"+enemy_alpha+")";
            ctx2d.fillRect(enemy_motion_cannon(750,-200,250),200,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon(760,-300,250),140,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon(550,-270,250),220,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon(450,-290,130),520,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon(540,-270,210),460,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon(640,-190,210),500,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon(420,-210,210),380,enemy_width,enemy_height);

            ctx2d.fillStyle="rgba(150,0,0,"+enemy_alpha2+")";
            ctx2d.fillRect(enemy_motion_cannon2(480,-220,200),160,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon2(480,-200,180),260,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon2(560,-250,200),280,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon2(760,-180,320),290,enemy_width,enemy_height);

            ctx2d.fillStyle="rgba(150,0,0,"+enemy_alpha3+")";
            //pが大きい順に並べて
            //中心変化:y座標が一番大きいやつ,　eneは0.1*個数
            enemy_motion_cannon3(760,510,-460,0.8);
            ctx2d.fillRect(cannon_a,cannon_b,enemy_width,enemy_height);
            ////////////
            enemy_motion_cannon3(600,480,-140,0.8);
            ctx2d.fillRect(cannon_a,cannon_b,enemy_width,enemy_height);
            enemy_motion_cannon3(640 ,240,-250,0.55);
            ctx2d.fillRect(cannon_a,cannon_b,enemy_width,enemy_height);
            enemy_motion_cannon3(780,310,-210,0.4);
            ctx2d.fillRect(cannon_a,cannon_b,enemy_width,enemy_height);
            
            ctx2d.fillStyle="rgba(150,0,0,"+enemy_alpha4+")";
            ctx2d.fillRect(enemy_motion_cannon4(340,230,690),190,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon4(290,260,690),420,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon4(260,300,730),480,enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion_cannon4(550,120,850),520,enemy_width,enemy_height);




            game_temp3();
        }

        if(mode==64){//normal5
            game_temp4();
            game_temp1(5);
            
            startarea(2);
            goalarea(2);
            gamearea(2);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);


            //wall////////////////////////////////
            ctx2d.fillStyle=black;
            ctx2d.fillRect(140,120,20,420);
            ctx2d.fillRect(300,120,20,300);
            ctx2d.fillRect(380,120,20,300);
            ctx2d.fillRect(540,240,20,300);
            ctx2d.fillRect(640,240,20,300);
            ctx2d.fillRect(800,120,20,420);

            ctx2d.fillRect(160,120,150,20);
            ctx2d.fillRect(160,520,400,20);
            ctx2d.fillRect(400,120,400,20);
            ctx2d.fillRect(640,520,180,20);
            ctx2d.fillRect(300,400,100,20);
            ctx2d.fillRect(550,240,90,20);

            //lifeup
            if(realoneup){
                ctx2d.fillStyle=oneupcol;
                ctx2d.fillRect(170,490,30,30);
                ctx2d.font = "22px san-serif";
                ctx2d.fillStyle=white;
                ctx2d.fillText("5", 178, 515);
            }

            //savepoint
            if(realsave){
                ctx2d.fillStyle=savecol;
                ctx2d.fillRect(410,150,30,30);
                ctx2d.font = "25px san-serif";
                ctx2d.fillStyle=black;
                ctx2d.fillText("S", 417, 173);
            }

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion1(220,60,20,0),200,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(220,60,-20,0),270,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(220,60,20,0),340,enemy_width,enemy_height*2);
            
            ctx2d.fillRect(enemy_motion1(185,25,-30,0),450,enemy_width,enemy_height);
            ctx2d.fillRect(210,enemy_motion3(475,25,30,0),enemy_width,enemy_height);

            ctx2d.fillRect(enemy_motion1(430,30,20,0),240,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(490,30,-20,0),240,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(430,30,20,1),310,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(490,30,-20,-1),310,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(430,30,20,2),380,enemy_width,enemy_height*2);
            ctx2d.fillRect(enemy_motion1(490,30,-20,-2),380,enemy_width,enemy_height*2);

            enemy_motionc1(590,180,40,20,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,0.6);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,1.2);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,1.8);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,2.4);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,3);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,3.6);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(590,180,40,20,4.2);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);

            ctx2d.fillRect(enemy_motion5(740,40,12,0), enemy_motion6(265,65,24,0),enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion1(740,40,30,0),260,enemy_width,enemy_height);

            enemy_motionc1(700,400,40,24,0);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);
            enemy_motionc1(700,400,40,24,Math.PI);
            ctx2d.fillRect(a,b,enemy_width,enemy_height);

            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(690,200,10,150);
            ctx2d.fillRect(690,350,70,10);
            ctx2d.fillRect(760,350,10,110);
            ctx2d.fillRect(160,400,enemy_width*2,enemy_height+10);
            ctx2d.fillRect(260,400,enemy_width*2,enemy_height+10);
            ctx2d.fillRect(260,480,enemy_width*2,enemy_height+20);
            
            game_temp3();
        }
        if(mode==65){//normal6　迷路
            game_temp4();
            game_temp1(6);
            gamearea(6);
            startarea(6);
            goalarea(6);
            

            //pass1
            ctx2d.fillStyle=deepskyblue2;
            ctx2d.fillRect(430,110,40,30);
            if(pass1==false){
                //ctx2d.drawImage(keyimg,432,110,36,36);
                ctx2d.fillStyle=deepskyblue;
                ctx2d.fillRect(420,380,50,10);
                ctx2d.fillRect(400,270,10,30);}
            //pass2
            ctx2d.fillStyle=lightgreen2;
            ctx2d.fillRect(70,500,30,40);
            if(pass2==false){
                ctx2d.fillStyle=lightgreen;
                ctx2d.fillRect(470,490,10,50);}

            //pass3
            ctx2d.fillStyle=parple2;
            ctx2d.fillRect(480,110,40,30);
            if(pass3==false){
                ctx2d.fillStyle=parple;
                ctx2d.fillRect(790,180,40,10);
                ctx2d.fillRect(480,300,30,10);
                }

            //pass4
            ctx2d.fillStyle=bronze2;
            ctx2d.fillRect(860,510,30,30);
            if(pass4==false){
                ctx2d.fillStyle=bronze;
                ctx2d.fillRect(790,200,40,10);
                ctx2d.fillRect(790,510,10,30);}

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall////////////////////////////////
            ctx2d.fillStyle=black;
            ctx2d.fillRect(60,200,10,350);
            ctx2d.fillRect(890,200,10,350);
            ctx2d.fillRect(470,100,10,390);
            ctx2d.fillRect(60,540,840,10);
            ctx2d.fillRect(250,100,460,10);
            ctx2d.fillRect(60,200,70,10);
            ctx2d.fillRect(180,200,80,10);
            ctx2d.fillRect(60,100,10,60);
            ctx2d.fillRect(60,100,120,10);
            ctx2d.fillRect(170,100,10,110);
            ctx2d.fillRect(60,150,70,10);
            ctx2d.fillRect(120,150,10,60);
            ctx2d.fillRect(240,100,10,110);
            ctx2d.fillRect(60,380,360,10);
            ctx2d.fillRect(710,100,10,110);
            ctx2d.fillRect(720,200,70,10);
            ctx2d.fillRect(830,200,70,10);
            ctx2d.fillRect(780,100,10,110);
            ctx2d.fillRect(780,100,120,10);
            ctx2d.fillRect(830,150,70,10);
            ctx2d.fillRect(830,150,10,50);
            ctx2d.fillRect(890,100,10,60);
            //////////////////////////////////////

            //lifeup
            if(realoneup){
                ctx2d.fillStyle=oneupcol;
                ctx2d.fillRect(555,420,30,30);
                ctx2d.font = "22px san-serif";
                ctx2d.fillStyle=white;
                ctx2d.fillText("10", 555, 445);
            }

            //savepoint
            if(realsave){
                ctx2d.fillStyle=savecol;
                ctx2d.fillRect(480,460,30,30);
                ctx2d.font = "25px san-serif";
                ctx2d.fillStyle=black;
                ctx2d.fillText("S", 487, 485);
            }

            //enemy1 static
            ctx2d.fillStyle=enemycol2;
            ctx2d.fillRect(420,140,50,10);
            ctx2d.fillRect(460,140,10,90);
            ctx2d.fillRect(420,180,10,90);
            ctx2d.fillRect(380,180,50,10);
            ctx2d.fillRect(290,140,100,10);
            ctx2d.fillRect(260,180,90,10);
            ctx2d.fillRect(250,180,10,70);
            ctx2d.fillRect(170,210,10,40);
            ctx2d.fillRect(140,240,10,70);
            ctx2d.fillRect(140,240,40,10);
            ctx2d.fillRect(100,240,10,110);
            ctx2d.fillRect(100,340,200,10);
            ctx2d.fillRect(290,220,100,10);
            ctx2d.fillRect(290,220,10,130);
            ctx2d.fillRect(330,260,110,10);
            ctx2d.fillRect(330,260,10,90);
            ctx2d.fillRect(330,340,50,10);
            ctx2d.fillRect(370,300,50,10);
            ctx2d.fillRect(410,300,10,80);
            ctx2d.fillRect(380,140,10,90);
            //enemy1 motion
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion1(210,60,40,0),250,10,90);///u
            ctx2d.fillRect(enemy_motion1(440,20,36,0.8),260,10,80);//u
            
            if(pass1==true){
                //enemy2 static
                ctx2d.fillStyle=enemycol2;
                ctx2d.fillRect(100,420,10,120);
                ctx2d.fillRect(100,420,90,10);
                ctx2d.fillRect(140,500,80,10);
                ctx2d.fillRect(220,390,10,120);
                ctx2d.fillRect(430,420,10,120);
                ctx2d.fillRect(390,390,10,80);
                ctx2d.fillRect(390,500,10,40);
                
                ctx2d.fillRect(310,500,50,10);
                ctx2d.fillRect(310,420,50,10);
                ctx2d.fillRect(260,420,10,120);
                ctx2d.fillRect(300,420,10,90);
                //enemy2 motion
                ctx2d.fillStyle=enemy_color;
                ctx2d.fillRect(350,enemy_motion3(460,30,30,0),40,10);
                ctx2d.fillRect(enemy_motion1(180,30,30,0),430,10,40);
                ctx2d.fillRect(enemy_motion1(140,30,-30,0),460,10,40);}
            else {
                ctx2d.fillStyle=black;
                ctx2d.fillRect(70,390,410,150);}
            if(pass2==true){
                //enemy3 static
                ctx2d.fillStyle=enemycol2;
                ctx2d.fillRect(510,140,10,350);
                ctx2d.fillRect(510,140,170,10);
                ctx2d.fillRect(590,140,10,70);
                ctx2d.fillRect(630,180,10,70);
                ctx2d.fillRect(640,180,70,10);
                ctx2d.fillRect(510,280,170,10);
                ctx2d.fillRect(670,215,10,75);
                ctx2d.fillRect(750,240,140,10);
                ctx2d.fillRect(750,240,10,90);
                ctx2d.fillRect(785,280,75,10);
                ctx2d.fillRect(750,320,75,10);
                ctx2d.fillRect(720,360,140,10);
                ctx2d.fillRect(850,280,10,90);
                ctx2d.fillRect(710,210,10,160);
                ctx2d.fillRect(700,395,160,10);
                ctx2d.fillRect(750,450,140,10);
                ctx2d.fillRect(700,400,10,110);
                ctx2d.fillRect(700,505,160,10);

                //enemy3 motion
                ctx2d.fillStyle=enemy_color;
                ctx2d.fillRect(600,440,20,20);
                enemy_motionc1(600,440,20,-36,0);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,40,-36,0);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,60,-36,0);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,80,-36,0);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,20,-36,Math.PI/3*4);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,40,-36,Math.PI/3*4);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,60,-36,Math.PI/3*4);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,80,-36,Math.PI/3*4);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,20,-36,Math.PI/3*2);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,40,-36,Math.PI/3*2);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,60,-36,Math.PI/3*2);
                ctx2d.fillRect(a,b,20,20);
                enemy_motionc1(600,440,80,-36,Math.PI/3*2);
                ctx2d.fillRect(a,b,20,20);

                enemy_motionc1(790,445,50,36,0.7);
                ctx2d.fillRect(a,b,20,20);
                ctx2d.fillRect(enemy_motion1(550,30,52,0),180,10,70);//u
                ctx2d.fillRect(550,enemy_motion3(240,30,52,0),90,10);//u
            }
            else{
                ctx2d.fillStyle=black;
                ctx2d.fillRect(480,210,410,330);
                ctx2d.fillRect(480,110,230,100);
                ctx2d.fillRect(790,150,40,60);}
            


            //タッチ処理
            if(chara_x>=430 && chara_x<=451 && chara_y>=110 && chara_y<=121){//pass1解除
                pass1=true;
                if(se_keyopen1_check){
                    se_keyopen.play();
                    se_keyopen1_check=false;}}
            if(chara_x>=70 && chara_x<=81 && chara_y>=500 && chara_y<=521){//pass2解除
                pass2=true;
                if(se_keyopen2_check){
                    se_keyopen.play();
                    se_keyopen2_check=false;}}
            if(chara_x>=480 && chara_x<=500 && chara_y>=110 && chara_y<=121){//pass3解除
                pass3=true;
                if(se_keyopen3_check){
                    se_keyopen.play();
                    se_keyopen3_check=false;}}
            if(chara_x>=860 && chara_x<=870 && chara_y>=510 && chara_y<=521){//blue解除
                pass4=true;
                if(se_keyopen4_check){
                    se_keyopen.play();
                    se_keyopen4_check=false;}}


            ////ページ遷移の時に関数の初期化を忘れずに
            game_temp3();
        }

        if(mode==70){ //hard1
            game_temp4();
            game_temp1(1);

            startarea(11);
            gamearea(11);
            goalarea(11);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall////////////////////////////////////
            ctx2d.fillStyle=black;
            ctx2d.fillRect(220,240,20,140);
            ctx2d.fillRect(720,240,20,140);
            ctx2d.fillRect(220,240,510,20);
            ctx2d.fillRect(220,360,510,20);
            //////////////////////////////////////////

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion5(375,50,6.6,0), enemy_motion6(300,40,13.2,0),enemy_width,enemy_height);
            ctx2d.fillRect(enemy_motion5(540,55,6.2,3.2), enemy_motion6(300,40,12.4,0),enemy_width,enemy_height);

            game_temp3();
        }

        if(mode==71){
            game_temp4();
            game_temp1(2);

            gamearea(12);
            startarea(12);
            goalarea(12);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall////////////////////////////////////
            ctx2d.fillStyle=black;
            ctx2d.fillRect(120,120,20,420);
            ctx2d.fillRect(820,120,20,420);
            ctx2d.fillRect(120,120,710,20);
            ctx2d.fillRect(120,520,720,20);
            //////////////////////////////////////////

            //enemy
            ctx2d.fillStyle=enemy_color;
            
            ctx2d.fillRect(470,310,20,20);//enemy1
            for (let i=20; i<141; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc2(470,310,i,46,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(200,260,20,20);//enemy2
            for (let i=20; i<61; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc2(200,260,i,32,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(260,200,20,20);//enemy3
            for (let i=20; i<61; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(260,200,i,32,j+1);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(280,400,20,20);//enemy4
            for (let i=20; i<101; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(280,400,i,32,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(660,240,20,20);//enemy5
            for (let i=20; i<101; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(660,240,i,32,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(470,480,20,20);//enemy6
            for (let i=20; i<21; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(470,480,i,36,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(470,160,20,20);//enemy7
            for (let i=20; i<21; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc2(470,160,i,36,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(740,380,20,20);//enemy8
            for (let i=20; i<61; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(740,380,i,32,j);
                    ctx2d.fillRect(a,b,20,20);}}
            ctx2d.fillRect(680,440,20,20);//enemy9
            for (let i=20; i<61; i+=20){
                for(let j=0; j<2*Math.PI; j+=Math.PI/2){
                    enemy_motionc1(680,440,i,32,j+1);
                    ctx2d.fillRect(a,b,20,20);}}
            
            game_temp3();
        }
        if(mode==72){
            game_temp4();
            game_temp1(3);

            gamearea(13);
            startarea(13);
            goalarea(13);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall////////////////////////////////////
            ctx2d.fillStyle=black;
            ctx2d.fillRect(160,180,20,360);
            ctx2d.fillRect(780,180,20,360);
            ctx2d.fillRect(160,180,260,20);
            ctx2d.fillRect(540,180,260,20);
            ctx2d.fillRect(160,520,620,20);
            ctx2d.fillRect(400,120,140,20);
            ctx2d.fillRect(400,120,20,60);
            ctx2d.fillRect(540,120,20,60);
            ctx2d.fillRect(230,250,500,30);
            ctx2d.fillRect(230,330,200,60);
            ctx2d.fillRect(530,330,200,60);
            ctx2d.fillRect(230,440,500,30);
            //////////////////////////////////////////

            //enemy///////////////////////////
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion1(470,270,58,0),205,20,40);
            ctx2d.fillRect(enemy_motion1(470,270,-58,0),285,20,40);
            ctx2d.fillRect(enemy_motion1(470,270,58,0.6),395,20,40);
            ctx2d.fillRect(enemy_motion1(470,270,-58,6.5),475,20,40);

            ctx2d.fillRect(185,enemy_motion3(350,150,58,0),40,20);
            ctx2d.fillRect(735,enemy_motion3(350,150,-58,0),40,20);
            //////////////////////////////////////////
            game_temp3();
        }
        if(mode==73){
            game_temp4();
            game_temp1(4);

            gamearea(14);
            startarea(14);
            goalarea(14);

            //character
            ctx2d.fillStyle="rgba(0,0,255,"+chara_alpha+")";
            ctx2d.fillRect(chara_x,chara_y,chara_width,chara_height);

            //wall////////////////////////////////////
            ctx2d.fillStyle=black;
            ctx2d.fillRect(240,180,20,120);
            ctx2d.fillRect(240,360,20,140);
            ctx2d.fillRect(180,280,20,100);

            ctx2d.fillRect(400,180,20,80);
            ctx2d.fillRect(420,440,20,80);
            ctx2d.fillRect(490,200,20,70);
            ctx2d.fillRect(700,370,20,70);
            ctx2d.fillRect(760,200,20,170);

            ctx2d.fillRect(180,280,80,20);
            ctx2d.fillRect(180,360,80,20);
            ctx2d.fillRect(240,160,180,20);
            ctx2d.fillRect(510,200,270,20);
            ctx2d.fillRect(240,500,180,20);
            ctx2d.fillRect(400,250,110,20);
            ctx2d.fillRect(420,440,300,20);
            ctx2d.fillRect(700,370,80,20);
            
            ctx2d.fillRect(310,240,40,80);//inblock
            ctx2d.fillRect(310,320,60,130);
            ctx2d.fillRect(370,320,100,50);
            ctx2d.fillRect(560,280,90,110);
            ctx2d.fillRect(650,280,50,40);
            //////////////////////////////////////////

            //enemy///////////////////////////
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(enemy_motion1(320,60,45,0),185,20,20);
            ctx2d.fillRect(enemy_motion1(320,60,-45,0.8),217,20,20);
            ctx2d.fillRect(enemy_motion1(330,70,45,0.6),452,20,20);
            ctx2d.fillRect(enemy_motion1(330,70,-45,6.5),475,20,20);
            ctx2d.fillRect(262,enemy_motion3(330,150,58,0),20,20);
            ctx2d.fillRect(285,enemy_motion3(330,150,-58,0),20,20);
            ctx2d.fillRect(enemy_motion1(445,95,45,0),272,20,20);
            ctx2d.fillRect(enemy_motion1(445,95,-45,0),295,20,20);
            ctx2d.fillRect(enemy_motion1(460,80,45,0),372,20,20);
            ctx2d.fillRect(enemy_motion1(460,80,-45,0),394,20,20);
            ctx2d.fillRect(enemy_motion1(460,80,45,0),418,20,20);
            ctx2d.fillRect(512,enemy_motion3(320,100,55,0),20,20);
            ctx2d.fillRect(535,enemy_motion3(320,100,-55,0),20,20);

            ctx2d.fillRect(enemy_motion1(590,80,-30,0),222,20,20);
            ctx2d.fillRect(enemy_motion1(590,80,30,0),250,20,20);

            ctx2d.fillRect(enemy_motion1(630,45,-48,0),395,20,20);
            ctx2d.fillRect(enemy_motion1(630,45,48,0),420,20,20);
            ctx2d.fillRect(654,enemy_motion3(370,50,48,0),20,20);
            ctx2d.fillRect(676,enemy_motion3(370,50,-48,0),20,20);

            ctx2d.fillRect(705,enemy_motion3(315,35,-100,0),50,20);
            //////////////////////////////////////////
            game_temp3();
        }

        if(mode==80){ //extrahard1
            game_temp4();
            game_temp1(1);
            game_temp2();

            //enemy
            ctx2d.fillStyle=enemy_color;
            ctx2d.fillRect(500,enemy_motion3(330,130,30),enemy_width,enemy_height);
            
            game_temp3();
        }
        
        if (mode==-1){ //設定画面
            game_temp4();

            ctx2d.fillStyle=white;//
            ctx2d.font = "28px san-serif";
            ctx2d.fillText("設定", 60, 64);

            text_ani(0.3,0.01,0.01);
            var white_trans="rgba(255,255,255,"+text_trans+")";
            ctx2d.fillStyle=white_trans;
            ctx2d.font = "24px";
            ctx2d.fillText("Space: Menu画面へ", 60, 628);

            ctx2d.font = "32px san-serif";
            ctx2d.fillStyle=black;
            var config_textx=220;
            ctx2d.fillText("BGM ボリューム", config_textx, 200);
            ctx2d.fillText("SE ボリューム", config_textx, 300);
            ctx2d.fillText("データ初期化", config_textx, 400);
            ctx2d.fillText("Menuに戻る", config_textx, 500);

            if (selectmode==0){
                make_shape(200,187,160,217,160,157); //三角形描画
            }
            if (selectmode==1){
                make_shape(200,287,160,317,160,257); //三角形描画
            } 
            else if(selectmode==2){
                make_shape(200,387,160,417,160,357); //三角形描画
            }
            else if(selectmode==3){
                make_shape(200,487,160,517,160,457); //三角形描画
            }
            ctx2d.fillStyle=black;
            ctx2d.font = "32px san-serif";
            //bgm
            ctx2d.fillText("0", 550, 200);
            ctx2d.fillText("1", 650, 200);
            ctx2d.fillText("2", 750, 200);
            ctx2d.fillText("3", 850, 200);
            ctx2d.fillRect(587,185,50,4);
            ctx2d.fillRect(687,185,50,4);
            ctx2d.fillRect(787,185,50,4);

            //se
            ctx2d.fillText("0", 550, 300);
            ctx2d.fillText("1", 650, 300);
            ctx2d.fillText("2", 750, 300);
            ctx2d.fillText("3", 850, 300);
            ctx2d.fillRect(587,285,50,4);
            ctx2d.fillRect(687,285,50,4);
            ctx2d.fillRect(787,285,50,4);

            if (bgm_cnt){
            }
            else if (se_cnt){
            }
            else if (data_reset){//dataリセット画面
                /*
                const aaaa=document.createElement("reset");
                aaaa.id="sss";
                aaaa.width=500;
                aaaa.height=300;
                myCanvas.appendChild(aaaa);
                ctx2d.fillStyle=black;
                var x=document.getElementById("sss");
                x.style.border="solid 3px #000000";
                console.log(x.style.border);
                */
                
                ctx2d.fillStyle=red_light;
                ctx2d.fillRect(100,90,760,480);

                if(datareset_do==false){
                    ctx2d.font = "40px san-serif";
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("本当にデータを初期化しますか？", 200, 220);
                    ctx2d.font = "28px san-serif";
                    ctx2d.fillText("※初期化すると二度と元に戻りません", 260, 320);
                    ctx2d.font = "34px san-serif";
                    ctx2d.fillText("初期化", 300, 450);
                    ctx2d.fillText("キャンセル", 530, 450);
                    if (resetmode==0){//キャンセル
                        make_shape(280,442,257,427,257,457); //三角形描画
                    }
                    else if(resetmode==1){//初期化
                        make_shape(510,442,487,427,487,457); //三角形描画
                    }
                }
                else if(datareset_do){
                    ctx2d.fillStyle=black;
                    ctx2d.fillText("データをリセットしました", 200, 220);
                    ctx2d.fillText("Space: タイトルへ戻る", 200, 420);
                }
            }

            gametemp_fade();

            if(to_title){//dataresetからタイトルへ
                if(page_check){
                    bgm1.fade(0.2,0,1500);}
                fadeout();
                if (page_check){
                    mode=0;
                    to_title=false;
                    selectmode=0;
                    resetmode=1;
                    incheck=true;
                    //sound
                    bgm1.stop();
                    bgm1.volume(bgm1_v);
                    bgm0_check=true;
                    bgm1_check=true;//bgm関数初期化
                }
            }
            if (to_menu){ //menu画面への遷移
                fadeout();
                if (page_check){
                    mode=1;
                    to_menu=false;
                    selectmode=0;
                    incheck=true;  
                }
            }
        }

        if(mode==-2){ //操作方法画面
            game_temp4();

            ctx2d.fillStyle=white;//
            ctx2d.font = "28px san-serif";
            ctx2d.fillText("操作方法", 60, 64);
            text_ani(0.3,0.01,0.01);
            var white_trans="rgba(255,255,255,"+text_trans+")";
            ctx2d.fillStyle=white_trans;
            ctx2d.font = "24px";
            ctx2d.fillText("Space: Menu画面へ", 60, 628);

            ctx2d.fillStyle=black;//
            ctx2d.font = "24px san-serif";
            ctx2d.fillText("・キャラクター操作は十字キー操作です", 90, 170);
            ctx2d.fillText("・Deathはこれまでに敵にやられた回数です(やり直すとリセットされます)", 90, 220);
            ctx2d.fillText("・プレイ中、Pキーで一時停止画面に移動できます", 90, 270);

            gametemp_fade();

            if (to_menu){ //タイトル画面への遷移
                fadeout();
                if(page_check){
                    mode=1;
                    to_menu=false;
                    selectmode=0;
                    incheck=true;
                }
            }
        }
        requestAnimationFrame(tick);
    }
}
