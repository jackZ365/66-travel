function operation(){

    //header轮播图区域的高度是窗口高度的90%
    $(".header").css({height:window.innerHeight*0.9});

    function img_sc(){
        //上面的大图 动画
        if($(".header_wrapper>div:visible").index()==8){
            $(".header_wrapper>div").eq(0).stop().fadeIn(2000).children("img").css({transform:"translate(-50%,-50%) scale(1.1)"})
                .parent("div").siblings("div").fadeOut().children("img").css({transform:"scale(1) translate(-50%,-50%)"});
        }else{
            $(".header_wrapper>div:visible").stop().next().fadeIn(2000).children("img").css({transform:"translate(-50%,-50%) scale(1.1) "})
                .parent("div").siblings("div").fadeOut().children("img").css({transform:"scale(1) translate(-50%,-50%)"});
        }
    }
    function img_scP(){
        //上面的大图 动画
        if($(".header_wrapper>div:visible").index()==0){
            $(".header_wrapper>div").eq(8).stop().fadeIn(2000).children("img").css({transform:"translate(-50%,-50%) scale(1.1)"})
                .parent("div").siblings("div").fadeOut().children("img").css({transform:"scale(1) translate(-50%,-50%)"});
        }else{
            $(".header_wrapper>div:visible").prev().stop().fadeIn(2000).children("img").css({transform:"translate(-50%,-50%) scale(1.1) "})
                .parent("div").siblings("div").fadeOut().children("img").css({transform:"scale(1) translate(-50%,-50%)"});
        }
    }
    //var img_timer=setInterval(img_sc,10000);
		
	/* ==轮播图======= */
	var head_iW=$(".header_slide_item").outerWidth();
	var head_N=1;
    $(".header_slide").css({left:-head_iW*1});
	//console.log(head_iW);
	//左边按钮=======================================
	    function head_left(){
            img_scP();
	        $(".slidesNav_left").off("click");//解绑事件
	        setTimeout(function(){$(".slidesNav_left").click(head_left);},800)//等待500毫秒以后把事件绑定恢复
	        head_N--;
	        if(head_N==-1){//左边到顶的时候
	            head_N=9;
	            $(".header_slide").css({transition:"none"});
	            setTimeout(function(){
	                head_N--;
	                $(".header_slide").css({transition:""});
	                $(".header_slide").css({left:-head_iW*head_N});
	            },10)
	        }
	        $(".header_slide").css({left:-head_iW*head_N});
	    }
	    $(".slidesNav_left").click(head_left);
	//右边按钮==================================
	    function head_right(){
            img_sc();
            //console.log(head_N);
	        $(".slidesNav_right").off("click");
	        setTimeout(function(){ $(".slidesNav_right").click(head_right);},800);
	        head_N++;
	        if(head_N==11){
	            head_N=1;
	            $(".header_slide").css({transition:"none"});
	            setTimeout(function(){
	                head_N++;
	                $(".header_slide").css({transition:""});
	                $(".header_slide").css({left:-head_iW*head_N});
	            },10)
	        }
	        $(".header_slide").css({left:-head_iW*head_N});
	    }
	    $(".slidesNav_right").click(head_right);
    //点击按钮=============
    function clF(){

    }
	//定时器==================================
	    var head_timer=setInterval(head_right,10000);
    //移入暂停==================================
    $(".slidesNav_right").hover(function(){
        clearInterval(head_timer);
    },function(){
        head_timer=setInterval(head_right,10000);
    });
    $(".slidesNav_left").hover(function(){
        clearInterval(head_timer);
    },function(){
        head_timer=setInterval(head_right,10000);
    });


    //了解更多
    $(".header_slide_item>a").hover(function(){
        $(this).children("span").slideDown();
    },function(){
        $(this).children("span").slideUp();
    });


    //导航栏鼠标移入显示的 内容      移入导航
    var navM=false;
   $(".header_title_nav_item").each(function(i,v){//i是数据地址   v是标签
		$(v).hover(function(){
		    $(this).children(".item_box").stop().fadeIn();
		    $(".item_boxA").stop().fadeIn().children(".item_box_img:nth-child("+(i+1)+")").fadeIn();
		},function(){
		    $(this).children(".item_box").stop().fadeOut();
		    $(".item_boxA").stop().fadeOut().children(".item_box_img:nth-child("+(i+1)+")").fadeOut();
		});

    });


    /*---------图片上导航栏的大标题的位置在 4:6--------------------*/
    var header_title_left=window.innerWidth*0.5-$(".header_title").outerWidth()*0.4;
    //console.log(header_title_left);//页面打开或刷新的时候执行
    $(".header_title").css({left:header_title_left});
    window.onresize=function(){//页面大小的时候执行
        var header_title_left=window.innerWidth*0.5-$(".header_title").outerWidth()*0.4;
        $(".header_title").css({left:header_title_left});
    }
    /*========下拉列表============*/
    var nav_kg1=false;
    $(".nav_item1").click(function(e){
        e.stopPropagation();
        nav_kg1=!nav_kg1;
        $(".nav_item1_select").slideToggle();
        //console.log(  nav_kg  )
        if(nav_kg1){
            $(".nav_item1").css({color:'#fff',background:'#242a3a'});
        }else{
            $(".nav_item1").css({color:'',background:''});
        }
        $(".nav_item2_select").slideUp();
        $(".nav_item2").css({color:'',background:''});
        $(".nav_item3_select").slideUp();
        $(".nav_item3").css({color:'',background:''});
    });
    $(".nav_item1_select_option").click(function(){
        $(".nav_item1>span").text($(this).text());
    });

    var nav_kg2=false;
    $(".nav_item2").click(function(e){
        e.stopPropagation();
        nav_kg2=!nav_kg2;
        $(".nav_item2_select").slideToggle();
        if(nav_kg2){
            $(".nav_item2").css({color:'#fff',background:'#242a3a'});
        }else{
            $(".nav_item2").css({color:'',background:''});
        }
        $(".nav_item1_select").slideUp();
        $(".nav_item1").css({color:'',background:''});
        $(".nav_item3_select").slideUp();
        $(".nav_item3").css({color:'',background:''});
    });
    $(".nav_item2_select_option").click(function(){
        $(".nav_item2>span").text($(this).text());
    });

    var nav_kg3=false;
    $(".nav_item3").click(function(e){
        e.stopPropagation();
        nav_kg3=!nav_kg3;
        $(".nav_item3_select").slideToggle();
        if(nav_kg3){
            $(".nav_item3").css({color:'#fff',background:'#242a3a'});
        }else{
            $(".nav_item3").css({color:'',background:''});
        }
        $(".nav_item1_select").slideUp();
        $(".nav_item1").css({color:'',background:''});
        $(".nav_item2_select").slideUp();
        $(".nav_item2").css({color:'',background:''});
    });
    $(".nav_item3_select_option").click(function(){
        $(".nav_item3>span").text($(this).text());
    });

    $(window).click(function(e){
        //console.log( 11111 );
        nav_kg1=false;
        nav_kg2=false;
        nav_kg3=false;
        $(".nav_item_select").slideUp();
        $(".nav_item").css({color:'',background:''});

    });

    var nav_l2=false;
    $(".nav_item4").click(function(){
        nav_l2=!nav_l2;
        if(nav_l2){
            $(this).children("svg").css({transform: 'rotate(45deg)'});
            $(".nav_list2").css({height:'80px'});
        }else{
            $(this).children("svg").css({transform: 'rotate(0deg)'});
            $(".nav_list2").css({height:'0'});
        }
    });

	var nav_i5=false;
    $(".nav_item5").click(function(){
		nav_i5=!nav_i5;
		if(nav_i5){
			$(".nav_item1").css({width:0,opacity:0,border:'none'});
			$(".nav_item2").css({width:0,opacity:0,border:'none'});
			$(".nav_item3").css({width:0,opacity:0,border:'none'});
			$(".nav_item4").css({width:0,opacity:0,border:'none'});
			$(".nav_item5_search").css({width:'740px',paddingLeft:'10px'});
		}else{
			$(".nav_item1").css({width:'',opacity:'',border:''});
			$(".nav_item2").css({width:'',opacity:'',border:''});
			$(".nav_item3").css({width:'',opacity:'',border:''});
			$(".nav_item4").css({width:'',opacity:'',border:''});
			$(".nav_item5_search").css({width:'',paddingLeft:'0'});	
		}  
    });
	$(".nav_item5_search>svg").click(function(){
		nav_i5=false;
		$(".nav_item1").css({width:'',opacity:'',border:''});
		$(".nav_item2").css({width:'',opacity:'',border:''});
		$(".nav_item3").css({width:'',opacity:'',border:''});
		$(".nav_item4").css({width:'',opacity:'',border:''});
		$(".nav_item5_search").css({width:'',paddingLeft:'0'});		
	});



    /*========================我们的选择===========================*/
    $(".selection_main_nav_next").hover(function() {
        $(this).children(".animated").addClass("fadeInRight");
    },function(){
        $(this).children(".animated").removeClass("fadeInRight");
    });
    $(".selection_main_nav_prev").hover(function() {
        $(this).children(".animated").addClass("fadeInLeft");
    },function(){
        $(this).children(".animated").removeClass("fadeInLeft");
    });
	
	/* ==轮播图======= */
	var selW=$(".slides_team").outerWidth();
	var snavH=$("._count_numA_box>span").outerHeight();
	var selN=0;
	//console.log(selW);
	//左边按钮=======================================
	    function selleft(){
	        $(".selection_main_nav_prev").off("click");//解绑事件
	        setTimeout(function(){$(".selection_main_nav_prev").click(selleft);},500)//等待500毫秒以后把事件绑定恢复
	        selN--;
	        if(selN==-1){//左边到顶的时候
	            selN=3;
	            $(".selection_main_slides").css({transition:"none"});
	            $("._count_numA_box").css({transition:"none"});
	            setTimeout(function(){
	                selN--;
	                $(".selection_main_slides").css({transition:""});
	                $(".selection_main_slides").css({left:-selW*selN});
					$("._count_numA_box").css({transition:""});
					$("._count_numA_box").css({top:-snavH*selN});
					$(".pagination_line>i").css({width:$(".pagination_line").width()*(selN/3)});
	            },10)
	        }
			$(".pagination_line>i").css({width:$(".pagination_line").width()*((selN==0?3:selN)/3)});
	        $(".selection_main_slides").css({left:-selW*selN});
			$("._count_numA_box").css({top:-snavH*selN});
	    }
	    $(".selection_main_nav_prev").click(selleft);
	//右边按钮==================================
	    function selright(){
			
	        $(".selection_main_nav_next").off("click");
	        setTimeout(function(){ $(".selection_main_nav_next").click(selright);},500);
	        selN++;   //console.log(selN);
	        if(selN==5){
	            selN=1;
	            $(".selection_main_slides").css({transition:"none"});
				$("._count_numA_box").css({transition:"none"});
	            setTimeout(function(){
	                selN++;
	                $(".selection_main_slides").css({transition:""});
	                $(".selection_main_slides").css({left:-selW*selN});
					$("._count_numA_box").css({transition:""});
					$("._count_numA_box").css({top:-snavH*selN});
					$(".pagination_line>i").css({width:$(".pagination_line").width()*(selN/3)});
	            },10)
	        }
			$(".pagination_line>i").css({width:$(".pagination_line").width()*((selN==4?1:selN)/3)});
			
	        $(".selection_main_slides").css({left:-selW*selN});
			$("._count_numA_box").css({top:-snavH*selN});
	    }
	    $(".selection_main_nav_next").click(selright);
	//定时器==================================
	    var sel_timer=setInterval(selright,8000);
	//移入暂停==================================
	    $(".selection_main").hover(function(){
	        clearInterval(sel_timer);
	    },function(){
	        sel_timer=setInterval(selright,8000);
	    }); 
		
	/* ============确认离开======================== */
		$(".selection_title_dropdown_Sleave").click(function(){
			selN=1;
			$(".pagination_line>i").css({width:$(".pagination_line").width()*(selN/3)});
			$(".selection_main_slides").css({left:-selW*selN});
			$("._count_numA_box").css({top:-snavH*selN});
			
			$(".selection_main_slides").css({top:"15%"});
			$(".slideMuse").css({display:"none",opacity: 0}).removeClass("animated fadeInDownBig").addClass("animated fadeOutDownBig");
			$(".slideSleave").css({display:"flex",opacity: 1}).removeClass("animated fadeOutDownBig").addClass("animated fadeInDownBig");
			$(this).children().css({color:"#242a3a"}).children().css({width:"100%"});
			$(".selection_title_dropdown_Muse").children().css({color:"#bbb"}).children().css({width:0});
		});
		/* ++++++++++++灵感+++++++++++++++ */
		$(".selection_title_dropdown_Muse").click(function(){
			selN=1;
			$(".selection_main_slides").css({top:"15%"});
			$(".slideSleave").css({display:"none",opacity: 0}).removeClass("animated fadeInDownBig").addClass("animated fadeOutDownBig");
			$(".slideMuse").css({display:"flex",opacity: 1}).removeClass("animated fadeOutDownBig").addClass("animated fadeInDownBig");
			$(this).children().css({color:"#242a3a"}).children().css({width:"100%"});
			$(".selection_title_dropdown_Sleave").children().css({color:"#bbb"}).children().css({width:0});
		});

    /*========================联系我们的专家==================================*/
    var ex_le=$(".experts_main_right_carousel_item").outerWidth();//单图自身宽
    var ex_n=0;
    setInterval(function(){
        $(".experts_main_right_carousel").css({left:-ex_le*ex_n});
        $(".experts_main_right_carousel_nav>div>i").css({background: "#fff"});
        $(".experts_main_right_carousel_nav>div:nth-child("+(ex_n+1)+")>i").css({background: "#96daf0"})
        ex_n++;
        if(ex_n>=5){ ex_n=0 }
    },3000);
    $(".experts_main_right_carousel_nav>div").click(function(){
        ex_n=$(this).index();
        $(".experts_main_right_carousel").css({left:-ex_le*ex_n});
        $(".experts_main_right_carousel_nav>div>i").css({background: "#fff"});
        $(".experts_main_right_carousel_nav>div:nth-child("+(ex_n+1)+")>i").css({background: "#96daf0"})

    });

    /*-------------=====地球=======-============================================-----------------------------*/
    /*=============地区========================*/
    $("#map-a>a").each(function(i,v){//i是数据地址  v是每次循环的标签

        $(v).hover(function(e){e.stopPropagation();//地球上的标记点
            $(this).css({opacity:0.9});//区块
            //console.log("移入地区+++++++++")
            $("#map-b>div:nth-child("+(i+1)+")>svg").css({opacity:1}).next("span")
                .css({background: "#00000077",color: "#fff"}).children("i").css({borderRightColor:"#00000077"});//标记点，文字
        },function(e){e.stopPropagation();
            $(this).css({opacity:0});//console.log("移出了地区--------")
            $("#map-b>div:nth-child("+(i+1)+")>svg").css({opacity:0}).next("span")
                .css({background: "",color: ""}).children("i").css({borderRightColor:""});//标记点，文字
        })
    });
/*=============上面的文字========================*/
    $(".location").each(function(i,v){//i是数据地址  v是每次循环的标签

        $(v).hover(function(e){e.stopPropagation();//地球上的文字
            $(this).css({background: "#00000077",color: "#fff"}).children("i").css({borderRightColor:"#00000077"});
            $(this).prev("svg").css({opacity:1});
            var nn=$(this).parent("div").index();
            //console.log(nn,"移入文字：地址序号index++++++0-1-2-3++++++++++++++++++++");
            $("#map-a>a:nth-child("+(nn+1)+")").css({opacity:0.9});//区块
        },function(e){e.stopPropagation();
            $(this).css({background: "",color: ""}).children("i").css({borderRightColor:""});
            $(this).prev("svg") .css({opacity:0});
            //console.log("移出了文字1--------")
            var nn=$(this).parent("div").index();
            if( $("#map-a>a:nth-child("+(nn+1)+")").css("opacity")==0.9 ){
                //console.log("移出了文字2--------")
                $("#map-a>a:nth-child("+(nn+1)+")").css({opacity:0});//区块
            }
        })
    });
    /*=============上面的标记点========================*/
    $(".marker").each(function(i,v){//i是数据地址  v是每次循环的标签

        $(v).hover(function(e){e.stopPropagation();//地球上的标记点
            $(this).css({opacity:1});
            $(this).next("span").css({background: "#00000077",color: "#fff"}).children("i").css({borderRightColor:"#00000077"}) ;
            var nn=$(this).parent("div").index();
            //console.log(nn,"移入标记点：地址序号index++++++0-1-2-3+++++++++++++++++++");
            $("#map-a>a:nth-child("+(nn+1)+")").css({opacity:0.9});//区块
        },function(e){e.stopPropagation();
            //console.log("移出了标记点--------")
            $(this).css({opacity:0});
            $(this).next("span").css({background: "",color: ""}).children("i").css({borderRightColor:""});
        })
    });
    $("#map-a").mouseover(function(e){
        e.stopPropagation(); //console.log("移入地图")
    })
    $("#map-b").mouseover(function(e){
        e.stopPropagation(); //console.log("移入文字标记点")
    })
    /*$(".map_wrappe_location_shade *").mouseover(function(){
        console.log("移入子标签-------------")
    })*/
    $(document).mouseover(function(e){
        //console.log(e,"移入window页面")
        $(".location").css({background: "",color: ""}).children("i").css({borderRightColor:""}).prev("svg") .css({opacity:0});
        $("#map-a>a").css({opacity:0});//区块
    })

//了解更多=======看看旅行=============
    $(".love_slides_item_content_look").hover(function(){
        $(this).css({color:"#242a3a"}).children("i").slideDown();
    },function(){
        $(this).css({color:""}).children("i").slideUp();
    });

/*=======================我们喜欢的==============轮播图============*/
    var iWh=$(".love_slides_item").outerWidth();
    var loveN=0;
//左边按钮=======================================
    function loveleft(){
        $(".love_nav_left").off("click");//解绑事件
        setTimeout(function(){$(".love_nav_left").click(loveleft);},500)//等待500毫秒以后把事件绑定恢复
        loveN--;
        if(loveN==-1){//左边到顶的时候
            //alert("到顶了");
            loveN=3;
            //把transition暂时关掉
            $(".love_slides").css({transition:"none"});
            $(".love_slides_item>img").removeClass("img-action");
            //到3的位置以后 马上开启一个定时器 让绿色盒子从图3的位置移动图2的位置
            setTimeout(function(){
                loveN--;
                $(".love_slides").css({transition:""});
                $(".love_slides").css({left:-iWh*loveN});
                $(".love_slides_item>img").removeClass("img-action");
                $(".love_slides_item:nth-child("+(loveN+1)+")>img").addClass("img-action");
            },10)
        }
        $(".love_slides").css({left:-iWh*loveN});
        $(".love_slides_item>img").removeClass("img-action");
        $(".love_slides_item:nth-child("+(loveN+1)+")>img").addClass("img-action");
    }
    $(".love_nav_left").click(loveleft);

//右边按钮==================================
    function loveright(){
        $(".love_nav_right").off("click");
        setTimeout(function(){ $(".love_nav_right").click(loveright);},500);
        loveN++;
        if(loveN==5){
            loveN=1;
            $(".love_slides").css({transition:"none"});
            $(".love_slides_item>img").removeClass("img-action");
            setTimeout(function(){
                loveN++;
                $(".love_slides").css({transition:""});
                $(".love_slides").css({left:-iWh*loveN});
                $(".love_slides_item>img").removeClass("img-action");
                $(".love_slides_item:nth-child("+(loveN+1)+")>img").addClass("img-action");
            },10)
        }
        $(".love_slides").css({left:-iWh*loveN});
        $(".love_slides_item>img").removeClass("img-action");
        $(".love_slides_item:nth-child("+(loveN+1)+")>img").addClass("img-action");
    }
    $(".love_nav_right").click(loveright);
//定时器==================================
    var timer=setInterval(loveright,5000);
//移入暂停==================================
    $(".love").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(loveright,5000);
    });


