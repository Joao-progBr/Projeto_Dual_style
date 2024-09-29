$(document).ready(function(){

    $("#telefone").mask("(00) 00000-0000")

    $("form").submit(function(e){
        e.preventDefault()
    })

    $("form").validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            }
        },
        messages:{
            nome:"Campo obrigatório",
            email: "Campo obrigatório",
            telefone: "Campo obrigatório"
        },

        submitHandler:function(){
            console.log("form")
        },
        invalidHandler:function(evento, validador){

            let campoIncorreto = validador.numberOfInvalids()
            
            if(campoIncorreto){
                let alertElement = document.getElementsByClassName("alert")[0]
                    alertElement.style.display = "block"
                    alertElement.style.color = "red"
                    alertElement.style.border = "solid, black, 1px"
                    alertElement.style.background = "white"
                    //$(".alert").css("display", "block");

                setTimeout(function(){
                    alertElement.style.display = "none"
                },5000)

                
            }
        }
    })

})