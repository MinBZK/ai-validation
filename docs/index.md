---
hide:
  - navigation
---

# Home

Here we are documenting the processes and work of the [AI Validation Team](about/team.md) at the [Ministry of the
Interior and Kingdom Relations](https://www.government.nl/ministries/ministry-of-the-interior-and-kingdom-relations) in
The Netherlands.

We are a team of mostly engineers at a policy department.

We work on the projects with in the _Transparency of Algorithmic Decision making_ scope:

``` mermaid
graph TB
    ak[<a href='https://minbzk.github.io/Algoritmekader/'>Algoritmekader</a>] --> tad

    subgraph Transparency of Algorithmic Decision making
        tad[Algoritme Management Toolkit] --> st[<a href='/ai-validation/projects/tad/reporting-standard/'>Reporting Standard</a>]
        llm[<a href='/ai-validation/projects/llm-benchmarks/'>LLM Benchmark</a>] --> tad
    end

    tad --> ar[<a href='https://algoritmes.overheid.nl'>Algoritmeregister</a>]
```

## Contribute

Read our guide on [how to contribute](way-of-working/contributing.md).

## Contact

Our [contact details are here](about/contact.md).
