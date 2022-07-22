import {getData,append} from "./data.js" 
   getData().then((res)=>{
   let data=res.Kitchenware;
   append(data) 
    // for sorting buttons
    let lth=()=>{
        let lthdata=data.sort((a,b)=>{
                return a.price-b.price
            })
        append(lthdata)
        }
        let htl=()=>{
            let htldata=data.sort((a,b)=>{
                    return b.price-a.price
                })
            append(htldata)
            }
            let all=()=>{
                window.location.reload()
                  }
        document.getElementById("lth").addEventListener("click",lth)
        document.getElementById("htl").addEventListener("click",htl)
        document.getElementById("all").addEventListener("click",all)
        let one=document.getElementById("one")
        let two=document.getElementById("two")
    let func1=(e) => {
    if (e.target.checked) {
        $("#two").prop("checked", false);
        $("#three").prop("checked", false);
        $("#four").prop("checked", false);
        data=res.Kitchenware
        data=data.filter((el)=>{
            return el.category==one.value
          })
        append(data)
    } else{
        data=res.Kitchenware
        append(data)
    }
    }
    
    let func2=(e) => {
    if (e.target.checked) {
        $("#one").prop("checked", false);
    $("#three").prop("checked", false);
    $("#four").prop("checked", false);
    data=res.Kitchenware
    data=data.filter((el)=>{
        return el.category==two.value
      })
      append(data)
    
    } else{
        data=res.Kitchenware
        append(data)
    }
    }
    
    one.addEventListener("change",func1)
    two.addEventListener("change",func2)
})