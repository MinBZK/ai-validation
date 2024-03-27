# TAD Reporting Standard

This document describes the Transparancy of Algorithmic Decision Making (TAD) reporting standard.

## Introduction

The standard almost [^1] [^2] extends the [Hugging Face model card metadata specification](https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1)
to allow for:

1. More finegrained information on performance metrics.
2. Capturing additional *measurements* on fairness and bias, such as for example SHAP-values.
3. Capturing *assessments*

The standards does not contain all fields present in the Hugging Face specification: the fields that are

- optional in the HuggingFace specification, AND
- are very specific to the HugginFace interface

are ommited.

The standard contains the following information.

## Specification of the standard

### 1. General information

1. **Timestamp** (REQUIRED). The date and time of the generation of the report containing the
information in this standard.
2. **License** (REQUIRED). Any license from the [license list](https://huggingface.co/docs/hub/repositories-licenses). If
the license is NOT present in the license list, the following will be REQUIRED.

    1. **License Name**. An id for the license.
    2. **License Link**. A link to a file of that name inside the repo, or a URL to a remote file.

3. **Library** (OPTIONAL). Any library from the [library list](https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/model-libraries.ts).
4. **Tags** (OPTIONAL). Tags with keywords to describe the project. There can be multiple tags.
5. **Owners**. There can be multiple owners. For each owner the following fields are present.

    1. **Organization** (REQUIRED). Name of the organization that owns the model.
    2. **Name** (OPTIONAL). Name of a contact person within the organisation.
    3. **Email** (OPTIONAL). Email address of the contact person or organization.
    4. **Role** (OPTIONAL). Role of the contact person. This field is only set when the **Name** field
    is set.

### 2. Model Index

There can be multiple models. For each model the following fields are present.

1. **Name** (REQUIRED). The name of the model.
2. **Results**. There can be multiple results. For each result the following fields are present.

    1. **Task**.

        1. **Task Type** (REQUIRED). The task of the model, for example "object-classifcation".
        2. **Task Name** (OPTIONAL). A pretty name fo the model taks, for example "Object Classification".

    2. **Dataset**

        1. **Type** (REQUIRED). The type of the dataset, can be a dataset id from [HuggingFace datasets](https://hf.co/datasets)
        or a link to a repository containing the dataset[^1], for example "common_voice".
        2. **Name** (REQUIRED). Name pretty name for the dataset, for example "Common Voice (French)".
        3. **Split** (OPTIONAL). The split of the dataset, for example "train".
        4. **Revision** (OPTIONAL). Version of the dataset, for example 5503434ddd753f426f4b38109466949a1217c2bb.

    3. **Metrics**. There can be multiple metrics. For each metric the following fields are present.

        1. **Type** (REQUIRED). A metric-id from [Hugging Face metrics](https://hf.co//metrics)[^2], for example accuracy.
        TODO: add note.
        2. **Name** (REQUIRED). A descriptive name of the metric. For example "false positive rate" is
        not a descriptive name, but "training false positive rate w.r.t class x" is.
        3. **Value** (REQUIRED). The value of the metric.
        4. **Class** (OPTIONAL). Some metrics (such as false positive rate for multiclass classification) depend on
        a specific output class. In this field the output class can be specified. It must only be set for metrics for
        which it makes sense.
        5. **Subgroups**. Metrics can be computed on subgroups of specific features. For example one can compute the
        accuracy for examples where the feature "gender" is set to "male".
        There can be multiple subgroups. For each subgroup the following fields are present.

            1. **Feature** (OPTIONAL). The name of the feature. For example: "gender".
            2. **Group** (OPTIONAL). The value of the feature. If **Feature** is set, this field must be set as wel.
            For example: "male".

    4. **Measurements**. There can be multiple measurements. For each measurement the follwing fields are present.
        1. TODO.

### 3. Assessments

There can be multiple assessments. For each assessment the following fields are present:

1. **Name** (REQUIRED). The name of the assessment.
2. **Date** (REQUIRED). The date at which the assessment is completed.
3. **Contents**. There can be multiple items in contents. For each item the following fields are present:

    1. **Question** (REQUIRED). A question.
    2. **Answer** (REQUIRED). An answer.
    3. **Remarks** (OPTIONAL). A field to put relevant discussion remarks in.

## Example

```yaml
language:
  - {lang_0}                        # Optional. Example nl.
license: {licence}                  # Required. Example: apache-2.0 or any license identifier from https://huggingface.co/docs/hub/repositories-licenses
license_name: {licence_name}        # Required. if license = other, specify an id for the licence. Example: 'my-license-1.0'
license_link: {license_link}        # Required. if license = other, specify "LICENSE" or "LICENSE.md" to link to a file of that name inside the repo, or a URL to a remote file.
library_name: {library_name}        # Optional. Example: keras or any library from https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/model-libraries.ts.
tags:
- {tag_0}                           # Optional. Example: audio
- {tag_1}                           # Optional. Example: automatic-speech-recognition
owners:
- organization: {organization_name} # Required. Example: BZK
  name: {owner_name}                # Optional. Example: John Doe
  email: {owner_email}              # Optional. Example: johndoe@email.com
  role: {owner_role}                # Optional. Example: Data Scientist.

model-index:
- name: {model_id}                  # Required. Example: ImageClassifier.
  results:
  - task:
      type: {task_type}             # Required. Example: image-classification.
      name: {task_name}             # Optional. Example: Image Classification.
    dataset:
      type: {dataset_type}          # Required. Example: common_voice. Link to a repository containing the dataset or a dataset id from https://hf.co/datasets.
      name: {dataset_name}          # Required. Example: "Common Voice (French)". A pretty name for the dataset.
      revision: {dataset_version}   # Optional. Example: 5503434ddd753f426f4b38109466949a1217c2bb
    metrics:
    - type: {metric_type}           # Required. Example: false-positive-rate. Use metric id from https://hf.co/metrics.
      name: {metric_name}           # Required. Example: "FPR wrt class 0 restricted to feature gender:0 and age:21".
      value: {metric_value}         # Required. Example: 0.75.
      class: {metric_output_class}  # Optional. Example: "1". Only relevant for certain metrics such as for example false-positive-rate positive rate.
      subgroups:
        - feature: {feature}        # Optional. Example: "gender".
          group: {feature_subgroup} # Optional. Example: "female".
    measurements:
    - TODO

assessments:
- name: {assessment_name}         # Required. Example: IAMA.
  date: {assessment_date}         # Required. Example: 25-03-2025.
  contents:
    - question: {question_text}   # Required. Example: "Question 1: ...".
      answer: {answer_text}       # Required. Example: "Answer: ...".
      remarks: {remarks_text}     # Optional. Example: "Remarks: ...".

```

[^1]: Deviation from the HuggingFace specification is in the Dataset Type field. HuggingFace only accepts
dataset id's from [HuggingFace datasets](https://hf.co/datasets) while we also allow for any url pointing to the dataset.

[^2]: For this extension to work relevent metrics (such as for example false positive rate) have to be added to the
[Hugging Face metrics](https://hf.co//metrics), possibly this can be done in our organizational namespace.
