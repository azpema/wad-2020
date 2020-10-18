$(function() {

    console.log("JQuery loaded and working");

    /*Profile drop-down*/
    $('img.avatar').on('click', ()=>{
        $('#profile-menu').toggle();
    });

    /* Fetch user info and put it into dropdown */
    $.get('https://private-anon-6783f8eed5-wad20postit.apiary-mock.com/users/1')
        .done((ret)=> {
            console.log(ret);

            let userinfo = $('<span>').text(ret.firstname + " " + ret.lastname);
            let email = $('<span>').text( ret.email );
            $('#profile-menu').prepend( userinfo, email );
            $('img.avatar').attr('src', ret.avatar);
        })
        .fail((error) => console.log(error));
})