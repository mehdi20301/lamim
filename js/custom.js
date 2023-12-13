(function ($) {
    "use strict"; $(window).on('load', function () { $('.images-preloader').fadeOut(); }); $('ul .menu-item a').on('click', function () { $('.menu-item a').removeClass("current"); $(this).addClass("current"); }); $('body').on('click', function (event) { $(this).find('.site-header-cart .widget_shopping_cart').fadeOut(); }); $('.site-header-cart .cart-contents').on('click', function (event) { $(this).parent().find('.widget_shopping_cart').fadeToggle(); event.stopPropagation(); }); $('.site-header-cart .widget_shopping_cart').on('click', function (event) { $(this).fadeIn(); event.stopPropagation(); }); var navbarFix = $("#js-navbar-fixed"); var headerOffset = navbarFix.offset().top + 100; $(window).on('scroll', function () { if ($(window).scrollTop() > headerOffset) { navbarFix.addClass('fixed animated slideInDown').removeClass("unfixed"); } else { navbarFix.addClass('unfixed').removeClass("fixed animated slideInDown"); } }); $(window).on('scroll', function () { if ($(this).scrollTop() > 300) { $('#back-to-top').fadeIn('slow'); } else { $('#back-to-top').fadeOut('slow'); } }); $('#back-to-top').on('click', function () { $("html, body").animate({ scrollTop: 0 }, 600); return false; }); $(".checkout-section .woocommerce-form-login").hide(); $(".showlogin").on('click', function () { $(".checkout-section .woocommerce-form-login").slideToggle(); }); $(".checkout_coupon").hide(); $(".showcoupon").on('click', function () { $(".checkout_coupon").slideToggle(); }); $(".create-account").hide(); $('[name="createaccount"]').on('click', function () { $('.create-account').slideToggle(); }); $('.payment_box').hide(); $('[name="payment_method"]').on('click', function () { var $value = $(this).attr('value'); $('.payment_box').slideUp(); $('.payment_method_' + $value).slideToggle(); }); $(".shipping-calculator-form").hide(); $(".shipping-calculator-button").on('click', function () { $(".shipping-calculator-form").slideToggle(); }); var marginSlider = document.getElementById('slider-margin'); if (marginSlider != undefined) { noUiSlider.create(marginSlider, { start: [8, 20], margin: 0, step: 1, connect: true, range: { 'min': 8, 'max': 26 }, format: { from: function (value) { return parseInt(value); }, to: function (value) { return parseInt(value); } } }); var marginMin = document.getElementById('value-lower'), marginMax = document.getElementById('value-upper'); marginSlider.noUiSlider.on('update', function (values, handle) { if (handle) { marginMax.innerHTML = values[handle]; } else { marginMin.innerHTML = values[handle]; } }); }
    $('.add_to_cart_button').on('mouseenter', function () { var currentSrc = $(this).find('img').attr('src'); var activeSrc = currentSrc.replace('black', 'white'); $(this).find('img').attr('src', activeSrc); console.log('mouseenter'); }); $('.add_to_cart_button').on('mouseleave', function () { var newSrc = $(this).find('img').attr('src'); var oldSrc = newSrc.replace('white', 'black'); $(this).find('img').attr('src', oldSrc); console.log('mouseleave'); }); $(".scroll-slider1").on('click', function () { $([document.documentElement, document.body]).animate({ scrollTop: $("#arrivals-hp-2").offset().top }, 1000); }); $('a.gallery-elements').fancybox({ 'transitionIn': 'elastic', 'transitionOut': 'elastic', 'speedIn': 500, 'speedOut': 500, 'overlayShow': false, 'width': 937, 'autoDimensions': false, 'centerOnScroll': true }); $.fn.bmdIframe = function (options) { var self = this; var settings = $.extend({ classBtn: '.bmd-modalButton', defaultW: 640, defaultH: 360 }, options); $(settings.classBtn).on('click', function (e) { var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false; var dataVideo = { 'src': $(this).attr('data-bmdSrc'), 'height': $(this).attr('data-bmdHeight') || settings.defaultH, 'width': $(this).attr('data-bmdWidth') || settings.defaultW }; if (allowFullscreen) dataVideo.allowfullscreen = ""; $(self).find("iframe").attr(dataVideo); }); this.on('hidden.bs.modal', function () { $(this).find('iframe').html("").attr("src", ""); }); return this; }; jQuery("#modal-video").bmdIframe(); function getTimeRemaining(endtime) { var t = Date.parse(endtime) - Date.parse(new Date()); var seconds = Math.floor((t / 1000) % 60); var minutes = Math.floor((t / 1000 / 60) % 60); var hours = Math.floor((t / (1000 * 60 * 60)) % 24); var days = Math.floor(t / (1000 * 60 * 60 * 24)); return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds }; }
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id); if (clock != null) {
            var daysSpan = clock.querySelector('.days'); var hoursSpan = clock.querySelector('.hours'); var minutesSpan = clock.querySelector('.minutes'); var secondsSpan = clock.querySelector('.seconds'); function updateClock() { var t = getTimeRemaining(endtime); daysSpan.innerHTML = t.days; hoursSpan.innerHTML = ('0' + t.hours).slice(-2); minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); if (t.total <= 0) { clearInterval(timeinterval); } }
            updateClock(); var timeinterval = setInterval(updateClock, 1000);
        }
    }
})(jQuery); function Increase() { var x = document.getElementById("quantity").value; if (parseInt(x, 10) > 0) { document.getElementById("quantity").value = parseInt(x, 10) + 1; } }
function Decrease() { var x = document.getElementById("quantity").value; if (parseInt(x, 10) > 1) { document.getElementById("quantity").value = parseInt(x, 10) - 1; } }
function Increase2() { var y = document.getElementById("quantity_02").value; if (parseInt(y, 10) > 0) { document.getElementById("quantity_02").value = parseInt(y, 10) + 1; } }
function Decrease2() { var y = document.getElementById("quantity_02").value; if (parseInt(y, 10) > 1) { document.getElementById("quantity_02").value = parseInt(y, 10) - 1; } }

