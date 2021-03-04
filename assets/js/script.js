$(function () {
    let url = 'https://api.sheety.co/df931ba6fcb7a73c06c1bd16816763a4/paulVlog/videos';
    fetch(url).then((response) => response.json()).then(json => {
        for (var i = 0; i < json.videos.length; i++) {
            $('#videos').append('<div class="col-lg-4">' +
                    ' <iframe width="100%" height="315" src="' + json.videos[i]['src'] + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                    '</div>');
        }
    });
})