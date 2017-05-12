/**
 * Created by hyarragonda on 4/28/17.
 */
$(function(){
    $.ajax({
        type:'GET',
        url:'http://sta-fusion.pinsightmedia.com/api/campaigns',
        success: function(data){
            $.each(data,function(i,item){

            })
        }
    });
});