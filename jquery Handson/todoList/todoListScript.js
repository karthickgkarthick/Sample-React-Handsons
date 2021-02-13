$(function(){
    $("#sub").click(function(){
        if($("#task").val()==''){
            alert("Enter task details!!");
        }
        $("#list").append('<li>'+$("#task").val()+'</li>');
    })
})