import React from 'react'


const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency: "INR" , style:"currency"
})


function formatCurrency(number:number) {
    return CURRENCY_FORMATTER.format(number)
}

export default formatCurrency