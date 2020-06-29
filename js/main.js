$(document).ready(function(){

    // Slider

    if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });
    }

    //Posts

    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur at est vel dignissim. Phasellus malesuada lectus vitae commodo ultrices. Ut faucibus lacus massa, a ullamcorper erat pellentesque ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, velit in facilisis faucibus, orci risus congue turpis, id egestas nunc sem nec erat. Suspendisse interdum purus nunc, in hendrerit mi egestas eu. Sed venenatis ligula metus. Sed finibus mauris a elementum pulvinar. Mauris vehicula quam leo, ut rhoncus elit convallis non. Donec et dui ut turpis vestibulum tempor nec at odio.'
            },

            {
                title: 'Prueba de título 2',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur at est vel dignissim. Phasellus malesuada lectus vitae commodo ultrices. Ut faucibus lacus massa, a ullamcorper erat pellentesque ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, velit in facilisis faucibus, orci risus congue turpis, id egestas nunc sem nec erat. Suspendisse interdum purus nunc, in hendrerit mi egestas eu. Sed venenatis ligula metus. Sed finibus mauris a elementum pulvinar. Mauris vehicula quam leo, ut rhoncus elit convallis non. Donec et dui ut turpis vestibulum tempor nec at odio.'
            },

            {
                title: 'Prueba de título 3',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur at est vel dignissim. Phasellus malesuada lectus vitae commodo ultrices. Ut faucibus lacus massa, a ullamcorper erat pellentesque ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, velit in facilisis faucibus, orci risus congue turpis, id egestas nunc sem nec erat. Suspendisse interdum purus nunc, in hendrerit mi egestas eu. Sed venenatis ligula metus. Sed finibus mauris a elementum pulvinar. Mauris vehicula quam leo, ut rhoncus elit convallis non. Donec et dui ut turpis vestibulum tempor nec at odio.'
            },

            {
                title: 'Prueba de título 4',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur at est vel dignissim. Phasellus malesuada lectus vitae commodo ultrices. Ut faucibus lacus massa, a ullamcorper erat pellentesque ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, velit in facilisis faucibus, orci risus congue turpis, id egestas nunc sem nec erat. Suspendisse interdum purus nunc, in hendrerit mi egestas eu. Sed venenatis ligula metus. Sed finibus mauris a elementum pulvinar. Mauris vehicula quam leo, ut rhoncus elit convallis non. Donec et dui ut turpis vestibulum tempor nec at odio.'
            },

            {
                title: 'Prueba de título 5',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur at est vel dignissim. Phasellus malesuada lectus vitae commodo ultrices. Ut faucibus lacus massa, a ullamcorper erat pellentesque ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, velit in facilisis faucibus, orci risus congue turpis, id egestas nunc sem nec erat. Suspendisse interdum purus nunc, in hendrerit mi egestas eu. Sed venenatis ligula metus. Sed finibus mauris a elementum pulvinar. Mauris vehicula quam leo, ut rhoncus elit convallis non. Donec et dui ut turpis vestibulum tempor nec at odio.'
            },

            {
                title: 'Prueba de título 6',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur at est vel dignissim. Phasellus malesuada lectus vitae commodo ultrices. Ut faucibus lacus massa, a ullamcorper erat pellentesque ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, velit in facilisis faucibus, orci risus congue turpis, id egestas nunc sem nec erat. Suspendisse interdum purus nunc, in hendrerit mi egestas eu. Sed venenatis ligula metus. Sed finibus mauris a elementum pulvinar. Mauris vehicula quam leo, ut rhoncus elit convallis non. Donec et dui ut turpis vestibulum tempor nec at odio.'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="buttom-more">Leer más</a>
            </article>
            `;

            $('#posts').append(post);
        });
    }

    // Selector de tema

    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name)
    });
    
    var form_name = localStorage.getItem("form_name");

    if(form_name != null & form_name != "undefined") {
        var about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeón
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);

    }

    // Validación
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']"). datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});