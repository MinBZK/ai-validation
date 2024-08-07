# AMT-0002 AMT Reporting Standard

## Context

The AMT Reporting Standard proposes a standardized way of capturing information of ML-models and systems.

## Assumptions

There is no existing standard of capturing all relevant information on ML-models that also includes
fairness and bias tests and regulatory assessments.

A widely used implementation for [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993) is given
by the [Hugging Face Model Card metadata specification](https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1),
which in turn is based on [Papers with Code Model Index](https://github.com/paperswithcode/model-index).
This implementation does not capture sufficient details about metrics and does not include measurements
from technical tests on bias and fairness or regulatory assessments.

## Decision

We decided to implement a custom reporting standard. Our reporting standard can be split up
into three elements.

1. System Card, containing information about a group of ML-models which accomplish a specific task.
A System Card can refer to multiple Model Cards, either a Model Card specified by the AMT Reporting
Standard, or any other model card. A System Card can refer to multiple Assessment Cards.
2. Model Card, containing information about a specific ML-model.
3. Assessment Card, containing information about a regulatory assessment.

We were heavily inspired by the Hugging Face Model Card metadata specification, which we essentially
extended to allow for:

1. More fine-grained information on performance metrics.
2. Capturing additional measurements on fairness and bias.
3. Capturing regulatory assessments.

The extension is not strict, meaning that there the AMT Reporting Standard is not a valid Hugging Face
metadata specification. The reason for this is that some fields in the Hugging Face standard are too much
intertwined with the Hugging Face ecosystem and it would not be logical for us to couple our implementation
this tightly to Hugging Face.

## Risks

The AMT Reporting Standard is not fully backwards compatible with the Hugging Face Model Card
metadata specification. If in the future the Hugging Face Model Card metadata specification becomes
a standard, we might need to revise the AMT standard.

## Consequences

The AMT Reporting Standard allows us to capture relevant information on model performance, bias and fairness
and regulatory assessments in a standardized way.
