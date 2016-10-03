function showTemplate(template, data, js_section){
    var html    = template(data);
    $(js_section).html(html);
}

$(document).ready(function(){
    var source = $('#event_album').html();
    var event_album_template = Handlebars.compile(source);

    $("#independance_tab").click(function(){
        showTemplate(event_album_template,independace_data,'#js-independance-content');
    });

    $("#independance_tab").click();

    $("#freshers_tab").click(function(){
        showTemplate(event_album_template,freshers_data,'#js-freshers-content');
    });

    $("#freshers_tab").click();

    $("#ganesh_tab").click(function(){
        showTemplate(event_album_template,ganesh_data,'#js-ganesh-content');
    });

    $("#ganesh_tab").click();    
});