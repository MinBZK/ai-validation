---
hide:
  - navigation
---

# Home

Here we are documenting the processes and work of the [AI Validation Team](about/team.md) at the [Ministry of the
Interior and Kingdom Relations](https://www.government.nl/ministries/ministry-of-the-interior-and-kingdom-relations) in
The Netherlands.

We are a team of engineers, UX designers & researchers, and product experts at a policy department.

We work on the following projects within the _Transparency of Algorithmic Decision making_ scope:

``` mermaid
graph TB
    ak[<a href='https://minbzk.github.io/Algoritmekader/'>Algoritmekader</a>] <--> amt

    subgraph amt[<a href='https://amt.prd.apps.digilab.network/$0'>Algorithm Management Toolkit</a>]
        tr[<a href='https://minbzk.github.io/task-registry'>Task Registry</a>] --> amp[<a href='https://github.com/MinBZK/amt/'>Algorithm Management Platform</a>]
        st[<a href='/ai-validation/projects/amt/reporting-standard/'>Reporting Standard</a>] --> amp
        amp <--> ai_act_decision_tree[<a href='https://ai-act-decisiontree.apps.digilab.network'>AI Act Decision Tree</a>]
        amp <--> llm[<a href='/ai-validation/projects/llm-benchmarks/'>LLM Benchmark Tooling</a>]
    end

    amt --> ar[<a href='https://algoritmes.overheid.nl/en/'>The Algorithm Register of the Dutch government</a>]
    amt --> or[Other registries]
```

## Contribute

Read our guide on [how to contribute](way-of-working/contributing.md).

## Contact

Our [contact details are here](about/contact.md).
