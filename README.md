# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

//

1/30/2025
Name: Kane Kriz

//

RESPONSE: Added Feb 10 2025, prior to feedback request 1

The average case time complexity of insertion sort is Θ(n²).

For every element in the array, insertion sort compares it with elements in the already sorted portion of the array to find its correct position.

On average, an element will need to be compared with about half of the elements in the sorted portion before it finds a spot to be inserted.
This occurs due to each position for the element to be correctly sorted into having equal odds for each position remaining in the array, assuming the array is unsorted as expected.

As the sort progresses through the array element by element, the size of the sorted array (or subarray) 
increases until the array is properly sorted as intended at the end of the insertion sort. 

The first element within the array requires no comparisons in insertion sort as it is considered to already be sorted, 
as it is alone and the only element being considered. 

Elements require an increasing amount of comparisons as the number of elements considers increases. 
This can be seen as the second element requires 1 comparison on average, the third requires about 2 comparisons, 
and this pattern continues in increasing number as additional elements are considered down the line. 

Looking towards the end of the array,the last element can be assumed to require n/2 comparisons on average, 
with a worst case being n comparisons across all already existing sorted elements.

To find the average case time complexity, the summation of performed sorting operations must be considered. 

 Summing all insertion sort's iterations can be reasoned as for each element,
 the number of comparisons required to find its correct position increases as the sorted portion of the array increases.
 
Adding up these comparisons for all elements results in a total number of operations that grows quadratically with the size of the input, n.

This quadratic growth occurs as each successive element requires increasingly more work via increasing amounts
of iterations as n gets progressively larger. 

Due to this quadratic growth, insertion sort’s average case time complexity is Θ(n²), as stated earlier. 


//

Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

//

Citation: Review

[https://www.geeksforgeeks.org/insertion-sort-algorithm/](url)
GeeksforGeeks. “Insertion Sort Algorithm.” GeeksforGeeks, 7 Mar. 2013, www.geeksforgeeks.org/insertion-sort-algorithm/.

[https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions](url)
“Writing Mathematical Expressions.” GitHub Docs, docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions.
