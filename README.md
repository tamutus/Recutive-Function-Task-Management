# Lavra's Life Management Suite

>Aspiring to be 
>>possible to use 
>>>even to those who've 
>>>>never programmed before.
>>>>>Mainly those with ADHD+//autism

## What you're looking at

Life  management suite. My goal is for it to be a streamlined way of defining your priorities, values, tasks, types of energy, skills, how they interact. etc.

App then gives an optimal schedule, with mode for focusing the immediate thing(s) with little distraction. 

App should ask questions that help become more certain about sort order. Each particular set of circumstances = one filter. Trends are perpendicular to filters, which track one variable over time.

Personal and Team use is the intended use case for this. [Magnova](https://magnova.space) is suited for projects that involve the community, and I will try to connect this app with that one within the year.

## How to use

### Clone this repository

Github lets you clone repositories. Do it. Then run

```
npm i
```

### Make .env

If you aren't a web dev or don't know what an "environment variable" is, basically if you want to run a project of somebody else's you have to make your own file titled literally just `.env`

Kinda looks like you're saving a blank file extension. WEird. But it lets you set environment variables. It goes like this:

```
WRITING_AN_ENVIRONMENT_VARIABLE = "Writing one line like this.
```

Left side is variable, right side is value. Wrap in quotes if there are spaces in a string (text value)."

You're going to need a few environment variables. Once I know which, I'll add them here.
 
### json-server 

To run this project locally, you can go all out and make yourself a postgresql database and change the . or you could also install json-server locally. benefit from prisma-json-server-generator's output, you can globally install json-server.

```npm install -g json-server```

## Dreams

I would love for it to be sync-able to Magnova. The way this would look is for the personal task app to I would want logic for merging tasks. OH! Have a page where a user of a certain moderation role could look at a diff and choose which parts to keep. Would be an interesting challenge.

I would love for it to be sync-able to Communiivate.

I would love for it to be sync-able to LifeNav.

I would love for it to be sync-able to Habitica.





## Initialized with the T3Svelte Starter Project

*SvelteKit

*Typescript

*tRPC

*Prisma

*Tailwind CSS (@forms | @heroicons | @headlessui configured for Tailwind UI)

*Prettier + Prettier Tailwind + ESLint Preconfigured

