using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'mergeHighDefinitionIntervals' function below.
     *
     * The function is expected to return a 2D_INTEGER_ARRAY.
     * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
     */

    public static List<List<int>> mergeHighDefinitionIntervals(List<List<int>> intervals)
    {
        var sorted = intervals
        .GroupBy(subArray => string.Join(",", subArray)) // Group by matching contents
        .Select(group => group.First())                  // Select the first distinct array
        .OrderBy(subArray => subArray[0])                // Sort arrays by their first element
        .ToArray();
        List<List<int>> retVal = new List<List<int>>();
        int size = sorted.Count();
        int i = 0;
        while(i < size) {
            List<int> firstInterval = sorted[i];
            int lower = firstInterval.First();
            int upper = firstInterval.Last();
            int j = i + 1;
            while(j < size) {
                List<int> nextInterval = sorted[j];
                if(upper >= nextInterval.First()) {
                    j++;
                    if(upper < nextInterval.Last()) {
                        upper = nextInterval.Last();
                    }
                } else {
                    break;
                }
            }
            i = j;
            var current = new List<int>();
            current.Add(lower);
            current.Add(upper);
            retVal.Add(current);
        }
        return retVal;
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        int intervalsRows = Convert.ToInt32(Console.ReadLine().Trim());
        int intervalsColumns = Convert.ToInt32(Console.ReadLine().Trim());

        List<List<int>> intervals = new List<List<int>>();

        for (int i = 0; i < intervalsRows; i++)
        {
            intervals.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(intervalsTemp => Convert.ToInt32(intervalsTemp)).ToList());
        }

        List<List<int>> result = Result.mergeHighDefinitionIntervals(intervals);

        Console.WriteLine(String.Join("\n", result.Select(x => String.Join(" ", x))));
    }
}
