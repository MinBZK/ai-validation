# :label: 0.1a14 (Latest)

This document describes the Algorithm Management Toolkit (AMT) Reporting Standard.

For reproducibility, governance, auditing and sharing of algorithmic systems it is essential to have a reporting
standard so that information about an algorithmic system can be shared. This reporting standard describes how
information about the different phases of an algorithm's life cycle can be reported. It contains, among other things,
descriptive information combined with information about the technical tests and assessments applied.

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
3. Capturing *assessments* (such as
   [IAMA](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
   and [ALTAI](https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment)).
   This is achieved by defining a new field `assessments`.

Following Hugging Face, this proposed standard will be written in YAML.

This standard does not contain all fields present in the Hugging Face metadata specification. The fields that are
optional in the Hugging Face specification and are specific to the Hugging Face interface are omitted.

Another difference is that we divide our implementation into three separate parts.

1. `system_card`, containing information about a group of ML-models which accomplish a specific task.
2. `model_card`, containing information about a specific data science model.
3. `assessment_card`, containing information about a regulatory assessment.

!!! note "Include statements"

    These `model_card`s and  `assessment_card`s  can be included verbatim into a `system_card`, or referenced with an
    `!include` statement, allowing for minimal cards to be compact in a single file. Extensive cards can be split up for
    readability and maintainability. Our standard allows for the `!include` to be used anywhere.

## Specification of the standard

The standard will be written in YAML. Example YAML files are given in the next section. The standard defines three
cards: a `system_card`, a `model_card` and an `assessment_card`. A `system_card` contains information about an
algorithmic system. It can have multiple models and each of these models should have a `model_card`. Regulatory
assessments can be processed in an `assessment_card`. Note that `model_card`'s and `assessment_card`'s can be included
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
4. `instruments` (OPTIONAL, list). List of instruments from
the [task registry](https://github.com/MinBZK/task-registry) that must be executed to fill this system card.
There can be multiple instruments. For each instrument the following fields are present.

    1. `urn` (REQUIRED, string). Uniform Resource Names of the instrument. It is required if an instrument object
        is added.
    2. `version` (OPTIONAL, string). The version of the instrument.
    3. `required` (OPTIONAL, boolean). Specifies whether the instrument is required to be executed or not.

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

    1. `type` (REQUIRED, enum[string]). The type of the system should be chosen from:
    `["AI-systeem", "AI-systeem voor algemene doeleinden", "AI-model voor algemene doeleinden", "geen algoritme",
    "impactvol algoritme", "niet-impactvol algoritme"]`.
    2. `open_source` (OPTIONAL, enum[string]). Whether the system is open source or not.
    Options are `["open-source", "geen open-source"]`.
    3. `risk_group` (OPTIONAL, enum[string]). The publication category of the system should be chosen from:
    `["hoog-risico AI", "geen hoog-risico AI", "verboden AI", "uitzondering van toepassing"]`.
    4. `systemic_risk` (OPTIONAL, enum[string]). Whether the AI model is classified as having systemic risk.
    Options are `["systeemrisico", "geen systeemrisico"]`.
    5. `transparency_obligations` (OPTIONAL, enum[string]). Whether the system faces transparency obligations.
    Options are `["transparantieverplichting", "geen transparantieverplichting"]`.
    6. `role` (OPTIONAL, enum[string]). The organization’s role in relation to the system.
    Options are (select multiple) `["aanbieder", "gebruiksverantwoordelijke", "distributeur", "importeur"]`.
    7. `conformity_assessment_body` (OPTIONAL, enum[string]). Whether the conformity assessment should be conducted by a
    conformity assessment body. Options are `["beoordeling door derde partij"]`.
    8. `decision_tree` (OPTIONAL). This field is REQUIRED if the above fields are retrieved by traversing the decision tree.

        1. `version` (REQUIRED, string). The version of the decision tree.
        2. `path` (REQUIRED). The traversed path through the decision tree.
            1. `question` (REQUIRED, string). The question id of the question.
            2. `answer` (REQUIRED, string). The answer to the question.

9. `requirements` (OPTIONAL, list). To store the applicable requirements.

    1. `urn` (REQUIRED, string). The URN of the requirement (from Algoritmekader).
    2. `state` (REQUIRED, string). The state of the requirement.
    3. `version` (OPTIONAL, string). The version of the Algoritmekader.

10. `measures` (OPTIONAL, list). To store the applicable measures.

    1. `urn` (REQUIRED, string). The URN of the measure (from Algoritmekader).
    2. `state` (REQUIRED, string).
    3. `value` (REQUIRED, string). Description on how the measure is implemented.
    4. `version` (OPTIONAL, string). The version of the Algoritmekader.

    5. `accountable_persons` (OPTIONAL, list). The persons who are accountable for the implementation of this measure.

        1. `name` (REQUIRED, string). The name of the person.
        2. `uuid` (REQUIRED, string). The uuid of the person.

    6. `responsible_persons` (OPTIONAL, list). The persons responsible for the execution of this measure.

        1. `name` (REQUIRED, string). The name of the person.
        2. `uuid` (REQUIRED, string). The uuid of the person.

    7. `reviewer_persons` (OPTIONAL, list). The persons who review the responsible people on the execution.

        1. `name` (REQUIRED, string). The name of the person.
        2. `uuid` (REQUIRED, string). The uuid of the person.

11. `labels` (OPTIONAL, list). This field allows to store meta information about a system. There can be multiple labels.
   For each label the following fields are present.

    1. `name` (REQUIRED, string). Name of the label.
    2. `value` (OPTIONAL, string). Value of the label.

12. `status` (OPTIONAL, string). The status of the system. For example the status can be "production".
13. `begin_date` (OPTIONAL, string). The first date the system was used. Date should be given in
    [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `YYYY-MM-DD`.
14. `end_date` (OPTIONAL, string). The last date the system was used. Date should be given in
    [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `YYYY-MM-DD`.
15. `goal_and_impact` (OPTIONAL, string). The purpose of the system and the impact it has on citizens and companies.
16. `considerations` (OPTIONAL, string). The pro's and con's of using the system.
17. `risk_management` (OPTIONAL, string). Description of the risks associated with the system.
18. `human_intervention` (OPTIONAL, string). A description to want extend there is human involvement in the system.
19. `legal_base` (OPTIONAL, list). If there exists a legal base for the process the system is embedded in, this field
    can be filled in with the relevant laws. There can be multiple legal bases. For each legal base the following fields
    are present.

    1. `name` (REQUIRED, string). Name of the law.
    2. `link` (OPTIONAL, string). URI pointing towards the contents of the law.

20. `used_data` (OPTIONAL, string). An overview of the data that is used in the system.
21. `technical_design` (OPTIONAL, string). Description on how the system works.
22. `external_providers` (OPTIONAL, list). If relevant, these fields allow to store information on external providers.
    There can be multiple external providers.

    1. `name` (REQUIRED, string). Name of the external provider.
    2. `version` (OPTIONAL, string). Version of the external provider reflecting its relation to previous versions.

23. `references` (OPTIONAL, list). This field allows to store references to the system.

    1. `name` (REQUIRED, string). Name of the reference.
    2. `link` (OPTIONAL, string). Link or URI to the reference.

24. `interaction_details` (OPTIONAL, list[string]). Explain how the AI system interacts with hardware or software,
    including other AI systems, or how the AI system can be used to interact with hardware or software.
25. `version_requirements` (OPTIONAL, list[string]). Describe the versions of the relevant software or firmware, and any
    requirements related to version updates.
26. `deployment_variants` (OPTIONAL, list[string]). Description of all the forms in which the AI system is placed on the
    market or put into service, such as software packages embedded into hardware, downloads, or APIs.
27. `hardware_requirements` (OPTIONAL, list[string]). Provide a description of the hardware on which the AI system must
    be run.
28. `product_markings` (OPTIONAL, list[string]). If the AI system is a component of products, photos, or illustrations,
    describe the external features, markings, and internal layout of those products.
29. `user_interface` (OPTIONAL, list). Provide information on the user interface provided to the user responsible for
    its operation.

    1. `description` (OPTIONAL, string). A description of the provided user interface.
    2. `link` (OPTIONAL, string). A link to the user interface can be included.
    3. `snapshot` (OPTIONAL, string). A snapshot/screenshot of the user interface can be included with the use of a
        hyperlink.

30. `models` (OPTIONAL, list[ModelCard]). A list of model cards (as defined below) or `!include`s of a YAML file
    containing a model card. This model card can for example be a model card described in the next section or a model
    card from Hugging Face. There can be multiple model cards, meaning multiple models are used.

31. `assessments` (OPTIONAL, list[AssessmentCard]). A list of assessment cards (as defined below) or `!include`s of a
    YAML file containing a assessment card. This assessment card is an assessment card described in the next section.
    There can be multiple assessment cards, meaning multiple assessment were performed.

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

### `assessment_card`

An `assessment_card` contains the following information.

1. `provenance` (OPTIONAL). In case this Assessment Card is generated from another source file, this field can capture
   the historical context of the contents of this Assessment Card.

    1. `git_commit_hash` (OPTIONAL, string). Git commit hash of the commit which contains the transformation file used
       to create this card.
    2. `timestamp` (OPTIONAL, string). A timestamp of the date, time and timezone of generation of this System Card.
       Timestamp should be given, preferably in UTC (represented as `Z`), in
       [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `2024-04-16T16:48:14Z`.
    3. `uri` (OPTIONAL, string). URI to the tool that was used to perform the transformations.
    4. `author` (OPTIONAL, string). Name of person that initiated the transformations.

2. `name` (REQUIRED, string). The name of the assessment.
3. `urn` (OPTIONAL, string). A Uniform Resource Name (URN) of the instrument in the task registry.
4. `date` (REQUIRED, string). The date at which the assessment is completed. Date should be given in
   [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `YYYY-MM-DD`.
5. `contents` (REQUIRED, list). There can be multiple items in contents. For each item the following fields are present:

    1. `question` (REQUIRED, string). A question.
    2. `urn` (OPTIONAL, string). A Uniform Resource Name (URN) of the corresponding task in the task registry.
    3. `answer` (REQUIRED, string). An answer.
    4. `remarks` (OPTIONAL, string). A field to put relevant discussion remarks in.
    5. `authors` (OPTIONAL, list). There can be multiple names. For each name the following field is present.

        1. `name` (OPTIONAL, string). The name of the author of the question.

    6. `timestamp` (OPTIONAL, string). A timestamp of the date, time and timezone of the answer. Timestamp should be
        given, preferably in UTC (represented as `Z`), in
        [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, i.e. `2024-04-16T16:48:14Z`.

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
instruments:
  - urn: {instrument_urn}
    version: {instrument_version}
    required: {instrument_required}
upl: {upl_uri}
owners:
  - oin: {oin}
    organization: {organization_name}
    name: {owner_name}
    email: {owner_email}
    role: {owner_role}
description: {system_description}
ai_act_profile:
    type: {system_type}
    open_source: {open_source}
    risk_group: {risk_group}
    systemic_risk: {systemic_risk}
    transparency_obligations: {transparency_obligations}
    role: {role}
    conformity_assessment_body: {conformity_assessment_body}
    decision_tree:
        version: {decision_tree_version}
        path:
         - question: {question_id}
           answer: {answer}
requirements:
  - urn: {urn}
    state: {state}
    version: {version}
measures:
  - urn: {urn}
    state: {state}
    value: {value}
    version: {version}
    accountable_persons:
      - name: {name}
        uuid: {uuid}
    responsible_persons:
      - name: {name}
        uuid: {uuid}
    reviewer_persons:
      - name: {name}
        uuid: {uuid}

labels:
  - name: {label_name}
    value: {label_value}
status: {system_status}
begin_date: {system_begin_date}
end_date: {system_end_date}
goal_and_impact: {system_goal_and_impact}
considerations: {system_considerations}
risk_management: {system_risk_management}
human_intervention: {system_human_intervention}
legal_base:
  - name: {law_name}
    link: {law_uri}
used_data: {system_used_data}
technical_design: {technical_design}
external_providers:
  - name: {name_external_provider}
    version: {version_external_provider}
references:
  - name: {reference_name}
    link: {reference_link}
interaction_details:
  - {system_interaction_details}
version_requirements:
  - {system_version_requirements}
deployment_variants:
  - {system_deployment_variants}
hardware_requirements:
  - {system_hardware_requirements}
product_markings:
  - {system_product_markings}
user_interface:
  - description: {system_user_interface}
    link: {system_user_interface_uri}
    snapshot: {system_user_interface_snapshot_uri}

models:
  - !include {model_card_uri}

assessments:
  - !include {assessment_card_uri}
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

### Assessment Card

```yaml
provenance:
  git_commit_hash: {git_commit_hash}
  timestamp: {modification_timestamp}
  uri: {modification_uri}
  author: {modification_author}
name: {assessment_name}
urn: {urn}
date: {assessment_date}
contents:
  - question: {question_text}
    urn: {urn}
    answer: {answer_text}
    remarks: {remarks_text}
    authors:
      - name: {author_name}
    timestamp: {timestamp}
```

## Schema

JSON schemas of the system card, model card and assessment card can be found on [Github](https://github.com/MinBZK/ai-validation/tree/main/docs/projects/amt/reporting-standard/schemas).

## Changelog

- 0.1a14: adjust ai act profile to meet decision support tool
- 0.1a13: adjust references to name-value
- 0.1a12: adds authors to measures
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
