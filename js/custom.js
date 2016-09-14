function showTemplate(template, data){
    var html    = template(data);
    $('#js-content').html(html);
}

$(document).ready(function(){
    var source = $('#event_album').html();
    var event_album_template = Handlebars.compile(source);

    $("#freshers_tab").click(function(){
        showTemplate(event_album_template,freshers_data);
    });

    $("#freshers_tab").click();
});