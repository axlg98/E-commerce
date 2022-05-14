function btnConsole(){
    location.href = "/E-commerce/consola.html";
}

function btnLogin(){
    location.href= "/E-commerce/login.html";
}

$(document).ready(function(){
    let anchocapa = $(".capa").width()
    let anchocontenedor = $(".cat1").width()
    let margin = anchocontenedor-anchocapa
    let avance=200
    let avance1 = avance
    let avance2 = avance
    let avanza=true
    $(".izquierda").click(function(){      
        if(parseInt($(this).next().find(".capa").css("marginLeft"))>=margin && avanza==true){
            avanza=false
            $(this).next().find(".capa").animate({marginLeft: '-='+avance1},{
                    complete: function() {
                        if(parseInt($(this).next().find(".capa").css("marginLeft")) - margin < 150){
                            avance1 = parseInt($(this).next().find(".capa").css("marginLeft")) - margin
                        }
                        avance2 = avance
                        avanza=true
                    }
                }
            )
        }
       
    });

    $(".derecha").click(function(){
        if(parseInt($(this).prev().find(".capa").css("marginLeft"))<0 && avanza==true){
            avanza=false
            $(this).prev().find(".capa").animate({marginLeft: '+='+avance2},{
                complete: function() {
                    if(parseInt($(this).prev().find(".capa").css("marginLeft")) > -150){
                        avance2 = -(parseInt($(this).prev().find(".capa").css("marginLeft")) + avance2)
                        if(avance2<0){
                            avance2=0
                        }
        
                    }
                    avance1 = avance
                    avanza=true
                }
            });
        }
    });

});

