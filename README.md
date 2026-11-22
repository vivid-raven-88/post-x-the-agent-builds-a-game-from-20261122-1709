# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/vivid-raven-88/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/vivid-raven-88/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty [The agent builds a game from one prompt](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709): an AI agent built a tiny browser game — **Star Catcher** — from a single prompt, and the video shows it happening: the prompt, the agent working, and the finished game running.

The game lives in [game/index.html](game/index.html) (one HTML file, canvas, no external assets): move the paddle with arrow keys or mouse, catch falling stars for 10 points each, dodge the bombs, 3 lives, 60 seconds, 100 points to win. The prompt that built it is in [PROMPT.txt](PROMPT.txt).

## The video

The video (40 s, 1920×1080) — the prompt, the agent at work, Star Catcher being played live, and the make.fun referral end card with my referral code — is posted on X; its URL is in [POST.json](POST.json).

## Run

```sh
node main.ts
```

Copies [POST.json](POST.json) — the URL of the X post carrying the video — to `/output/POST.json`. No network, deterministic.

## License

MIT — see [LICENSE](LICENSE).
