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
 * DISPLAYFOLLOWINFO: displays follows & followers info in the format:
 * Alice follows Bob, Charlie, Debbie.
 * Alice's followers are: Charlie, Debbie
 **********************************************************************/
function displayFollowInfo(){
    var keyArray = Object.keys(data);
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
 * GETFOLLOWS: takes a person and returns an array of the names of 
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
 * GETFOLLOWERS: takes a person and returns an array of the names of 
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


displayFollowInfo();