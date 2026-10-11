# React Challenges

![tests](https://github.com/BBSISK/react-challenges/actions/workflows/tests.yml/badge.svg)

A graded ladder of 40 React + TypeScript challenges, from first components to small capstone apps. I'm a post-primary maths teacher retraining as a software developer (HDip in Software Development, Maynooth University, 2026–27). This repo is a public record of my progress in React. Its sister repo is [leetcode-java](https://github.com/BBSISK/leetcode-java).

## How I work

- **I write every component and hook myself.** I use Claude as a coach: it picks the next challenge, writes the test file in advance, gives hints only when I ask for one, and reviews my code once the tests pass.
- **Tests come first.** Each challenge comes with a Vitest + React Testing Library test file, and I work until it passes.
- Every component starts with a header comment covering the concept, my approach and what I learned.
- GitHub Actions runs the type-checker and the full test suite on every push.

**Stack:** React 19 · TypeScript · Vite · Vitest · React Testing Library · GitHub Actions

## Run it

```bash
npm install
npm test                                   # all challenges
npx vitest run src/challenges/L1-components-props   # one level
npm run test:watch                         # re-run on save
npm run dev                                # playground in the browser
```

## Progress

| Level | Topic | Solved |
|---|---|---|
| L1 | Components & props | 0 / 5 |
| L2 | State | 0 / 5 |
| L3 | Events & forms | 0 / 4 |
| L4 | Lists & derived state | 0 / 4 |
| L5 | Effects | 0 / 4 |
| L6 | Custom hooks | 0 / 4 |
| L7 | Data fetching | 0 / 3 |
| L8 | Context & reducers | 0 / 3 |
| L9 | Refs, accessibility & performance | 0 / 4 |
| L10 | Capstones | 0 / 4 |
| | **Total** | **0 / 40** |

## Solved

| # | Challenge | Level | Key idea | Date |
|---|---|---|---|---|
| | | | | |
