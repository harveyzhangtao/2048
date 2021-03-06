function showNumberWithAnimation(i, j, randNumber){
    var numberCell = $('#number-cell-'+i+"-"+j);
    numberCell.css("background-color", getNumberBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    numberCell.text(textName[randNumber]);

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    }, 50);
}

function showMoveAnimation(fromx, fromy, tox, toy){

    var numberCel1 = $("#number-cell-" + fromx+'-'+fromy);
    numberCel1.animate({
        top:getPosTop(tox, toy),
        left:getPosLeft(tox, toy)
    }, 200);
}

function updateScore(score){
    $("#score").text(score);
}