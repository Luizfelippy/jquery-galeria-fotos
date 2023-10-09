$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 000000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone.'
        }
    });
});
