An [array] is a collection of values, stored contiguously.
This was my attempt at a simpler array manipulation API. Most are immutable methods,
and do not modify the arguments. Any that do *for performance reasons* end in **$**.
Many methods, like `union()` also accept a *compare function*. More performant
versions accept a *map function* instead to avoid *O(n²)* calls, and end with **On**.
I find this map-approach beautiful, which i learned from Haskell's `sortOn()`.

You can notice that i have followed Javascript naming scheme as far as possible.
Some names are borrowed from Haskell, Python, Java, Processing. They are grouped
together by function, in reference below. Did i miss some really useful method?

Each method is also available as separate package for use by bundling tools,
like [browserify], [rollup], [uglify-js].

> Stability: Stable.<br>

```javascript
const array = require('extra-array');

array.last([1, 2, 3]);
// 3

var a = [1, 2, 3, 4];
array.swap(a, 0, 1);
// [2, 1, 3, 4]

array.linspace(0, -1, 5);
// [0, -0.25, -0.5, -0.75, -1]

var a = [1, 2, 3, 4];
array.rotate(a, 1);
// [4, 1, 2, 3]

array.bsearch([1, 3, 5, 7], 5);
// 2                 ^ found

[...array.permutations([1, 2, 3])];
// [
//   [ 1, 2, 3 ],
//   [ 2, 1, 3 ],
//   [ 1, 3, 2 ],
//   [ 3, 1, 2 ],
//   [ 2, 3, 1 ],
//   [ 3, 2, 1 ]
// ]
```

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is array.
| [head]                | Gets first value.
| [tail]                | Gets values except first.
| [init]                | Gets values except last.
| [last]                | Gets last value.
| [get]                 | Gets value at index (+ve, -ve).
| [getLerp]             | Gets value at fractional index.
| [getAll]              | Gets value at indices (+ve, -ve).
| [set]                 | Sets value at index (+ve, -ve).
| [set$]                | Sets value at index (+ve, -ve).
| [swap]                | Exchanges two values.
| [swap$]               | Exchanges two values.
| [range]               | Returns evenly spaced values within given interval.
| [linspace]            | Returns evenly spaced values within given interval.
|                       | 
| [push]                | Adds values to the end. 
| [pop]                 | Removes last value.
| [shift]               | Removes first value.
| [unshift]             | Adds values to the start.
| [copyWithin]          | Copies part of array within.
| [copy]                | Copies part of array to another.
| [copy$]               | Copies part of array to another.
| [fill]                | Fills with given value.
| [slice$]              | Keeps only the selected region.
| [concat$]             | Appends arrays to the end.
| [splice]              | Removes or replaces existing values.
| [flatten]             | Flattens nested array to given depth.
| [chunk]               | Breaks array into chunks of given size.
| [repeat]              | Repeats an array given times.
| [reverse]             | Reverses the values.
| [rotate]              | Rotates values in array.
| [rotate$]             | Rotates values in array.
| [shuffle]             | Rearranges values in arbitrary order.
| [shuffle$]            | Rearranges values in arbitrary order.
| [zip]                 | Combines values from n arrays, with a function.
|                       | 
| [map$]                | Updates values based on map function.
| [filter$]             | Keeps the values which pass the test.
| [count]               | Counts occurrences of a value.
| [countOn]             | Counts occurrences of a value.
| [countAllOn]          | Counts occurrences of values.
| [partition]           | Breaks array into values, by test.
| [partitionOn]         | Breaks array into values, by map.
| [group]               | Keeps similar values together and in order.
| [groupOn]             | Keeps similar values together and in order.
| [cut]                 | Breaks array at given indices.
| [cutRight]            | Breaks array after given indices.
| [split]               | Breaks array considering filter as separator.
|                       | 
| [unique]              | Removes duplicate elements.
| [uniqueOn]            | Removes duplicate elements.
| [union]               | Gives union of first array with another.
| [union$]              | Gives union of first array with another.
| [unionOn]             | Gives union of first array with another.
| [unionOn$]            | Gives union of first array with another.
| [intersection]        | Gives values of an array present in another.
| [intersectionOn]      | Gives values of an array present in another.
| [difference]          | Gives values of an array not present in another.
| [differenceOn]        | Gives values of an array not present in another.
| [isDisjoint]          | Checks if arrays have no value in common.
| [isDisjointOn]        | Checks if arrays have no value in common.
|                       | 
| [prefixes]            | Lists all possible prefixes.
| [infixes]             | Lists all possible infixes.
| [suffixes]            | Lists all possible suffixes.
| [subsequences]        | Lists all possible partial sequences.
| [permutations]        | Lists all possible arrangements.
| [isPrefix]            | Checks if array starts with a prefix.
| [isPrefixOn]          | Checks if array starts with a prefix.
| [isInfix]             | Checks if array contains an infix.
| [isInfixOn]           | Checks if array contains an infix.
| [isSuffix]            | Checks if array ends with a suffix.
| [isSuffixOn]          | Checks if array ends with a suffix.
| [isSubsequence]       | Checks if array has a subsequence.
| [isSubsequenceOn]     | Checks if array has a subsequence.
| [isPermutation]       | Checks if array has a permutation.
| [isPermutationOn]     | Checks if array has a permutation.
|                       | 
| [isEqual]             | Checks if two arrays are equal.
| [compare]             | Compares two arrays.
| [search]              | Searches a value from left.
| [searchRight]         | Searches a value from right.
| [searchAll]           | Searches a value throughout.
| [bsearch]             | Binary searches leftmost value in sorted array.
| [bsearchRight]        | Binary searches rightmost value in sorted array.
| [bsearchClosest]      | Binary searches closest value in sorted array.
| [bsearchAny]          | Binary searches value in sorted array.
| [findRight]           | Finds index of rightmost value passing the test.
| [findIndices]         | Finds indices of values passing the test.
| [sort]                | Arranges values in an order.
| [sortOn]              | Arranges values in an order.
| [sortOn$]             | Arranges values in an order.

