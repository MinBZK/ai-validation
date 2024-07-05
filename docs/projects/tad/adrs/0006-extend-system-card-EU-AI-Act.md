# TAD-0006 Include EU AI Act into System Card

## Context

The [European Union AI Act](https://www.europarl.europa.eu/doceo/document/TA-9-2024-0138-FNL-COR01_EN.pdf)
represents a landmark regulatory framework aimed at ensuring the safe and ethical development and deployment
of artificial intelligence technologies within the EU. It defines different policies and requirements for AI
systems based on their risk levels, from minimal to unacceptable, to mitigate potential harms. Only for
high-risk AI systems, an extended form of documentation is required, including technical documentation.
This technical documentation consists of a general description of the AI system and a more detailed,
in-depth description (including risk-management, monitoring, etc.).

To ensure that AI systems can be effectively audited, we aim to create a separate instrument called
'technical documentation for high-risk AI systems'. This will allow developers to easily extract
and auditors to readily assess all necessary information for the technical documentation.

The [RegCheck AI](https://huggingface.co/spaces/society-ethics/model-card-regulatory-check) tool published
by [Hugging Face](https://huggingface.co), checks model cards for compliance with the EU AI Act.
However, this prototype tool is research work and not a commercial or legal product. Furthermore,
because we use a modified model card setup, the performance may be less reliable.

## Assumptions

* There is no existing standard for including information on the EU AI Act for high-risk AI systems into a system card.
* We assume that the EU AI Act is about a whole AI system, that can include multiple AI models.

## Decision

* We include the general description cases of the EU AI Act for high-risk systems into the system card directly.
* We create a separate instrument including the complete technical documentation into the instrument registry.

## Risks

* In the case of a high-risk algorithm, the general information can be found in two places, the system card
itself and in the assessment card.
* The system card may become too elaborate when we include the general description fields.

## Consequences

The extended system card and proposed instrument will facilitate the documentation of information in accordance
with the EU AI Act using the TAD tool.
