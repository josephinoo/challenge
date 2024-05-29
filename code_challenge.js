function calculateScore(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    let score = 0;
    for (const num of arr) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error('Array must contain only numbers');
        }

        if (num === 5) {
            score += 5;
        } else if (num % 2 === 0) {
            score += 1;
        } else {
            score += 3;
        }
    }

    return score;
}


function validateCalculateScore() {
    const testCases = [
        { input: [1, 2, 3], expectedOutput: 7 },
        { input: [4, 5, 6], expectedOutput: 7 },
        { input: [5, 5, 5], expectedOutput: 15 },
        { input: [], expectedOutput: 0 },
        { input: [0], expectedOutput: 1 },
        { input: [1, 3, 7], expectedOutput: 9 },
        { input: [2, 4, 6], expectedOutput: 3 },
        { input: [1,2,3,4,5] , expectedOutput: 13 },
        { input:  [17,19,21] , expectedOutput: 9 },
        { input: [0,0,0,0] , expectedOutput:4 },
        { input: [1,2,3,4,5,6,7,8,9,10] , expectedOutput: 22 },
        { input: [0,5,5,0] , expectedOutput: 12 },

    ];

    let passAll = true;
    for (const testCase of testCases) {
        const actualOutput = calculateScore(testCase.input);
        if (actualOutput !== testCase.expectedOutput) {
            console.error(`Failed for input: ${testCase.input}. Expected: ${testCase.expectedOutput}, Actual: ${actualOutput}`);
            passAll = false;
        }
    }

    if (passAll) {
        console.log("All test cases passed! 🎉");
    } else {
        console.error("Some test cases failed! 😞");
    }
}

validateCalculateScore();
