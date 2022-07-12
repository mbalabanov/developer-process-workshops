// run the program

const input = "zzzzzzzzaaaatddddbhhhvvvaaaavvkkoooooooooonnnnnnnnnnmmmmmmmmmmiuhjkciiiiii"

function find_longest_sequence(inputString) {
    let allDuplicates = []
    let singleCharacterDuplicates = {}

    for (let charIndex = 0; charIndex < inputString.length; charIndex++) {
        let thisCharacter = inputString[charIndex]
        let nextCharacter

        if (inputString[charIndex + 1]) {
            nextCharacter = inputString[charIndex + 1]
        }

        if (singleCharacterDuplicates.char) {
            singleCharacterDuplicates.amount++
        } else {
            singleCharacterDuplicates.char = thisCharacter
            singleCharacterDuplicates.amount = 1
        }

        if (thisCharacter != nextCharacter) {
            allDuplicates.push(singleCharacterDuplicates)
            singleCharacterDuplicates = {}
        }

    }
    results_sorted_by_value = allDuplicates.sort((a, b) => b.amount - a.amount)
    unique_top_result = get_alphabetical_unique_top_result(results_sorted_by_value)[0]
    
    let output = {}

    let resultKey = unique_top_result.char.toLowerCase()
    let resultValue = unique_top_result.amount

    output[resultKey] = resultValue
    
    return output
}

function get_alphabetical_unique_top_result(results) {
    let top_results = []

    for (let resultIndex = 0; resultIndex < results.length; resultIndex++) {
        let thisEntry = results[resultIndex]
        let nextEntry = { amount: 0 }

        top_results.push(thisEntry)

        if (results[resultIndex + 1]) {
            nextEntry = results[resultIndex + 1]
        }

        if (thisEntry.amount !== nextEntry.amount) {
            return top_results.sort((a, b) => a.char.localeCompare(b.char))
        }
    }
}

console.log(find_longest_sequence(input))