/*====================客户评论===========================*/
    $(".remark_main_left_btn_next").hover(function(){
        $(this).children("svg").addClass("wobble");
    },function(){
        $(this).children("svg").removeClass("wobble");
    });
    $(".remark_main_left_btn_prev").hover(function(){
        $(this).children("svg").addClass("wobble");
    },function(){
        $(this).children("svg").removeClass("wobble");
    });

    var riWh=$(".remark_main_right_item").outerWidth();
    var navh=$(".remark_main_left_num_le_box>span").outerHeight();
    var remarkN=0;
//左边按钮=======================================
    function remarkleft(){
        $(".remark_main_left_btn_prev").off("click");//解绑事件
        setTimeout(function(){$(".remark_main_left_btn_prev").click(remarkleft);},500)//等待500毫秒以后把事件绑定恢复
        remarkN--;
        if(remarkN==-1){//左边到顶的时候
            remarkN=3;
            $(".remark_slides_box").css({transition:"none"});
            $(".remark_main_left_num_le_box").css({transition:"none"});
            setTimeout(function(){
                remarkN--;
                $(".remark_slides_box").css({transition:""});
                $(".remark_slides_box").css({left:-riWh*remarkN});
				$(".remark_main_left_num_le_box").css({transition:""});
				$(".remark_main_left_num_le_box").css({top:-navh*remarkN});
				$(".remark_main_left_num_line_nav").css({width:$(".remark_main_left_num_line").width()*(remarkN/3)});
            },10)
        }
		$(".remark_main_left_num_line_nav").css({width:$(".remark_main_left_num_line").width()*((remarkN==0?3:remarkN)/3)});
        $(".remark_slides_box").css({left:-riWh*remarkN});
		$(".remark_main_left_num_le_box").css({top:-navh*remarkN});
    }
    $(".remark_main_left_btn_prev").click(remarkleft);

