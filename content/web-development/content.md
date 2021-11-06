---
title: Web development
created: 20211031
updated: 20211105
---

I differentiate [software development](/software-development) from web development in the sense that all web development is software development but not all software development is web development. Web development is software development in a specific context, with contextual constraints.

Generally speaking, when I do develop software, I do it for the web. Further, I take a user down approach. (I never reach, "the metal".) However, after poking around and looking I can say that, at a reasonable level of abstraction, developing software feels the same.

## This site (2021 update)

This site separates the application logic from the content, style, and interaction.

The [site is open](https://github.com/8fold/site-joshbruce.com) and available on GitHub. The [content](https://github.com/joshbruce/content-joshbruce.com) is also open and available; though I am reserving full copyright.

I will say, as with many of my creative endeavors this was kind of a reactionary thing. I keep hearing about low-code and no-code solutions and I would submit that it doesn't take a lot of code to make something work these days.

As of this writing the code running this site weighs in at 34 kilobytes. To put that in perspective, I just took a photo with my iPhone 12 mini. No special settings; just the default settings. That picture is 2,000 kilobytes. Two pictures on my phone are over 100 times larger than the code I wrote that generates this site.

Now, to be fair, that doesn't include the supporting players, if you will. The packages I also use to help out. Those way in at a total of 35,000 kilobytes. With that said, a fair amount of that isn't actually user-facing.

34 kilobytes of code. That's receiving the request. Determining how to respond to the request. Querying the local file system, if necessary for text content and file transfers. And rendering the [.HTML](hypertext markup language) response.

I'd say that's pretty "low-code."

You can read more about the 2021 update [over here](/web-development/2021-site-in-depth).

I just realized [JAMstack](https://jamstack.com) was a thing and I find it funny from the perspective that it's kinda where we're heading. Pretty sure this was originally the idea, precursor, or concept around server-less, which I admittedly didn't pay too much attention to. I'm listening to an audiobook on the subject right now and they seem to be making some of the same arguments and points I've been making and brain-dumping here.

## And before

This is the brain-dump history. You've been warned. (All the years are rough.)

### 2019–2020

The site at that time focused on productivity coaching. And had two design iterations in that time. I've never viewed a website as being necessary to operate professionally in this world. Contrary to what it may feel like, most people on this planet don't have a website and don't participate in social media.

Some are too young. Some don't have access to the technology and infrastructure. And others simply can't be bothered.

While I had been using [Laravel](https://laravel.com) I started feeling weird about it. I wanted to be decoupled from everything. I wrote a wrapper for [.PHP](PHP: Hypertext preprocessor) itself; that's how decoupled I wanted to be. Now, I can say I'm pretty well decoupled from most of the little things.

If my host goes out of business tomorrow, I can move the files somewhere else without much issue. Granted my host has been my host for roughly 15 years at this point.

I use Git for source control and the site and content are stored on GitHub. So, I have local copies and if GitHub dies, I'll be able to move the code somewhere else.

Basically, I have catastrophic failure covered and, as of this writing, this website doesn't help feed me, so, if it goes down I probably wouldn't notice and neither would most of the planet. That's not a knock or self-deprecating humor, that's just the facts at hand.

I started thinking about micro-objects and the proxy and facade pattern as a way of decoupling myself from dependencies. I used service providers exclusively when developing with Laravel because I could put all my code there and leave all the Laravel code "over there." Then I realized my controllers didn't *need* to inherit from the Laravel base controller. I also started pealing back more and more of the "how are they doing this" layers to realize just how little of Laravel I was using for most of my work.

Stopped using databases in favor of markdown and front matter; so, not using Laravel database migrations or [Eloquent](https://laravel.com/docs/8.x/eloquent). Was using the [CommonMark](https://commonmark.thephpleague.com) package from the league of extraordinary packages for most of the HTML and have my own libraries for the rest; therefore, not using Laravel [Blade](https://laravel.com/docs/8.x/blade). Opted out of creating admin panels—just use source control services or an [.FTP](file transfer protocol) client; so, no [authentication layer](https://laravel.com/docs/8.x/authentication) needed. And I don't take payments online from a diverse audience, so, no need to integrate with multiple payment providers using something like [Cashier](https://laravel.com/docs/8.x/billing) and I don't really have the inclination to write the integration; 8fold is using Wave's invoicing mechanism and I'm happy to pay the few cents each time a transaction is made. I was barely even using the router; had three routes and they accepted *any* [.URL](uniform resource locator) and the controller processes that path.

Now, could I find excuses to *need* all that stuff? Absolutely.

As someone who enjoys solving their own problems and building stuff online is it hard to stop myself from doing it for its own sake? You (probably) have no idea.

Am I happy that my ability to upgrade my code is less dependent on other people? One hundred percent.

Still recommend Laravel to anyone. Hands down. With that said, I went back to my roots on this one:

> If you aren't going to use half of the things provided by a library or framework, you better have a damn good reason for taking it on.

### 2018

(By the way, I'm totally cheating. I'm too much of a time lord to actually remember any of these dates. But the [Wayback Machine](https://web.archive.org/web/20180330105911/https://joshbruce.com/) is pretty awesome.)

This was one of those odd moments when I thought I wanted to embrace my software developer moniker. I believe I had also become recently unemployed and threw a site together real quick. Looks like I used a modified [.USWDS](United States Web Design System).

### 2010–2017

I actually didn't own the joshbruce.com domain until 2010. And I didn't do much with it for this seven year span of time.

During this time I spent more time trying out other people's platforms than working on my own. Embracing that Web 2.0 consumer-created content life, I suppose.

I always had concerns regarding using other people's platforms. The main concern being that I didn't own the terms of service or the business operations. So, I never knew what would happen next.

Would the company decide to do some interesting things with paywalls once they became popular enough to start being exclusionary in their practices, for example?

Not that it every happened, of course. (Totally happened. Or at least felt like it from my perspective.)

Based on my socisl media posts, I'm pretty sure I  started using Laravel during this time. I appreciated Laravel a great deal. Think I even mentioned once that it felt like what my initial attempts could have turned into. In other words, it felt natural to me to use. Intuitive. However, I also acknowledge that while that may be the case for me, it's most likely not the case for everyone.

### 2007–2009

We could probably call this the Dark Ages for me.

I took my site down. I wasn't really on other platforms much.

And yet, I was freelancing full-time as a web developer and business consultant.

One exchange I'm fond of reflecting on was asking a client: Why do you think you need a website?

The response was pretty typical: everyone needs a website these days, it projects legitimacy, and similar.

My response was: You're about to hire a web developer who doesn't have a website. How did that happen? I'm willing to take your money to make the site, don't get me wrong, I need to eat; it's not what I recommend you do though. Your money would be better spent on branded t-shirts and giving them away to local shelters and doing more community outreach like that. You're a local brick-and-mortar. Selling things online is a long ways off for you. Pay me a few hundred dollars for this advice and take the other thousands of dollars and do the community outreach bit.

They paid for the site.

### Prior

Pre-college. Had some client work. And had a standard issue blog, like most internet people at the time. I developed my own CMS and was using that. It wasn't horrible for the time.

Of course, I found an iteration of the code I found somewhere and thought: Cool! I could  totally use this as the foundation for my next website iteration.

Then I opened the authentication code. And closed the file faster than someone closing the closet door when stuff starts falling off the top shelf. Reminding myself once again to always be humble.
