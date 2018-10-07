$(document).ready(function(){



    //mobile menu toggling
    $("#menu_icon").click(function(){
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });

    

    //Contact Page Map Centering
    var hw = $('header').width() + 50;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
        "max-width" : mw,
        "height" : wh
    });

    if(ww>1100){
         $('#map').css({
            "margin-left" : hw
        });
    }

   



    //Tooltip
    $("a").mouseover(function(){

        var attr_title = $(this).attr("data-title");

        if( attr_title == undefined || attr_title == "") return false;
        
        $(this).after('<span class="tooltip"></span>');

        var tooltip = $(".tooltip");
        tooltip.append($(this).data('title'));

         
        var tipwidth = tooltip.outerWidth();
        var a_width = $(this).width();
        var a_hegiht = $(this).height() + 3 + 4;

        //if the tooltip width is smaller than the a/link/parent width
        if(tipwidth < a_width){
            tipwidth = a_width;
            $('.tooltip').outerWidth(tipwidth);
        }

        var tipwidth = '-' + (tipwidth - a_width)/2;
        $('.tooltip').css({
            'left' : tipwidth + 'px',
            'bottom' : a_hegiht + 'px'
        }).stop().animate({
            opacity : 1
        }, 200);
       

    });

    $("a").mouseout(function(){
        var tooltip = $(".tooltip");       
        tooltip.remove();
    });


});

//Image Fadein

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.star');
});


// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

function obfuscatorEmail () {

    coded = "vrFFE@7hZUI7UB8FUm.mE7"
    key = "N0bAjJSQ7eVT9LlRUItBovyKuDcMPqgrY512FGpa6HExws83m4zdWZfCinOkXh"
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
    }
    document.write("<a href='mailto:"+link+"'>"+link+"</a>")

}

function obfuscatorPhoneNum () {

 coded = "+Z8 fF FZb bB bM"
  key = "gfWkZRlEc53NCTFYuaQmpOJGtDV6sveSowdh9iy21zn8AxL7qH4rBPXMjKUb0I"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
document.write(link)
};

// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

function obfuscatorEmail2 () {

    var email = "email"

    /* primary email
      coded = "vrFFE@7hZUI7UB8FUm.mE7"
    key = "N0bAjJSQ7eVT9LlRUItBovyKuDcMPqgrY512FGpa6HExws83m4zdWZfCinOkXh"
    */

    // temporary email
    coded = "8891S69w@uSc6uu1.wu8"
    key = "JUE1eFoNw52jH73lvM04sTiOWZuVnAtxPCR6fabpmL9dqkSQXgcKrhBzDGyI8Y"
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
    }
    document.write("<a href='mailto:"+link+"'>"+email+"</a>")

}



function obfuscatorEmail3 () {

   /* primary email
      coded = "vrFFE@7hZUI7UB8FUm.mE7"
    key = "N0bAjJSQ7eVT9LlRUItBovyKuDcMPqgrY512FGpa6HExws83m4zdWZfCinOkXh"
    */

    // temporary email

    coded = "8891S69w@uSc6uu1.wu8"
    key = "JUE1eFoNw52jH73lvM04sTiOWZuVnAtxPCR6fabpmL9dqkSQXgcKrhBzDGyI8Y"
      shift=coded.length
      link=""
      for (i=0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
          ltr = coded.charAt(i)
          link += (ltr)
        }
        else {     
          ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
          link += (key.charAt(ltr))
        }
      }
    document.write("<a href='mailto:"+link+"'>"+link+"</a>")
    console.log("<a href='mailto:"+link+"'>"+link+"</a>")

}

function obfuscatorEmailIcon () {

    /* primary email
      coded = "vrFFE@7hZUI7UB8FUm.mE7"
    key = "N0bAjJSQ7eVT9LlRUItBovyKuDcMPqgrY512FGpa6HExws83m4zdWZfCinOkXh"
    */

    // temporary email
    coded = "8891S69w@uSc6uu1.wu8"
    key = "JUE1eFoNw52jH73lvM04sTiOWZuVnAtxPCR6fabpmL9dqkSQXgcKrhBzDGyI8Y"
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
    }
    document.write("<li><a href=\"mailto:" + link + "\"  class=\"email\" data-title=\"Email\"></a></li>")
    console.log("<li><a href=\"mailto:" + link + "\" class=\"email\" data-title=\"Email\"></a></li>")

}


