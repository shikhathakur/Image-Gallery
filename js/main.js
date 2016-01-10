//-------Main Container-------------
$('<div/>',{ id:'mainDiv'}).appendTo('body');
$('#mainDiv').attr('class','container');
var text=$('<h1/>',{class: 'col-xs-offset-2 col-xs-8 text-center'}).appendTo('#mainDiv');
text.text('GALLERY');
//-------Image Container-------------
$('<div/>',{ id:'imageDiv',class: 'col-xs-offset-1 col-xs-10'}).appendTo('#mainDiv');
//-------Default Image-------------
$('<img/>',{class:'img-responsive center-block',src:'http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Gallery-icon.png'}).appendTo('#imageDiv');
//------------Loader---------------
$('<div/>',{ id:'loadDiv',class:'col-xs-12'}).appendTo('#imageDiv');
$('<img/>',{class:'img-responsive center-block',src:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpy58K6duzFDfRU0IBz152aOQMBKmcd9l0bqB6tcGWaRhS8KVogg'}).appendTo('#loadDiv');
//-------------Glyphicon-Previous Container-----
$('<div/>',{ id:'spanDiv',class: 'col-xs-12'}).appendTo('#mainDiv');
$('<div/>',{ id:'spanDiv1',class: 'col-xs-offset-3 col-xs-2'}).appendTo('#spanDiv');
$('<span/>',{ class: 'glyphicon glyphicon-triangle-left pull-left'}).appendTo('#spanDiv1');
var prev=$('<span/>',{ class: 'collapsed'}).appendTo('#spanDiv1');
prev.text('Prev');
//-------------Glyphicon-Next Container-----
$('<div/>',{ id:'spanDiv2',class: 'col-xs-offset-3 col-xs-2'}).appendTo('#spanDiv');
$('<span/>',{ class: 'glyphicon glyphicon-triangle-right pull-left'}).appendTo('#spanDiv2');
var next=$('<span/>',{ class: 'text-right pull-left collapsed'}).appendTo('#spanDiv2');
next.text('Next');
//--------------CSS for Image Container-----
$('#imageDiv').css({
     "border": "5px solid #66e0ff",
     "border-radius":"20px",
     "margin-top":"50px",
     "padding":"30px"
 });
 $('div img').css({

     "max-width": "100%",
     "max-height": "100%"
 });

//---Function gets executed when DOM is ready-----
$(document).ready(function() {
    $('#loadDiv').show();
//-------Ajax Call------------
    var oA = $.ajax({
        url: 'json/pics.json',
        type: 'GET',
        dataType: 'JSON',
    });
    oA.success(function(data) {
        oPics = data;
        $('#loadDiv').hide();
        fn(oPics);
    });
});
//-------function for displaying images when we click next or previous Glyphicon---------
function fn(oPics) {
    var index = 0;
    $('#spanDiv1').click(function() {
        --index;
        if (index < 0) {
            index = oPics.Images.length - 1;
        }
        $('div img').attr('src', oPics.Images[index]);
    });
    $('#spanDiv2').click(function() {
        ++index;
        if (index > oPics.Images.length - 1) {
            index = 0;
        }
        $('div img').attr('src', oPics.Images[index]);
    });
}