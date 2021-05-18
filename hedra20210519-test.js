const {expect} = require('chai')
const LadderCombinations = require('./hedra20210519')
const LadderCombinationsOptimal = require('./answers')

xdescribe('LadderCombinations', () => {
    it('test 1: r = 4, s = 2', () => {
        const answer1 = LadderCombinations(4, 2)
        expect(answer1).to.equal(5)
    })
    it('test 2: r = 4, s = 1', () => {
        const answer2 = LadderCombinations(4, 1)
        expect(answer2).to.equal(1)
    })
    it('test 3: r = 15, s = 1', () => {
        const answer3 = LadderCombinations(15, 1)
        expect(answer3).to.equal(1)
    })
    it('test 4: r = 0, s = 3', () => {
        const answer4 = LadderCombinations(0, 3)
        expect(answer4).to.equal(1)
    })
    it('test 5: r = 0, s = 1', () => {
        const answer5 = LadderCombinations(0, 1)
        expect(answer5).to.equal(1)
    })
    it('test 6: r = 8, s = 3', () => {
        const answer6 = LadderCombinations(8, 3)
        expect(answer6).to.equal(81)
    })
    it('test 7: r = 20, s = 4', () => {
        const answer7 = LadderCombinations(20, 4)
        expect(answer7).to.equal(283953)
    })
    it('test 8: r = 3, s = 4', () => {
        const answer8 = LadderCombinations(3, 4)
        expect(answer8).to.equal(4)
    })
})

xdescribe('LadderCombinations where s is always 3', () => {
    it('test 9: r = 0', () => {
        const answer9 = LadderCombinations(0)
        const optimal9 = LadderCombinationsOptimal(0, 3)
        expect(answer9).to.equal(optimal9)
    })
    it('test 10: r = 1', () => {
        const answer10 = LadderCombinations(1)
        const optimal10 = LadderCombinationsOptimal(1, 3)
        expect(answer10).to.equal(optimal10)
    })
    it('test 11: r = 5', () => {
        const answer11 = LadderCombinations(5)
        const optimal11 = LadderCombinationsOptimal(5, 3)
        expect(answer11).to.equal(optimal11)
    })
    it('test 12: r = 12', () => {
        const answer12 = LadderCombinations(12)
        const optimal12 = LadderCombinationsOptimal(12, 3)
        expect(answer12).to.equal(optimal12)
    })
    it('test 13: r = 20', () => {
        const answer13 = LadderCombinations(20)
        const optimal13 = LadderCombinationsOptimal(20, 3)
        expect(answer13).to.equal(optimal13)
    })
})