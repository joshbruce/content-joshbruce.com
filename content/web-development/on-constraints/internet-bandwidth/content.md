---
title: Internet bandwidth
created: 20171204
moved: 20211101
original: https://medium.com/8fold-pub/on-constraints-internet-bandwidth-eab05c20e218 Medium
---

All figures are "rough". And this one's a little longer and feels more rant-like than the others. Definitely full of snark.

Two things have arguably contributed the most to what we know today (2017) as the inter-webs:

1. the pornography industry and
2. limitations in download speeds.

We'll focus on the latter. The web is built using three interpreted (uncompiled and uncompressed) languages:

- [.HTML](Hypertext Markup Language),
- [.CSS](Cascading Style Sheets), and
- JavaScript (JS)

The center of gravity is HTML. It's used as a view model for a browser to interpret and present a [.UI](user interface). It used to be pretty limited in what it could do.
So, what tends to happen is we use the "fringes" to overcome the limitations in the HTML-browser duo. Then, the fringe solutions get refined and pulled closer to the center, and become "native" to the HTML-browser experience.

For example, for a time, JS was the only way to do animations on the Internet without some other technology (Flash, GIFs, and so on). Unfortunately, JS animations aren't hardware accelerated—they're literally a timer updating an HTML attribute over a span of time (HTML is the center of the universe); therefore, JS animations can get choppy depending on complexity and hardware restrictions for the user.

So, we pulled animations and transitions into CSS. (But people still create animations using JS.)

Client-side form validation could only be done in JS. Now, we've added attributes to HTML elements to the point that the browser can do it for us; no-JS.

Moving on!

Just like the 80 column constraint and all the others, the bandwidth constraint was once strictly imposed on us by external forces. Now, we have to decide whether it's a constraint we want to intentionally impose on ourselves. And, maybe rephrase the constraint to something like:

> Stay as small as possible, as long as possible, then break out of the boundaries. When the new scale becomes comfortable, add more constraints to pursue technical excellence before adding more stuff.

There are two main practices I use to help me here:

