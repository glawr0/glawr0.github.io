---
author: 'Ged Lawrenson'
pubDate: 2024-08-01
title: 'First Impressions of Astro'
---

## Intro

After seeing Mark McHale's talk at GlasgowJS on the Astro framework I decided to revive my long dormant personal site. I'd like a place to write, even if I'm just shouting into the ether.

The last frontend I built from scratch was for my Honours project, which used Flask and Bootstrap. That was a _while_ ago. More recently I did some TypeScript tweaks to a proprietry UI framework.

I'm really not a fan of front-end stuff, but I'd like to get more comfortable with this type of work. I think being able to build demos or Proof of Concepts from back to front is an invaluable skill for any engineer to have.

## Goals

- Build something useful.
- Learn some modern Javascript.
- Investigate the state of AI code assistants.
- Have fun!

## AntiGoals

- Take forever to ship -- Better is better than Best 🤓
- Keeping things to myself -- I want to share the site, even if it's still a work in progress!

## Astro

I won't try and do a sales pitch here - but from a user perspective the site is _snappy_.

Astro takes a server-first approach and minimizes the amount of JS that is tranferred over to the client. It's
`Island Architecture` allows for dynamic content to be updated within a static site. This leads to the site being _fast_.

The developer experience is also excellent. The CLI allows you to setup a demo site within minutes and the documentation was easy to follow.

## JavaScript

Admittedly I've not had to write a huge amount of pure JS yet - the site is still pretty basic. However the IDE language support is fantastic, even better than Python. I can see the amount of effort the community have put in to make using the language enjoyable.

## AI

In the past I used GPT-4 via the browser, often treating it like a unified search engine. This time around I wanted to more deeply integrate AI into my development environment.

I chose to use Claude 3.5 Sonnet as my assistant. One extension later and I had Claude hooked into VSCode. A simple tip - be sure to enable `Always allow read-only operations` in the extension settings to really super-charge your experience. This setting basically allows Claude to read your code without needing to allow explicit permission for every file.

The experience was pretty interesting! I mostly offloaded the layout related work to Claude. I'm terrible at UI design, so being able to describe the outcome and review each step by step change was excellent.

As always with LLMs, they can sometimes lead you down the wrong path. I found this harder to spot on this particular project because of my unfamiliarity with front-end development.

## Deployment

The deployment experience with Astro has been pretty fun. There's a whole array of different options available that are well documented. I went for _GitHub Pages_ primarily because I've used it in the past.

The Astro team have done a great job of providing easy to use documentation and samples. I had the deployment working within minutes.

## What's Next

I'd like to build some interactive features on the site - particularly pulling in Strava data from their API.

On the UI front, I need to work on how the markdown blogposts get formatted. I don't want to pollute the raw markdown files, but I don't like the current style. Something to experiment on.

This project hasn't sold me on doing front-end engineering, but I'd still like to develop these skills. It's signfiicantly more easy now that LLM's have taken over the world.

I'll continue to try and blog about what I'm learning.
