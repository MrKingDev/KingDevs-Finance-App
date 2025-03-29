function calculateBudget() {
    const money = parseFloat(document.getElementById("money").value);
    const tax = parseFloat(document.getElementById("tax").value) / 100;
    const needsPercent = parseFloat(document.getElementById("needs").value) / 100;
    const wantsPercent = parseFloat(document.getElementById("wants").value) / 100;
    const savingsPercent = parseFloat(document.getElementById("savings").value) / 100;

    if (isNaN(money) || isNaN(tax) || isNaN(needsPercent) || isNaN(wantsPercent) || isNaN(savingsPercent)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const totalAlloc = needsPercent + wantsPercent + savingsPercent;
    if (Math.abs(totalAlloc - 1) > 0.01) {
        alert("Needs + Wants + Savings percentages must add up to 100%.");
        return;
    }

    const postTaxMoney = money * (1 - tax);

    const resultHTML = `
    <p>After Tax: $${postTaxMoney.toFixed(2)}</p>
    <p>Needs: $${(postTaxMoney * needsPercent).toFixed(2)}</p>
    <p>Wants: $${(postTaxMoney * wantsPercent).toFixed(2)}</p>
    <p>Savings: $${(postTaxMoney * savingsPercent).toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = resultHTML;
}