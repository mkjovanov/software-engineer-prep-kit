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
 * Complete the 'mergeHighDefinitionIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function mergeHighDefinitionIntervals(intervals: number[][]): number[][] {
    if (intervals.length === 0) {
        return [[]];
    }
    
    // Remove duplicates and sort
    let sortedIntervals = intervals
        .filter((v, i, self) => self.indexOf(v) === i)
        .sort((x, y) => x[0] - y[0]);
    let mergedIntervals = [sortedIntervals[0]];
    let lastMergedIndex = 0;
    
    for (let i = 1; i < sortedIntervals.length; i++) {
        // Fully contained interval ([1, 3] and [2, 3] for example)
        if (sortedIntervals[i][0] >= mergedIntervals[lastMergedIndex][0] && sortedIntervals [i][1] <= mergedIntervals[lastMergedIndex][1]) {
            continue;
        }
        // Interval that is partially contained ([1, 3] and [2, 6] for example)
        if (sortedIntervals[i][0] <= mergedIntervals[lastMergedIndex][1]) {
            mergedIntervals[lastMergedIndex][1] = sortedIntervals[i][1];
        } else {
            mergedIntervals[lastMergedIndex + 1] = sortedIntervals[i];
            lastMergedIndex++;
        }
    }
    
    return mergedIntervals;
}

function main() {
    const intervalsRows: number = parseInt(readLine().trim(), 10);

    const intervalsColumns: number = parseInt(readLine().trim(), 10);

    let intervals: number[][] = Array(intervalsRows);

    for (let i: number = 0; i < intervalsRows; i++) {
        intervals[i] = readLine().replace(/\s+$/g, '').split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
    }

    const result: number[][] = mergeHighDefinitionIntervals(intervals);

    process.stdout.write(result.map(x => x.join(' ')).join('\n') + '\n');
}
