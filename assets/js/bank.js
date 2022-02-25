var deposit =""

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
const Commas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const insert=(id,data)=>{
    if ($(`#${id}`).length) {
      $(`#${id}`).get(0).innerHTML=data
    }
  }
$( ()=> {
    getData('DEPOSIT',(data)=>{
        deposit=data;
        var bankList=$("#bank-list").get(0)
        var bankTile=$("#bank-tile").get(0)
        const thm=["bg-gradient-danger","bg-gradient-info","bg-gradient-success"]
        var cnt=0
        bankList.innerHTML=""
        bankTile.innerHTML=""
        for (i of data.Payload[0].data){
             i=i.decryptedFI.account
             bankList.innerHTML+=`<input  type="checkbox"><strong style="color: cadetblue;"> ${i.profile.holders.holder[0].name} </strong> <br> a/c: ${i.maskedAccNumber}</input><hr>`
            bankTile.innerHTML+=`<div class="col-md-4 stretch-card grid-margin">
            <div class="card ${thm[cnt]} card-img-holder text-white">
              <div class="card-body">
                <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image">
                <h4 class="font-weight-normal mb-3">Current Balance<i class="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">₹ ${Commas(i.summary.currentBalance)}</h2>
                <h5 class="card-text">Branch: ${i.summary.branch}</h5>
                <h6 class="card-text">MICR: ${i.summary.ifscCode}</h6>
                <h6 class="card-text">IFSC: ${i.summary.ifscCode}</h6>
              </div>
            </div>
          </div>`
          cnt=(cnt+1)%3
            }
        bankList.innerHTML+=`<span type="button" onclick="signout()">Sign Out</span>`
        // i.profile.holders.holder[0].name
        // 
        // i.summary.branch
        // i.summary.ifscCode
        // i.summary.micrCode
        // i.summary.currentBalance
        // Bar("fd-bar",[data.summary.principalAmount,data.summary.currentValue],["invested Value","Current Value"])
        // insert("fd-i",data.summary.interestRate+"%")
        // insert("fd-md",data.summary.maturityDate)
    })
    getData('TERM_DEPOSIT',(data)=>{
        Bar("fd-bar",[data.summary.principalAmount,data.summary.currentValue],["invested Value","Current Value"])
        insert("fd-i",data.summary.interestRate+"%")
        insert("fd-md",data.summary.maturityDate)
    })
    getData('RECCURING_DEPOSIT',(data)=>{
        Bar("rec-bar",[data.summary.principalAmount,data.summary.currentValue],["invested Value","Current Value"])
        insert("rec-i",data.summary.interestRate+"%")
        insert("rec-md",data.summary.maturityDate)
        insert("rec-ra",data.summary.recurringAmount)
    })
    getData('CREDIT_CARD',(data)=>{
        Bar("cc-bar",[data.summary.creditLimit,data.summary.totalDueAmount],["Credit Limit","used credit"])
        insert("cc-lp",data.summary.loyaltyPoints)
    })
    getData('CD',(data)=>{
        Bar("cd-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
        insert("cd-i",data.summary.holdings.holding.yield+"%")
        insert("cd-md",data.summary.holdings.holding.maturityDate)
    })
    getData('IDR',(data)=>{
        Bar("idr-bar",[data.summary.investmentValue,data.summary.currentValue],["invested Value","Current Value"])
        insert("idr-r",data.summary.investment.holdings.holding.rate+"%")
    })
})
