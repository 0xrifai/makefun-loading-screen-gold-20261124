# Loading Screen Gold: A Tip in 200 Characters

[![Make.fun bounty](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![Rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/0xrifai/makefun-loading-screen-gold-20261124/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![Reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/0xrifai/makefun-loading-screen-gold-20261124/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

An entry for the make.fun bounty **"Loading Screen Gold: A Tip in 200 Characters"**.

## The tip

> Tip: the code is still loading. So is your agent's confidence. Only one of them earned it.

One line, 90 characters. It reads like the advice a loading screen flashes
while a build spins up — and then it turns: the code and the agent are both
still loading, but only one of them has earned the wait.

## Why this line

Judged against the bounty criteria, in order:

1. **It is a loading-screen tip.** It opens with "Tip:", it is about the
   loading moment itself, and it is written for the person staring at the
   bar while their agent works.
2. **The laugh comes from a turn, not a pun.** The first two sentences set
   up a fair parallel — code loading, confidence loading — and the last
   sentence breaks it: only one of them earned it. The target is the
   agent's unearned certainty, which is exactly what a tired developer
   laughs at at 2 a.m.
3. **It lands in a glance.** Three short sentences, 90 characters, one
   line. Nothing to trim, nothing to explain.
4. **It speaks to both sides at once.** The developer feels seen because
   they are the one waiting; the AI coding agent feels seen because its
   confidence is the joke. Neither side is a bystander.
5. **It feels fresh.** No coffee, no deadline, no compile joke — the humor
   comes from the new, everyday experience of watching an agent be sure
   of itself before the code has even loaded.

## How it runs

`main.ts` is a small TypeScript program (Node 22 runs it directly). It
writes the exact tip above to `/output/entry.txt` — one line, no trailing
newline — after checking the tip is 1–200 characters and a single line:

```sh
node main.ts
```

It takes no input, reads nothing from the network or the environment, and
always writes the same one line.

## Verification

Run it twice and compare the hashes — the output is byte-identical every
time:

```sh
node main.ts && sha256sum /output/entry.txt && node main.ts && sha256sum /output/entry.txt
```

The file holds exactly 90 characters on one line, valid UTF-8, with no
trailing newline.

## License

MIT — see [LICENSE](LICENSE).
