/* JavaScript Document
 * 
 * October 16, 2015
 * 
 */

/* Global Variables */

var isMobile;
var isTablet;
var breakpoint_mobile = '640px';
var breakpoint_mobile_max = '768px';
var breakpoint_tablet_max = '1024px';
var media_query = "screen and (min-width: " + breakpoint_mobile + ") and (max-width: " + breakpoint_mobile_max + ")";
var media_query_ipad = "screen and (min-width: " + breakpoint_mobile_max + ") and (max-width: " + breakpoint_tablet_max + ")";

$(document).ready(function() {
    //Handler for .ready() called.
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    isTablet = window.matchMedia && window.matchMedia(media_query_ipad).matches;
    
    addCTAEvent();   
    if(isMobile || isTablet)
    {
        addTilesClick();
        addImportantInformationClick();
    }else
    {
        addTilesClick();
        addImportantInformationHover();
        addImportantInformationClick();
    }

    //DcOnClickTracking('sip15', 'siprtlp');
});

function addCTAEvent()
{
    $('.global__header__cta').on('click tap', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".main__info__container").offset().top
        }, 500);
    });
}

function addTilesClick()
{
    $(".global__header__tile").each(function(){
        $(this).on("click tap",function(){
            resetTiles();
            $(this).addClass("active");
        });
    });
}

function resetTiles()
{
    $(".global__header__tile").each(function(){
        $(this).removeClass("active");
    });
}

var isIIOpen = false;

function addImportantInformationClick()
{
    $(".global__header__legal__link").on('click tap', function(e){
        //alert(isIIOpen);
        //e.preventDefault();
        
        if(isIIOpen)
        {
            //$(".global__header__legal__text .active").hide();
           // $(".global__header__legal__text").removeClass("active");
            $(".global__header__legal__text").css("opacity", "0");
            $(".global__header__legal__text").removeClass('height-off');
            //$(".global__header__legal__text").css("height", "0");
            isIIOpen = false;
        }else
        {
            $(".global__header__legal__text").css("opacity", "1");
            //$(".global__header__legal__text").css("height", "auto");
            $(".global__header__legal__text").addClass('height-off');
            //$(".global__header__legal__text").addClass("active");
            //$(".global__header__legal__text .active").show();
             isIIOpen = true;
        }
    });
}

function addImportantInformationHover()
{
   $(".global__header__legal__link").mouseover(function() {
         $(".global__header__legal__text").css("opacity", "1");
    });
    
     $(".global__header__legal__link").mouseout(function() {
         $(".global__header__legal__text").css("opacity", "0");
    });
}
