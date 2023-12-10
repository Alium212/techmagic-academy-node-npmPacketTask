const findMostRepeatedLetter = (text) => {
    let letterCountMap = new Map();
    let maxCount = 0;
    let mostRepeatedLetter = '';

    for (let character of text) {
        character = character.toLowerCase();
        if (/[a-z]/i.test(character)) {
            letterCountMap.set(character, (letterCountMap.get(character) || 0) + 1);
            if (letterCountMap.get(character) > maxCount) {
                maxCount = letterCountMap.get(character);
                mostRepeatedLetter = character;
            }
        }
    }

    return {
        letter: mostRepeatedLetter,
        count: maxCount
    };
};

module.exports = findMostRepeatedLetter;