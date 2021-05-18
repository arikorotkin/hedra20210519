// Brute Force (Time: O(r ** s); Space: O(r ** s))
function LadderCombinationsBrute(r, s) {
    if (s === 1) {return 1}
    if (r <= 1) {return 1}
    let sum = 0
    for (let i = 1; i <= s; i++) {
        if (i > r) {break}
        sum += LadderCombinationsBrute(r - i, s)
    }
    return sum
}

// Optimal (Time: O(r); Space: O(r))
function LadderCombinationsOptimal(r, s, memo = []) {
    if (!memo.length) {
        memo[0] = 1
        memo[1] = 1
    }
    if (memo[r]) {return memo[r]}
    if (s === 1) {return 1}
    let sum = 0
    for (let i = s; i >= 1; i--) {
        if (i > r) {continue}
        if (!memo[r - i]) {
            memo[r - i] = LadderCombinationsOptimal(r - i, s, memo)
        }
        sum += memo[r - i]
    }
    memo[r] = sum
    return memo[r]
}

const brute1 = LadderCombinationsBrute(4, 2)
const brute2 = LadderCombinationsBrute(4, 1)
const brute3 = LadderCombinationsBrute(15, 1)
const brute4 = LadderCombinationsBrute(0, 3)
const brute5 = LadderCombinationsBrute(0, 1)
const brute6 = LadderCombinationsBrute(8, 3)
const brute7 = LadderCombinationsBrute(20, 4) /* should fail!!! */
const brute8 = LadderCombinationsBrute(3, 4)

const optimal1 = LadderCombinationsOptimal(4, 2)
const optimal2 = LadderCombinationsOptimal(4, 1)
const optimal3 = LadderCombinationsOptimal(15, 1)
const optimal4 = LadderCombinationsOptimal(0, 3)
const optimal5 = LadderCombinationsOptimal(0, 1)
const optimal6 = LadderCombinationsOptimal(8, 3)
const optimal7 = LadderCombinationsOptimal(20, 4)
const optimal8 = LadderCombinationsOptimal(3, 4)

console.log(`1. when r = 4 and s = 2, result should be 5: ${optimal1 === brute1 && optimal1 === 5}`)
console.log(`2. when r = 4 and s = 1, result should be 1: ${optimal2 === brute2 && optimal2 === 1}`)
console.log(`3. when r = 15 and s = 1, result should be 1: ${optimal3 === brute3 && optimal3 === 1}`)
console.log(`4. when r = 0 and s = 3, result should be 1: ${optimal4 === brute4 && optimal4 === 1}`)
console.log(`5. when r = 0 and s = 1, result should be 1: ${optimal5 === brute5 && optimal5 === 1}`)
console.log(`6. when r = 8 and s = 3, result should be 81: ${optimal6 === brute6 && optimal6 === 81}`)
console.log(`7. when r = 20 and s = 4, result should be 283,953: ${optimal7 === brute7 && optimal7 === 283953}`)
console.log(`8. when r = 3 and s = 4, result should be 4: ${optimal8 === brute8 && optimal8 === 4}`)

module.exports = LadderCombinationsOptimal