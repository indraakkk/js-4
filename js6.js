// ================== javascript 6 =================
// how to calculate tax with traditional function
function calculateTax(price = 0, item = "Unknown") {
    totalTax = price * 0.1;
    messages = `item: ${item}, price = IDR ${price}, tax: IDR ${totalTax}`;
    return messages;
}
const resultTax = calculateTax(12000, "Nasi Goreng");

// const variable has function
const calculateTax2 = function (price2 = 0, item2 = "Unknown") {
    totalTax2 = price2 * 0.1;
    messages2 = `item: ${item2}, price = IDR ${price2}, tax: IDR ${totalTax2}`;
    return messages2;
}
const resultTax2 = calculateTax2(8000, "Tissue");