# TAD Reporting Standard

This document describes the Transparancy of Algorithmic Decision Making (TAD) reporting standard. Assessing
fairness and bias in Machine Learning models can be done through various technical tests, but also by answering
regulatory assessments. The goal of this reporting standard is to capture these technical tests and assessments
in a standardised way.

## Introduction

Inspired by [Papers with Code Model Index](https://github.com/paperswithcode/model-index) and
[Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993) this standard almost [^1] [^2] [^3] [^4]
extends the [Hugging Face model card metadata specification](https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1)
to allow for:

1. More finegrained information on performance metrics, by extending the `metrics_field` from the Hugging
Face metadata specification.
2. Capturing additional *measurements* on fairness and bias, which can be partitioned into bar plot like
measurements (such as mean absolute SHAP values) and graph plot like measurements (such as partial dependence). This is achieved
by defining an new field `measurements`.
3. Capturing *assessments* (such as [IAMA](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
and [ALTAI](https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment)).
This is achieved by defining a new field `assessments`.

This standard does not contain all fields present in the Hugging Face metadata specification. The fields that
are optional in the HuggingFace specification AND are specific to the HugginFace interface are ommited.

Following Hugging Face, this proposed standard will be written in yaml.

Another difference is that we devide our implementation into two parts.

1. `systems card`, containing information about a group of ML-models which accomplish a specific task.
2. `model card`, containing information about a specific ML-model.

## Intended usage

The reporting standard defined in this document is intented to be given as a preamble in a README, similar to
the Hugging Face metadata.

## Specification of the standard

The standard will be written in yaml. An example yaml is given in the next section. The standard contains the
following information.

### `system_card`

A `system_card` contains the following information.

1. `upl` (OPTIONAL, string). If this algorithm is part of a product offered by the Dutch Government,
    it should contain a URI from the [Uniform Product List](https://standaarden.overheid.nl/owms/oquery/UPL-actueel.plain).
2. `owners` (list). There can be multiple owners. For each owner the following fields are present.

    1. `organization` (REQUIRED, string). Name of the organization that owns the model.
    2. `oin` (OPTIONAL, string). If applicable the [Organisatie-identificatienummer (OIN)](https://www.logius.nl/domeinen/toegang/organisatie-identificatienummer/wat-is-het).
    3. `name` (OPTIONAL, string). Name of a contact person within the organisation.
    4. `email` (OPTIONAL, string). Email address of the contact person or organization.
    5. `role` (OPTIONAL, string). Role of the contact person. This field should only be set when the `name` field
    is set.

#### 2. Models

1. `models` (OPTIONAL, list[string]). A URI to a yaml file containg a model card. This model card can for example be a model
card described in the next section or a model card from Hugging Face. There can be multiple model cards, meaning multiple
models are used.

#### 3. Assessments

There can be multiple assessments. For each assessment the following fields are present:

1. `name` (REQUIRED). The name of the assessment.
2. `date` (REQUIRED). The date at which the assessment is completed.
3. `contents`. There can be multiple items in contents. For each item the following fields are present:

    1. `question` (REQUIRED). A question.
    2. `answer` (REQUIRED). An answer.
    3. `remarks` (OPTIONAL). A field to put relevant discussion remarks in.
    4. `authors`. There can be multiple names. For each name the following field is present.
        1. `name` (OPTIONAL). The name of the author of the question.
    5. `timestamp` (OPTIONAL). A timestamp of the date and time of the answer.

### `model_card`

A `model_card` contains the following information.

1. `algorithm-registers` (OPTIONAL, list[string]). If this algorithm is registered in an algorithm register,
this field should contain a URI to the corresponding record in the register. There can be multiple registers.
A URI could look like `https://huggingface.co/org/modelid` or `https://algoritmes.overheid.nl/nl/algoritme/modelid`.
2. `language` (OPTIONAL, list[string]). If relevant, the natural languages the model supports in [ISO 639](https://www.iso.org/iso-639-language-code).
    There can be multiple languages.
3. `license`(REQUIRED, string). Any license from the [open source license list](https://opensource.org/license)
[^1]. If the license is NOT present in the license list this field must be set to 'other' and the following
two fields will be REQUIRED.

    1. `license_name` (string). An id for the license.
    2. `license_link` (string). A link to a file of that name inside the repo, or a URL to a remote file containing the license
    contents.

4. `library_name` (OPTIONAL, string). Any library from the [library list](https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/model-libraries.ts).
    If the library is NOT present in the library list, the following fields CAN be set.
    1. `library` (OPTIONAL, string). If a library is used that is not in the above list, you can provide
    the name of the library used here.
    2. `library_link` (OPTIONAL, string). If a libary is used that is not in the above list, you can
    provide a URI to the repo of the library used here.
5. `tags` (OPTIONAL, list[string]). Tags with keywords to describe the project. There can be multiple tags.

### 2. `model_index`

There can be multiple models. For each model the following fields are present.

1. `name` (REQUIRED, string). The name of the model.
2. `model` (REQUIRED, string). A URI pointing to a repository containing the model file.
3. `artifacts` (OPTIONAL, list[string]). A list of URI's where each URI refers to a relevant model
artifact, that cannot be captured by any other field, but are relevant to model.
4. `parameters` (list). There can be multiple parameters. For each parameter the following fields are present.

    1. `name` (REQUIRED, string). The name of the parameter, for example "epochs".
    2. `dtype` (OPTIONAL, string). The datatype of the parameter, for example "int".
    3. `value` (OPTIONAL, string). The value of the parameter, for example 100.

5. `results` (list). There can be multiple results. For each result the following fields are present.

    1. `task` (list).

        1. `task_type` (REQUIRED, string). The task of the model, for example "object-classifcation".
        2. `task_name` (OPTIONAL, string). A pretty name fo the model taks, for example "Object Classification".

    2. `dataset` (list). There can be multiple results [^2]. For each result the following fields are present.

        1. `type` (REQUIRED, string). The type of the dataset, can be a dataset id from [HuggingFace datasets](https://hf.co/datasets)
        or any other link to a repository containing the dataset[^3], for example "common_voice".
        2. `name` (REQUIRED, string). Name pretty name for the dataset, for example "Common Voice (French)".
        3. `split` (OPTIONAL, string). The split of the dataset, for example "train".
        4. `features` (OPTIONAL, list[string]). List of feature names.
        5. `revision` (OPTIONAL, string). Version of the dataset, for example 5503434ddd753f426f4b38109466949a1217c2bb.

    3. `metrics` (list). There can be multiple metrics. For each metric the following fields are present.

        1. `type` (REQUIRED, string). A metric-id from [Hugging Face metrics](https://hf.co//metrics)[^4], for example accuracy.
        2. `name` (REQUIRED, string). A descriptive name of the metric. For example "false positive rate" is
        not a descriptive name, but "training false positive rate w.r.t class x" is.
        3. `dtype` (REQUIRED, string). The data type of the metric, for example `float`.
        4. `value` (REQUIRED, float). The value of the metric.
        5. `class` (OPTIONAL, string/int/float/bool). Some metrics (such as false positive rate for multiclass classification)
        depend on a specific output class. In this field the output class can be specified. It must only be set for metrics
        for which it makes sense.
        6. `labels` (list). Metrics can be computed for example on subgroups of specific features.
        For example one can compute the accuracy for examples where the feature "gender" is set to "male".
        There can be multiple subgroups, which means that the metric is computed on the intersection of those subgroups.
        For each subgroup the following fields are present.

            1. `name` (OPTIONAL, string). The name of the feature. For example: "gender".
            2. `type` (OPTIONAL, string). The datatype of the feature, for example `float`. If `name` is set, this field
            must be set as well.
            3. `value` (OPTIONAL, string). The value of the feature. If `name` is set, this field must be set as wel.
            For example: "male".

    4. `measurements`.

        1. `bar_plots` (list). The purpose of this field is to capute bar plot like measurements, for example SHAP values.
        There can be multiple bar plots. For each bar plot the following fields are present.

            1. `type` (REQUIRED, string). The type of bar plot, for example "SHAP".
            2. `name` (OPTIONAL, string). A pretty name for the plot, for example "Mean Absolute SHAP Values".
            3. `results` (list). The contents of the bar plot. A result represents a bar. There can be mutiple results.
            For each result the following fields are present.
                1. `name` (REQUIRED, string). The name of bar.
                2. `value` (REQUIRED, float). The value of the corresponding bar.

        2. `graph_plots` (list). The purpose of this field is to capture graph plot like measurements, such as partial dependence
        plots.
        There can be multiple graph plots. For each graph plot the following fields are present.

            1. `type` (REQUIRED, string). The type of the graph plot, for example "partial_dependence".
            2. `name` (OPTONAL, string). A pretty name of the graph, for example "Partial Dependence Plot".
            3. `results` (list). Results contains the graph plot data. Each graph can depend on a specific output
            class and feature. There can be multiple results. For each result the following fields are present.
                1. `class` (OPTIONAL, string/int/float/bool). The output class name that the graph corresponds to.
                This field is not always present.
                2. `feature` (REQUIRED, string). The feature the graph corresponds to. This is required, since all
                relevant graphs are dependend on features.
                3. `data` (list)
                    1. `x_value` (REQUIRED, float). The $x$-value of the graph.
                    2. `y_value` (REQUIRED, float). The $y$-value of the graph.

## Example

### System Card

```yaml
upl: {upl_uri}                                          # Optional. Example: https://standaarden.overheid.nl/owms/terms/AangifteVertrekBuitenland
owners:
- organization: {organization_name}                     # Required. Example: BZK
  oin: {oin}                                            # Optional. Example: 00000001003214345000
  name: {owner_name}                                    # Optional. Example: John Doe
  email: {owner_email}                                  # Optional. Example: johndoe@email.com
  role: {owner_role}                                    # Optional. Example: Data Scientist.

# Model Cards
models:
 - !include {model_card_uri}                            # Optional. Example: model_card.yaml.

# Assessments like IAMA.
assessments:
- name: {assessment_name}                               # Required. Example: IAMA.
  date: {assessment_date}                               # Required. Example: 25-03-2025.
  contents:
    - question: {question_text}                         # Required. Example: "Question 1: ...".
      answer: {answer_text}                             # Required. Example: "Answer: ...".
      remarks: {remarks_text}                           # Optional. Example: "Remarks: ...".
      authors:                                          # Optional. Example: "['John', 'Peter']".
        - name: {author_name}
      timestamp: {timestamp}                            # Optional. Example: 1711630721.
```

### Model Card

```yaml
algorithm-registers:
  - {id}                                                # Optional. Example: https://algoritmes.overheid.nl/nl/algoritme/45991543.
language:
  - {lang_0}                                            # Optional. Example nl.
license: {licence}                                      # Required. Example: Apache-2.0 or any license SPDX ID from https://opensource.org/license or "other".
license_name: {licence_name}                            # Required. if license = other, specify an id for the licence. Example: 'my-license-1.0'
license_link: {license_link}                            # Required. if license = other, specify "LICENSE" or "LICENSE.md" to link to a file of that name inside the repo, or a URL to a remote file.
library_name: {library_name}                            # Optional. Example: keras or any library from https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/model-libraries.ts.
library: {library_name}                                 # Optional. Example: mylibrary
library_link: {library_link}                            # Optional. URI to user provided library.
tags:
- {tag_0}                                               # Optional. Example: audio
- {tag_1}                                               # Optional. Example: automatic-speech-recognition
owners:
- organization: {organization_name}                     # Required. Example: BZK
  oin: {oin}                                            # Optional. Example: 00000001003214345000
  name: {owner_name}                                    # Optional. Example: John Doe
  email: {owner_email}                                  # Optional. Example: johndoe@email.com
  role: {owner_role}                                    # Optional. Example: Data Scientist.

model-index:
- name: {model_id}                                      # Required. Example: CatClassifier.
  model: {model_uri}                                    # Required. URI to a repository containing the model file.
  artifacs:
  - {model_artifact}                                    # Optional. URI to relevant model artifacts, if applicable.
  parameters:
  - name: {parameter_name}                              # Optional. Example: "epochs".
    dtype: {parameter_dtype}                            # Optional. Example "int".
    value: {parameter_value}                            # Optional. Example 100.
  results:
  - task:
      type: {task_type}                                 # Required. Example: image-classification.
      name: {task_name}                                 # Optional. Example: Image Classification.
    dataset:
      - type: {dataset_type}                            # Required. Example: common_voice. Link to a repository containing the dataset
        name: {dataset_name}                            # Required. Example: "Common Voice (French)". A pretty name for the dataset.
        split: {split}                                  # Optional. Example "train".
        features:
         - {feature_name}                               # Optional. Example: "gender".
        revision: {dataset_version}                     # Optional. Example: 5503434ddd753f426f4b38109466949a1217c2bb
    metrics:
    - type: {metric_type}                               # Required. Example: false-positive-rate. Use metric id from https://hf.co/metrics.
      name: {metric_name}                               # Required. Example: "FPR wrt class 0 restricted to feature gender:0 and age:21".
      dtype: {metric_dtype}                             # Required. Example: "float".
      value: {metric_value}                             # Required. Example: 0.75.
      class: {metric_output_class}                      # Optional. Example: "1". Only relevant for certain metrics such as for example false-positive-rate positive rate.
      labels:
        - name: {feature_name}                          # Optional. Example: "gender".
          type: {feature_type}                          # Optional. Example: "string".
          value: {feature_value}                        # Optional. Example: "female".
    measurements:
      # Bar plots should be able to capture SHAP and Robustness Toolbox from AI Verify.
      bar_plots:
      - type: {measurement_type}                        # Required. Example: "SHAP".
        name: {measurement_name}                        # Optional. Example: "Mean Absolute Shap Values".
        results:
        - name: {bar_name}                              # Required. The name of a bar.
          value: {bar_value}                            # Required. The corresponding value.
      # Graph plots should be able to capture graph based measurements such as partial dependence and accumalated local effect.
      graph_plots:
      - type: {measurement_type}                        # Required. Example: "partial_dependence".
        name: {measurement_name}                        # Optional. Example: "Partial Dependence Plot".
        # Results store the graph plot data. So far all plots are depenendend on a combination of a specific class (sometimes) and feature (always).
        # For example partial dependence plots are made for each feature and class.
        results:
         - class: {class_name}                          # Optional. Name of the output class the graph depends on.
           feature: {feature_name}                      # Required. Name of the feature the graph depends on.
           data:
            - x_value: {x_value}                        # Required. The x value of the graph data.
              y_value: {y_value}                        # Required. The y value of the graph data.

```

## Schema

JSON schema will be added here.

[^1]: Deviation from the HuggingFace specification is in the Licence field. HuggingFace only accepts
dataset id's from [HuggingFace license list](https://huggingface.co/docs/hub/repositories-licenses) while we
accept any license from [Open Source License List](https://opensource.org/license).

[^2]: Deviation from the HuggingFace specification is in the `model_index:results:dataset` field. HuggingFace only accepts
one dataset, while we accept a list of datasets.

[^3]: Deviation from the HuggingFace specification is in the Dataset Type field. HuggingFace only accepts
dataset id's from [HuggingFace datasets](https://hf.co/datasets) while we also allow for any url pointing to the dataset.

[^4]: For this extension to work relevent metrics (such as for example false positive rate) have to be added to the
[Hugging Face metrics](https://hf.co//metrics), possibly this can be done in our organizational namespace.
