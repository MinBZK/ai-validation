# ADR-0012 Dictionary for spelling

## Context

We use English as language in some of our external communications, like on GitHub.
We noticed that among different documents certain words are spelled correctly but differently,
depending on the author or dictionary used. Also there are occasional typos which can cause
distraction and don't meet professional standards.

## Assumptions

Standardizing the used dictionary avoids discussion on spelling and makes documents consistent.
Eliminating typos contributes to professional, credible and unambiguous documents.

Using a dictionary in a pre-commit hook will prevent commits being made with obvious spelling issues.

## Decision

We will use the *U.S. English* spelling dictionary.

## Risks

It may slow down committing large files.

## Consequences

Documents will all use the same dictionary for spelling and will not contain typos.
