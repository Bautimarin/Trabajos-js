
function procedure()
{
    const nombreInput = document.getElementById("nombre").value;
    const edadInput = document.getElementById("edad").value;
    const contraInput = document.getElementById("contraseña").value;
    const mailInput = document.getElementById("mail").value;

    if(validarNombre(nombreInput) && validarEdad(edadInput) && validarContraseña(contraInput)  && validarMail(mailInput))
    {
        return true;
    }
    else
    {
      return false;
    }

}
function validarNombre(dato)
{
    if( dato.length == 0)
    {
        console.error("el usuario requiere un nombre valido");
        return false;
    }
    return true;
}
function validarEdad(dato)
{
    if(dato <= 8)
    {
        console.error("el usuario es muy menor. requiere supervision parental");
        return false;
    }
    return true;
}
function validarContraseña(dato)
{
    if( dato.length == 0)
    {
        console.error("el usuario tiene que tener contraseña");
        return false;
    }
    else if (dato.length < 6)
    {
        console.error("la contraseña debe ser mas larga");
        return false;
    }
    return true;
}
function validarMail(dato)
{
    var tieneArroba = false;
    var tieneTerminacion = false;
    for (let index = 0; index < dato.length; index++) {
         var data = dato[index];
         if(data == "@")
         {
            tieneArroba = true;
         }
         if (data == "." && dato[index+1] == "c" && dato[index+2] == "o" && dato[index+3] == "m")
         {
            tieneTerminacion = true;
         }
        
    }
    if(tieneArroba && tieneTerminacion)
    {
        return true;
    }
    console.error("mail no valido");
    return false;
}

jQuery(document).ready(function(){
    jQuery(".parrafo").hide();

    jQuery("#submit").click(function ()
    {
        event.preventDefault();
        if(procedure())
        {
           
            jQuery(".parrafo").css("color", "green");
            jQuery(".parrafo").show();
            jQuery(".parrafo").html("envio exitosos");
        }
        else
        {
         
            jQuery(".parrafo").css("color", "red");
            jQuery(".parrafo").show();
            jQuery(".parrafo").html("error");
        }
       
    });
    jQuery("#submit").hover(function(){
        jQuery(this).css("color", "blue");
        },
        function(){
        jQuery(this).css("color", "black");
        }); 



        
        jQuery(".cerrar").dblclick(function()
        {
            jQuery(".form").fadeOut();
        });
        jQuery(".cerrar").click(function(){
            jQuery(".form").show();
        });

        // const carru = document.getSelection('#carrusel');
        
});