//右边按钮==================================
    function remarkright(){
		
        $(".remark_main_left_btn_next").off("click");
        setTimeout(function(){ $(".remark_main_left_btn_next").click(remarkright);},500);
        remarkN++;   //console.log(remarkN)
        if(remarkN==5){
            remarkN=1;
            $(".remark_slides_box").css({transition:"none"});
			$(".remark_main_left_num_le_box").css({transition:"none"});
            setTimeout(function(){
                remarkN++;
                $(".remark_slides_box").css({transition:""});
                $(".remark_slides_box").css({left:-riWh*remarkN});
				$(".remark_main_left_num_le_box").css({transition:""});
				$(".remark_main_left_num_le_box").css({top:-navh*remarkN});
				$(".remark_main_left_num_line_nav").css({width:$(".remark_main_left_num_line").width()*(remarkN/3)});
            },10)
        }
		$(".remark_main_left_num_line_nav").css({width:$(".remark_main_left_num_line").width()*((remarkN==4?1:remarkN)/3)});
        $(".remark_slides_box").css({left:-riWh*remarkN});
		$(".remark_main_left_num_le_box").css({top:-navh*remarkN});
    }
    $(".remark_main_left_btn_next").click(remarkright);
//定时器==================================
    var remark_timer=setInterval(remarkright,5000);
