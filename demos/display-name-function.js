function displayMailingLabel(name, address, city, state, zip) {
    let addressLabel = `
    ${name}
    ${address}
    ${city}, ${state}, ${zip}
    `;
    console.log(addressLabel);
}

let fullName = "William Roberson";
let homeAddress = "254 pysco lane";
let homeCity = "Miami"
let homeState = "FL"
let zip = 20335

displayMailingLabel(fullName, homeAddress, homeCity, homeState, zip);