---
title: Refactoring, re-engineering, and rebuilding
created: 20211102
---

Someone mentioned the word "refactoring" the other day. Someone else said, "Let's call it rebuilding."

This got me thinking.

Language is interesting. I hold that the words we use to describe things can often fail to grasp the idea in someone's mind. We are unlimited in our capacity to think and dream; however, we are limited in our vocabulary to describe—no one knows *all* the words.

I had an unabridged, English dictionary once. On the cover it said something like: Over 300,000 words. I took a test once that said my vocabulary was somewhere in the neighborhood of 3,000 words; less than 1 percent of the words in the dictionary.

Add to this the tendency many of us have to be loose with words and we end up in an interesting position. Not only will I most likely choose the wrong word sometimes but your interpretation, denotation, and connotation of that word may not be what I intended. Of course, intent and impact are not mutually inclusive.

Anyway.

We're going to start this one with some definitions and a reference to one of what I'll call The Three Laws.

We'll start with the easier one: Rebuilding.

Rebuilding is the act of building something again after it has been destroyed. This is contrasted with creation, which is building something for the first time. Rebuilding is an act of creation; however, the intent is to bring back what was once there, mostly.

In the context of the aforementioned conversation, we were talking about software development; specifically, a system that was being built to replicate and replace the system already in place. One person said the team had refactored the system. One of the developers on the team disagreed with that assessment.

So, refactoring. [Refactoring](https://refactoring.com) as defined in the book of the same name states something to the effect: Refactoring is changing the internal structure of an existing system in such a way that we do NOT alter its external behavior.

Contrast that with re-engineering, which I define similarly as: Re-engineering is changing the internal structure of an existing system in such a way that we DO alter its external behavior.

That means I could completely rewrite the operating system for the device you are reading this on and, as long as I leave certain things alone, all I've done is refactor that code. Further, if you're walking down the street and something happens that causes you to interact with the outside world in a different way, you have just re-engineered your brain.

Now for the law. It's referred to as [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law) and it states:

> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.
>
> — [Melvin E. Conway](https://twitter.com/conways_law)

Conway's Law has been reframed and rephrased more than a few times. Mine goes like this:

> Conway's Law swings both ways. Show me the people and I'l describe the code. Show me the code and I'll describe the people.

Of course, it doesn't have to be code, system being defined broadly in this context. With that said, it often works out. Take the [code used to build this site](https://github.com/8fold/site-joshbruce.com).

As of this writing, there's a minimum number of dependencies. There's a minimum amount of code. And, it's relatively easy to deploy and release new versions of code and content; I can do almost everything that needs doing using my phone.

So, what does this say about me?

When it comes to [motivators](/design-your-life/motivators), autonomy is ranked number two almost every time; I don't like depending too much on others and I try to help other not be dependent on me. I'm a minimalist in my lifestyle when it comes to people and property. I also tend to refactor what I say to deliver the most impact possible with the fewest words I can consider [at the time](https://quoteinvestigator.com/2012/04/28/shorter-letter/); I try to be to the point. I favor mobility and agility in my life.

I describe the code and the code describes me.

If you work in an organization with a lot of rules and governance, chances are your code will have a lot of rules regarding style, submission, and so on. But here's the rub, if you develop your code with a lot of rules, chances are you will have an expectation of a lot of rules within the organization. Teams who are more rules-oriented and focused will often find it difficult to tolerate things that are more loose.

## Rebuilding

I [rebuilt this site](https://joshbruce.com/web-development/2021-site-in-depth) with these things in mind, in fact; the only things I kept were the [.CSS](Cascading Style Sheet) and the libraries I use for building HTML ([HTML Builder](https://github.com/8fold/php-html-builder) and the [CommonMark extension](https://github.com/8fold/commonmark-fluent-markdown)). I maintain the code for both of those packages (dependent on myself).

And, in under 48 hours, I redesigned the site, removed my dependency on a framework, and improved my workflows.

## Re-engineering [.vs](versus) refactoring

I recently refactoring the code for the site. Specifically, I performed the [extract class](https://refactoring.com/catalog/extractClass.html) refactoring to create a class called [`FrontMatter`](https://github.com/8fold/site-joshbruce.com/pull/19). From the perspective of a user of the site, nothing changed, it's a refactoring after all.

However, from the perspective of the other classes within the system, this was re-engineering. The way the other classes interacted with the other pieces of the system changed pretty dramatically. To put it in corporate human terms, I hired someone new to take on the responsibilities that were once owned by another person. This meant everyone who used to interact with that original person now had to interact with this new person.

As of this writing, if we think of files as an individual, there are 15 team members. Introducing this one new team member forced me to change 14 files. This is an integrated team. Each member contributes something to the goal of delivering the proper response to you, the user of the site.

This makes me think that maybe there's no such thing as refactoring.

Is it really possible to put someone on a team (or alter code in some way) wherein the external behavior doesn't change at least a little bit?

I talked about [staying as small as possible](/web-development/on-constraints/internet-bandwidth) for as long as possible and I would say that applies to team size as well. I was in an interview once and was asked when I thought it was appropriate to scale.

That's a loaded question. When we talk about scaling we usually only talk about it in terms of scaling up. More code. More people. And I think those two things are mutually inclusive. The more people independently contributing to a codebase, the more code there will be. We rarely talk about scaling down though.

I didn't have a good answer for that question at the time. I'm not sure I have one now, in fact. I think it's appropriate to breathe. Scaling up is an inhale and scaling down is an exhale. I think it's appropriate to scale in either direction at any time; however, one should favor the exhale.

But this isn't the article for that I don't think.

So, what do you think? Is it possible to refactor a system without re-engineering it in some way?
