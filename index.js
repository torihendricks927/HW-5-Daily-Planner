// Timer setup
var reformatDate = moment();
$("#Time").text(reformatDate);


//Timeblock color changes\
function timeblock() {
var now = moment();
var currentHour = Date.now();
$('.colorcode').each(function(){
    var val = parseInt($(this).prop('value data-time'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Red');
    }else if(val === currentHour){
        $(this).css('background-color','Green');
    }else{
        $(this).css('background-color','White');
    }
})
};

function init(){
    timeblock();
}




