var data = {
    f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
    },
    f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
    },
    f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
    },
    f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
    },
    f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
    }
};

/**********************************************************************
 * displayFollowInfo: displays follows & followers info in the format:
 * Alice follows Bob, Charlie, Debbie.
 * Alice's followers are: Charlie, Debbie
 **********************************************************************/
function displayFollowInfo(){
    for(person in data){
        var followsMSG = data[person].name + " follows ";
        var follows = getFollows(person).join(", ");
        followsMSG += follows + ". \n" + data[person].name + "'s followers are: ";

        var followers = getFollowers(person).join(", ");
        followsMSG += followers + "\n";
        
        console.log(followsMSG);
    }
}

/**********************************************************************
 * getFollows: takes a person and returns an array of the names of 
 * the people that person follows
 **********************************************************************/
function getFollows(person){
    var follows = [];
    for(peoplefollowed in data[person].follows){
        var personId = data[person].follows[peoplefollowed];
        follows.push(data[personId].name);
    }
    return follows;
}

/**********************************************************************
 * getFollowers: takes a person and returns an array of the names of 
 * the people that follow that person
 **********************************************************************/
function getFollowers(person) {
    var followers = [];
    for(follower in data) {
        var followsString = data[follower].follows.join("");
        if (followsString.includes(person)) {
            followers.push(data[follower].name);
        }
    }
    return followers;
}

/****************************************************************************
 * displayBiggestStalker: displays who follows the most people in the format:
 * Debbie follows the most people.  She is a stalker.
 ****************************************************************************/
function displayBiggestStalker(){
    var mostFollowsArray = [];
    var highestNum = 0;


    for(person in data){
        var mostFollows = {
            name: "",
            followCount: 0
        };
        var followsCount = getFollows(person).length;
        mostFollows.name = data[person].name;
        mostFollows.followCount = followsCount;
        mostFollowsArray.push(mostFollows);
        if (followsCount >= highestNum) {
            highestNum = followsCount;
        }
    }

    var multipleMost = [];
    for (user in mostFollowsArray) {
        if (mostFollowsArray[user].followCount == highestNum) {
            multipleMost.push(mostFollowsArray[user].name);
        }
    }

    var peopleString = multipleMost.join(", ");
    if (multipleMost.length == 1) {
        console.log(peopleString, "follows the most people.", peopleString, "is a stalker.");
    } else {
        console.log(peopleString, "follow the most people.", peopleString, "are a bunch of stalkers.");
    }

}

/*************************************************************************************
 * displayNeedsRestrainingOrder: displays who's being followed the most in the format:
 * Debbie has the most followers.  Debbie should consider some restraining orders.
 *************************************************************************************/
function displayNeedsRestrainingOrder(){
    var mostFollowersArray = [];
    var highestNum = 0;

    for(person in data){
        var mostFollowers = {
            name: "",
            followersCount: 0
        };

        var personName = data[person].name;
        var followersCount = getFollowers(person).length;
        mostFollowers.name = personName;
        mostFollowers.followersCount = followersCount;
        mostFollowersArray.push(mostFollowers);
        highestNum = followersCount;
    }

    var multipleMost = [];
    
    for (user in mostFollowersArray) {
        if (mostFollowersArray[user].followersCount == highestNum) {
            multipleMost.push(mostFollowersArray[user].name);
        }
    }

    var peopleString = multipleMost.join(", ");
    if (multipleMost.length > 1) {
        console.log(peopleString, "have the most followers. They should consider some restraining orders.");
    } else {
        console.log(peopleString, "has the most followers.", peopleString, "should consider some restraining orders.");
    }
}


// displayFollowInfo();
// displayBiggestStalker();
displayNeedsRestrainingOrder();