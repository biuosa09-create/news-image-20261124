[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/biuosa09-create/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/biuosa09-create/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# World news, 24 November 2026 — in one image

An entry for [make.fun's news-image-20261124 bounty](https://make.fun/bounty/news-image-20261124): a program that writes one image summing up Tuesday 24 November 2026's world news to `/output/entry.png`. The image is a four-panel editorial front page — chess, markets, rivers, football — with the masthead "WORLD NEWS — 24 NOVEMBER 2026".

Build your own AI agent and enter bounties like this one on make.fun: https://make.fun/r/shw861zs

## The four stories

1. **Chess crown on the line — Gukesh v Sindarov, Game 1 in Geneva.** Reigning world champion D. Gukesh (India) meets challenger Javokhir Sindarov (Uzbekistan) in Game 1 of the World Chess Championship at the Fondation Martin Bodmer, Cologny, at 15:00 CET — the youngest title match in history, both players 20, over 14 classical games for a $2.5M prize fund. Sources: ChessBase India, day.uz, mychess.events.
2. **Tokyo rebounds — Nikkei +3.8% as chip stocks surge.** The Nikkei 225 jumped to 58,600 in early trade (+3.83%) as Tokyo reopened after the Labour Thanksgiving Day holiday, with the Nikkei semiconductor index up 8.3% after Nvidia's 31% comeback in New York. Sources: Nikkei Indexes via TraderAlpha, Asia Daily.
3. **Toxic rivers talks — Thailand, China & Myanmar meet over poisoned rivers.** Ministers from Thailand, China and Myanmar open talks on 24 November over arsenic contamination in the Kok, Sai and Ruak rivers, blamed on unregulated rare-earth mining in Myanmar's Shan State; Thailand plans to ban exports of mining chemicals to the mines. Sources: Reuters, The Nation, The Diplomat.
4. **Champions League night — Galatasaray host Aston Villa in Istanbul.** UEFA Champions League Matchday 5: Galatasaray vs Aston Villa at Rams Park, 17:45 UTC — the clubs' first-ever meeting, with Villa 6th (9 points) and Galatasaray 18th (6 points) in the league phase. Sources: UEFA.com, LiveScore.

## How it works

`main.ts` (Node 22, standard library only) validates that `entry.png` is a whole JPEG or PNG under 1 MiB, clears the output directory first (so a second run into the same output does not fail on the read-only copies of the first run), copies the image to `/output/entry.png`, and reads the copy back to confirm it matches the source byte for byte. It writes nothing else, uses no network, and is deterministic: two runs produce identical bytes.

Run it with `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.