<br>

[![nodef](https://merferry.glitch.me/card/extra-array.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [extra-array.min].

[bsearch]: https://github.com/nodef/extra-array/wiki/bsearch
[bsearchAny]: https://github.com/nodef/extra-array/wiki/bsearchAny
[bsearchClosest]: https://github.com/nodef/extra-array/wiki/bsearchClosest
[bsearchRight]: https://github.com/nodef/extra-array/wiki/bsearchRight
[chunk]: https://github.com/nodef/extra-array/wiki/chunk
[compare]: https://github.com/nodef/extra-array/wiki/compare
[concat$]: https://github.com/nodef/extra-array/wiki/concat$
[copy$]: https://github.com/nodef/extra-array/wiki/copy$
[copy]: https://github.com/nodef/extra-array/wiki/copy
[copyWithin]: https://github.com/nodef/extra-array/wiki/copyWithin
[count]: https://github.com/nodef/extra-array/wiki/count
[countAllOn]: https://github.com/nodef/extra-array/wiki/countAllOn
[countOn]: https://github.com/nodef/extra-array/wiki/countOn
[cut]: https://github.com/nodef/extra-array/wiki/cut
[cutRight]: https://github.com/nodef/extra-array/wiki/cutRight
[difference]: https://github.com/nodef/extra-array/wiki/difference
[differenceOn]: https://github.com/nodef/extra-array/wiki/differenceOn
[fill]: https://github.com/nodef/extra-array/wiki/fill
[filter$]: https://github.com/nodef/extra-array/wiki/filter$
[findIndices]: https://github.com/nodef/extra-array/wiki/findIndices
[findRight]: https://github.com/nodef/extra-array/wiki/findRight
[flatten]: https://github.com/nodef/extra-array/wiki/flatten
[get]: https://github.com/nodef/extra-array/wiki/get
[getAll]: https://github.com/nodef/extra-array/wiki/getAll
[getLerp]: https://github.com/nodef/extra-array/wiki/getLerp
[group]: https://github.com/nodef/extra-array/wiki/group
[groupOn]: https://github.com/nodef/extra-array/wiki/groupOn
[head]: https://github.com/nodef/extra-array/wiki/head
[index]: https://github.com/nodef/extra-array/wiki/index
[infixes]: https://github.com/nodef/extra-array/wiki/infixes
[init]: https://github.com/nodef/extra-array/wiki/init
[intersection]: https://github.com/nodef/extra-array/wiki/intersection
[intersectionOn]: https://github.com/nodef/extra-array/wiki/intersectionOn
[is]: https://github.com/nodef/extra-array/wiki/is
[isDisjoint]: https://github.com/nodef/extra-array/wiki/isDisjoint
[isDisjointOn]: https://github.com/nodef/extra-array/wiki/isDisjointOn
[isEqual]: https://github.com/nodef/extra-array/wiki/isEqual
[isInfix]: https://github.com/nodef/extra-array/wiki/isInfix
[isInfixOn]: https://github.com/nodef/extra-array/wiki/isInfixOn
[isPermutation]: https://github.com/nodef/extra-array/wiki/isPermutation
[isPermutationOn]: https://github.com/nodef/extra-array/wiki/isPermutationOn
[isPrefix]: https://github.com/nodef/extra-array/wiki/isPrefix
[isPrefixOn]: https://github.com/nodef/extra-array/wiki/isPrefixOn
[isSubsequence]: https://github.com/nodef/extra-array/wiki/isSubsequence
[isSubsequenceOn]: https://github.com/nodef/extra-array/wiki/isSubsequenceOn
[isSuffix]: https://github.com/nodef/extra-array/wiki/isSuffix
[isSuffixOn]: https://github.com/nodef/extra-array/wiki/isSuffixOn
[last]: https://github.com/nodef/extra-array/wiki/last
[linspace]: https://github.com/nodef/extra-array/wiki/linspace
[map$]: https://github.com/nodef/extra-array/wiki/map$
[partition]: https://github.com/nodef/extra-array/wiki/partition
[partitionOn]: https://github.com/nodef/extra-array/wiki/partitionOn
[permutations]: https://github.com/nodef/extra-array/wiki/permutations
[pop]: https://github.com/nodef/extra-array/wiki/pop
[prefixes]: https://github.com/nodef/extra-array/wiki/prefixes
[push]: https://github.com/nodef/extra-array/wiki/push
[range]: https://github.com/nodef/extra-array/wiki/range
[repeat]: https://github.com/nodef/extra-array/wiki/repeat
[reverse]: https://github.com/nodef/extra-array/wiki/reverse
[rotate$]: https://github.com/nodef/extra-array/wiki/rotate$
[rotate]: https://github.com/nodef/extra-array/wiki/rotate
[search]: https://github.com/nodef/extra-array/wiki/search
[searchAll]: https://github.com/nodef/extra-array/wiki/searchAll
[searchRight]: https://github.com/nodef/extra-array/wiki/searchRight
[set$]: https://github.com/nodef/extra-array/wiki/set$
[set]: https://github.com/nodef/extra-array/wiki/set
[shift]: https://github.com/nodef/extra-array/wiki/shift
[shuffle$]: https://github.com/nodef/extra-array/wiki/shuffle$
[shuffle]: https://github.com/nodef/extra-array/wiki/shuffle
[slice$]: https://github.com/nodef/extra-array/wiki/slice$
[sort]: https://github.com/nodef/extra-array/wiki/sort
[sortOn$]: https://github.com/nodef/extra-array/wiki/sortOn$
[sortOn]: https://github.com/nodef/extra-array/wiki/sortOn
[splice]: https://github.com/nodef/extra-array/wiki/splice
[split]: https://github.com/nodef/extra-array/wiki/split
[subsequences]: https://github.com/nodef/extra-array/wiki/subsequences
[suffixes]: https://github.com/nodef/extra-array/wiki/suffixes
[swap$]: https://github.com/nodef/extra-array/wiki/swap$
[swap]: https://github.com/nodef/extra-array/wiki/swap
[tail]: https://github.com/nodef/extra-array/wiki/tail
[union$]: https://github.com/nodef/extra-array/wiki/union$
[union]: https://github.com/nodef/extra-array/wiki/union
[unionOn$]: https://github.com/nodef/extra-array/wiki/unionOn$
[unionOn]: https://github.com/nodef/extra-array/wiki/unionOn
[unique]: https://github.com/nodef/extra-array/wiki/unique
[uniqueOn]: https://github.com/nodef/extra-array/wiki/uniqueOn
[unshift]: https://github.com/nodef/extra-array/wiki/unshift
[zip]: https://github.com/nodef/extra-array/wiki/zip

[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[extra-array.min]: https://www.npmjs.com/package/extra-array.min
