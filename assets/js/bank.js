

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
    insert("ulip-sd",data)
    insert("ulip-ed",data)
    insert("ulip-ty",data)
    insert("ulip-pa",data)
    })


getData('MUTUAL_FUNDS',(data)=>{
    insert("mf-sd",data)
    insert("mf-ed",data)
    insert("mf-ty",data)
    insert("mf-pa",data)
    })
})
