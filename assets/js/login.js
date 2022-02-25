
const getData =(type,callback)=>{
    fetch(`https://bridge-test-api.herokuapp.com/${type}`,
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
        $(sub).get(0).innerHTML=`<h3>Oops something went wrong ...</h3><h4>Try again </h4><h5>Reloading page ...</h5>`
        setTimeout(()=>window.location.reload(),5000)
    })
}
var pin=0
$(()=>{  
    new PincodeInput('#pin', {
    count: 4,
    secure: true,
    previewDuration: 500,
    onInput: (value) => {
        pin=value
        terms()
    }
    })
})
   
const terms=()=> $("#btn").get(0).disabled=!$("#tc").get(0).checked | pin.length!=4 | $("#phn").get(0).value >1e10 | $("#phn").get(0).value <1e9
const login=()=>{
    $(sub).get(0).innerHTML=`<img src="assets/images/Pendulum.gif"><h3>loading ...</h3>`
    getData(`consent/${$("#phn").get(0).value}`,(data)=>{
       window.location.href=data.url
    })
}