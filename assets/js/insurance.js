

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
 getData('ULIP',(data)=>{
    insert("ulip-sd",data.profile.riders.rider.policyStartDate)
    insert("ulip-ed",data.profile.riders.rider.policyEndDate)
    insert("ulip-ty",data.profile.riders.rider.tenureYears)
    insert("ulip-pa",data.profile.riders.rider.premiumAmount)
    })


getData('INSURANCE_POLICIES',(data)=>{
    insert("ip-sd",data.profile.riders.rider[0].policyStartDate)
    insert("ip-ed",data.profile.riders.rider[0].policyEndDate)
    insert("ip-ty",data.profile.riders.rider[0].tenureYears)
    insert("ip-pa",data.profile.riders.rider[0].premiumAmount)
    })
})
