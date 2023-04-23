## Inspiration

The kicker is, we weren't even _supposed_ to do this project. It was the night that hacking began, and we were throwing our ideas against the wall for two hours–not fully satisfied with any one in particular. The conversation eventually drifted off to how CS majors (ourselves included) are exceptionally dense when it comes to relationships. It was through this tangent that our LAHacks project idea was born: AreTheyIntoMe.

We realized that the nerds in this competition would trust a language model more than their own gut instinct when it comes to determining whether or not they are being flirted with. And so, we decided to create a website that tells you precisely that! As it turns out, [we weren't the first to come up with this bright idea](https://web.stanford.edu/~jurafsky/pubs/ranganath2013.pdf). However, I do think we are the first to present it in such a friendly way. We are the first website to help students make a truly data-driven decision when it comes to deciding who to date.

This project was initially a holdover––something to get our hands dirty with until we could figure out something to actually do. But after messing around with [Cohere's APIs](https://cohere.com/), we found that we could get pretty compelling results from our classification task. And from then on, we just rolled with it.

## What it does

Our app is very simple. When a user opens the site, they are prompted to input their message history with their person of interest. We then help them answer a very simple question: "Are they into me?" First, we use Cohere's classification endpoint to train on a set of examples of flirtatious and non-flirtatious conversations from movies, shows, and our own DMs. We then pass it the message history from our user, and it classifies it as either 'flirtatious', or puts them in the dreaded 'friendzone'.

But people don't just want to know whether or not they're been friendzoned…they want to know _why_ they've been friendzoned. This is where Phase 2 of our project comes in. Provided with our classification results and original text data, we use OpenAIs GPT-3 to generate a reason why a user was rejected, or in some rare cases, successful. Finally, you can learn for yourself why you have _zero rizz_, all thanks to the power of LLMs.

## How we built it

We trained the classification model in Cohere and we select the dataset from movie scripts. Then, we used Next.Js, TypeScript and TailwindCSS to build out our front end. The app is mostly on a single page, and we came up with some fun animations to keep the user engaged. The backend was written in Python and Flask. We tied in Cohere's and OpenAIs APIs into our own REST API so that we could serve our front end well.

## Challenges, and Accomplishments

Many of us were new to the the technologies that were used in the project. Our mentality was to use LA Hacks as a learning opportunity–and I really feel like we delivered on that. We struggled through long chains of style classNames, through having to name types for our props, and through dealing with many, many server side errors (I don't even want to talk about it).

Aside from the technology, our project puts a lot of faith in language models to do the brunt of the heavy lifting. The quality of our app is largely based on the quality of our prompt engineering. We spent a lot of time on this, and are really proud of what we accomplished. Though it did take us a while to get there.

## What we learned

Language Models aren't the secret sauce. Simply incorporating one into your app doesn't make it magic. It's all about how you use it to the betterment of your users. Things like prompt engineering are relatively new, but this project showed us that they are important new tools for the new generation of technology products. And just like with any other tool, you have to be sensible about how you use it.

## What's next for Are They Into Me?

We are not sure how much offense people would take to having an AI inform them of their romantic attractions. Also, we are interested in generating suggestions to people about potential topics. At the same time, we want to collect more dataset, not only from movie scripts (which are mostly dramatic), to address subtle or implicit friendzone signals.
