$(function(){
    function add_two_numbers(){
       var fn=parseInt($("#FirstNumber").val());
       var sn=parseInt($("#SecondNumber").val())
       var ans=fn+sn;
       
       if($("#FirstNumber").val()=='' || $("#SecondNumber").val()==''){
           $('<p>'+"Pls.Enter the Values"+'</p>').appendTo("#finalAns")
       }
       else{
             $("#Answer").val(ans);
             $("#finalAns").append(ans);
       }
    }
       
       $("#sub").click(function(){
        add_two_numbers()
       })
                            
})