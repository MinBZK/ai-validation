---
    title: ADR-0007 Commit convention
---

|     |                  |
| ---     | --- |
| Author  | Berry den Hartog |
| Created | 28-Feb-2024      |
| Status  | Accepted         |

## Context

In software development, maintaining clear and consistent commit message conventions is crucial for effective
collaboration, code review, and project management. Commit messages serve as a form of documentation, helping developers
understand the changes introduced by each commit without having to analyze the code diff extensively.

## Decision

A commit message must follow the following rules:

1. The subject line (first line) MUST not be no longer than 50 characters
2. The subject line MUST be in the imperative mood
3. A sentences MUST have Capitalized first word
4. The subject line MUST not end with a punctuation
5. The body line length SHOULD be restricted to 72 characters
6. The body MUST be separate by a blank line from the subject line if used
7. The body SHOULD be used to explain what and why, not how.
8. The body COULD end with a ticket number
9. The Subject line COULD include a ticket number in the following format

  > \<ref\>-\<ticketnumber\>: subject line

An example of a commit message:
  > Fix foo to enable bar

or

  > AB-1234: Fix foo to enable bar

or
 > Fix foo to enable bar
 >
 > This fixes the broken behavior of component abc caused by problem xyz.

If we contribute to projects not started by us we try to follow the above standard unless a specific convention is
obvious or required by the project.

## Consequences

In some repositories [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) are used. This ADR does not
follow conventional commits.
