//switch (key) {
//    case value:
        
//        break;

//    default:
//        break;
//}

//Above mentioned is the basic syntax

const month ="Jan"

switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    case "May":
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;
    case "July":
        console.log("July");
        break;
    case "August":
        console.log("August");
        break;
    case "September":
        console.log("September");
        break;
    case "October":
        console.log("October");
        break;
    case "November":
        console.log("November");
        break;
    case "December":
        console.log("December");
        break;

    default:
        console.log("There is an error");
        break;
}

// shortcut to print multiple case in mac is shift+option+down arrow key, for windows shift+alt+down arrow key
// By default, when the case is matched, everything after that everything will be executed(not checked), EXCEPT default
// That's why Break is used 