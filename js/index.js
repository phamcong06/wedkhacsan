$(document).ready(function() {
    $(window).scroll(function() {
        var pod_body = $('html, body').scrollTop(); //lay kich thuoc lăn chuột  của trang
        if (pod_body > 80) {
            $('.menu').attr('style', 'background-color:#bf5050;');
        } else if (pod_body < 80) {
            $('.menu').attr('style', 'background-color:#69729063');
        }
    });
    // $("#checkin").datepicker();
});
$(function() {
    $("#datepicker").datepicker({
            minDate: 'D'
        }

    );
    $("#datepicker1").datepicker({
            minDate: 'D '
        }

    );
});

function showMenu() {

    document.getElementById("show").style.display = "block";

}

function hiddeMenu() {
    document.getElementById("show").style.display = "none";
}
$(function() {
    $('#test1').mouseover(function() {
        $('#test1').attr('style', 'width:682px;transition: 2s;');
        $('#test2').attr('style', 'width:458px;transition: 2s;');
    })
    $('#test1').mouseout(function() {
        $('#test1').attr('style', 'width:582px;transition: 2s;');
        $('#test2').attr('style', 'width:582px;transition: 2s;');
    })
    $('#test2').mouseover(function() {
        $('#test2').attr('style', 'width:682px;transition: 2s;');
        $('#test1').attr('style', 'width:458px;transition: 2s;');
    })
    $('#test2').mouseout(function() {
        $('#test2').attr('style', 'width:582px;transition: 2s;');
        $('#test1').attr('style', 'width:582px;transition: 2s;');
    })
});