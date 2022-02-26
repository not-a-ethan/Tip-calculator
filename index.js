function tip(Stotal, tipPercent) {
    percent = tipPercent * .01

    amountOfTip = percent * Stotal
    total = amountOfTip + Stotal

    console.log(`Your total is ${total}. And you are tipping ${amountOfTip}`)
}
