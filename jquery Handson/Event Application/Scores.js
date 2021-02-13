$(function(){
    $(".txt").keyup(function(){
        calculate()
    });
    function calculate(){
        var sum=0;
        $(".txt").each(function(){
            if($(this).val()!=0)
            {
                sum+=parseFloat($(this).val());
            }
        })
        $("#sum").val(sum.toFixed(2))
    }
})