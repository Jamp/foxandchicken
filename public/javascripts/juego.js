$(function(){
    $('#ficha').draggable({
        drag: function (event, ui) {
            console.log(event);
            console.log(ui);
        }
    });

    $('.posicion').droppable({
        drop: function (event, ui){
            var id = $(this).attr('id');
            position = id.replace('p','').split('-');
            console.log(position);
        }
    });
});