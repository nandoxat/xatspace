/*!
 * Xatspace Twitter v3
 * Designer & Programmer by Nando (10042001) - www.nandocosta.com.br
 */

// Loading
$(window).on('load', function(){
    $('.loading').fadeOut(300);
});

// Write Data
$(function(){
    $.ajax({
        type: 'GET',
        url: './data.json',
        dataType: 'JSON',
        success: function(data){
            var userinfo = data.userinfo;
            var posts    = data.posts;
            var friends  = data.friends;
            var chats    = data.chats;
            if(typeof userinfo != 'undefined'){
                $.each(userinfo, function(index, value){
                    switch(index){
                        case 'picture':
                        case 'cover':
                            $('[data-userinfo="'+index+'"]').attr('src', value);
                        break;

                        case 'username':
                            $('[data-userinfo="'+index+'"]').html('@'+value);
                        break;

                        case 'verified':
                            if(value == true){
                                $('[data-userinfo="'+index+'"]').show();
                            } else {
                                $('[data-userinfo="'+index+'"]').hide();
                            }
                        break;

                        case 'work':
                        case 'location':
                        case 'website':
                        case 'calendar':
                            if(value != ''){
                                if(index == 'website'){
                                    $('[data-userinfo="'+index+'"]').attr('href', value);
                                    $('[data-userinfo="'+index+'"]').find('span').html(domain(value));
                                } else {
                                    $('[data-userinfo="'+index+'"]').find('span').html(value);
                                }
                                $('[data-userinfo="'+index+'"]').show();
                            } else {
                                $('[data-userinfo="'+index+'"]').hide();
                            }
                        break;

                        default:
                            $('[data-userinfo="'+index+'"]').html(value);
                        break;
                    }
                });
            }

            if(typeof posts != 'undefined'){
                var html_posts = '';
                $.each(posts, function(index, post){
                    html_posts += '<div class="item">';
                    html_posts += '<div class="picture">';
                    html_posts += '<img src="'+userinfo.picture+'" alt="Foto">';
                    html_posts += '</div>';
                    html_posts += '<div class="texts">';
                    html_posts += '<div class="infos">';
                    html_posts += '<b>'+userinfo.name+' ';
                    html_posts += '<div class="icon verified '+(!userinfo.verified ? 'hide' : '')+'">';
                    html_posts += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#1D9BF0" viewBox="0 0 22 22" role="img"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>';
                    html_posts += '</div>';
                    html_posts += '</b> @'+userinfo.username+' · '+post.date;
                    html_posts += '</div>';
                    html_posts += '<div class="resume">'+post.resume;
                    if(typeof post.hashtags != 'undefined'){
                        html_posts += '<div class="links">';
                        $.each(post.hashtags, function(id_hashtag, value_hashtag){
                            html_posts += '<a href="#">#'+value_hashtag+'</a>';
                        });
                        html_posts += '</div>';
                    }
                    if(typeof post.image != 'undefined'){
                        html_posts += '<div class="image">';
                        html_posts += '<img src="'+post.image+'" alt="Image Post">';
                        html_posts += '</div>';
                    }
                    html_posts += '</div>';
                    html_posts += '</div>';
                    html_posts += '</div>';
                });
                $('main .posts > .posts-body').html(html_posts);
            }

            if(typeof friends != 'undefined'){
                var html_friends = '';
                $.each(friends, function(index, friend){
                    html_friends += '<a href="https://xat.me/'+friend.username+'" target="_blank" class="item">';
                    html_friends += '<div class="picture">';
                    html_friends += '<img src="'+friend.picture+'" alt="'+friend.name+'">';
                    html_friends += '</div>';
                    html_friends += '<div class="texts">';
                    html_friends += '<div class="title">';
                    html_friends += friend.name+' ';
                    html_friends += '<div class="icon verified '+(!friend.verified ? 'hide' : '')+'">';
                    html_friends += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#1D9BF0" viewBox="0 0 22 22" role="img"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>';
                    html_friends += '</div>';
                    html_friends += '</div>';
                    html_friends += '<div class="desc">@'+friend.username+'</div>';
                    html_friends += '<div class="button">Seguir</div>';
                    html_friends += '</div>';
                    html_friends += '</a>';
                });
                $('aside > .box > .friends').html(html_friends);

                if(typeof chats != 'undefined'){
                    var html_chats = '';
                    $.each(chats, function(index, chat){
                        html_chats += '<a href="https://xat.com/'+chat.name+'" target="_blank" class="item">';
                        html_chats += '<div class="texts">';
                        html_chats += '<div class="desc">'+chat.desc+'</div>';
                        html_chats += '<div class="title">';
                        html_chats += 'xat '+chat.name+' ';
                        html_chats += '<div class="icon verified '+(!chat.verified ? 'hide' : '')+'">';
                        html_chats += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#1D9BF0" viewBox="0 0 22 22" role="img"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>';
                        html_chats += '</div>';
                        html_chats += '</div>';
                        html_chats += '</div>';
                        html_chats += '</a>';
                    });
                    $('aside > .box > .chats').html(html_chats);
                }
            }
        }
    });
});

// Function Domain
function domain(url){
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}