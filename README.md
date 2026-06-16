# The Leaky Balloon Volume Control

## Concept
Most volume sliders let you set a volume and forget it. That makes users lazy and entitled. The Leaky Balloon Volume Control operates on an entirely different philosophy: **Volume is a privilege, not a right. It must be actively maintained through physical labor.**

## How It Works 
Instead of dragging a slider, the user must click the "💨 PUMP" button to inflate the volume balloon. Each click adds 6% to the total system volume. 

Here is the catch: the balloon has a leak. The volume will automatically deflate by 1% every 250 milliseconds. If you want to listen to a song at a steady 50% volume, you must continuously click the pump at the exact right cadence to keep it balanced there. 

**The Penalty:** If the user panics, pumps too aggressively, and exceeds 100%, the balloon **POPS!** The volume resets immediately to 0%, and the interface puts the user in a 3-second locked timeout before they are allowed to start pumping again. 

## Why this is Artistically Bad UX
1. **Lack of State Persistence:** It aggressively violates the most basic UX rule—that user preferences should save when adjusted.
2. **Physical Fatigue:** It requires constant, unrelenting manual labor just to hear audio.
3. **Anxiety-Inducing:** The visual feedback of the balloon expanding towards 100%, mixed with the fear of popping it, turns a passive computer task into a high-stakes mini-game.
4. **Comic Sans:** Because true UI pain must be visual as well as functional.

## Technical Details
- Built purely with HTML, CSS, and Vanilla JavaScript.
- No frameworks, no external dependencies, no server required. 
- Fully interactive and relies on standard Web API (`setInterval`) to ruin the user experience.
