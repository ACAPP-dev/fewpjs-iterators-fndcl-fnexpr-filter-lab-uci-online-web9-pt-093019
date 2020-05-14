// Code your solution here

function findMatching(drivers, filter) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === filter.toLowerCase()
    })
}

function fuzzyMatch(drivers, testFilter) {
    return drivers.filter(driver => {
        return driver.match(`/^${testFilter}/`)
    })
}

function matchName(drivers, filter) {
    return drivers.filter(driver => {
        return driver.name === filter
    })
}
