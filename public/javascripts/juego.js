$(function(){
    var WebSocket = io();
    var posiciones = new Array();
    dibujaTablero(posiciones);
    dibujaGallinas(posiciones);
    dibujaZorros(posiciones);
    posicion_inicial = {};

    WebSocket.on('bienvenida', function (msg){
        show(msg);
    });

    WebSocket.on('realtime', function (object){
        $('#'+object.id).offset(object.offset);
    });

    function moverFicha(object) {
        WebSocket.emit('mover', object);
    }

    $('.ficha').draggable({
        start: function (event, ui) {
            posicion_inicial= $(this).offset();
            $(".activo").removeClass('activo')
            $(this).addClass('activo')
        },
        revert: function (out) {
            if(!out){
                $(this).offset(posicion_inicial);
                var object = {
                    id: this[0].id,
                    offset: posicion_inicial
                };
                console.log(object);
                moverFicha(object);
            }
        },
        drag: function(event, ui) {
            var object = {
                id: this.id,
                offset: $(this).offset()
            };
            moverFicha(object);
        }
    });
    $('.zorro').draggable({
        start: function (event, ui) {
            posicion_inicial= $(this).offset();
            $(".activo").removeClass('activo')
            $(this).addClass('activo')
        },
        revert: function (out) {
            if(!out){
                $(this).offset(posicion_inicial);
            }
        }
    });

    $('.posicion').droppable({
        drop: function (event, ui){

            var id = $(this).attr('id');
            position = id.replace('p','').split('-');
            $(".activo").offset($(this).offset());
            var object = {
                id: $('.activo').attr('id'),
                offset: $(this).offset()
            };
            moverFicha(object);
        }
    });

});