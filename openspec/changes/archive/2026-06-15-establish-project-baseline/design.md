## Context

The project is a pure frontend static website for g-Pico automation. It uses standalone HTML files, local JavaScript data files, repository-local assets, and Bootstrap 4 plus helper scripts from CDNs. There is no bundler, package manifest, backend service, or framework runtime.

The current OpenSpec tree is new and contains no archived specs. This change therefore captures the current implemented behavior as the initial contract.

## Goals / Non-Goals

**Goals:**

- Capture the existing website behavior as OpenSpec baseline capabilities.
- Keep the baseline descriptive and faithful to the current implementation.
- Make future feature changes easier to propose, validate, implement, and archive.
- Preserve the current project encoding rule: `UTF-8 without BOM`.

**Non-Goals:**

- Redesign the website.
- Refactor shared navigation, inline scripts, or data files.
- Fix existing content, layout, or technical debt.
- Add build tooling, package management, or automated browser tests.

## Decisions

- Use the default OpenSpec `spec-driven` schema.
- Keep capability names broad enough to map to user-visible areas of the static site.
- Document requirements in English and ASCII to avoid introducing encoding ambiguity into repo governance files.
- Treat this change as documentation-only; application behavior remains unchanged until later feature changes.

## Risks / Trade-offs

- The baseline mirrors current behavior, including known duplication and inline scripts. That is intentional for traceability, but it means later cleanup should be proposed as separate changes.
- Some page behavior depends on CDN availability. The baseline records that assumption without changing it.
- Browser-visible Chinese content currently works with `UTF-8 without BOM`; future editors must preserve that encoding to avoid content corruption.
