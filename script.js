let level = 1;
const speed = 3;
let score = 0
let counter = 0;
let shalav = 1;
const current_target = 0;

$(document).ready(function(){
    $('body').addClass("ready");

    $(".splash-screen").click(function(){
        $('body').addClass("start-game");
        start_game();
    })

    $(".game-interface__target").each(function(ind, trgt){
        $(trgt).click(function(){
            $(this).addClass("gotcha");
            e = $(this);
            setTimeout(function(){ e.removeClass("gotcha"); }, 1200);
            score++;
            counter++;
            $(".score span").html(score);
            if(counter >= 10){
                counter = 0;
                level *= .9;
                shalav++;
                $(".level span").html(shalav);
            }
        })
    })

    

})

function start_game(){
    init_level = setInterval(get_target, speed * 1000);
    $(".score span").html(score);
}

function get_target() {
    target_number = Math.floor((Math.random() * 9) + 1);
    init_target($(".c_"+target_number));
}

function init_target(element){
    element.addClass("on");
    setTimeout(function(){ element.removeClass("on"); }, 2000 * level);
}