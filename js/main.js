  var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
    var swiper = new Swiper(".mySwiper1", {
        autoplay: {
            delay: 500,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".mySwiper3", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        slidesPerView: 2,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".mySwiper4", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    let trailCursor = document.querySelector("#trail-cursor");
    let circles = trailCursor.getAttribute("data-circle");
    let coords = {
        x: 0,
        y: 0
    };
    
    for (i = 0; i < circles; i++) {
        let div = document.createElement("div");
        div.className = "circle";
        trailCursor.appendChild(div);
    }
    
    let allCricles = document.querySelectorAll(".circle");
    allCricles.forEach((el) => {
        el.x = 0;
        el.y = 0;
    });
    
    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animeCircle() {
        let x = coords.x;
        let y = coords.y;
    
        allCricles.forEach((el, index) => {
            el.style.left = x - el.clientHeight / 2 + "px";
            el.style.top = y - el.clientHeight / 2 + "px";
    
            el.style.scale = (allCricles.length - index) / allCricles.length;
    
            el.x = x;
            el.y = y;
    
            let nxtCrcl = allCricles[index + 1] || allCricles[0];
            x += (nxtCrcl.x - x) * 0.3;
            y += (nxtCrcl.y - y) * 0.3;
        });
    
        requestAnimationFrame(animeCircle);
    }
    
    animeCircle();
    
    $( ".button_su_inner" ).mouseenter(function(e) {
       var parentOffset = $(this).offset(); 
      
       var relX = e.pageX - parentOffset.left;
       var relY = e.pageY - parentOffset.top;
       $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
       $(this).prev(".su_button_circle").removeClass("desplode-circle");
       $(this).prev(".su_button_circle").addClass("explode-circle");
    
    });
    
    $( ".button_su_inner" ).mouseleave(function(e) {
    
         var parentOffset = $(this).offset(); 
    
         var relX = e.pageX - parentOffset.left;
         var relY = e.pageY - parentOffset.top;
         $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
         $(this).prev(".su_button_circle").removeClass("explode-circle");
         $(this).prev(".su_button_circle").addClass("desplode-circle");
    
    });