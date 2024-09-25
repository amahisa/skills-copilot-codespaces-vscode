function skillsMember(){
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    switch(memberValue){
        case "1":
            // Display the skills of the member
            document.getElementById("skills").style.display = "block";
            break;
        case "0":
            // Hide the skills of the member
            document.getElementById("skills").style.display = "none";
            break;
    }
}
