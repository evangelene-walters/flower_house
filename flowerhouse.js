var carousel_container;
var boxes;
var btn_next;
var box_index = 0;

var btn_prev;

function init() {
    carousel_container = $('#carousel-container');
    boxes = $('.box');
    btn_next = $('#btn-next');
    btn_prev = $('#btn-prev');
    
    btn_next.click(slideNext);
    btn_prev.click(slidePrev);
}

function slideNext() {
    // Animate the current box
    $(boxes[box_index]).animate(
        {
            left: '-1020px'
        },
        500,
        function() {
            $(this).css('left', '1020px');
        } 
    );
    
    box_index++;
    if(box_index === boxes.length) {
        box_index = 0;
    }
    
    // Animate the next box
    $(boxes[box_index]).animate(
        {
            left: '0px'
        },
        500,
        function() {
            //alert('Animation done');
        }
    );
}

function previousBoxIndex() {
    if(box_index - 1 < 0) {
        return boxes.length - 1;
    }
    
    return box_index - 1;
}

function slidePrev() {
    // Animate the current box
    $(boxes[previousBoxIndex()]).css("left", "-1020px");
    
    $(boxes[box_index]).animate(
        {
            left: '1020px'
        },
        500,
        function() {
           // $(this).css('left', '600px');//happens when done
        }
    );
    
    box_index = previousBoxIndex();
    
    // Animate the next box
    $(boxes[box_index]).animate(
        {
            left: '0px'
        },
        500,
        function() {
            //alert('Animation done');
        }
    );
}

$(document).ready(init);