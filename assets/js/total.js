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
const getDataInsurance =(type,callback)=>{
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
const getDataPention =(type,callback)=>{
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
const getDataInvestment =(type,callback)=>{
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



getData('TERM_DEPOSIT',(data)=>{
    insert("fd-md",data.summary.maturityDate)
    insert("tm-pr",data.summary.principalAmount)
    insert("tm-cur",data.summery.urrentValue)
})
getData('RECCURING_DEPOSIT',(data)=>{
    insert("rec-md",data.summary.maturityDate)
    insert("rec-cur",data.summary.currentValue)
    insert("rec-pr",data.summary.principalAmount)
})
getData('CREDIT_CARD',(data)=>{
    Bar("cc-bar",[data.summary.creditLimit,data.summary.totalDueAmount],["Credit Limit","used credit"])
    insert("cc-lp",data.summary.loyaltyPoints)
})
getData('CD',(data)=>{
    insert("cd-md",data.summary.holdings.holding.maturityDate)
    insert("cd-cur",data.summary.currentValue)
    insert("cd-pr",data.summary.investmentValue)
})
getData('IDR',(data)=>{
    insert("idr-cur",data.summary.currentValue)
    insert("idr-inv",data.summary.investmentValue)
})
getDataInsurance('INSURANCE_POLICIES',(data)=>{
    insert("ip-ed",data.profile.riders.rider[0].policyEndDate)
    insert("ip-pa",data.profile.riders.rider[0].premiumAmount)
    })
getDataInsurance('ULIP',(data)=>{
    insert("ulip-sd",data.profile.riders.rider.policyStartDate)
    insert("ulip-pa",data.profile.riders.rider.premiumAmount)
    })
getDataPention('EPF',(data)=>{
    insert("epf-cb",data.summary.currentBalance)
    insert("epf-tb",data.summary.totalBalance)
})
getDataPention('PPF',(data)=>{
    insert("ppf-md",data.summary.maturityDate)
    insert("ppf-cb",data.summary.currenBalance)
})
getDataInvestment('MUTUAL_FUNDS',(data)=>{
    insert("mf-cur",data.summary.currentValue)
    insert("mf-inv",data.summary.investmentValue)
})
getDataInvestment('BONDS',(data)=>{
    insert("bond-md",data.summary.holdings.holding.maturityDate)
    insert("bond-cur",data.summary.currentValue)
    insert("bond-inv",data.summary.investmentValue)
})
getDataInvestment('DEBENTURES',(data)=>{
    insert("db-md",data.summary.holdings.holding.maturityDate)
    insert("db-cur",data.summary.currentValue)
    insert("db-inv",data.summary.investmentValue)
})
getDataInvestment('ETF',(data)=>{
    insert("etf-cur",data.summary.currentValue)
    insert("etf-inv",data.summary.investmentValue)
})
getDataInvestment('NPS',(data)=>{
    insert("nps-cv",data.summary.currentValue)
})
getDataInvestment('GOVT_SECURITIES',(data)=>{
    insert("gs-md",data.summary.holdings.holding.maturityDate)
    insert("gs-cur",data.summary.currentValue)
    insert("gs-inv",data.summary.investmentValue)
})
getDataInvestment('CP',(data)=>{
    insert("cp-cur",data.summary.currentValue)
    insert("cp-inv",data.summary.investmentValue)
})
getDataInvestment('REIT',(data)=>{
    insert("reit-cur",data.summary.currentValue)
    insert("reit-inv",data.summary.investmentValue)
})
getDataInvestment('AIF',(data)=>{
    insert("aif-cur",data.summary.currentValue)
    insert("aif-inv",data.summary.investmentValue)
})
getDataInvestment('INVIT',(data)=>{
    insert("invit-cur",data.summary.currentValue)
    insert("invit-inv",data.summary.investmentValue)
})
getDataInvestment('SIP',(data)=>{
    insert("sip-md",data.summary.investments.maturityDate)
    insert("sip-cur",data.summary.currentValue)
    insert("sip-inv",data.summary.investmentValue)
})
getDataInvestment('EQUITIES',(data)=>{
    insert("eq-cur",data.summary.currentValue)
    insert("eq-inv",data.summary.investmentValue)
})
getDataInvestment('CIS',(data)=>{
    insert("cis-cur",data.summary.currentValue)
    insert("cis-inv",data.summary.investmentValue)
})