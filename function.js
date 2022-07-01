
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

    event.preventDefault();
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