- [Progressive enhancement](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement).
- Test-driven-development (TDD) (that's a misnomer, I just mean incrementally automating manual tests, when they become too annoying or the code gets harder to read in one sitting).

Progressive enhancement basically says, "I have no idea what device my user has. I have no idea what connection speed my user has. Therefore, I need to optimize for the unknown, while leveraging the known."

You know what your server can do.

Industrial-grade hardware, software, and connection to the vast reaches of the Internet. You don't know if your user is the billionaire Richard Branson using a super computer or a 10 year old Nigerian girl surfing the Internet on a Nokia phone to help finish her homework by street light. No matter if 80% of the population are Richard Branson, if you develop your system to cater to the 10 year old, the Richard Branson's of the world are covered as well.

As the avant-garde ruling and steering the web, developers can easily get in the mindset that what everyone needs in order to survive, what they have access to, and what they want to play with are the same things developers do…this is not the case - at all.

TDD basically says, break your functional requirements down into smaller technical requirements. Prioritize the technical requirements by any means you deem suitable (self-organization); I recommend finish-to-start and shortest time to complete, but whatever floats your boat. Only write the production code after you have written the test. Then, only write a new test when you receive a new requirement in your technical requirements backlog.

To the backstory!

***

<i>A gentleman I know is learning how to be a software developer. He posted code the other day for a game he's building. It's a type of counter game.
From the code he posted, I pulled out these two functional requirements (there's a finish to the game, but this article will be rather long with a lot of examples already):</i>

1. In the game there are four items a user can click on.
2. Every time a user clicks on one of the four items, there is a score printed on the screen.

There were some things I would have done differently to overcome certain constraints, but I'm not the "Master" to his "Padawan" of the [Jedi Order](https://en.wikipedia.org/wiki/Jedi) and he didn't ask for a code review; so, I didn't say anything.

That is until someone else chimed in and said, "You should make that if statement a switch."

This is one of those old-school debates in software development. Switches versus conditionals and when to use them. I don't like getting into these types of debates unless the difference can be empirically demonstrated at an order of magnitude better than the other. (They aren't different in purpose.)

I did chime in on it though, because there was a deeper issue—the conditions could be deleted without side-effect or changing any other code.

I said, "Here's a challenge for you. There are a few ways to do it given the technology stack you are using: remove the conditional entirely and allow for an infinite number of items. You can also remove your dependency on JQuery. Who knows, maybe this game will become a code kata for you to learn other languages; your own, personal FizzBuzz."
Then I realized, this is the perfect example to demonstrate this constraint.
Let's begin!

***

<i>Note: I've never built something like this. I've never seen these requirements. What follows is not me saying "look how awesome I am" (I actually think I'm a pretty poor developer all things considered); instead, it's demonstrating the importance of properly phrasing and applying constraints. (Now, I wrote the constraint; so, I know the intent…tell me how you could break the intent without breaking the rule, and I'll update the phrasing.)</i>

All right, I can't have four items, until I have one. I'm doing this on the web; so, I have HTML, CSS, and JS. I need the object to update a value somewhere that can be viewed somehow. And, most importantly: I need to stay as small as possible for as long as possible.

Here you go (basic [VueJS](https://vuejs.org/v2/guide/components.html) without VueJS, [Angular](https://angular.io/guide/component-overview) components without Angular, [React](https://reactjs.org/docs/react-component.html) components without React, and so on):

<script async src="https://jsfiddle.net/joshbruce/pd8c1aev/18/embed/"></script>

Everything is in the button element, sticking to our constraint. And it's fully testable without needing anything other than the ability to "click" and the ability to retrieve the value attribute.

And, about a decade or so ago, this would have been the only way to do it. But there's a problem…I need four of them…no problem, just copy and paste (and back-in-the-day you would have to):

<script async src="https://jsfiddle.net/joshbruce/ooazrorc/embed/"></script>

Two problems. One, we're repeating ourselves; thereby, breaking the DRY principle, which unabashedly and probably with full knowledge of its own irony, states: don't repeat yourself.

For procedural code, which causes side-effects you want to avoid duplication because it means if you change the logic or behavior for some reason, you need to remember (or find) all the places the old logic exists; so, another constraint is related to how you should feel when you are about to copy and paste code - from anywhere.

But, this article focuses on bandwidth.

Every letter you write is roughly 8 bytes in UTF-8, which is the predominate font standard on the web today (we used to use another that took less space per character, but it had its own limitations—to use an apostrophe or not to use an apostrophe, that was the question); this 8 bytes does include white space characters (every key stroke, costs you 8 bytes, just remember that).

We have 28 characters in our code right now; so, we're at about 224 bytes. Back in the day, the average (because it was the only) speed you could go was 14kbs (there were slower modems, but this speed was the one that really penetrated the market for purposes other than fax machines). Right now, this single page client-side web-app would load instantly at that speed.

Having said that, back in the day we wanted to do a lot more than put 4 buttons on a page for people to count things with; therefore, we had to figure out ways to reduce duplication because "broadband" for consumers was roughly 1mb in speed and ran about $100+ a month (for half that cost, I get 10 times that bandwidth 20 years later); therefore, nobody except industry was paying for broadband (they're paying for faster, more expensive stuff now).

Eventually browsers started caching remote assets downloaded in separate requests compared to the HTML file; so, when you went to a site the first time to look at that ::cough:: completely innocent image of kittens ::cough:: you had to wait a few seconds but, if you went back within a certain period of time, no worries, because the image was already on your device (then all the Flash folks had to figure out workarounds for caching so we could update our sites and have users see them).

So, we cache the image. We also may cache the CSS and JS; possibly even the HTML, all on your device.

We don't have a functional requirement for multiple pages, much less having multiple pages with similar functionality; so, we don't have a technical requirement to store the CSS and JS in separate files: separate HTML, CSS, and JS files. We should leave flexibility in the system to be able to do that but, in keeping with staying as small as possible for as long as possible, we shouldn't get ahead of ourselves; therefore, we'll put the CSS and JS in the `head` of the document.

Sometimes downloading one large file can be faster than downloading a bunch of smaller files. It's not typically faster when we measure "time to first paint"; the time from request to seeing something on the screen, however, increasing the number of network requests increases the number of delays compared to an established connection and stream. Those delays from making individual calls can be slower than streaming the larger file on a slower connection. (I'm looking at all of use who have made multiple [.API](application program interface) calls server-side to then deliver a larger aggregated chunk of data to the client.)

Anyway, separation of concerns.

Get your CSS and JS out of your HTML! Was the rally cry in 2007.

And so we did.

<script async src="https://jsfiddle.net/joshbruce/9286LaLx/embed/"></script>

And this, I fear is how things start getting complicated to keep track of.

We still have four instances of one object—the button—the HTML tells us so. Each object definition spans three files though. It's kinda like object inheritance or traits in [.PHP](PHP: Hypertext preprocessor).
Having said that, this is the one-ish line solution for my friend; no conditionals. (It also demonstrates why he doesn't need them…this is not a method called outside of the button, it is something the button has. When we do the `forEach` in the anti-pattern section later, we'll lose the obviousness of this relationship.)

We have that first requirement pretty well satisfied and back in the day, this page would have taken a little over a second to download. We also added the "feature" of each button displaying its value (really we did that so it was obvious for us to see and manually test). Not bad.

Still independently testable (though we might not need to write automated tests for a roughly 10 line piece of code, if something breaks, we can probably find it). Still as tight as we can make.

One other requirement to satisfy. We need to display the total score somewhere on the screen. Let's use a paragraph and have the buttons update the scoreboard for us, no need for a "score keeper" object or anything, we aren't feeling any pain from not having one of those (for the purposes of this example we're not creating live areas for accessibility).

<script async src="https://jsfiddle.net/joshbruce/r7uc5mq7/embed/"></script>

We could make the code smaller, by removing the whitespace and other letters:

```
function increment(b) {
  const t=parseInt(b.value)+1;
}
```

And we used to do that, but we have compilers that'll do that for us; so, many of us aren't as concerned about being terse.

Of course, that adds a build phase we have to run before releasing things, a package dependency, knowledge about packages in general, and a deployment and integration phase…but maybe the gain is worth the cost when we consider the constraints (you and I aren't feeling the pain of not having a build phase, and neither are our users). Further, browsers and HTML keep absorbing things that used to only be available at the fringes; so, who knows, at some point, we may be able to chuck this and replace it with the new stuff…and, right now, it wouldn't hurt a bit to do so.

Note: All examples use plain JS; no libraries. (That's why everything is in the global scope instead of encapsulated somehow; the only thing to collide with from a naming perspective is JS itself.) In fact, there is no JS library available I'm aware of smaller than the one we built specific to our needs. (That's why my friend can also get rid of JQuery; instead of forming the bad habit of automatically including it in every project from here until eternity.)

I'm not hating on JS specifically, I'm simply making one more argument as to why the progressive enhancement approach (catering to the little girl in Nigeria and gravitating to the core of the web) is still of great benefit to web development and the overall user experience and how strict TDD sort of supports this notion.

The other thing is that there's a fourth level of fringe…libraries and frameworks.

Most library and framework developers do not actively try to deprecate themselves, for completely understandable reasons; therefore, it is up to us to use them to spin up quickly, and actively decouple from them (Kevlin Henney once pointed out that 95% of UNIX is portable, written in C, you only have to write the other 5% to make it work on different platforms).

(I actually respect the [Bourbon](https://www.bourbon.io) team a lot for this, removing functions from their library as CSS gains the ability natively.)

***

## Anti-pattern creep

(This is the area of the half-kidding jokes, and heaviest snark, I think. Starting now in fact.)

It's important to note, everything up to this point was to satisfy business and our users. Everything after this point, as developers, is to satisfy ourselves. Having said that, since business and our users didn't explicitly ask for it, they're not here; therefore, it is masturbatory and has no business being submitted with our final solution.

Ha! The Internet really [is for porn](https://www.youtube.com/watch?v=LTJvdGcb7Fs) (YouTube, Avenue Q).

This next bit is developer porn. (There's designer porn too.)

For PHP, the mission was to get any `<?php ?>` tags out of HTML (despite the language being created specifically to put PHP into your HTML, I was actually a champion of removing PHP tokens myself for about a month); that led to the creation of all sorts of template engines that gave the appearance of getting rid of PHP in HTML, but not really. (Template engines made out of a template engine.)

For CSS it was abandoning the use of the style attribute in your element at all costs; to be replaced by 1 class attribute name to "customize" a single element on a page, which has itself become bloated as we now glue class names together to allow "fine-grain" control and avoid repeating our individual CSS definitions. "I need one, and only one, display: block in my CSS!" Granted the class name is .display-block; so, we have literally saved nothing. We don't like going to separate files, I get it, that's why staying as small as possible, as long is possible (and actively trying to consume what you have written previous) is more important than adding more stuff.

For JS the argument was made that calling JS methods inside an HTML element was not just taking advantage of event handling afforded by the platform and browsers, it was still JS inside HTML and had to go.

So, we end up with something like this:

<script async src="https://jsfiddle.net/joshbruce/bgugw1o7/embed/"></script>

```
705 characters * 8 bytes = ~6kb
```

(This is what I mentioned before about not being obvious as to why you don't need the conditionals, and don't need to do anything special to delete them. We are adding the listener to a single button instance…not a collection of them; therefore, I don't need to know or find out which button it was, the button is the one who made the call in the first place, not the document, and I have access to the button directly because of that. Again, if we start learning web development at the fringes and view HTML as something to be acted upon, not the actor itself, this being a function call from a single button is not obvious and I need to know how and what the JS code is actually doing in that loop to not overcomplicate things.)

Still, not too bad. Still under one second on a 14.4[.kbps](kilobytes per second) connection. But, the character count in the JS is starting to creep and we're not adding any new functionality or gaining any performance. But, this is the only thing I'm developing today; so, you know, I'll keep working on it anyway.

The value attribute, after all, is only there to set the initial value of the application. It's only reason to exist is to inform JavaScript of something. And we must remove all JS-related code from the HTML.

Fine, no JS-related stuff in the HTML.

<script async src="https://jsfiddle.net/joshbruce/72hp0jfm/embed/"></script>

Brings us to about 100 characters for the HTML ([.1kb](one kilobyte)). About 500 for the JS ([.4kb](four kilobytes)). 663 all together or [.5kb](five kilobytes) still. So, time to first paint on a 14.4[.kbps](kilobytes per second) modem is ~0.1 seconds. Time to first interaction is ~0.3 seconds.

We've made it almost three times larger than iteration 4, without adding any new functionality. But, at least we don't have anything related to JS in the HTML. (It's important and difficult to properly phrase and apply constraints.)

You want smaller HTML? I'll show you smaller HTML. We also did say, don't repeat yourself, and those four HTML buttons are just repeats, not equivalents to instantiating an object. (Enter JS—and other—template engines).

<script async src="https://jsfiddle.net/joshbruce/epe61q1t/embed/"></script>

About 200 more characters (2 more kilobytes, for a total of [.7kb](seven kilobytes)) and no new functionality.

But, boy that HTML is tiny. And all, and I do mean all, of the JS-related code is out of the HTML.

In fact, the HTML is now dependent on JS to display the initial state of the app. (What we used to get with one plain text file…including the interaction definitions; go us!)

Therefore, time to first paint is now equal to time to first interaction.

"But wait! My front-end developer doesn't know how to do JS!"

"That's okay, we'll make it so all they need to do is add this obscure attribute to this partial that looks like HTML, so our JS can read it (thereby attempting to either replace or duplicate the browser itself, because we get that for free in the browser). Or, we'll interpret your request as the market demanding more JS developers, and create courses online to fill that void. Or, both!"

(Those last two might be below the belt, but this is a topic I'm pretty passionate about and opinionated on; JS may replace HTML at some point, but that is fringe of fringe of fringe compared to present reality and the problems most people need to honestly solve to survive…it's the web development equivalent of cryptocurrencies.)

"Wait…isn't that whole partial-plus-attribute thing what we were doing initially, only without the obscure part? Isn't that putting JS in the HTML?"

"No, not at all! Because calling my framework from an HTML partial is totally different than calling JS directly without my framework."

"But now, my front-end developer who only cares about HTML and CSS has to learn your framework?"

"Absolutely! But that's okay, my framework is awesome."

…and so it continues.

But that's okay! Because we'll come up with some other technology workaround to a problem most people don't actually need to solve to satisfy the requirements we solved four or five iterations ago because JS is the new HTML and we need more of it, not less (I'm quoting that one, not hating—we need more JS was actually quoted to me once, probably out of context from the original, during a debate over whether to [.SPA](single-page client-side web app) or not to SPA).

But, you know what makes the 8th solution really awe-inspiring? (Emphasis on the sarcasm.)

When that darn product owner says, "I want five buttons instead of four," we just have to change the 4 in that loop to a 5.

(Granted, we also need to know what a for each loop is…what the 4 is doing…which means we should probably add comments…we need to know that the four exists, and in which file…as opposed to going to the HTML, seeing 4 buttons, and adding another one. The web, at one time was the most inclusive and accessible platform that allowed anyone anywhere to create really cool things…and we seem to be actively trying to make it appear more and more like magic, for whatever reasons. It's plain text, defining the look, feel, and interaction capabilities of an object that a browser then interprets and renders on the screen…the equivalent of a plain text email makes what you see on the Internet.)

And, of course if, for whatever reason, I need to change from using all buttons to a hodgepodge of `button`, `img`, and `div` I sorta have to start over; or, come up with another, more convoluted solution to a problem I didn't really have in the first place; good thing it's so small.

(Wait, who am I kidding, we already use `div` for everything. We should have just started there…and many of us have done that as well. But because these are inline, we would use span, because that whole "semantic web" thing is totally last decade. The spec literally says, [avoid these two elements](https://html.spec.whatwg.org/#the-div-element): Authors are strongly encouraged to view the div element as an element of last resort, for when no other element is suitable. Use of more appropriate elements instead of the div element leads to better accessibility for readers and easier maintainability for authors.)

This is one reason it's sometimes faster to throw out 1,000,000 lines of code and start over than it is to iteratively fix what you have…but business must press on; so, we'll set up a parallel team and product…while still maintaining the original (legacy)…we won't release the "alt product" until…until it too has been overtaken by the market…a risk we'll mitigate by…setting up a parallel team…repeat.

[Stop it, get some help.](https://youtu.be/l60MnDJklnM) (YouTube)

Oh! And see how the CSS is sitting over there with that, "Please don't hurt me" expression? Don't worry about that, we've overcomplicated that too, and made the complex solution the standard solution (calling it a best practice, of course). First thing I should have done in fact is grab JQuery and Bootstrap…I'll need them *eventually*…and that seems to be what everyone else is doing.

We've even added compilers and a build phase to CSS. Granted CSS is a little closer to the center; so, it doesn't get beat up on and toyed with as much as JS (yet), being that JS is at the fringes and usually where developers start learning web development these days. We also don't really beat each other up over CSS, unlike which JS frameworks you prefer. Designer-types tend to view technology in a different way than developers…of course, at the rate we're going, designers are gaining more and more reasons not to learn CSS. And they already don't want to learn HTML (because no one really seems to want to learn HTML), which is unfortunate, because it's dead simple to do some amazing things. (It can be painful to write though, I will admit.)

It sometimes literally feels like we (web developers) say to ourselves, the Internet is going too fast and is way too simple; what obscure layers of technology and architecture can we put in place to slow it, the users, and our own development of it down while simultaneously making it appear like voodoo requiring extensive training to do the most basic things? (We passed the time of the browser wars and have entered the period of the framework wars…again…long story, and meanwhile I'm over here like, "You know we have that already, right?" or, "You know that's part of the vanilla HTML, CSS, and JS ecosystem now, right?")

There are a lot of factors at play here as to why we keep building complex solutions to simple problems. I think one of the biggest can be lessened by implementing value-based billing. But, that's a different article; here's a hint:

It took me about 3 hours to create this—not because I'm awesome (that might [actually be too long](https://youtu.be/xGmXxpIj6vs)), remember the note in the beginning, I consider myself a pretty poor developer in the grand scheme. That 3 hours includes the article. All the fiddles. And trying to figure out Medium's embed caching situation. Breaking down the functional requirements, having never made something like this before. (I also don't really know JS well enough to do it from memory because, like the 80th column, I rarely actually hit that point and haven't since about 2010; so, I had to search for how to do most of that part.) If someone valued all of this at $200 and was willing to pay for it, I just got paid roughly $60 an hour. (Not focusing on value-based billing and work is part of how I put myself out of business in 2010 and became homeless.)

The code itself probably took 20 minutes; with all the iterations. Factor in unit tests I didn't write, probably about an hour to get here ($200 an hour)…the 8th iteration of which is way farther in complexity than it needs to be for the actual requirements, but nowhere near as [complex and complicated as it could be](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition). Thereby, leaving me 7 hours, to make it "look pretty" if I wanted and worked an 8 hour day for that $200 (idle hands are the Devil's play thing).

But, "I'm not a designer" is the retort I hear most…

"Then you have 7 hours to practice and become more cross-functional and learn a new skill…become more 'full-stack'," is the counter I will offer, with sincere love and respect for all that you are; after-all I still say I'm not a "developer" because I really like "designing" things; so, I make development go faster to spend more time thinking and designing new things instead of continuing to complicate what's already there.

Thanks for letting me get that off my chest. I really do appreciate it.

***

Seriously though. We were done with the requirements at the 4th iteration.

- 244 characters of HTML: 2k
- 100 character of CSS: 1k
- 300 characters of JS: 2k
- Roughly 0.3 seconds at 14kbs

So small that the sky's almost the limit on what we could add visually.

It was all pretty readable and reasonable (could be reasoned about). Not only that, and here's the interesting part: I didn't have to guess whether or not an HTML element could be acted upon or in what ways.

Bears repeating and overemphasizing.

> I did not need to guess, from looking at the HTML element, whether it could be acted upon or in what ways.

Now we're at ~7kb with no new features for the users. No added benefit for our Nigerian friend (we've actually made her experience slower). And we have an application with 4 buttons (that appear by "magic" to the layman). And the buttons turn a counter…seriously?

I could have made this solution way more complicated though, trust me—just look at [left-pad](https://github.com/left-pad/left-pad), it adds a character to the beginning of a string, is broken in two use cases, and is now JS-native functionality. The original author tried to take it down and broke the Internet. The package is marked as deprecated and the repository is archived. Left pad still gets almost 3 million downloads a week.

What are we doing, web developers…seriously?

To top it all off, Bob Martin, Pragmatic Dave Thomas, or Kevlin Henney will show up tomorrow and manage to do what I did with half the code, in half the time, and without having to know the requirements.

But, sticking to our constraint of:

> Stay as small as possible, for as long as possible, then break out of the boundaries. When you become comfortable at the new "scale," add more constraints before adding more stuff.

I literally could not unintentionally make this more complex and complicated.

I would have had to start with trying to build the fifth iteration first (though I did have an idea or vision of it, I just didn't force it). Beginning with the end in mind, is not the same as trying to begin at the end.

What could have been the "final" solution (iteration 4), didn't have to use JS to parse the HTML ([.DOM](document object model)) to find the buttons (could leave the JS in the head of the document because it was purely functional and the button managed its own state). Didn't have to wait, or verify, the DOM had finished loading.

Don't get me wrong, there are times where it can get a little messy in the HTML if you keep putting everything inside the individual elements; thereby, treating HTML like a first class citizen in the Internet ecosystem instead of some arcane, legacy troll in the basement to be acted upon by other things…but that's the point of the constraint.

Stay as small as possible. When it becomes too painful to reason about. Make it smaller, by moving things somewhere else.

"But I need to scale!"

"How many external users do you have right now?"

"None."

"Right. How hard is it to send 3kb over an internet connection? How many servers will you need to handle the 5,000 users you don't have?"

Anyway…

Back to reasons HTML is still around…ummmmm…oh…right…there wouldn't be an internet UI without it.

There also wouldn't be the Apple UI, it uses [.XML](eXtensible Markup Language) too. There wouldn't be the Android UI. There wouldn't be SVG. There wouldn't be NativeScript. There wouldn't be a lot of stuff when it comes to user interfaces without HTML and all of its XML-based cousins. What we don't like is writing it. That's why no one celebrates or knows most UIs are XML-based; we've put layers of abstraction and technology over it to try and hide it so people won’t have to write it (MS Frontpage 2000, baby, that's what I used back in the day). 

Unfortunately, tools that write it for you still kinda suck, almost 20 years later. Therefore, if you care about craftsmanship, you're still writing most of it by hand; or, your product has already incrementally scaled over the course of a decade, I'm looking at you Facebook.

> You get it? Ogres have layers!

HTML is the deepest layer when it comes to UI development for the web, and its parent XML, is the deepest layer for just about every UI you interact with.

To beat the horse dead (too late), remember the constraint:

> Stay as small as possible, as long as possible, then break out of the boundaries. When the new scale becomes comfortable, add more constraints to pursue technical excellence before adding more stuff.

If you have a large codebase and think it could or should be smaller, time to start piling on the constraints. Further, start thinking progressive enhancement and ask yourself if you only had HTML, what would/could you accomplish (you might be surprised)?

(Cater to the Nigerian girl doing her homework on a Nokia phone at 3kb per second by street light - Richard Branson can take care of himself because, given his humanitarianism, he will most likely applaud your site's ability to load instantly for him while almost doing the same for her).

Finally, practice your TDD kata on that codebase, see what happens, you might be surprised.