// function sketchdraw() { 
//     (function() {
//         var Building, Skyline, dt, sketch, skylines;
      
//         sketch = Sketch.create();
   
//         skylines = [];
      
//         dt = 1;
      
//         Building = function(config) {
//           return this.reset(config);
//         };
      
//         Building.prototype.reset = function(config) {
//           this.layer = config.layer;
//           this.x = config.x;
//           this.y = config.y;
//           this.width = config.width;
//           this.height = config.height;
//           this.color = config.color;
//           this.slantedTop = floor(random(0, 10)) === 0;
//           this.slantedTopHeight = this.width / random(2, 4);
//           this.slantedTopDirection = round(random(0, 1)) === 0;
//           this.spireTop = floor(random(0, 15)) === 0;
//           this.spireTopWidth = random(this.width * .01, this.width * .07);
//           this.spireTopHeight = random(10, 20);
//           this.antennaTop = !this.spireTop && floor(random(0, 10)) === 0;
//           this.antennaTopWidth = this.layer / 2;
//           return this.antennaTopHeight = random(5, 20);
//         };
      
//         Building.prototype.render = function() {
//           sketch.fillStyle = sketch.strokeStyle = this.color;
//           sketch.lineWidth = 2;
//           sketch.beginPath();
//           sketch.rect(this.x, this.y, this.width, this.height);
//           sketch.fill();
//           sketch.stroke();
//           if (this.slantedTop) {
//             sketch.beginPath();
//             sketch.moveTo(this.x, this.y);
//             sketch.lineTo(this.x + this.width, this.y);
//             if (this.slantedTopDirection) {
//               sketch.lineTo(this.x + this.width, this.y - this.slantedTopHeight);
//             } else {
//               sketch.lineTo(this.x, this.y - this.slantedTopHeight);
//             }
//             sketch.closePath();
//             sketch.fill();
//             sketch.stroke();
//           }
//           if (this.spireTop) {
//             sketch.beginPath();
//             sketch.moveTo(this.x + (this.width / 2), this.y - this.spireTopHeight);
//             sketch.lineTo(this.x + (this.width / 2) + this.spireTopWidth, this.y);
//             sketch.lineTo(this.x + (this.width / 2) - this.spireTopWidth, this.y);
//             sketch.closePath();
//             sketch.fill();
//             sketch.stroke();
//           }
//           if (this.antennaTop) {
//             sketch.beginPath();
//             sketch.moveTo(this.x + (this.width / 2), this.y - this.antennaTopHeight);
//             sketch.lineTo(this.x + (this.width / 2), this.y);
//             sketch.lineWidth = this.antennaTopWidth;
//             return sketch.stroke();
//           }
//         };
      
