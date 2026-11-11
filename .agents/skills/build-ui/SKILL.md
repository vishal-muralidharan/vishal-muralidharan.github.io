---
name: build-ui
description: 'Use this skill whenever you build or change any UI in portfolio: screens, components, sheets, charts, copy. Covers shared components, tokens, required states, motion and accessibility.'
---
<!-- build-forge:generated v1 body=2cc45802a4a1f981c3dc62ad4b5731b0c7746a0d3a29e90b51a87cf11b3d6114 -->

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

- No UI rules recorded. Add them to the profile.

## Finish

Run `true`.
<!-- BEGIN CUSTOM: notes -->
<!-- END CUSTOM: notes -->
