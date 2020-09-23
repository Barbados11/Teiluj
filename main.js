 $(document).ready(function() {
     var navOpen= false;
     $('.toggle-nav').click(function() {
         if (navOpen == false) {
             $('.wrapper').css("position", "absolute").animate({
                 left: "30%"
             });
             $(this).animate({
                 left: "30%"
             }).removeClass("entypo-menu").addClass("entypo-cancel");
             $('nav').animate({
                 left: "0%"
             });    navOpen = true;

            } else {
                $('.wrapper').animate({
                    left:"0%"
                }, function() {
                    $(this).css("position", "relative");
                });
                $(this).animate({
                    left:"0%"
                }).removeClass("entypo-cancel").addClass("entypo-menu");
                $('nav').animate({
                    left:"-30%"
                });
                navOpen = false;
                }
            });
            
            // Smooth Anchor Scrolling
            $('a').click(function(){
                $('html,body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 500);
                return false;
            });
        });
        

        var $orbs = $('.orbs span');
        $('.end-right').css('left' , '-10%');
        $('.end-left').css('left', '110%');
        $orbs.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: '#990000'},0);
        var orb = 0;
        var numOrbs = $orbs.length;
        
        $('.end-right').velocity({left : '50%'}, 'easeOutExpo', 1200);
        $('.end-left').velocity({left : '50%'}, 'easeOutExpo',  1200);
        
        
        dropOrbs = function(){
          $orbs.eq(orb).velocity({top: '70px'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1000).css('position', 'relative');
          orb = orb + 1;
          if(orb < numOrbs){
            setTimeout(dropOrbs, 100);
          }
          else{
            setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);
        
          }
          
        }
        
        setTimeout(dropOrbs, 400);