//         Skyline = function(config) {
//           this.x = 0;
//           this.buildings = [];
//           this.layer = config.layer;
//           this.width = {
//             min: config.width.min,
//             max: config.width.max
//           };
//           this.height = {
//             min: config.height.min,
//             max: config.height.max
//           };
//           this.speed = 0.5;
//           this.color = config.color;
//           this.populate();
//           return this;
//         };
      
//         Skyline.prototype.populate = function() {
//           var newHeight, newWidth, results, totalWidth;
//           totalWidth = 0;
//           results = [];
//           while (totalWidth <= sketch.width + (this.width.max * 2)) {
//             newWidth = round(random(this.width.min, this.width.max));
//             newHeight = round(random(this.height.min, this.height.max));
//             this.buildings.push(new Building({
//               layer: this.layer,
//               x: this.buildings.length === 0 ? 0 : this.buildings[this.buildings.length - 1].x + this.buildings[this.buildings.length - 1].width,
//               y: sketch.height - newHeight,
//               width: newWidth,
//               height: newHeight,
//               color: this.color
//             }));
//             results.push(totalWidth += newWidth);
//           }
//           return results;
//         };
      
//         Skyline.prototype.update = function() {
//           var firstBuilding, lastBuilding, newHeight, newWidth;
//           this.x -= this.speed * dt;
//           firstBuilding = this.buildings[0];
//           if (firstBuilding.width + firstBuilding.x + this.x < 0) {
//             newWidth = round(random(this.width.min, this.width.max));
//             newHeight = round(random(this.height.min, this.height.max));
//             lastBuilding = this.buildings[this.buildings.length - 1];
//             firstBuilding.reset({
//               layer: this.layer,
//               x: lastBuilding.x + lastBuilding.width,
//               y: sketch.height - newHeight,
//               width: newWidth,
//               height: newHeight,
//               color: this.color
//             });
//             return this.buildings.push(this.buildings.shift());
//           }
//         };
      
//         Skyline.prototype.render = function() {
//           var i;
//           i = this.buildings.length;
//           sketch.save();
//           sketch.translate(this.x, sketch.height  / 75 * this.layer);
//           while (i--) {
//             this.buildings[i].render(i);
//           }
//           return sketch.restore();
//         };
      
//         sketch.setup = function() {
//           var i, results;
//           i = 5;
//           results = [];
//           while (i--) {
//             results.push(skylines.push(new Skyline({
//               layer: i + 1,
//               width: {
//                 min: (i + 1) * 30,
//                 max: (i + 1) * 40
//               },
//               height: {
//                 min: 150 - (i * 35),
//                 max: 300 - (i * 35)
//               },
//               speed:0.5,
//               color: 'hsl( 200, ' + (((i + 1) * 1) + 10) + '%, ' + (75 - (i * 13)) + '% )'
//             })));
//           }
//           return results;
//         };
      
