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

    }
})