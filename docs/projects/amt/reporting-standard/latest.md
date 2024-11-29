# :label: 0.1a12 (Latest)

This document describes the Algorithm Management Toolkit (AMT) Reporting Standard.

For reproducibility, governance, auditing and sharing of algorithmic systems it is essential to have a reporting
standard so that information about an algorithmic system can be shared. This reporting standard describes how
information about the different phases of an algorithm's life cycle can be reported. It contains, among other things,
descriptive information combined with information about the technical tests and tasks applied.

!!! warning "Disclaimer"

    The AMT Reporting Standard is work in progress. This means that the current standard is probably suboptimal and will
    change significantly in future versions.

## Introduction

Inspired by [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993) and
[Papers with Code Model Index](https://github.com/paperswithcode/model-index) this standard almost[^1] [^2] [^3] [^4]
extends the
[Hugging Face model card metadata specification](https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1)
to allow for:

1. More fine-grained information on performance metrics, by extending the `metrics_field` from the Hugging
   Face metadata specification.
2. Capturing additional *measurements* on fairness and bias, which can be partitioned into bar plot like
   measurements (such as mean absolute SHAP values) and graph plot like measurements (such as partial dependence). This
   is achieved by defining a new field `measurements`.
3. Capturing *tasks* or *tools* (such as
   [IAMA](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
   and [ALTAI](https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment)).
   This is achieved by defining a new field `tasks`.

Following Hugging Face, this proposed standard will be written in YAML.

This standard does not contain all fields present in the Hugging Face metadata specification. The fields that are
optional in the Hugging Face specification and are specific to the Hugging Face interface are omitted.

Another difference is that we divide our implementation into three separate parts.

1. `system_card`, containing information about a group of ML-models which accomplish a specific task.
2. `model_card`, containing information about a specific data science model.
3. `task_card`, containing information about a regulatory task.

!!! note "Include statements"

    These `model_card`s and  `task_card`s  can be included verbatim into a `system_card`, or referenced with an
    `!include` statement, allowing for minimal cards to be compact in a single file. Extensive cards can be split up for
    readability and maintainability. Our standard allows for the `!include` to be used anywhere.

## Specification of the standard

The standard will be written in YAML. Example YAML files are given in the next section. The standard defines three
cards: a `system_card`, a `model_card` and an `task_card`. A `system_card` contains information about an
algorithmic system. It can have multiple models and each of these models should have a `model_card`. Regulatory
tasks can be processed in an `task_card`. Note that `model_card`'s and `task_card`'s can be included
directly into the `system_card` or can be included as separate YAML files with help of a YAML-include mechanism. For
clarity the latter is preferred and is also used in the examples in the next section.

### `system_card`

A `system_card` contains the following information.

1. `schema_version` (REQUIRED, string). Version of the schema used, for example "0.1a2".
2. `provenance` (OPTIONAL). In case this System Card is generated from another source file, this field can capture the
   historical context of the contents of this System Card.

    1. `git_commit_hash` (OPTIONAL, string). Git commit hash of the commit which contains the transformation file used
        to create this card.
    2. `timestamp` (OPTIONAL, string). A timestamp of the date, time and timezone of generation of this System Card.
        Timestamp should be given, preferably in UTC (represented as `Z`), in
        [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `2024-04-16T16:48:14Z`.
    3. `uri` (OPTIONAL, string). URI to the tool that was used to perform the transformations.
    4. `author` (OPTIONAL, string). Name of person that initiated the transformations.

3. `name` (OPTIONAL, string). Name used to describe the system.

4. `selected_tasks` (OPTIONAL, list). List of tasks from the [task registry](https://github.com/MinBZK/task-registry)
    that are selected to be performed.
    1. `requirements`(OPTIONAL, list). List of selected requirements.
        1. `urn` (OPTIONAL, string). URN of the requirement.
        2. `version` (OPTIONAL, string). Version of the task registry.
    2. `measures` (OPTIONAL, list). List of selected measures.
        1. `urn` (OPTIONAL, string). URN of the measure.
        2. `version` (OPTIONAL, string). Version of the task registry.
    3. `tools`(OPTIONAL, list). List of selected tools.
        1. `urn` (OPTIONAL, string). URN of the tool.
        2. `version` (OPTIONAL, string). Version of the task registry.

5. `upl` (OPTIONAL, string). If this algorithm is part of a product offered by the Dutch Government,
    it should contain a URI from the
    [Uniform Product List](https://standaarden.overheid.nl/owms/oquery/UPL-actueel.plain).
6. `owners` (OPTIONAL, list). There can be multiple owners. For each owner the following fields are present.

    1. `oin` (OPTIONAL, string). If applicable the
       [Organisatie-identificatienummer (OIN)](https://oinregister.logius.nl/oin-register).
    2. `organization` (OPTIONAL, string). Name of the organization that owns the model. If `ion` is NOT provided this
       field is REQUIRED.
    3. `name` (OPTIONAL, string). Name of a contact person within the organization.
    4. `email` (OPTIONAL, string). Email address of the contact person or organization.
    5. `role` (OPTIONAL, string). Role of the contact person. This field should only be set when the `name` field is
       set.

7. `description` (OPTIONAL, string). A short description of the system.
8. `ai_act_profile` (OPTIONAL). Information about the system in relation to the EU AI Act.
    The contents of this field can be retrieved by traversing the AI Act decision tree or can be specified by the user.
    1. `provenance` (OPTIONAL). This field can capture the context of the contents of the ai act profile labels.
        1. `git_commit_hash` (OPTIONAL, string). Git commit hash of the commit which contains the transformation file used
            to create this card.
        2. `timestamp` (OPTIONAL, string). A timestamp of the date, time and timezone of generation of this System Card.
            Timestamp should be given, preferably in UTC (represented as `Z`), in
            [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `2024-04-16T16:48:14Z`.
        3. `uri` (OPTIONAL, string). URI to the tool that was used to perform the transformations.
        4. `author` (OPTIONAL, string). Name of person that assigned the ai act profile labels
            (with or without decision tree).

    2. `labels` (OPTIONAL, list).

        1. `type` (OPTIONAL, enum[string]). The type of the system should be chosen from:
        `["AI-systeem", "AI-systeem voor algemene doeleinden", "AI-model voor algemene doeleinden", "geen algoritme"]`.
        2. `open_source` (OPTIONAL, enum[string]). Whether the system is open source or not.
        Options are `["open-source", "geen open-source"]`.
        3. `publication_category` (OPTIONAL, enum[string]). The publication category of the system should be chosen from:
        `["impactvol algoritme", "niet-impactvol algoritme",  "hoog-risico AI",
        "geen hoog-risico AI", "verboden AI", "uitzondering van toepassing"]`.
        4. `systemic_risk` (OPTIONAL, enum[string]). Whether the AI model is classified as having systemic risk.
        Options are `["systeemrisico", "geen systeemrisico"]`.
        5. `transparency_obligations` (OPTIONAL, enum[string]). Whether the system faces transparency obligations.
        Options are `["transparantieverplichtingen", "geen transparantieverplichtingen"]`.
        6. `role` (OPTIONAL, enum[string]). The organization’s role in relation to the system.
        Options are `["aanbieder", "gebruiksverantwoordelijke", "aanbieder + gebruiksverantwoordelijke"]`
        7. `conformity_assessment_body` (OPTIONAL, enum[string]). Whether the system should have a conformity assessment
        performed by a third party. Options are `["beoordeling door derde partij"]`
    3. `decision_tree` (OPTIONAL). This field is REQUIRED if the above fields are retrieved by traversing the decision tree.

        1. `version` (REQUIRED, string). The version of the decision tree.
        2. `path` (REQUIRED). The traversed path through the decision tree.
            1. `question` (REQUIRED, string). The question id of the question.
            2. `answer` (REQUIRED, enum[string]). The answer to the question.

9. `labels` (OPTIONAL, list). This field allows to store meta information about a system. There can be multiple labels.
   For each label the following fields are present.

    1. `name` (OPTIONAL, string). Name of the label.
    2. `value` (OPTIONAL, string). Value of the label.

10. `status` (OPTIONAL, string). The status of the system. For example the status can be "production".
11. `references` (OPTIONAL, list[string]). Additional reference URI's that point information about the system and are
     relevant.
12. `begin_date` (OPTIONAL, string). The first date the system was used. Date should be given in
    [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `YYYY-MM-DD`.
13. `end_date` (OPTIONAL, string). The last date the system was used. Date should be given in
    [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `YYYY-MM-DD`.

14. `models` (OPTIONAL, list[ModelCard]). A list of model cards (as defined below) or `!include`s of a YAML file
    containing a model card. This model card can for example be a model card described in the next section or a model
    card from Hugging Face. There can be multiple model cards, meaning multiple models are used.

15. `tasks` (OPTIONAL, list[TaskCard]). A list of task cards (as defined below) or `!include`s of a
    YAML file containing a task card. This task card is an task card described in the next section.
    There can be multiple task cards, meaning multiple task were performed.

### `model_card`

A `model_card` contains the following information.

1. `provenance` (OPTIONAL). In case this Model Card is generated from another source file, this field can capture the
   historical context of the contents of this Model Card.

    1. `git_commit_hash` (OPTIONAL, string). Git commit hash of the commit which contains the transformation file used
        to create this card.
    2. `timestamp` (OPTIONAL, string). A timestamp of the date, time and timezone of generation of this System Card.
       Timestamp should be given, preferably in UTC (represented as `Z`), in
       [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `2024-04-16T16:48:14Z`.
    3. `uri` (OPTIONAL, string). URI to the tool that was used to perform the transformations.
    4. `author` (OPTIONAL, string). Name of person that initiated the transformations.

2. `name` (OPTIONAL, string). Name used to describe the model.

3. `language` (OPTIONAL, list[string]). If relevant, the natural languages the model supports in
   [ISO 639](https://www.iso.org/iso-639-language-code). There can be multiple languages.
4. `license` (REQUIRED).

    1. `license_name` (REQUIRED, string). Any license from the
       [open source license list](https://opensource.org/license)[^1]. If the license is NOT present in the license list
       this field must be set to 'other' and the following two fields will be REQUIRED.
    2. `license_link` (OPTIONAL, string). A link to a file of that name inside the repo, or a URL to a remote file
       containing the license contents.

5. `tags` (OPTIONAL, list[string]). Tags with keywords to describe the project. There can be multiple tags.
6. `owners` (OPTIONAL, list). There can be multiple owners. For each owner the following fields are present.

    1. `oin` (OPTIONAL, string). If applicable the
       [Organisatie-identificatienummer (OIN)](https://oinregister.logius.nl/oin-register).
    2. `organization` (OPTIONAL, string). Name of the organization that owns the model. If `ion` is NOT provided this
       field is REQUIRED.
    3. `name` (OPTIONAL, string). Name of a contact person within the organization.
    4. `email` (OPTIONAL, string). Email address of the contact person or organization.
    5. `role` (OPTIONAL, string). Role of the contact person. This field should only be set when the `name` field is
        set.

7. `model_index` (REQUIRED, list). There can be multiple models. For each model the following fields are present.

    1. `name` (REQUIRED, string). The name of the model.
    2. `model` (REQUIRED, string). A URI pointing to a repository containing the model file.
    3. `artifacts` (OPTIONAL, list). A list of artifacts

        1. `uri` (OPTIONAL, string) URI refers to a relevant model artifact
        2. `content-type` (OPTIONAL, string) Optional type, follow the
           [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type). Recognized values are
           "application/onnx"", to refer to an ONNX representation of the model.
        3. `md5-checksum` (OPTIONAL, string) Optional checksum for the content of the file.

    4. `parameters` (OPTIONAL, list). There can be multiple parameters. For each parameter the following fields are
       present.

        1. `name` (REQUIRED, string). The name of the parameter, for example "epochs".
        2. `dtype` (OPTIONAL, string). The datatype of the parameter, for example "int".
        3. `value` (OPTIONAL, string). The value of the parameter, for example 100.
        4. `labels` (OPTIONAL, list). This field allows to store meta information about a parameter. There can be
           multiple labels. For each label the following fields are present.

            1. `name` (OPTIONAL, string). The name of the label.
            2. `dtype` (OPTIONAL, string). The datatype of the feature. If `name` is set, this field is REQUIRED.
            3. `value` (OPTIONAL, string). The value of the feature. If `name` is set, this field is REQUIRED.

    5. `results` (OPTIONAL, list). There can be multiple results. For each result the following fields are present.

        1. `task` (OPTIONAL, list).

            1. `task_type` (REQUIRED, string). The task of the model, for example "object-classification".
            2. `task_name` (OPTIONAL, string). A pretty name for the model tasks, for example "Object Classification".

        2. `datasets` (OPTIONAL, list). There can be multiple datasets [^2]. For each dataset the following fields are
           present.

            1. `type` (REQUIRED, string). The type of the dataset, can be a dataset id from
               [Hugging Face datasets](https://hf.co/datasets) or any other link to a repository containing the
               dataset[^3], for example "common_voice".
            2. `name` (REQUIRED, string). Name pretty name for the dataset, for example "Common Voice (French)".
            3. `split` (OPTIONAL, string). The split of the dataset, for example "train".
            4. `features` (OPTIONAL, list[string]). List of feature names.
            5. `revision` (OPTIONAL, string). Version of the dataset, for example
               "5503434ddd753f426f4b38109466949a1217c2bb".

        3. `metrics` (OPTIONAL, list). There can be multiple metrics. For each metric the following fields are present.

            1. `type` (REQUIRED, string). A metric-id from [Hugging Face metrics](https://hf.co//metrics)[^4], for
               example accuracy.
            2. `name` (REQUIRED, string). A descriptive name of the metric. For example "false positive rate" is not a
               descriptive name, but "training false positive rate w.r.t class x" is.
            3. `dtype` (REQUIRED, string). The data type of the metric, for example `float`.
            4. `value` (REQUIRED, string). The value of the metric.
            5. `labels` (OPTIONAL, list). This field allows to store meta information about a metric. For example,
               metrics can be computed for example on subgroups of specific features. For example, one can compute the
               accuracy for examples where the feature "gender" is set to "male". There can be multiple subgroups, which
               means that the metric is computed on the intersection of those subgroups. There can be multiple labels.
               For each label the following fields are present.

                1. `name` (OPTIONAL, string). The name of the feature. For example: "gender".
                2. `type` (OPTIONAL, string). The type of the label. Can for example be set to "feature" or
                   "output_class". If `name` is set, this field is REQUIRED.
                3. `dtype` (OPTIONAL, string). The datatype of the feature, for example `float`. If `name` is set, this
                   field is REQUIRED.
                4. `value` (OPTIONAL, string). The value of the feature. If `name` is set, this field is REQUIRED. For
                   example: "male".

        4. `measurements`.

            1. `bar_plots` (OPTIONAL, list). The purpose of this field is to capture bar plot like measurements, for
                example SHAP values. There can be multiple bar plots. For each bar plot the following fields are
                present.

                1. `type` (REQUIRED, string). The type of bar plot, for example "SHAP".
                2. `name` (OPTIONAL, string). A pretty name for the plot, for example "Mean Absolute SHAP Values".
                3. `results` (REQUIRED, list). The contents of the bar plot. A result represents a bar. There can be
                   multiple results. For each result the following fields are present.

                    1. `name` (REQUIRED, string). The name of bar.
                    2. `value` (REQUIRED, float). The value of the corresponding bar.

            2. `graph_plots` (OPTIONAL, list). The purpose of this field is to capture graph plot like measurements,
               such as partial dependence plots. There can be multiple graph plots. For each graph plot the following
               fields are present.

                1. `type` (REQUIRED, string). The type of the graph plot, for example "partial_dependence".
                2. `name` (OPTIONAL, string). A pretty name of the graph, for example "Partial Dependence Plot".
                3. `results` (REQUIRED, list). Results contains the graph plot data. Each graph can depend on a specific
                   output class and feature. There can be multiple results. For each result the following fields are
                   present.

                    1. `class` (OPTIONAL, string/int/float/bool). The output class name that the graph corresponds to.
                       This field is not always present.
                    2. `feature` (REQUIRED, string). The feature the graph corresponds to. This is required, since all
                       relevant graphs are dependent on features.
                    3. `data` (REQUIRED, list)

                        1. `x_value` (REQUIRED, float). The $x$-value of the graph.
                        2. `y_value` (REQUIRED, float). The $y$-value of the graph.

### `task_card`

An `task_card` contains the following information.

1. `provenance` (OPTIONAL). This field can capture the context of the contents of this Task Card.

    1. `git_commit_hash` (OPTIONAL, string). Git commit hash of the commit which contains the transformation file used
       to create this card.
    2. `timestamp` (OPTIONAL, string). A timestamp of the date, time and timezone of generation of this System Card.
       Timestamp should be given, preferably in UTC (represented as `Z`), in
       [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `2024-04-16T16:48:14Z`.
    3. `uri` (OPTIONAL, string). URI to the tool that was used to perform the transformations.
    4. `description` (OPTIONAL, string). The description how the task is performed.
    5. `document_path` (OPTIONAL, string). Uploaded document.
    6. `URI_path` (OPTIONAL, string). Linked URI.
    7. `authors` (OPTIONAL, list).
        1. `name` (OPTIONAL, string). Name of person that initiated the transformations.
        2. `function` (OPTIONAL, string). Function of the person that initiated the transformation.
            Options are `["accountable", "responsible", "reviewer"]`.

2. `name` (REQUIRED, string). The name of the task.
3. `urn` (OPTIONAL, string). A Uniform Resource Name (URN) of the task in the task registry.
4. `date` (REQUIRED, string). The date at which the task is completed. Date should be given
    in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `YYYY-MM-DD`.
5. `lifecycle` (OPTIONAL, string). The lifecycle in which the task is completed.
6. `links` (OPTIONAL, list). List of linked tasks or system card fields.  

    1. `name` (OPTIONAL, string). The name of the link.
    2. `urn` (REQUIRED, string). The urn to the link.
    3. `relation` (OPTIONAL, string). The relation between the links e.g. 'partly overlap'.
7. `contents` (REQUIRED, list). List of items in content.

    1. `description` (REQUIRED, string). A question.
    2. `document_path` (OPTIONAL, string). A Uniform Resource Name (URN) of the corresponding task in the task registry.
    3. `URI_path` (REQUIRED, string). An URI to a document.
    4. `remarks` (OPTIONAL, string). A field to put relevant discussion remarks in.

## Example

### System Card

```yaml
version: {system_card_version}
provenance:
  git_commit_hash: {git_commit_hash}
  timestamp: {modification_timestamp}
  uri: {modification_uri}
  author: {modification_author}
name: {system_name}
selected_tasks:
  - requirements:
    - urn: {requirement_urn}
      version: {version_task_registry}
  - measures:
    - urn: {measure_urn}
      version: {version_task_registry}
  - tools:
    - urn: {tool_urn}
      version: {version_task_registry}
upl: {upl_uri}
owners:
  - oin: {oin}
    organization: {organization_name}
    name: {owner_name}
    email: {owner_email}
    role: {owner_role}
description: {system_description}
ai_act_profile:
    provenance:
        git_commit_hash: {git_commit_hash}
        timestamp: {modification_timestamp}
        uri: {modification_uri}
        author: {modification_author}
    labels:
      - type: {system_type}
        open_source: {open_source}
        publication_category: {publication_category}
        systemic_risk: {systemic_risk}
        transparency_obligations: {transparency_obligations}
        role: {role}
        conformity_assessment_body: {conformity_assessment_body}
    decision_tree:
        version: {decision_tree_version}
        path:
         - question: {question_id}
           answer: {answer}
labels:
  - name: {label_name}
    value: {label_value}
status: {system_status}
begin_date: {system_begin_date}
end_date: {system_end_date}


models:
  - !include {model_card_uri}

tasks:
  - !include {task_card_uri}
```

### Model Card

```yaml
provenance:
  git_commit_hash: {git_commit_hash}
  timestamp: {modification_timestamp}
  uri: {modification_uri}
  author: {modification_author}
name: {model_name}
language:
  - {lang_0}
license:
  license_name: {license_name}
  license_link: {license_uri}
tags:
  - {tag_0}
owners:
  - oin: {oin}
    organization: {organization_name}
    name: {owner_name}
    email: {owner_email}
    role: {owner_role}

model-index:
  - name: {model_id}
    model: {model_uri}
    artifacts:
      - uri: {model_artifact_uri}
      - content-type: {model_artifact_type}
      - md5-checksum: {md5_checksum}
    parameters:
      - name: {parameter_name}
        dtype: {parameter_dtype}
        value: {parameter_value}
        labels:
          - name: {label_name}
            dtype: {label_type}
            value: {label_value}
    results:
      - task:
          - type: {task_type}
            name: {task_name}
        datasets:
          - type: {dataset_type}
            name: {dataset_name}
            split: {split}
            features:
              - {feature_name}
            revision: {dataset_version}
        metrics:
          - type: {metric_type}
            name: {metric_name}
            dtype: {metric_dtype}
            value: {metric_value}
            labels:
              - name: {label_name}
                type: {label_type}
                dtype: {label_type}
                value: {label_value}
        measurements:
          bar_plots:
            - type: {measurement_type}
              name: {measurement_name}
              results:
                - name: {bar_name}
                  value: {bar_value}
          graph_plots:
            - type: {measurement_type}
              name: {measurement_name}
              results:
                - class: {class_name}
                  feature: {feature_name}
                  data:
                    - x_value: {x_value}
                      y_value: {y_value}
```

### Task Card

```yaml
provenance:
  git_commit_hash: {git_commit_hash}
  timestamp: {modification_timestamp}
  uri: {modification_uri}
  description: {description}
  document_path: {document_path}
  URI_path: {URI_path}
  author:
  - name: {modification_name}
    function: {modification_function}
name: {task_name}
urn: {urn}
date: {task_date}
lifecycle: {lifecycle}
links:
    - name: {link_name}
      urn: {link_urn}
      relation: {relation_type}
contents:
  - description: {description_text}
    document_path: {document_path}
    URI_path: {URI_path}
    remarks: {remark_text}
```

## Schema

JSON schemas of the system card, model card and task card can be found on [Github](https://github.com/MinBZK/ai-validation/tree/main/docs/projects/amt/reporting-standard/schemas).

## Changelog

- 0.1a12: restructure system card to accommodate for tasks instead of assessments
- 0.1a11: adds requirements and measures
- 0.1a10: adds ai act profile field to system card
- 0.1a9: adds name to model card
- 0.1a8: adds selected instrument urns to system card
- 0.1a7: adds urn to assessment card
- 0.1a6:
    - fix mismatches between description and examples
    - format YAML examples and Markdown formatting
- 0.1a5: adds a general description of the technical documentation required for high-risk systems to conform to the EU
  AI Act.
- 0.1a4: adds data provenance
- 0.1a3: require ISO 8601 timestamp
- 0.1a2: introduces typed artifacts
- 0.1a1: initial draft version of this reporting standard

[^1]: Deviation from the Hugging Face specification is in the License field. Hugging Face only accepts dataset id's
      from [Hugging Face license list](https://huggingface.co/docs/hub/repositories-licenses) while we accept any
      license from [Open Source License List](https://opensource.org/license).

[^2]: Deviation from the Hugging Face specification is in the `model_index:results:dataset` field. Hugging Face only
      accepts one dataset, while we accept a list of datasets.

[^3]: Deviation from the Hugging Face specification is in the Dataset Type field. Hugging Face only accepts dataset id's
      from [Hugging Face datasets](https://hf.co/datasets) while we also allow for any url pointing to the dataset.

[^4]: For this extension to work relevant metrics (such as for example false positive rate) have to be added to the
      [Hugging Face metrics](https://hf.co//metrics), possibly this can be done in our organizational namespace.
