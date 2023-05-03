// let name = "William Roberson";

// let positionOfSpace = name.indexOf(" ");
// console.log(positionOfSpace);

// let first = name.substring(0, positionOfSpace);
// console.log(first);

// let last = name.substring(positionOfSpace + 1);
// console.log(last);  

function parseAndDisplayName(name) {
    let positionOfSpace = name.indexOf(" ");
    console.log(positionOfSpace);
    
    let first = name.substring(0, positionOfSpace);
    console.log(first);
    
    let last = name.substring(positionOfSpace + 1);
    console.log(last);  

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
