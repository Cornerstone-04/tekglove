# Animation implementation plans

| Plan | Title | Severity | Status |
| --- | --- | --- | --- |
| 001 | Make the splash brief and session-aware | HIGH | DONE |
| 002 | Add a complete reduced-motion policy | HIGH | DONE |
| 003 | Reduce ambient animation to one signature moment | HIGH | DONE |
| 004 | Remove layout-driven animation work | MEDIUM | DONE |
| 005 | Tighten navigation and press feedback | MEDIUM | DONE |
| 006 | Simplify repetitive scroll reveals | MEDIUM | DONE |

## Recommended execution order

1. Plan 001 defines the splash lifecycle.
2. Plan 002 establishes reduced-motion behavior used by plans 003 and 004.
3. Plan 003 removes redundant ambient loops.
4. Plan 004 addresses animation-frame and layout work.
5. Plan 005 adds shared easing and interface feedback.
6. Plan 006 simplifies page-level staging using the shared easing from plan 005.

Plans 002 and 004 both touch the counter and splash. Execute them sequentially and preserve the earlier plan's changes.
