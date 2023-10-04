$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li style="list-style:disc inside;"></li>').text(nomeTarefa);
        $('ul').append(novaTarefa);
        $('#nova-tarefa').val('');
    });

    $('ul').click(function() {
        $('li').css("text-decoration", "line-through");
    });
    
});