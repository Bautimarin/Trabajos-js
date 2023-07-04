var boton = document.getElementById("boton")



jQuery(document).ready(function(){
    jQuery("#foto").hide();

    jQuery("#boton").click(function ()
    {
        event.preventDefault();
        jQuery("#foto").show();
    })
    jQuery("#boton").dblclick(function()
    {
        jQuery("#foto").fadeOut();
    });
})
