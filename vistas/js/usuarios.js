// Subiendo la foto del ususario
$(".nuevaFoto").change(function(){


    var imagen = this.files[0];

    // Validar el formato de la imagen

    if (imagen["type"] != "image/jpeg" && imagen["type"] != "image/png"){

        $(".nuevaFoto").val("");

        swal({
            tittle: "Error al subir la imagen",
            text: "La imagen debe estar en formato JPG o PNG!",
            type: "error",
            confirmButtonText: "Cerrar!"
        });

    }else if(imagen["size"] > 2000000){


        swal({
            tittle: "Error al subir la imagen",
            text: "La imagen no debe pesar más de 2MB",
            type: "error",
            confirmButtonText: "Cerrar!"
        });

    }else{

        var datosImagen = new FileReader;
        datosImagen.readAsDataURL(imagen);

        $(datosImagen).on("load", function(event){
            var rutaImagen = event.target.result;

            $(".previsualizar").attr("src", rutaImagen)
        })
    }
})

// EDITAR USUARIO

$(".btnEditarUsuario").click(function(){

    var idUsuario =$(this).attr("idUsuario");

    var datos =  new FormData();
    datos.append("idUsuario", idUsuario);

    $.ajax({
        url:"ajax/usuarios.ajax.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType:"json",
        success: function(respuesta){

            $("#editarNombre").val(respuesta["nombre"]);
            $("#editarUsuario").val(respuesta["usuario"]);
            $("#editarPerfil").html(respuesta["perfil"]);
            $("#editarPerfil").val(respuesta["perfil"]);
            $("#fotoActual").val(respuesta["foto"]);

            $("#passwordActual").val(respuesta["password"]);

            if(respuesta["foto"] != ""){

                $(".previsualizar").attr("src", respuesta["foto"]); 
            }

        }
    })

})

//ACTIVAR USUARIO

$(".btnActivar").click(function(){

    var idUsuario = $(this).attr("idUsuario");
var estadorUsuario = $(this).attr("estadoUsuario");

var datos = new FormData();
datos.append("activarId", idUsuario);
datos.append("activarUsuario", estadoUsuario);

$.ajax({
    url:"ajax/usuarios.ajax.php",
    method: "POST",
    data: datos,
    cache: false,
    contentType: false,
    processData: false,
    success: function(respuesta){

        }
    })

})

