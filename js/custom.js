$('.center').slick({
   centerMode: false,
   centerPadding: '60px',
   slidesToShow: 5,
 
   prevArrow: `<button type="button" class="slick-prev">click</button>`,
   nextArrow: `<button type="button" class="slick-next">click</button>`,
 
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: false,
           centerPadding: '40px',
           slidesToShow: 3
         }
       },
 
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
   });