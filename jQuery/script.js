$(document).ready(function(){
    $('#add_class').click(function(){
        $('p').addClass('trip');
    })

    $('#remove_class').click(function(){
        $('p').removeClass('trip');
    })

    $('#toggle_class').click(function(){
        $('p').toggleClass('trip');
    })
})