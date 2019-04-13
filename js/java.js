(function(){
    
    var $shape=$("#shape"),
        $Layer_3=$("#layer-3"),
        $backWhite1=$("#Path_1452"),
        $shadow=$("#Rectangle_64"),
        $purple_back=$("#Rectangle_63"),
        $menu=$("#menu circle"),
        $backperson=$("#Rectangle_98"),
        $person=$("#person #Path_1475"),
        $LineNextP= $('#person #linePerson rect'),
        $skewBox1=$("#skewBox1 path"),
        $skewBox2=$("#skewBox2 path"),
        $skewBox3=$("#skewBox3"),
        $backWhite2=$("#Rectangle_65"),
        $checkbox1=$("#Group_365 path"),
        $checkbox2=$("#Group_366 path"),
        $checkbox3=$("#checkbox3 path"),
        $BoxPhoneGreen=$("#BoxPhoneGreen"),
        $boxGreen=$("#Group_362"),
        $boxFilePink=$("#boxFilePink"),
        $boxPink=$("#Group_363"),
        $boxcalenderAqua=$("#boxcalenderAqua"),        
        $boxAqua=$("#Group_364"),
        $LineGreen=$("#lineGreen"),
        $LinePink=$("#linePink"),
        $circle1=$("#circle1"),
        $FirstLines=$("#First3LineRect rect"),
        $circle2=$("#circle2"),
        $secondLines=$("#Second2LineRect rect"),
        $circle3=$("#circle3"),
        $ThirdLines=$("#third3LineRect rect"),
        $circle4=$("#circle4"),
        $FourLines=$("#fourth4LineRect rect"),
        $circle5=$("#circle5"),
        $fifthLines=$("#fifth5LineRect rect"),
        $circle6=$("#circle6"),
        $sixLines=$("#six6LineRect rect"),
        $Button=$("#Button"),
       
        //LoaderBack
        $loader=$("#loader"),
        $dot=$("#loader div"),

        //tween  svg
        t1=new TimelineLite(),
      
       // Fixed Loadder
       t1Loader=new TimelineMax({onComplete:loadContent});
       t1Loader.staggerFromTo($dot,0.5,
           {y:0,autoAlpha:0},
           {y:20,autoAlpha:0.5 ,ease: Back.easeInOut},
           0.1
       )
       .fromTo($loader,0.4,
           {autoAlpha:1,scale:1.3},
           {autoAlpha:0,scale:1,ease: Power0.easeNone},
           1
       );

       function loadContent(){
          var t1LoaderOut=new TimelineLite({onComplete:contentIn});
            t1LoaderOut.set($dot,{backgroundColor:"#6c63ff"})
                       .to($loader,0.3,{autoAlpha :1,scale:1.3,ease:Power0.easeNone})
                       .staggerFromTo($dot,0.5,
                           {y:0,autoAlpha:0},
                           {y:20,autoAlpha:1 ,ease: Back.easeInOut},
                           0.1
                       )
                       .to($loader,0.3,{y:-150 ,autoAlpha :0,ease: Back.easeInOut} ,"+=0.2")
       }
      

             t1.set( $Layer_3 ,{autoAlpha:1})
               .from($shape,0.8,{scale:0,autoAlpha:0 , ease: Power1.easeInOut })
               .from($backWhite1,1,{y:200,autoAlpha:0 , ease: Power1.easeInOut })
               .from($backWhite2,0.5,{y:100,autoAlpha:0 , ease: Power1.easeInOut })
               .from($shadow,0.5,{y:100,autoAlpha:0 , ease: Power1.easeInOut })
               .from($purple_back,1,{y:-200,autoAlpha:0 , ease: Power1.easeInOut })
               .staggerFrom($menu,0.6 , {y:50,autoAlpha:0 ,ease: Back.easeInOut},  0.1)
               .from($backperson,0.5,{scale:0,autoAlpha:0 , ease: Power1.easeInOut })
               .from($person,0.5,{scale:0,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($LineNextP,0.4 ,{cycle:{
                       y:[100,-100],
                       scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .staggerFrom($skewBox1,0.4 ,{cycle:{
                    x:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .staggerFrom($skewBox2,0.4 ,{cycle:{
                    x:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)

                .from($skewBox3,0.5,{x:100,autoAlpha:0 , ease: Power1.easeInOut })
                .from($boxGreen,0.5,{y:-200,autoAlpha:0 , ease: Power1.easeInOut })
                .from($BoxPhoneGreen,0.5,{scale:0,autoAlpha:0 , ease: Power1.easeInOut })
                .from($LineGreen,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .from($boxPink,0.5,{y:-200,autoAlpha:0 , ease: Power1.easeInOut })
                .from($boxFilePink,0.5,{scale:0,autoAlpha:0 , ease: Power1.easeInOut })
                .from($LinePink,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .from($boxAqua,0.5,{y:-200,autoAlpha:0 , ease: Power1.easeInOut })
                .from($boxcalenderAqua,0.5,{scale:0,autoAlpha:0 , ease: Power1.easeInOut })
                .from($checkbox1,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .from($circle1,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($FirstLines,0.4 ,{cycle:{
                        y:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .from($circle2,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($secondLines,0.4 ,{cycle:{
                        y:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .from($checkbox2,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .from($circle3,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($ThirdLines,0.4 ,{cycle:{
                        y:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .from($circle4,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($FourLines,0.4 ,{cycle:{
                        y:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .from($checkbox3,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .from($circle5,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($fifthLines,0.4 ,{cycle:{
                        y:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                .from($circle6,0.5,{y:-100,autoAlpha:0 , ease: Power1.easeInOut })
                .staggerFrom($sixLines,0.4 ,{cycle:{
                        y:[100,-100],
                        scale:[2,1.3]
                },autoAlpha:0, ease:Power1.easeIn},0.1)
                
                .from($Button,0.5,{x:200,autoAlpha:0 , ease: Power1.easeInOut })
   
                
         

               

              

               
              
             

              t1.pause();
              function contentIn(){
                       t1.play();
                }

           
              
           
})();









