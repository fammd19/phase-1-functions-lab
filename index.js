// Code your solution in this file!
function distanceFromHqInBlocks (start) {
    const scubeHeadquarters = 42;
    if (start>scubeHeadquarters) {
        return start-scubeHeadquarters;
    } else {
        return scubeHeadquarters-start;
    }
}

function distanceFromHqInFeet (start) {
    const scubeHeadquarters = 42;
    if (start>scubeHeadquarters) {
        return (start-scubeHeadquarters)*264;
    } else {
        return (scubeHeadquarters-start)*264;
    }
}

function distanceTravelledInFeet (start, destination) {
    if (start>destination) {
        return (start-destination)*264;
    } else {
        return (destination-start)*264;
    }
}

function calculatesFarePrice (start, destination) {
    if (start>destination) {
        let distance = (start-destination)*264;
        if (distance < 400) {
            return 0;
        } else if (distance < 2000) {
            return 0.02*(distance-400);
        } else if (distance <= 2500) {
            return 25;
        } else if (distance > 2500) {
            return "cannot travel that far"
        } else {
            return "Please try again later"
        }
        
    } else {
        let distance = (destination-start)*264;
        if (distance < 400) {
            return 0;
        } else if (distance < 2000) {
            return 0.02*(distance-400);
        } else if (distance <= 2500) {
            return 25;
        } else if (distance > 2500) {
            return "cannot travel that far"
        } else {
            return "Please try again later"
        }
    } 
};




console.log(distanceFromHqInBlocks(5));
console.log(distanceFromHqInFeet(5));
console.log(distanceTravelledInFeet(5,10));
console.log(calculatesFarePrice(5,10));