// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]];
}

const returnLastTwoDrivers = function(array) {
    return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function(fare) {
        return x * fare;
    }
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, a) => {
    return a(arrayOfDrivers);
}