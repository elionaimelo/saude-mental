// Ativar e deixar disponível todas as funções para utilização após o carregamento do site.
$(document).ready(function(){

    // Selecionar o modulo
    $('a.modulo').on('click', function(){
        var self = $(this).attr('rel');
        $('section#conteudo').removeClass().addClass(self);
        $('section#capa .row .left.'+self).show();
        $('#menu').removeClass().addClass(self);
        $('#instrucoes, #colaboradores-online, #colaboradores-do-curso').removeClass().addClass(self);
        $('#instrucoes').addClass('ativo');
        $('#participantes').removeClass().addClass(self);
        $('#secretaria #noticias').removeClass().addClass(self);
        $('#ambientacao #noticias').removeClass().addClass(self);
        $('#forum').removeClass().addClass(self);

        switch(self){
            case 'modulo-2':
                $('section#capa .row .left.modulo-3, section#capa .row .left.modulo-4, section#capa .row .left.modulo-5').hide();
            break;
            case 'modulo-3':
                $('section#capa .row .left.modulo-2, section#capa .row .left.modulo-4, section#capa .row .left.modulo-5').hide();
                $('.left.modulo-3').parent().css('padding-top','0px');
            break;
            case 'modulo-4':
                $('.left.modulo-4').parent().css('padding-top','0px');
                $('section#capa .row .left.modulo-2, section#capa .row .left.modulo-3, section#capa .row .left.modulo-5').hide();
            break;
            case 'modulo-5':
                $('section#capa .row .left.modulo-2, section#capa .row .left.modulo-3, section#capa .row .left.modulo-4').hide();
            break;
        }

    });

    $('.btn-voltar').on('click', function(){
        var self = ($(this).attr('rel')) ? $(this).attr('rel') : '#inicial';
        $('#conteudo > section').hide();
        $('#conteudo > section'+self).show('slow');
    });
    $('ul.topicos > li > a, .btn-info').on('click', function(){
        var self = ($(this).attr('rel')) ? $(this).attr('rel') : '#capa';
        $('#conteudo > section').hide();
        $('#conteudo > section'+self).show('slow');
        console.log(self);
    });
    // $('.btn-voltar').on('click', function(){
    //     var self = ($(this).attr('rel')) ? $(this).attr('rel') : '#capa';
    //     $('#minhas-tarefas > section').hide();
    //     $('#minhas-tarefas > section'+self).show('slow');
    // });
    // $('.select-topico > .topico').on('change', function(){
    //     var self = ($(this).val()) ? $(this).val() : '#capa';
    //     $('#minhas-tarefas > section').hide();
    //     $('#minhas-tarefas > section#'+self).show('slow');
    //     $('.select-topico').removeClass('voltar-menu');
    //     if(self != '#capa'){
    //         $('.select-topico').addClass('voltar-menu');
    //     }
    //     console.log(self);
    // });
    // $('.voltar-inicio').on('click', function(){
    //     $('#minhas-tarefas > section').hide();
    //     $('#minhas-tarefas > section#capa').show('slow');
    //     $('.select-topico').removeClass('voltar-menu');
    //     $('.select-topico > .topico').val("");
    // });

    $('#rede-aprendizagem .horizontal section').click(function(){
        $('#rede-aprendizagem .horizontal section').removeClass('ativo');
        $(this).addClass('ativo');
        return false;
    });

});