//移入暂停==================================
    $(".remark_main").hover(function(){
        clearInterval(remark_timer);
    },function(){
        remark_timer=setInterval(remarkright,5000);
    }); 








/*=========================山峰云====================================*/

    var Mount_logo_top=parseInt($(".Mount_logo").css("top"));/*logo*/
    var Mount_logoX_top=parseInt($(".Mount_logoX").css("top"));
    var Mount_z=parseInt($(".Mount_z").css("top"));/*山*/
    var Mount_riCloud=parseInt($(".Mount_riCloud").css("top"));/*云*/
    var Mount_leCloud=parseInt($(".Mount_leCloud").css("top"));
    var Mount_ceCloud=parseInt($(".Mount_ceCloud").css("top"));
    var Mount_fullCloud=parseInt($(".Mount_fullCloud").css("top"));
    var t=0;
    //console.log( $(".Mount_logo").offset().top )
    //console.log( $(".Mount_logo").height()/2 )
    //console.log( $(window).scrollTop() )
    $(document).scroll(function(e){
        var dsT=$(this).scrollTop();/*卷入的高度*/
        var bT=$(".Mount").offset().top-200;/*标签与窗口距离-200padding*/
        var hT=$(".Mount").height();/*标签高度*/
        var iH=window.innerHeight;/*窗口高度*/
        //console.log( $(".Mount_logo").offset().top+$(".Mount_logo").height()/2+iH/2 )
        //console.log(dsT,"页面卷入的高度")
        //console.log(bT,"标签距离顶部的高度")
        //console.log(hT,"标签自身的高度")
        //console.log(iH,"窗口自身的高度")
        //console.log(dsT+iH,"页面卷入+++窗口自身");
        //console.log(bT,dsT+iH,dsT,bT+iH);
        if( bT<=dsT+iH&&dsT<=bT+iH ){

            if(dsT>=t){//下滚
                //console.log("----下滚----")
                Mount_logo_top-=0.5;
                $(".Mount_logo").css({top:Mount_logo_top});
                Mount_logoX_top-=0.5;
                $(".Mount_logoX").css({top:Mount_logoX_top});

                Mount_z-=1;
                $(".Mount_z").css({top:Mount_z});

                Mount_riCloud-=5;
                $(".Mount_riCloud").css({top:Mount_riCloud});
                Mount_leCloud-=4;
                $(".Mount_leCloud").css({top:Mount_leCloud});
                Mount_ceCloud-=2;
                $(".Mount_ceCloud").css({top:Mount_ceCloud});
                Mount_fullCloud-=3;
                $(".Mount_fullCloud").css({top:Mount_fullCloud});

            } else{//上滚
                //console.log("----上滚----")
                Mount_logo_top+=0.5;
                $(".Mount_logo").css({top:Mount_logo_top});
                Mount_logoX_top+=0.5;
                $(".Mount_logoX").css({top:Mount_logoX_top});

                Mount_z+=1;
                $(".Mount_z").css({top:Mount_z});

                Mount_riCloud+=5;
                $(".Mount_riCloud").css({top:Mount_riCloud});
                Mount_leCloud+=4;
                $(".Mount_leCloud").css({top:Mount_leCloud});
                Mount_ceCloud+=2;
                $(".Mount_ceCloud").css({top:Mount_ceCloud});
                Mount_fullCloud+=3;
                $(".Mount_fullCloud").css({top:Mount_fullCloud});
            }
            t = dsT;  //更新上一次scrollTop的值
            var logoCe=$(".Mount_logo").offset(). top+$(".Mount_logo").height()/2+iH/2;//logo在屏幕中间
            if( logoCe+10 >= dsT+iH >= logoCe-10 ){
                //alert(11111111)

                Mount_z=350;
                $(".Mount_z").css({top:Mount_z});

                Mount_fullCloud=250;
                $(".Mount_fullCloud").css({top:Mount_fullCloud});
            }
        }
    })

