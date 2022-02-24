$(()=>{

    var pin=0
    new PincodeInput('#pin', {
    count: 4,
    secure: true,
    previewDuration: 500,
    onInput: (value) => {
        pin=value
        terms()
    }
    })
    
const terms=()=>{
    $("#btn").get(0).disabled=!$("#tc").get(0).checked | pin.length!=4 | $("#phn").get(0).value >1e10 | $("#phn").get(0).value <1e9
}

const login=()=>{
    // $("#phn").get(0).value
}

})
   
