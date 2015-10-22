$(function(){
    var posiciones = new Array();
    dibujaTablero(posiciones);
    dibujaGallinas(posiciones);
    dibujaZorros(posiciones);
    posicion_inicial = {};

    $('.ficha').draggable({
        start: function (event, ui) {
            posicion_inicial= $(this).offset();
            $(".activo").removeClass('activo')
            $(this).addClass('activo')
           // console.log(posicion_inicial)
        },
        revert: function (out) {
           // console.log(out);
            if(!out){
                $(this).offset(posicion_inicial);                 
            }
        }
    });
    $('.zorro').draggable({
        start: function (event, ui) {
            posicion_inicial= $(this).offset();
            $(".activo").removeClass('activo')
            $(this).addClass('activo')
           // console.log(posicion_inicial)
        },
        revert: function (out) {
           // console.log(out);
            if(!out){
                $(this).offset(posicion_inicial);                 
            }
        }
    });

    $('.posicion').droppable({
        drop: function (event, ui){
           
            var id = $(this).attr('id');
            position = id.replace('p','').split('-');
            console.log($(this).offset());
            $(".activo").offset($(this).offset());
        }
    });
});