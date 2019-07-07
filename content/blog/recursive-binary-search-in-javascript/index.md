---
title: 'Recursive Binary Search in JavaScript'
path: '/blog/recursive-binary-search-in-javascript'
created: '2015-07-28T22:40:32.169Z'
modified: '2015-05-30T22:40:32.169Z'
thumbnail: './featured-image.jpg'
tags: ["recursion", "algorithms", "javascript"]
---

Divide and rule has been historically the most successful tactics for many leaders of the civilization. It breaks down a complex problem set so dramatically down that at one point the rewards are exponential.

![Retro Style Recursion Banner Image](./featured-image.jpg)

When it comes to programming divide and rule, scares many. However, this successful tactic isn't that difficult to master. One good way to get better at this pattern is by using it frequently in your day to day work.

Let's take an example, say you have an application that involves various personas for your user. A user with access that read only, read/write and no read/write.

And we can deliver this experience by letting our navigation know which of the links to show and which ones to not show.

Now, in a small app the navigation level might be just primary and secondary: 2 loop and you are done! Time Complexity - O(n²), not too bad and it is practical in most scenarios.

Let's say you have a navigation structure that goes several level deep. It becomes an interesting problem to solve when you want to code it using loops. It becomes even more exhilarating when you think of recursion as a superior candidate for this problem set.

*Here what a loop would look like:*
* Look through the JSON list (array of objects containing links)
* If it contains a link then push that item to the end of your list to traverse later
* If you reach end of your list, you are ready to rock!
* Repeat

*Recursive Approach:*
 * Look through the JSON list (array of objects containing links)
 * If you find a link, go to step #1
 * If you find no link, you are ready to roll.

I realize I have extremely simplified the example to get a point across. Although the difference might not seem huge to many if you are new to recursion but shortly I will unfold a layer of some awesome code to help to sail through this beautiful pattern of navigation. Code ahead, careful fellas..

Binary search is a simple & powerful algorithm where we take a sorted data and make a guess of the middle item. If the guess was low, we adjust our lower index. If the guess was high, we adjust our high index. And we repeat.
Time Complexity - O(log n)

```javascript
const sortedList = [1, 2, 3, 4, 5, 6, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const binarySearch = (list, item) => {
	let low = 0
	let high = list.length - 1
	let guess = null
	
	while(low <= high) {
		let mid = Math.floor((high + low)/2)
		guess = list[mid]

		if(guess === item) {
			console.log('The item is present at ' + (mid + 1) + ' position.')
		} else if (guess > item) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
}

binarySearch(sortedList, 6)
```


Recursive binary search is simple enough too if we just break down the problem. Every recursive function has 2 parts: base case and recursive case. The base case ensures the function doesn't run into an infinite loop. It helps visualize the recursive case.
Let's see how a recursive binary search would look like:


```javascript
sortedList = [11, 24, 33, 64, 95, 106, 217, 228, 299, 310]

const getMid = (low, high) => {
	return Math.floor((high + low) / 2)
}

const recursiveBS = (list, item, low, high) => {
	(!low && !high ) && (low = 0, high = list.length - 1)

	let found = false

	if (low <= high) {
		let mid = getMid(low, high), 
		    guess = list[mid]

		if (guess === item) {
			console.log ("Your item is at " + (getMid(low, high) + 1) + " position")
		} else if (guess > item) {
			recursiveBS(list, item, low, mid - 1)
		} else {
			recursiveBS(list, item, mid + 1, high)
		}	
	}
}

recursiveBS(sortedList, 217)
```

The fundamental difference that becomes very evident is that the terminating condition in our loop becomes the base recursion case.

All the moving parts within the loop are passed to the function to create the recursive case. There are definitely several optimizations that can be done. And if you had a good time reading, leave me a comment and let me know what improvement do you think are possible here.