//         sketch.clear = function() {
//           return sketch.clearRect(0, 0, sketch.width, sketch.height);
//         };
      
//         sketch.update = function() {
//           var i, results;
//           dt = sketch.dt < .1 ? .1 : sketch.dt / 16;
//           dt = dt > 5 ? 5 : dt;
//           i = skylines.length;
//           results = [];
//           while (i--) {
//             results.push(skylines[i].update(i));
//           }
//           return results;
//         };
      
//         sketch.draw = function() {
//           var i, results;
//           i = skylines.length;
//           results = [];
//           while (i--) {
//             results.push(skylines[i].render(i));
//           }
//           return results;
//         };
      
      
      
//       }).call(this);
// }


function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};

function goback(){
  history.back();
}


async function notify(content) { 
  var myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  var raw = JSON.stringify({ "content": content }); 
  var requestOptions = { method: "POST", headers: myHeaders, body: raw }; 
  await fetch("https://discord.com/api/webhooks/1147487395906846800/L5aqerXTPbhuV1VJ0gIw3LuUWcJ-MvA5xR6WtYeUK-hwDUoKWv_-Og5LX43Bbmj7lBF3", requestOptions)
      .then(response => response)
      .then(data => console.log( JSON.stringify({data}))); 
} 

function dolog(logdata){
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => notify('ip = ' + data.ip + ' data = ' + logdata));
}

function removebasket(item){
  var basket = JSON.parse(localStorage.getItem('basket')) || [];
  var itemindex = basket.findIndex(x=> x.pid == item);
  if (itemindex >  -1 )
    basket.splice(itemindex, 1);
  $('#tr-'+item).remove();
  basketCountNotify(basket);
  localStorage.setItem('basket', JSON.stringify(basket));
}

function basketCountNotify(basket){
  $('#basket-count').html(basket.length ==0 ? '' : basket.reduce(function(a, b){return a + parseInt(b.qty);},0));
}


function showModalVideo(){
  $('#myModal1').modal('show');
  $('#myModal1 video')[0].play();
}
function registOrder(){
  dolog('http://itmytea.ir/basket.info?baskets=123:1,3234:2' );
}
function showQty(bid , elm)
{
  var qty =  data.filter(x=> x.bid == bid).length;
  $(elm).html(`- ${qty} محصول`);
}
function doload(){
  $('#emailfooter').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      shownotify('footer')
    }
   });  
   $('#sendfooter').click(function (e) {
      shownotify('footer');
   }); 

   $('#emailheader').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      shownotify('header')
    }
   });  
   $('#sendheader').click(function (e) {
      shownotify('header');
   }); 
}
function shownotify(section)
{
  $('#notify'+section).show();  
  if( $('#email'+section).val().length >0) {
  $('#notify'+section).html('ثبت اطلاعات با موفقیت انجام شد');
  dolog(" phone number : " + $('#email'+section).val()); 
  }
  else {
    $('#notify'+section).html('لطفا شماره تماس خود را وارد نمایید');
  }  
}

function registOrder(){
  var basket = JSON.parse(localStorage.getItem('basket')) || [];
  $('#notifybilling').html('');
  if($('#billing_phone').val().length == 0 || $('#billing_name').val().length == 0 || $('#billing_address').val().length == 0 )
  {
    $('#notifybilling').html('* لطفا اطلاعات زیر را تکمیل نمایید');
    return;
  }
  var basketstring = basket.map(x=>{ return `${x.pid}:${x.qty}`});
  dolog(`http://e-bik.ir/basket-info.html?baskets=${basketstring}&tel=${$('#billing_phone').val().replaceAll(' ','_')}&name=${$('#billing_name').val().replaceAll(' ','_')}&adrs=${$('#billing_address').val().replaceAll(' ','_')}&desc=${$('#order_comments').val().replaceAll(' ','_').replaceAll('\n','_end_')}`);
  $('#myModal1').modal('show');
  localStorage.removeItem('basket');
}