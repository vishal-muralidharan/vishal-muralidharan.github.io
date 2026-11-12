---
name: build-ui
description: 'Use this skill whenever you build or change any UI in portfolio: screens, components, sheets, charts, copy. Covers shared components, tokens, required states, motion and accessibility.'
---
<!-- build-forge:generated v1 body=d1669bd92de337c563822ccc376361a74ef326dcd67ee44d26e5ca962631e182 -->

<!-- Generated from .agents/project-profile.yaml by project-bootstrap. Edit the profile, then re-render. -->

# How to build UI in portfolio

## Before you start

1. Read the tokens in `styles.css`. Use only those.

## Blueprint

Query codebase UI facts on demand:
`python3 .agents/skills/project-blueprints/scripts/blueprint.py show --area ui --paths <files>`

## Form controls

1. Use the themed primitive.
2. If none exists, build it first in `the first component folder`, reusing existing low level widgets, as its own commit with loading, empty and error states where they apply, then use it.
3. Never use a native browser control that a themed primitive covers.
4. Read the Form controls table with the blueprint show command for the ui area before choosing a control.

## Rules

- Use semantic HTML elements instead of generic divs with click handlers. `[a11y-semantic-html]`
- Interactive elements must display high-contrast visible focus indicators. `[a11y-visible-focus]`
- Text and interactive controls must meet WCAG AA contrast standards. `[a11y-aa-contrast]`
- Icon-only controls must provide an accessible text label. `[a11y-icon-button-labels]`
- Image tags must include an alt attribute on the same tag line. (enforced by test) `[a11y-img-has-alt]`
- Transitions and animations must respect prefers-reduced-motion media queries. `[motion-respect-reduced]`
- Smooth animations must target transform and opacity properties only. `[motion-transform-opacity-only]`
- Never use transition: all in stylesheets; target explicit CSS properties instead. (enforced by test) `[motion-no-transition-all]`

## Finish

Run `true`.
<!-- BEGIN CUSTOM: notes -->
<!-- END CUSTOM: notes -->
