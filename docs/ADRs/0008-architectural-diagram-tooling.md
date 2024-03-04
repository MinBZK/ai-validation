---
    title: 0008 Architectural Diagram Tooling
    adr:
        author: Laurens Weijs
        created: 04-Mar-2024
        status:  accepted
---

## Context

To communicate our designs in a graphical manner, it is of importance to draw architectural diagrams. For this we use
tooling, that supports us in our work. We need to have something that is written so that it can be processed
by both people and machine, and we want to have version control on our diagrams.

## Decision

We will write our architectural diagrams in Markdown in the [Mermaid Syntax](https://mermaid.js.org/intro/syntax-reference.html)
to edit these diagrams one can use the various [plugins](https://mermaid.js.org/ecosystem/integrations-community.html).
For each project where it is needed, we will add the diagrams in the repository of the subject.

## Consequences

**Standardized Workflow**: By maintaining architecture as code, it will be standardized in our workflow.

**Version control on diagrams**: By using version control, we will be able to collaborate easier on the diagrams, and we
will be able to see the history of them.

**Diagrams are in .md format**: By storing our diagrams next to our code, it will be where you need it the most.
