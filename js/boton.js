$(document).ready(function(){
    $("#izquierda").click(function(){
        if(parseInt($("#capa").css("marginLeft"))<=250){
            $("#capa").animate({marginLeft: '-=150px'});
        }
    });

    $("#derecha").click(function(){
        if(parseInt($("#capa").css("marginLeft"))>=50){
            $("#capa").animate({marginLeft: '-=150px'});
        }
    });

});