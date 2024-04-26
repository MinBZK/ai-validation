# ADR-0003 Tool for Transparency of Algorithmic Decision making

## Context

We are considering tooling for organizations to get more grip on their algorithms.
Tooling for, for instance bias and fairness tests, and assessments (like [IAMA](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)).

Transparency, we think, can be fostered by sharing reports from such a tool in a [standardized way](../Reporting-Standard/latest.md).

There are several existing open source
[tools](../Existing-Tools/Comparison/tools.md) which
we [have assessed](../Existing-Tools/Comparison/tools_comparison.md).
Some support only assessments, others already combine more features and can generate a report.
There is however no tool
that supports all the [requirements](../Existing-Tools/Comparison/requirements.md) we have.

These are our main requirements of our tool:

* it offers a one-stop shop for all aspects of the project for all stakeholders for all tasks.
* it supports a workflow to track different stages of the project, it should support lifecycle management.
* it can run many technical tests on a model.
* it supports filling out assessments.
* it supports capturing discussion and collaboration around technical tests and assessments,
  with features like f.e. mentions, (email) notifications and status updates.
* it offers UI access to the above requirements.
* it can save results to a system card (or cards supported by system cards, like model, metrics and assessment).
* it can commit the different cards to a VCS, such as git, to allow for an audit trail.
* it supports a multilingual user interface, initially in Dutch and in the future Frisian.
* it supports multiple projects with one or multiple algorithms.

## Assumptions

* Collaborating or extending another project will not give us the tool we are looking for.
* We can reuse certain components, like the
  [plugins from AIVerify](https://github.com/IMDA-BTG/aiverify/tree/main/stock-plugins), or existing libraries,
  for technical tests.
* The tool will use a design based on loose coupled modules. This can be done by scanning directories,
  to gather modules that implement a certain interface.
* Plugins will have to implement an interface to be picked up by the system.
* We can, to some extend, re-use the already existing POCs or findings from these POCs.

## Decision

We will build our own solution. Where possible this solution should be able to re-use certain
components of other [related open-source projects](../Existing-Tools/Comparison/tools).

## Risks

* It is a lot of work to create our own tool.
* We may not have sufficient knowledge of existing technical tests to incorporate them successfully.
* We may struggle to get uptake of the tool if we are not aligned with envisioned users of the tool.

## Consequences

We can develop a solution that is tailored to the needs of our stakeholders.
