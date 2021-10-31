---
title: 2021 site refresh in-depth
header: 2021 site in-depth
created: 20211031
---

I think I'm going to call this one the quick and considerate update.

The main focus of this site is text-based ramblings. The Internet has come a long way since I started. My understanding of it and [software development](/software-development) has also come a long way.

## Considerate (lots of firsts)

Most operating systems and browsers now support user preferences. To be fair, users have had the ability to create custom style sheets for a little while now (no extensions necessary):

- [Safari](https://apple.stackexchange.com/questions/176831/change-css-style-in-safari-on-all-sites).
- [Firefox](https://support.mozilla.org/en-US/questions/841578).
- [Internet Explorer](https://support.microsoft.com/en-us/topic/internet-explorer-11-crashes-when-you-use-a-custom-style-sheet-b343676b-26c8-0c2d-624e-cc61a4cea53e), though seems like it could be broken.
- Edge and Chrome would be better suited using an extension from what I could find.

Most modern browsers also have what is referred to as a reader view where the browser will take your content and apply the browser team's styles to it in a separate modal presentation.

![Screenshot of this page in reader view in Safari](/media/web-development/reader-view.png)

Users can also decide to turn styling off or go without JavaScript. Reduce animations and motion. Users may also be looking at the site on a screen the size of a watch less than a foot away or a 60 inch television from 50 meters. Could be the latest browser running on the latest hardware, or, something old on both scores.

The questions are: What experience should they be able to have, if any? What experience do we want them to have?

Believe me when I say, the hardest thing about web design and development is realizing that if there is only *one* way to properly experience what you've created, it could be problematic.

So, [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) for the win.

### No [.CSS](cascading style sheet) or [.JS](JavaScript) first

The core functionality of this site is the ability for a user to navigate and read content. Most, if not all, considerations should be made from that lens.

![Screenshot of this page without styles of JavaScript](/media/web-development/progressive-enhancement.png)

As of this writing, as long as the browser the person is using understands some [.HTML](hyptertext markup language) that's been around since version 1, they'll be able to navigate, read, and see the images.

This does raise the question of how do we determine what features we should and should not use. Otherwise known as what browsers will we actively support?

1. I will actively support browsers that simply don't have CSS or JS available to them. (Support isn't the same as catering. Support just means they'll most likely be able to see something. The Internet is insanely backward compatible. See the original [Space Jam](https://www.spacejam.com/1996/) movie website from 1996—it still works.)
2. I will neither support nor cater to any version of Internet Explorer. If a user reports the site isn't awesome on [.IE](Internet Explorer), I will kindly suggest they upgrade as it is scheduled to reach end of life around the [middle of 2022](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge) (though compatibility mode will keep it alive for a long while after).
3. I will actively push forward the adoption of various web technologies by using them: specifically, [CSS Grid](https://caniuse.com/css-grid) and [Custom Properties](https://caniuse.com/css-variables). This means, according to the Can I Use website, this site will be roughly similar on most desktop browsers updated since 2017 and most mobile browsers.

That's pretty much how I chose.

It's conjecture in that I didn't ask users, however, I don't know any of my users at the moment. My guess would be friends and family and I know we're all pretty good about updating software.

### Reduced motion first

It may be hard to tell given how much animation and transitions play in modern interface design, but some people really don't do well with all that motion.

Therefore, I want to be considerate of that. In the [style sheet](/assets/css/main.css) there is a media query that says `prefers-reduced-motion`, at least as of this writing. By default, any CSS transitions that could cause a lot of movement are placed here.

We might call this: reduced-motion-first design.

It's not because the user may not have a browser that supports this type of things, it might just be they don't do well with it and would be annoyed to the point of bailing.

### User preferences first

If a user prefers dark color schemes, I want to respect that. Agin, looking at the stylesheet, you'll see a media query that says `preferse-color-scheme`. By default the site uses a light theme and modifies what it needs to in order to go into dark mode.

[Firefox](https://www.mozilla.org/en-US/firefox/new/) has some good accessibility tools built in. And I use them to check for contrast, tab order, and other things.

It's worth noting that I could have made this a toggle a user could turn off and on. If I did that, I would still want to show up respecting their system preference. Progressively enhancing into the toggle behavior would take a fair amount of additional effort and complexity—sessions, form submission, and then JS.

So, it's in the backlog, it's marked as low value, medium effort and not worth it at the moment. If people start asking for it, the value might go up. However, until the perceived value outweighs the effort, it won't happen.

### Mobile first

The CSS is designed to define what the site should look like on mobile. Media queries will be used to modify specifically for the other screen sizes. As of this writing, there are no media queries related to screen size or resolution.

## Quick

There's a joke about football coaches who are "old school." These coaches believe the forward pass is a trick play. This is how I feel about caching. Or, at least developing a caching strategy.

### Caching strategy

The Internet would be crazy slow if it wasn't for caching, of course, but still.

In short caching is copying a file stored in one place and storing that copy somewhere closer to the person who needs it.

We can take the output of any process and store that somewhere. The fastest websites are still the old school websites (like the Space Jam one from above).

We can also ask the browser to cache things on your device for a certain period of time. If you've ever reached out to support and they told you to:

> Clear your cache and cookies.

They're trying to overcome the problems with caches. As of this writing, I don't use any strategy in my code to generate a cache. Instead, I leverage the cache controls of browsers. For example, I think the page is cached for about 10 minutes, any media is cached for a week, and any assets are cached for 30 days.

When the content is on the server closest to me, that means folks in Tennessee might get the response a bit faster than someone in Texas. However, once someone in Texas requests the content, it will most likely be cached closer to them, which means future requests from Texas will also be closer and quicker.

This means I have to be mindful of how long it takes for everything to process. On my local computer (the one I use to develop and write the content), it's about 100 milliseconds; one-tenth of one second.

So, chances are, you will not need to clear your cache to see the latest and greatest from the site. Further, performance increases made in languages and the servers managed by my web host will automatically benefit me without any overhead or consideration on my end—it just works.

### Optimized files

The screenshots above are in the [.PNG](Portable Network Graphics) format, which is pretty big compared to some other formats. I run them through an optimizer. The optimizer can reduce their size by around 50 percent or more. This makes the graphics load faster. I also plan to use some more future-oriented formats, which are designed more for the Internet and smaller file sizes.

My server will also compress certain file types before they are transferred to you. Because my host handles this for me it means there's no additional overhead for me.

One of these files should be the CSS. Since switching to using CSS properties almost exclusively to define my "design system," I've notice a slight improvement when the CSS is compressed. Once you receive the compressed file, it will be uncompressed and displayed for you. This all happens automatically.

Because I use the libraries I do for generating the HTML, it's actually minified, which is to say stripped of extra whitespace that's used to make it easier to read. For a non-HTML example, look at the [minified version](/assets/css/main.min.css) of the CSS served with this page; as opposed to the [non-minified version](/assets/css/main.css) I've been linking to up to this point. If you look at the raw HTML source for this page, you'll notice it's mostly one continuous line of text.

### Let the browser and server be a browser and server

That's a long headline.

For [modern web development](/web-development/modern-web-development) we have a tendency to get in the way of or replace the capabilities we get for free from the browser-server relationship. Instead of clicking a link and the browser responding, we jump in the way using JS to see if we need to do something before handing it to the browser to then do what it would have done anyway. Before delivering a response to a request on the server-side, we jump in the way and reroute things (guilty of both).

We want to minimize how much we use our code to replace or intercede with the browser and server.

Basically, our modern web development code is a helicopter parent on the defensive. Are you sure want to click that link and navigate away from this page? Here, let me check first.

When client-side application development started gaining steam (and even back in the Flash days), the mantra was: Don't break the back button.

This was because developers were using JS to interpret address (route or header) requests and not respecting the browser page stack. You navigate a few times, then hit the browser back button and lose all the progress up to that point. Did that cause these developers to stop breaking the back?

For some, sure, but others just created their own duplication of the browser navigation (back, forward, and even refresh)…thereby replacing and taking on the burden of writing a browser as well as a web application.

## Shareable

No, this doesn't mean integrations with social media (being able to like or love something on my site, which posts to your social media for you). Instead, we're talking about human-readable [.URLs](uniform resource locators) and inline anchor tags.

Safari has a [sharing capability](https://support.apple.com/guide/safari/share-or-post-webpages-sfri40722/mac) built in. Click the button, send the URL via email, message, or something else entirely. For browsers that don't have this capability, you can still copy-and-paste.

When someone receives it, they should be able to read it and have a pretty fair idea of what they're going to get.

This drive to make things shareable means the information architecture of the site needs to be pretty tight.

My general rule for the site is that content should not be more than 3 levels deep.

The hash signs (#) are links directly to that header. If you click it and share that URL, the person you're sending it too will come straight to that headline, if it's available.

## Content is still king

I appreciate the design department at Apple. (I also appreciate other departments, but we'll stick with marketing and design.) When you go to their website, there is no question what they want you to do and look at: the products.

Press releases? That's like a full page scroll and two clicks away. If you didn't know where to look, you wouldn't see it.

Investor relations? Same.

For this site, it's the articles. Period.

The menu isn't even at the top of the page.

Navigation, copyright and other legal, along with support and social (coming soon) are all secondary to the content you're reading, the related and linked to content, and the external resources and references.

The design reenforces this; in my opinion.

