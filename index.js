// Code your solution in this file!
// Returns the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Returns the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Selects different drivers based on the provided function
const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
};