/*=======================加载动画===========================*/
        $(document).scroll(function(){
            var _ckT=window.innerHeight;/*窗口高度*/
            var _scT=$(this).scrollTop(); /*卷入的高度*/

            /*============我们的选择==============*/
            var se_t_bcT=$(".selection_title").offset().top; /*标签与窗口距离-200padding*/
            var se_t_zjT=$(".selection_title").height(); /*标签自身高度*/
            if(_scT+_ckT>=se_t_bcT+se_t_zjT/2){
                $(".selection_title").addClass("animated bounceInDown").css({opacity:1});
            }
            var _slides_bcT=$("._slides").offset().top; /*标签与窗口距离-200padding*/
            var _slides_zjT=$("._slides").height(); /*标签自身高度*/
            if(_scT+_ckT>=_slides_bcT+_slides_zjT/2){
                $("._slides").addClass("animated bounceInRight").css({opacity:1});
            }

            /*==============联系我们的专家===============*/
            var ex_t_bcT=$(".experts_title").offset().top; /*标签与窗口距离-200padding*/
            var ex_t_zjT=$(".experts_title").height(); /*标签自身高度*/
            if(_scT+_ckT>=ex_t_bcT+ex_t_zjT/2){
                $(".experts_title").addClass("animated bounceInDown").css({opacity:1});
            }
            var ex_l_bcT=$(".experts_main_left").offset().top; /*标签与窗口距离-200padding*/
            var ex_l_zjT=$(".experts_main_left").height(); /*标签自身高度*/
            if( _scT+_ckT >= ex_l_bcT + ex_l_zjT/2 ){
                $(".experts_main_left").addClass("animated bounceInLeft").css({opacity:1});
            }
            var ex_r_bcT=$(".experts_main_right").offset().top; /*标签与窗口距离-200padding*/
            var ex_r_zjT=$(".experts_main_right").height(); /*标签自身高度*/
            if( _scT+_ckT >= ex_r_bcT + ex_r_zjT/2 ){
                $(".experts_main_right").addClass("animated bounceInRight").css({opacity:1});
            }

            /*==================地球==========================*/
            var map_r_bcT=$(".map_wrapper_right").offset().top; /*标签与窗口距离-200padding*/
            var map_r_zjT=$(".map_wrapper_right").height(); /*标签自身高度*/
            if(_scT+_ckT>=map_r_bcT+map_r_zjT/2){
                $(".map_wrapper_right").addClass("animated bounceInDown").css({opacity:1});
            }

            /*==============免费==轮播图=============*/
            var love_c_bcT=$(".love_slides_item_content_title").offset().top; /*标签与窗口距离-200padding*/
            var love_c_zjT=$(".love_slides_item_content_title").height(); /*标签自身高度*/
            if(_scT+_ckT>=love_c_bcT+love_c_zjT/2){
                $(".love_slides_item_content_title").addClass("animated bounceInDown").css({opacity:1});
            }
            var love_l_bcT=$(".love_slides_item_content_list").offset().top; /*标签与窗口距离-200padding*/
            var love_l_zjT=$(".love_slides_item_content_list").height(); /*标签自身高度*/
            if(_scT+_ckT>=love_l_bcT+love_l_zjT/2){
                $(".love_slides_item_content_list").addClass("animated bounceInUp").css({opacity:1});
            }

            /*===============客户评论===========================*/
            var remark_t_bcT=$(".remark_title").offset().top; /*标签与窗口距离-200padding*/
            var remark_t_zjT=$(".remark_title").height(); /*标签自身高度*/
            if(_scT+_ckT>=remark_t_bcT+remark_t_zjT/2){
                $(".remark_title").addClass("animated bounceInDown").css({opacity:1});
            }
            var remark_r_bcT=$(".remark_main_right_item_box_con_ri").offset().top; /*标签与窗口距离-200padding*/
            var remark_r_zjT=$(".remark_main_right_item_box_con_ri").height(); /*标签自身高度*/
            if(_scT+_ckT>=remark_r_bcT+remark_r_zjT/2){
                $(".remark_main_right_item_box_con_ri").addClass("animated bounceInRight").css({opacity:1});
            }

            /*==新闻=================新闻===============================*/
            var new_ti_bcT=$(".new_title").offset().top; /*标签与窗口距离-200padding*/
            var new_ti_zjT=$(".new_title").height(); /*标签自身高度*/
            if(_scT+_ckT>=new_ti_bcT+new_ti_zjT/2){
                $(".new_title").addClass("animated bounceInDown").css({opacity:1});
            }
            var new_t_bcT=$(".new_main_left_txt").offset().top; /*标签与窗口距离-200padding*/
            var new_t_zjT=$(".new_main_left_txt").height(); /*标签自身高度*/
            if(_scT+_ckT>=new_t_bcT+new_t_zjT/2){
                $(".new_main_left_txt").addClass("animated bounceInUp").css({opacity:1});
            }
            var new_r_bcT=$(".new_main_right>div").offset().top; /*标签与窗口距离-200padding*/
            var new_r_zjT=$(".new_main_right>div").height(); /*标签自身高度*/
            if(_scT+_ckT>=new_r_bcT+new_r_zjT/2){
                $(".new_main_right>div").addClass("animated bounceInRight").css({opacity:1});
            }

            var txt_bcT=$(".txt").offset().top; /*标签与窗口距离-200padding*/
            var txt_zjT=$(".txt").height(); /*标签自身高度*/
            if(_scT+_ckT>=txt_bcT+txt_zjT/2){
                $(".txt").addClass("animated bounceInUp").css({opacity:1});
            }

        })





















}


























































