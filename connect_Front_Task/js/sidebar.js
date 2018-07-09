$(document).ready(function(){
    $('.rightH').click(()=>{
        $('#userE').hide();
        $('#user_clc').show();
    })

    $('#user_clc').click(()=>{
        $('#user_clc').hide();
        $('#userE').show();
    })

    $('.nextE').click(()=>{
        for(let i=0;i<items.length;i++){
            
            if(items[i].style.display=="block"){
                
                if($(items[i]).next().length==1){
                    $(items[i]).css('display','none')
                    $(items[i]).next().css('display','block')
                    return;
                }
                else{
                    $(items[i]).css('display','none')
                    $(items[0]).css('display','block')
                    return;
                }
            }
        }
    })
    $('.privE').click(()=>{
        for(let i=0;i<items.length;i++){
            if(items[i].style.display=="block"){
                if($(items[i]).prev().length==1){
                    $(items[i]).css('display','none')
                    $(items[i]).prev().css('display','block')
                    return;
                }
                else{
                    $(items[i]).css('display','none')
                    $(items[(items.length-1)]).css('display','block')
                    return;
                }
            }
        }
    })
});