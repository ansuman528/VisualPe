

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


    getData('TERM_DEPOSIT',(data)=>{
        Bar("fd-bar",[data.summary.principalAmount,data.summary.currentValue],["invested Value","Current Value"])
    })
    getData('RECCURING_DEPOSIT',(data)=>{
        Bar("rec-bar",[data.summary.principalAmount,data.summary.currentValue],["invested Value","Current Value"])
    })
    getData('CREDIT_CARD',(data)=>{
        Bar("cc-bar",[data.summary.creditLimit,data.summary.totalDueAmount],["Credit Limit","used credit"])
    })
    getData('CD',(data)=>{
        Bar("cd-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
    })
    getData('IDR',(data)=>{
        Bar("idr-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
    })
})
