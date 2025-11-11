/*
https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

// SOLUTION 1: Brute force
// nums1 arr, m = num elements in nums1, nums2 arr, n = nums2.length
// return nothing, modifying nums1 to merged array
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    // loop thru nums1
    for(let i = 0; i < nums1.length; i++) {
        // if it is a placeholder number 0
        if(nums1[i] === 0) {
            // replace with nums2[j]
            nums1[i] = nums2[j]
            j++
        };
    };
    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] === undefined) {
            nums1[i] = 0;
        }
    }
    nums1.sort((a, b) => a - b)
};