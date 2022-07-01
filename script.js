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
