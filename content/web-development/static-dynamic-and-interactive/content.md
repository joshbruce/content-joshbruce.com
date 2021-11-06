---
title: Static, dynamic, and interactive
---

I've seen multiple components to talking about site content; here's what that looks like for me at the moment.

Static
:   The [.HTML](HyperText Markup Language) used by the browser is pre-rendered.
:   The HTML may, or may not, exist as separate files; using a form of a front-controller or other middle layer would still fall into this style so long as the pre-rendered HTML ins't altered.

Dynamic
:   The HTML for the site is generated, or manipulated, based on the specific request being made.

Multi-page
:   A request from a browser may resolve in interacting with different files per request.

Single-page
:   A request from a browser will always interact with the same file with each request.

Server-side
:   The HTML is rendered on the server, either as static files, dynamically generated strings, or a combination.

Client-side
:   The HTML is rendered or manipulated in the browser.

Database-driven
:   The content is stored in a database (hard drive, usually somewhere else) such as [MySQL](https://www.mysql.com) or similar.
:   The relationships between content data are stored in a database.

Flat-file based
:   The content is stored on disk, usually in the form of plain-text.

As of this writing, if you go to [joshbruce.com](https://joshbruce.com), you will be experiencing a single-page, server-side dynamic site that is flat-file based.

It's running on an [Apache](https://httpd.apache.org) server on some version of [macOS](https://www.apple.com/macos/). That means, I can use a [`.htaccess`](https://github.com/8fold/site-joshbruce.com/blob/c5947f597f017983380d91a01b4cec834ef9b357/public/.htaccess) file to give instructions to the server without administering the server directly. The file basically tells the server, "No matter what [.URL](Uniform Resource Locator) the user requests, use this `index.php` file instead."

That's what makes it a single-page application (or site).

The file doesn't get returned to the browser. Instead, it runs the script line-for-line (procedurally) inside the `index.php` file, which will instantiate objects as necessary to achieve the goal of returning the appropriate response; a controller—sometimes more specifically referred to as a "front controller." All of this code runs on the server until it finishes or times out, whichever comes first. Once the scripts are done running, the server shuts down the application that was started specifically for that single request.

Because the app is running entirely on the server, it's a server-side application (or site).

As of this writing, there isn't a single line of HTML anywhere in the content or [code for this site](https://github.com/8fold/site-joshbruce.com).

## Static sites

The drawback felt by having a static was that it was so hard to change the structure of pages and look and feel of the site.

Want to update the navigation? Sure thing, go through every page of the site and copy-and-paste the HTML you want updated.

Two things came about to help overcome this (in my estimation):

1. server-side scripting languages and
2. [.CSS](Cascading Style Sheets).

Scripting languages like [.PHP](PHP: Hypertext Preprocessor) allowed you to create HTML snippets and templates that could be composed into a final, rendered page and sent back to the server. Effectively turning the site into a dynamically-generated site. CSS let you redesign the site [in multiple ways](http://www.csszengarden.com) without having to change the structure of the HTML.

## Dynamic sites

The drawback to dynamic sites has always been speed.

It's a lot faster for a server to find a file and send it back to the person requesting that content. Granted this only seemed to become a problem when your site hit a certain level of users all vying for the attention of the server.

The ability to server different experiences based on different parameters was awesome though. Designers would sometimes create different CSS to cover different times of year. Keeping track of sessions made it possible for users to sign-in and customize the site. The idea of users having the ability to customize their experience was a pretty big deal for a while.

## Multi-page sites

The drawback to multi-page sites was that it was difficult to keep the site architecture and code architecture straight; depending on the number of separate files.

The benefit here though was the ability to mix-and-match experiences and server gets to be a server. I could have part of my site be static while another part was dynamic. Optimizing the experience for the content and user needs.

I'm pretty sure this is where [joshbruce.com](https://joshbruce.com) is headed. That is, of course, so long as I don't get bored and it seems appropriate.

## Single-page sites

The drawback to the single-page site is that you're kinda all in on an approach and technology stack. You also take on more of the responsibilities usually left to a the server software of your choice.

The benefit though is that it can be, theoretically, easier to keep track of. However, with the way things are going with frameworks and the like, I'm not so sure.

Of course, if we're talking about a single-page, static site, life just became dead simple. Some businesses did just that around 2005 as the social media platforms were starting to take off. The site was one page with links to other places where you could interact with the owners and their content.

## Server-side

I've been exposed to two primary arguments against a server-side application or site:

1. full page refreshes and
2. they're slow.

The slow part usually doesn't happen until your traffic outperforms the hardware you're running on. Each network call has to go through two or three steps before even reaching the server (another computer somewhere connected to the Internet and running some type of server software). The first is resolving the domain name and the second is in the [.TCP](Transmission Control Protocol), which I'm not qualified to speak much on. No matter what, these two things need to happen before the server does anything. The more requests made, the longer it will take the site to load. Each image asset, each style sheet, and so on. Basically, if it's not text and is requesting from the server, the connection can become the bottleneck. Each request can take around 100 milliseconds to connect to the server.

Then the speed is on you.

How big are the assets? Do you compress the assets before they're sent back? How consolidated can you make other parts of the experience?

## Client-side

The big drawback for me here is that accessibility begins to become challenging and a lot more work. The entire site essentially becomes one big [`aria-live`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) region. And we lose what we had for free from the server-side.

Another drawback  is you don't know how cool the machine is running your site.

Basically, we ask the user's hardware take on the role of a server. Further, we ask our code to do the same, as well as taking on the role of the browser in certain respects. If someone isn't running on good hardware, they could have a bad experience. The, "It works on my machine" problem. We don't know their connection speed; or, will need to account for it, which means more code.

Another drawback is the notion that people can turn off client-side scripting languages; though this is unusual.

Some of these drawbacks are only around if we're building a single-page experience.

For example, having a component of the page the user can click on and perform some action, like adding an item to a shopping cart, doesn't take on the responsibilities of the browser and server wholesale. Instead, the script takes on the message sending and receiving capability of the browser and may take on the rendering responsibility of the server. This would fall into the interactive piece.
