/**
 * Created by hyarragonda on 4/21/17.
 */

    var total= 0;
    function add(itemCost) {
        total+=itemCost;
        totalBill.innerHTML="your sum is "+total.toFixed(2);
    };
    function scan(item,quantity) {
        switch(item){
            case flatWhite:
                add(3.99*quantity);
                break;
            case caffeLatte:
                add(4.99*quantity);
                break;
            case caffeLatteFreddo:
                add(5.99*quantity);
                break;
            default:
                break;
        }
        return true;
    };

flatWhite=document.getElementById("quantityFlatWhite");
flatWhite.addEventListener("input",function(){scan(flatWhite,flatWhite.value);});
caffeLatte=document.getElementById("quantityCaffeLatte");
caffeLatte.addEventListener('input',function(){scan(caffeLatte,caffeLatte.value);});
caffeLatteFreddo=document.getElementById("quantityCaffeLatteFreddo");
caffeLatteFreddo.addEventListener('input',function(){scan(caffeLatteFreddo,caffeLatteFreddo.value)});
totalBill=document.getElementById("totalBill");
