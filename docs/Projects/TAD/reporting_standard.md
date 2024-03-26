# TAD Reporting Standard
This document describes the Transparancy of Algorithmic Decision making (TAD) reporting standard.

## Specification of the standard
The standard contains the following information.

### 1. General information
1. **Timestamp** (REQUIRED). The date and time of the generation of the report containing the
information in this standard.
2. **License** (REQUIRED). Any license from the [SPDX License List](https://spdx.org/licenses/). If
the license is *not* present in the license list, the following will be REQUIRED.
    1. **License Name**. The name or identifier of the license.
    2. **License Link**. A link to a file containing the contents of the license.
3. **Owners**
    1. **Organization** (REQUIRED). Name of the organization that owns the model.
    2. **Name** (OPTIONAL). Name of a contact person within the organisation.
    3. **Email** (OPTIONAL). Email adress of the contact person or organization.
    4. **Role** (OPTIONAL). Role of the contact person. This field is only set when the Name field
    is set.

### 2. Model
1. **Name** (REQUIRED). The name of the model.
2. **Version** (REQUIRED). The version of the model.
3. **Results**
    1. **Task Type**. The task of the model, for example object classifcation.
    2. **Dataset** 
        1. **Name** (REQUIRED). Name of the dataset.
        2. **Version** (REQUIRED). Version of the dataset.
    3. **Metrics**
        1. **Name** (REQUIRED). A descriptive name of the metric.
        2. **Type** (REQUIRED). The data type of the value field. This must be one of the following
        data types: ... 
        3. **Value** (REQUIRED). The value of the metric.
        4. **Description** (REQUIRED). A description of the metric. This must include all relevant
        information to reproduce the value of this metric.


### 3. Assessments
For each assessment the following fields are present:
1. **Name** (REQUIRED). The name of the assessment.
2. **Date** (REQUIRED). The date at which the assessment is completed.
3. **Contents** (REQUIRED). A link to a file containing the contents of the assessment, which
includes all questions and answers given to those questions. If a question is not answered, the
question must be included and it's answer must be empty.
