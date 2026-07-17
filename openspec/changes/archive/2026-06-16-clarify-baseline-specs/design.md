## Context

The first OpenSpec baseline has been archived and now lives under `openspec/specs/`. A review found that the baseline is structurally valid, but a few requirements are phrased too loosely for future verification.

## Goals / Non-Goals

**Goals:**

- Improve clarity and testability of the existing baseline specs.
- Keep the change limited to OpenSpec documentation.
- Preserve the current implemented behavior exactly as-is.

**Non-Goals:**

- No website code changes.
- No redesign or refactor.
- No new user-facing capability.
- No change to the UTF-8 without BOM project encoding rule.

## Decisions

- Use `MODIFIED Requirements` where existing baseline text overstates or under-specifies behavior.
- Use `ADDED Requirements` for new clarification that does not replace an existing requirement.
- Keep the deltas small enough to review in one pass.

## Risks / Trade-offs

- The specs intentionally capture current behavior, including some technical debt such as duplicated navigation and a disabled donation form.
- Clarifying current limitations may look less polished than a marketing description, but it gives future changes a cleaner starting point.
