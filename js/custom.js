function showTemplate(template, data, js_section){
    var html    = template(data);
    $(js_section).html(html);
}

$(document).ready(function(){
    var source = $('#event_album').html();
    var event_album_template = Handlebars.compile(source);
    showTemplate(event_album_template,independace_data,'#js-independance-content');
    showTemplate(event_album_template,freshers_data,'#js-freshers-content');
    showTemplate(event_album_template,ganesh_data,'#js-ganesh-content');
});