---
title: 'Coding a Neuron in JavaScript — I'
path: '/blog/coding-a-neuron-in-javascript'
created: '2015-05-28T22:40:32.169Z'
modified: '2015-05-29T22:40:32.169Z'
thumbnail: './featured-image.jpg'
tags: ["artificial intelligence", "machine learning", "neuron"]
---
A Neuron or Perceptron is a simplified mathematical model of a biological neuron. The perceptron algorithm was invented in 1957 at the Cornell Aeronautical Laboratory by Frank Rosenblatt. Initially and strangely it was intended to be a machine, rather than a program. It was reckoned to be used for image recognition.

We have myriads of libraries in our toolkit, some popular ones like TensorFlow — SciKit, that we practically would never want to worry about how the fundamental unit of a neural network works.

Nevertheless, for me, it has always been imperative to learn how the inner functioning of a system works. Or simply, how does any system work. Whether or not I can build the system is another story. Knowing how several elements of a system interact with each other, how a simple data as input comes out as a fine prediction without any hard-coded logic. Self-driven. How does a neural network do that and what does a single neuron contribute to the network? These were some questions that kept me curious for a long time.

It turns out that a neuron isn’t as complex as we imagine it to be. And it isn’t that straightforward and simple either. 😁

So now is the time we grab a cup of coffee. ☕️
We will start with a simple game and down the line, slightly far ahead, we will wrestle our way out of calculus(next part of the series). But believe me, it wouldn’t be so daunting as it sounds. And I really hope by the end of the post, you will feel more inquisitive and enthusiastic about machine learning rather than believing it to be a mind-bending piece of a subject. Let’s start…

Enter Game — Hi-Lo
The aim of the game is to improve our guess and end up with an accurate score. Simple enough! Also, I know the answer and at every guess, I will let you know if your guess is low or high.

Let’s say I ask you how many kilograms make a pound? I am sure you know the answer already.

For a moment, let’s forget that we know the magical figure and act like we are 5. So what’s your guess? 1.8? Okay.. we have to start somewhere and 1.8 is good enough start.

Okay, before proceeding, we should also remind ourselves that the relationship between kilogram and pounds is linear. That means if we double the kilogram or half it, the same effect is proportional in pounds. And, can we agree upon a relationship, which can be expressed as…

