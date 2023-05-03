// let name = "William Roberson";

// let positionOfSpace = name.indexOf(" ");
// console.log(positionOfSpace);

// let first = name.substring(0, positionOfSpace);
// console.log(first);

// let last = name.substring(positionOfSpace + 1);
// console.log(last);  

function parseAndDisplayName(name) {
    let positionOfFirstSpace = name.indexOf(" ");
    let positionOfLastSpace = name.lastIndexOf(" ");
    
    let first = name.substring(0, positionOfFirstSpace);
    
    
    let middle = name.substring(10,positionOfFirstSpace);
    

    let last = name.substring(positionOfFirstSpace + 6);
     
    let output = `
    Name: ${name}
    First: ${first}
    Middle: ${middle}
    Last: ${last}

    `;
    console.log(output);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
