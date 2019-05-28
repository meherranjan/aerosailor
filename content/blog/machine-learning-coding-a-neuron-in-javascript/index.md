---
title: 'Machine Learning: Coding a Neuron in JavaScript - Part 1'
layout: post
categories:
- machine learning
- neuron
- artificial intelligence
date: 2018-10-09
---

We see around ourselves surrounded by some very common and strange use cases 
of machine learning in our digital ecosystem. From movie recommendation to facial recognition, 
some very common apps that we use deploy such algorithms to help us deliver 
a better technological ecosystem. 
A very smallest unit of such an algorithm is a Neuron. 
A neural network is a collection of neurons. 
You can find many libraries that give you power to create a neural network with just few lines of code.
However writing your own neural network is definitely 
not that much amount of code either, trust me with this. 
We write a thousand line of code in a month or more, how long is just a hundred! 
Not much trust me. We will break it down further into logical that makes it even more intuitive to grasp.
A neuron has a life cycle and its phases will help us modularise our code.
I hope by the end of this blog post you will feel neural network to be more fascinating than mind-bending. 


## What is a neuron?
A neural network or a neuron we are going to program performs very much similar to a biological functioning neuron.
A biological neuron is a structural and the primary unit of nervous system. 
They are the longest living cells in your body and in particular many research indicates 
that the nerve cells or neuron in our cerebral cortex live as long as we do. 
They are irreplaceable. They consume over 25% of calories you take in a day. 

A neuron has 3 parts; soma, dendrite and axon. 
Soma is the cell body contains all the regular cell stuff like DNA, RNA, Mitochondria, nucleus etc. 
Dendrites are the listeners, they take inputs from other neurons or cells and pass it on to the cell body. 
And the axons transmit electrical impulses to the other cells. That is the general structure and data flow.

We are looking at some defined structure now, we need to look deeper at how an electrical signal moves through this
different structure and gets transformed. Let's read further.

## Action Potential
So when a neuron is stimulated enough it sends out an electrical impulses. 
A neuron is negatively charged when is resting and the membranes around it are positive. 
The movement of charge from the membranes to the cell body is key to the electrical activity in the neurons. 
Not all the events cause the flow of ions along the axons, 
such events that do, create enough Action Potential. 

The potential difference of neuron and the membrane is around -70mW. 
When an external event creates enough stimulus to cross the potential from -70mW to **-55mW**, and when it further crosses till 40mW, 
a biological chain reaction is created and impulse is sent down the axon and an output is received.

Now, we understood a threshold(certain events e.g. a birthday present) trigger the action potential. 
And the threshold at its simplest form looks like a switch. A neuron either fires or does not to look at it another way. 
Therefore, threshold condition can be safely assumed as a constant and the best value a constant can have is 1.
Simplification a mathematical expression by the process of elimination is a good way to create a quick working demo
and we are going to do the same.

## Back to computational neuron...
Analysis, it brings clarity and also helps identify unknowns that we might encounter. 
A neuron in itself isn't that useful from the intelligence point of view. 
However when grouped together they can be magical.
Biological neuron is the only source of truth for us when we it comes to looking at any good source.
Many phenomena that a biological neuron performs are named similarly in computational neuron and understanding 
latter definitely gives a good jumping off point for learning.

Now putting our neuron ride in next gear we are going to take a moment and define certain key terms 
that will help us build our neuron. 
Don't be surprised to find he similarity between the computational and the biological neuron.


## Activation Function

**Activation function** is a non linear function which decides whether the output of the neuron should be 
forwarded/propagated-forward or not. 
Without an activation function it is impossible to solve a non-linear problem.
Linear equations are those that have constant change in x & y. Eg miles and km conversion. 
In other words, functions that would make up a straight line on a cartesian plane.

Essentially this function determines whether the neuron will fire or not. Recall action potential? 
In a real world, visualising this function can be very abstract(physical + chemical + psychological)
This is a very profound idea. There are several types of activation function and they all do something 
different that each other.


## Perceptron: NN with single neuron
It's the simplest neural network, with just one single neuron. It is based on feed forward model so when input is fed to the network, some processeing is performed and an output is returned. Lets look at the steps:

#### Feeding Input 
Lets use a basic function, although sin(x) is a very good candidate with just one input, 
however I would take a method with 2 inputs will help you find you more ways to experiment and explore further. 
Sin(x) can be a good exercise for you to complete, share your JS code link on your comment.

{% highlight js %}
const data = (x, y) => {
    return [x, y]
}
let input = data[2, 7]
{% endhighlight %}

#### Adding Weights
Every input that passes through neuron must be weighted. 
{% highlight js %}
let weight = Math.random() * 0.3 - 0.1;
{% endhighlight %}

#### Passing through activation function
Our activation function is very simple at its best. Its limits our output within a range and returns binary output, either 0 or 1. Following is a very simple step function which is like a switch with 2 states; on or off. We have many such other functions that can gives us a ranged output. Another very popular such function is Sigmoid, it features a S-shaped curved.
{% highlight js %}
// step function
let stepFn = sum => {
	return sum > 0 ? 1 : 0;
}

// sigmoid
let sigmoidFn = sum => {
	return 1/(1 + Math.exp(-sum));
}
{% endhighlight %}

{% include sigmoid-plot.html %}

#### Output
This is the guess of our single neuron and its far from accurate because we haven't trained it yet.
{% highlight js %}
let input = 45;
let weight = Math.random() * 0.3 - 0.1;
let sum = input * weight;
let activationFunction = sum => {
	return sum > 0 ? 1 : 0;
}

let output = activationFunction(sum);
console.log(output)
{% endhighlight %}

### Cost Function
We have our neuron making guesses but they are just some random values, how do we correct it. Before that we need to find out how far are we from our target value. A cost function is what answers that.

{% include cost-pred-plot.html %}