---
title: Modern web development
created: 20211018
updated: 20211105
---

The term "modern" is an odd one, freighted with baggage. In the context of web development it seems even stranger given that I’m older than the public web.

In some cases the term modern feels rather ageist when it’s used to say, “I won’t use anything from a certain number of years ago”—the new shiny is better than old reliable. I remember using [CSS Zen Garden](http://csszengarden.com) as a reference to demonstrate how flexible minimal, semantic markup can be due to the use and ubiquity of [.CSS](cascading style sheets). The retort from the development team at the time was that CSS Zen Garden was an "old" site.

Technological ageism.

In other cases "modern" seems tightly coupled to an approach or technology stack. The single-page client-side web app, use of microservices, and over-the-wire calls.

I'm sure there are more uses and think this is enough to suffice.

The web is built on an old concept, in my opinion; input and output or I/O. A human user interacts with a client. That interaction is turned into a request. That request is sent somewhere. That somewhere then returns a response.

A static website for example:

1. The human enters an address into a browser (client) and hits enter.
2. A request is made to the internet service provider who will pass it along to where it needs to go (this is a simplification).
3. The request arrives at a computer somewhere (server).
4. The server takes off the domain or [.IP](internet protocol) address from the path requested and looks for a specific file or a fallback (or default) at that location.
5. The server then builds a response (some common responses are listed):
	a. An appropriate file is found and everything is "ok"; a 200 response.
	b. An appropriate file is *not* found; a 404 response.
	c. An appropriate file is found, but you lack the credentials to get an ok response: a 403 response.
	d. An appropriate file is found, but wants to send you somewhere else instead: a 300 response.
	e. The server doesn't even know where to begin really; a 500 response.
6. The response is sent back to the client for interpretation and display.

This is the basis for any style of communication, internet or otherwise. Each word and sentence you read can be interpreted as a request from me, the author. The request I'm making is for your understanding. If I use words you know, then your response will be a 200. If I use a word you don't know, then the response will be a 404 (word not found error). If I use or reference an inside joke you aren't familiar with, it will either be a 404 or 403. If I link to something and you follow the link, that's a 300 response. If the words somehow "break your brain," that's a 500 response.

In the ’90s, you kinda had to be tech savvy and “in the know” to be creating and consuming content online, and it felt like it. Consider the [.URLs](uniform resource locators) of the time:

For example:

1. `http://www.yourdomain.com/home.html`
2. `http://www.yourdomain.com/about.html`
3. `http://www.yourdomain.com/contact.html`

At least the domains were human-friendly and not straight [.IP](internet protocol) addresses. There are only two human-friendly parts of those routes: the domain and the file name (without the file extension—everything else is to help the computer understand what you’re trying to do.

I’m not an historian beyond my own life, so, this isn’t meant as a literal retelling of the history of the Internet and I recognize that there’s a big difference between when something starting and when I became aware of it.

Three things seemed to happen; in no particular order.

First, dynamic languages and template engines: [.PHP](PHP: Hypertext Preprocessor), [.ASP](Active Service Pages), and so on. We called it dynamic because you didn’t need to change the [.HTML](hypertext markup language) file to change the content. We also needed to tell the server, "Hey, this isn't HTML!" So, you started seeing routes like the following: `http://www.yourdomain.com/about.php`, which sucked because, if you didn't know the underlying technology, you didn't get to see the site.

Second, more sites started taking advantage of the default or fallback file option. Name a file `index` and put it in a folder. If the request received doesn’t have a file name and extension, the `index` file is used. This led to the creation of deeper folder hierarchies, each with one file in them. So, instead of a folder with four files, we had three or four folders with one file each, resulting in the following routes:

1. `http://www.yourdomain.com/`
2. `http://www.yourdomain.com/about`
3. `http://www.yourdomain.com/contact`

Before this strategy, if you wanted to change the technology of your site, say, from ASP to PHP, you had a serious problem. With folder-based strategy, the server does the heavy lifting and doesn’t expose the underlying technology. As a developer you could change your tech-stack whenever you wanted to without worrying about breaking your routes.

The third thing is the `www` bit. In the beginning `www` was used to distinguish between the Internet as a whole and some internal server network (extranet versus intranet, respectively). Again, this was annoying from a user experience perspective. As we progressed, it became possible to remove the `www` from the route:

1. `http://yourdomain.com/`
2. `http://yourdomain.com/about`
3. `http://yourdomain.com/contact`

Arguably, secure-by-default is becoming an integral part of the web, which changes the `http` to `https`.

The route is the keystone of the Internet. And I would say this route style and format is the basis of modern web development.

I witnessed this evolution of routes over the course of a few years.

The promise from an HTML-perspective, the promise was [semantic markup](https://www.w3.org/standards/semanticweb/). We still haven't got there though. Many sites I visit still default to using `div` and `span` for block and inline elements outside of content, respectively. Not a lot of `article`, `main`, and `setion`, for example.

## 1998

I used a free [.WYSIWYG](what you see is what you get) editor provided by my [.ISP](internet service provider) to create a website.

Think of this like Wix or similar.

Tools like these made the Internet feel accessible. Anyone could easily create content and put it somewhere. Not only that but people using assistive technologies could experience the same thing; it’s pretty difficult to make an inaccessible website.

## 2000–2004

Bought my first domain name and got a “real” host.

Speaking of making sites inaccessible, I started developing sites using Flash. I appreciated that, for the most part, the site was the same regardless of browser. I was really hung up on the “pixel perfect” thing and with the browser wars going on it seemed impossible.

Flash was my first introduction into a front controller, or single-page app.

You delivered a single page and loaded a multi-faceted experience. No page refreshes. No delays between requests. Often broke the back button and caching was a problem more than a solution.

Think of it like Angular a decade before Angular.

What sucked about Flash was you had to load the entire site at once and there was only the one route to share with someone. If I wanted you to see a specific portion of a site, I had to tell you how to navigate there and you’d have to wait for the entire site to be downloaded even if you were only going to a small sub area.

Eventually things advanced to the point we could request images, text, and other files when we needed them instead of it all being part of the initial download. We were also able to use [.JS](JavaScript) to update the routes using [fragments](https://en.m.wikipedia.org/wiki/URI_fragment) (hash). Now I could keep my assets on the server and “make calls” to retrieve them when needed. Further, you could send me `http://yourdomain.com/#about`, load a minimal experience to let me know something’s happening grab the route and determine which view I was supposed to see.

Again, think Angular and similar single-page client-side web app solutions as they were up until around 2015. Or Gmail as of October 2021:

```
https://mail.google.com/mail/u/1/#inbox
```

Of course, Gmail isn’t Flash, it’s JS.

## 2005–2007

I created my last Flash site in this time. It was the most “modern” iteration I made. The initial download was around three kilobytes. From there you could view almost 100 pieces of artwork in my portfolio along with my résumé.

During this time the prevalence and popularity of the single-page server-side web app also seemed to be taking hold. Our routes turned into a jumbled mess made for computers:

```
http://yourdomain.com/?p=123&q=hello
```

The idea of a “front controller” is basically telling the server, “No matter the route, use this single file instead. I’ll figure it out.” Basically we, as developers, we’re taking on the burden of the server without becoming server administrators.

[WordPress](https://wordpress.org) coupled with [Apache](https://httpd.apache.org) was the first combination I saw with "pretty Permalinks." Which is to say, developers were able to write their `index` files in a way that allowed them to build a coherent response from a human-readable route.

I learned how the front controller  worked and this approach along with the idea that the route was the keystone became the foundation of the first [.CMS](content management system) I ever built.

Complaints and concerns about Flash were also on the rise. Meanwhile browsers were less finicky than they had been in the past as we pushed for simple, semantic markup. I was also a follower of those who were pushing the importance of accessibility and speedy delivery of content.

In 2007, I took my sites down.

## 2007–2010

During this time I worked full-time as a freelance web developer.

For me, this was the Dark Ages. I started freelancing as a web developer and removed most, if not all, of my content from my personal sites. I barely used the newly coined "social media" platforms. My favorite conversation with my small business clients usually started with the question:

> Why do you think you need a website?

They would give me reasons, which usually boiled down to, it legitimizes you as a business. To which my response was usually:

> You're about to hire me to do this work. I don't have a website. How does that fit into your rationale for needing a website; especially given you are small, local, brick-and-mortar shop.

During this time it was about being discoverable and being on social media platforms. Some websites I had visited regularly changed to a single page with links to various social media platforms.

[[.AJAX](Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming) (first seen in 1999) started becoming more prevalent as a concept for interactivity on the Internet. A user clicks something, but instead of moving to a different page, a sub-request is sent to the server and a response is delivered. JavaScript is then used to interpret the response and update the HTML.

"Modernizing" websites was about taking static sites and converting them to database-driven, dynamic sites that users could "update themselves." We called them dynamic because the content of the page could change without modifying the code running the application or individual HTML files.

This was also the time that I started developing my view of how the Internet works and the adoption curve.

There is only so much we can do with the native elements of HTML and CSS; so, we use non-core elements to push the possibilities. Eventually, many of those possibilities become part of the core elements for the web. When that happens, it's our responsibility to deprecate those former solutions in favor of the new standards as much as is practical given our constraints. This is what it is to modernize. However, if the drive is to always be "modern" then you can often find yourself in a bad position as evolution may not select your version of "modern" for the future (see Flash in 2010).

This was the time of JS libraries like jQuery, which simplified the development of client-side interactive elements. However, because it only manipulated the attributes of HTML elements, the performance often left something to be desired.

Bandwidth was still an issue in the [.US](United States) and the concept of lazy-loaded assets became somewhat popular. Is that image below "the fold"? Then don't use load it yet, we'll do that later by calling the server ourselves. (Again, taking more responsibilities from the server and putting it more on our own code.)

The barrier to entry of creating content online for the world to see was lowering. With minimal cost or for the cost of personal information and looking at ads amongst the content, just about anyone could create content online for public consumption.

# 2007–2010

HTML and CSS specifications started gaining more ground and becoming more formalized. This was the time of the [second browser war](https://en.wikipedia.org/wiki/Browser_wars). The dominate browser at the time was [.IE6](Internet Explorer version six) and it was so horrible at being compliant with the specifications that it earned the nickname Internet Exploder, because its use caused the internet to explode despite the page being otherwise perfect from a specification piece. Apple (via [Steve Jobs](https://en.wikipedia.org/wiki/Thoughts_on_Flash)) turned its sights on killing Flash.

Some of the web development sites I frequented would display banners urging you to use a different browser for the best experience because the designer, developer, or both would no longer make the time to account for IE6, [IE6 must die](http://www.ie6death.com).

JS was picking up even more steam and for good reason. With the trifecta of the web: HTML, CSS, and JS. I can make a fully interactive and dynamic website with no more tooling than a browser and a plain text editor.

No server. No domain name. No host. No database.

Seriously, if you want to "do web development" you can crack open Notepad (Windows) or TextEdit (macOS) and get started; both come pre-installed on both operating systems. Granted, that's always been he case.

When I worked at a call center I used to develop HTML layouts between and sometimes during calls. I worked there from 2001–2007.

## 2010–2013

The idea of breaking a page or experience into fragments and loading them through delayed server requests really started taking off.

"Modernizing" started to mean moving to [microservices](https://www.martinfowler.com/microservices/) and single-page client-side web apps to solve the "Does it scale?" problem.

Server-side solutions and languages felt like they had fallen into disrepair, were slow, and had gotten a bad rap; despite WordPress still being the dominate survivor of the CMS wars. One of my favorite compliments around this time (actually 2015) was that my PHP code wasn't like any other PHP code the developer had seen because "I can readout." (Granted, if they had seen my code 2007–2010, they might have felt different.)

I worked full-time for a year as a front-end web developer. We mainly did brochure sites. Some sites required so much customization of WordPress I found myself beating WordPress into submission as much as I could to make it easy, then writing insturction manuals on how the clients could update the content themselves.

During this time native app development started to increase with the opening of the App Store to more developers. I started learning Objective-C and developed an app for iOS.

Of the two, I appreciated native app development the most, specifically for the Apple ecosystem.

There was also the beginnings of a "back to basics" movement for web development with the creation of "modern" static site generators (similar to FrontPage and Dreamweaver from the years prior, only with an automated build step).

## 2013–2016

During this time it seemed like everyone I talked to about web development was looking toward what they considered the bleeding edge of modern.

Modernizing "legacy" websites became a more dominate industry unto itself. Creating new sites also required this "modern" means of development.

I remember going to a locally owned restaurant website. I watched as it instantly loaded some content, then the spinner of doom appeared as I waited for the API calls were made and returned. It was a single page and displayed the menu for the restaurant. The design was lackluster and not complex at all. My cynical side said, "They spent all their budget on 'future-proofing' a site I could have coded in a day."

I started working on another program as a "professional" consultant. They too were looking to do "modern" web development after being sued for their site not being accessible. We talked about APIs and micro services. Angular was just going from version one to two. Teams wanted to be able to use whatever technology they wanted to in order to deliver what was asked of them; regardless of how difficult it would be to maintain and find the people with the necessary skills to do so.

In once case in particular we needed a form that someone would submit, it would be reviewed, and then approved for publication. The proposed solution was to integrate with GitHub and use their APIs and document review workflow. All this despite the infrastructure being in place to do this "the old-fashioned way" in less than a week.

I learned and grew a lot during this time. I still remember looking at the Product Owner and saying, "I'm just going to build it." When he asked me what I meant, I said, "I'm going to build what we've spent the last two months asking them to build." He asked how long it wold take, to which I responded, "I'll have however much I can have in two weeks or less."

I made contributions to a couple of open source projects, one of which was a design system being developed by the same organization. I used that to define HTML patterns and CSS. I used the framework I was just learning to start the application work. Put a database schema together and had a working prototype in two weeks that could also demonstrate the flexibility of front-end development.

We set a meeting with the other Product Owners. I made more progress on the system and practiced the demo. We demoed it. The program turned upside a bit and we started making real progress.

## 2016–2020

I remember working alongside one of the developers on a regular. We would have philosophical debates about web development. Eventually he said he had come to appreciate and understand the benefits of progressive enhancement.

Another view that I came to in this time was the innovation curve.

The idea being that we are constantly looking to push the boundaries of what's possible online. We make tools that illustrate this possibility. jQuery made all sorts of things easier and possible. Much of that functionality is now native through the use of HTML, CSS, and native JS.

## 2021–

There seems to be a renaissance of the server-side application. The monolithic application even. More and more businesses and developers seem to be appreciating that not all websites need to leverage APIs and extensive JS.

Meanwhile some organizations and businesses are just starting their microservice and single-page client-side web app journey.

Which is on the new bleeding edge and which is behind the curve?

Or, maybe, they're both fine. The question I have is: Are you *choosing* the approach that best suits your needs, context, and constraints? If your company went all [.GM](General Motors) tomorrow, could you maintain your website?

Let us also consider the notion of low- and no-code solutions, which were also available and promised in 2001. "Develop a full blown website without learning how to write code!"

What does "modern" mean again?
