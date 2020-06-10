# beeline

Live app: https://dylanpyle.github.io/beeline

## What?

A tool to find solutions to the New York Times' [Spelling
Bee](https://www.nytimes.com/puzzles/spelling-bee) puzzles. The concept is
pretty simple; given 6 optional letters and 1 required one, create as many words
using only these letters as you can.

## Why?

I got pretty into these puzzles during COVID-19 quarantine. After "finishing" one,
I was always curious how many solutions I had missed — turns out, usually way
more than I expected. I assumed there would be a trivial way to solve them
automatically & efficiently, but the more I thought about it the more I realized
there probably wasn't. I haven't checked out any other solutions/solvers if they
exist, this is just my attempt to learn through building.

## How?

There are two entry points to the codebase:

- `bin/build-lookup-table` — Ingests `data/words` and compiles a data structure
  to make word lookups more efficient; writes this to `data/words.lookup.json`.
- `docs/index.html` — a web frontend for looking up words against this list.
  Compiled from the contents of `src/` and `static/`.


## Tools

- `bin/dev` - start local dev server, watching for changes
- `bin/test [filename]` - run one or all `tape` test suites
- `bin/build` - compile TS and static assets to `docs/`

## Caveats

I don't use the same word list as the NYT, because I don't have theirs!
