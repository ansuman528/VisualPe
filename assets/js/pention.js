

const getData =(type,callback)=>{
    fetch(`https://bridge-test-api.herokuapp.com/get-data/${type}`,
    {
        method:'get',
        mode:'cors',
        credentials: 'same-origin',
        headers: {"Content-type": "application/json; charset=UTF-8"},
    }
    ).then((resp)=>resp.json())
    .then((resp)=>{
            {
               callback(resp)
            }
        })
    .catch(()=>{ 
        console.log("connection error")
    })
}
const insert=(id,data)=>{
    if ($(`#${id}`).length) {
      $(`#${id}`).get(0).innerHTML=data
    }
  }
$( ()=> {
 getData('EPF',(data)=>{
     Pi("epf-pi",[data.summary.employeeBalance, data.summary.employerBalance],["employee","employer"])
     Bar("epf-bar",[data.summary.employeeBalance, data.summary.employerBalance],["employee","employer"])
    })


getData('PPF',(data)=>{
    insert("ppf-cb",data.summary.currenBalance)
    insert("ppf-md",data.summary.maturityDate)
    })
})
