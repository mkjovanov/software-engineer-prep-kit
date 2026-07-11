'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



/*
 * Complete the 'countSubarraysWithSumAndMaxAtMost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. LONG_INTEGER k
 *  3. LONG_INTEGER M
 */

function countSubarraysWithSumAndMaxAtMost(nums: number[], k: number, M: number): number {
    let subArrayCount = 0;
    let currentSubArrayIndex = 0;
    while(currentSubArrayIndex < nums.length) {        
        let subArraySum = 0;   
        for (let i = currentSubArrayIndex; i < nums.length; i++) {
            // Only break on M because sum can later still be valid if we have 0 or negative numbers that reduce or keep sum the same
            if(nums[i] > M) {
                break;
            }
            subArraySum += nums[i];
            if(subArraySum === k) {
                subArrayCount++;
                continue;
            }
        }
        currentSubArrayIndex++;
    }
    
    return subArrayCount;
}

function main() {
    const numsCount: number = parseInt(readLine().trim(), 10);

    let nums: number[] = [];

    for (let i: number = 0; i < numsCount; i++) {
        const numsItem: number = parseInt(readLine().trim(), 10);

        nums.push(numsItem);
    }

    const k: number = parseInt(readLine().trim(), 10);

    const M: number = parseInt(readLine().trim(), 10);

    const result: number = countSubarraysWithSumAndMaxAtMost(nums, k, M);

    process.stdout.write(result + '\n');
}
