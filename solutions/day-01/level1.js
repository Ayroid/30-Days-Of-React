// STEP 1

let array = []

// STEP 2

let anotherArray = [1, 2, 3, 4, 5]

// STEP 3

console.log(anotherArray.length)

// STEP 4

console.log(`First Element: ${anotherArray[0]}\nMiddle Element: ${anotherArray[Math.floor(anotherArray.length / 2)]}\nLast Element: ${anotherArray[anotherArray.length - 1]}`)

// STEP 5

let mixedDataTypes = ['Pasta', 1, true, 'Pizza', 2, false]

// STEP 6

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// STEP 7

console.log(itCompanies)

// STEP 8

console.log(`Number of Companies: ${itCompanies.length}`)

// STEP 9

console.log(`First Company: ${itCompanies[0]}\nMiddle Company: ${itCompanies[Math.floor(itCompanies.length / 2)]}\nLast Company: ${itCompanies[itCompanies.length - 1]}`)

// STEP 10

itCompanies.forEach(company => console.log(company))

// STEP 11

itCompanies.forEach(company => console.log(company.toUpperCase()))

// STEP 12

console.log(itCompanies.join(', ') + ' are big IT companies.')

// STEP 13

itCompanies.includes('OYO') ? console.log('OYO') : console.log('Company not found')

// STEP 14

for (let i = 0; i < itCompanies.length; i++) {
    let o = 0
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].includes('o')) {
            o++
        }
    }
    if (o >= 2) {
        console.log(itCompanies[i])
    }
}

// STEP 15

console.log(itCompanies.sort())

// STEP 16

console.log(itCompanies.reverse())

// STEP 17

console.log(itCompanies.slice(0, 3))

// STEP 18

console.log(itCompanies.slice(itCompanies.length - 3))

// STEP 19

console.log(itCompanies.slice(Math.floor(itCompanies.length / 2) - 1, Math.floor(itCompanies.length / 2) + 2))

// STEP 20

console.log(itCompanies.shift())

// STEP 21

console.log(itCompanies.pop(Math.floor(itCompanies.length / 2)))

// STEP 22

console.log(itCompanies.pop())

// STEP 23

console.log(itCompanies.splice(0, 3))
