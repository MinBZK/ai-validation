# Comparison of tools for transparency of algorithmic decision making

[We have researched](tools.md) a few tools which we want to investigate
further, this document is the next step in that investigation.
We created a [checklist](index.md) to compare these tools against.
The Fulfilled column will give a numerical value based on whether that
requirement is fulfilled or not between 0 and 1. Then the actual scoring
is the fulfilled value times the priority (the priority is translated
to numerical values in the following way: {M:4, S:3, C:2, W:-1}).

## Summary of the comparison

| Requirement            | [AIVerify](../Checklists/aiverify_checklist.md) | [VerifyML](../Checklists/verifyml_checklist.md)  | [IBM 360 Research Toolkit](../Checklists/ibm_360_research_toolkit_checklist.md)  | [Holisticai](../Checklists/holisticai_checklist.md) | [AI Assessment Tool](ai_assessment_tool_checklist.md) |
|:-----------------------|:----------------------------------|------------------------------------|--------------------------------------------------------------------|---------------------------------------|-------------------------------------------------------|
| Functionality          | 36                                | 42                                 | 20                                                                 | 17                                    | 22.85                                                 |
| Reliability            | 13                                | 4                                  | 16                                                                 | 16                                    | 15.4                                                  |
| Usability              | 9.4                               | 0                                  | 0                                                                  | 0                                     | 13                                                    |
| Help & Documentation   | 2.8                               | 1.5                                | 6.4                                                                | 1.6                                   | 0.55                                                  |
| Performance Efficiency | 7.5                               | 11                                 | 11                                                                 | 11                                    | 11                                                    |
| Maintainability        | 15.8                              | 24.5                               | 29                                                                 | 23.5                                  | 25.6                                                  |
| Security               | 8.3                               | 2                                  | 2                                                                  | 2                                     | 7.5                                                   |
| Compatibility          | 12.5                              | 14                                 | 14                                                                 | 10                                    | 11                                                    |
| Accessibility          | 0                                 | 0                                  | 0                                                                  | 0                                     | 0.3                                                   |
| Portability            | 10.5                              | 4.5                                | 5.1                                                                | 7.5                                   | 11.4                                                  |
| Deployment             | 1.5                               | 0.6                                | 1.2                                                                | 3.6                                   | 3                                                     |
| Legal & Compliance     | 19                                | 16                                 | 16                                                                 | 16                                    | 19                                                    |
| **Total**              | **136.3**                         | **120.1**                          | **120.7**                                                          | **108.2**                             | **140.6**                                             |

## Notable differences between the tools

AIVerify notes:

- Technical tests are supported, but it can be quite slow because of overhead of the tool

- More flexibility would need to be built in before people could use the technical tests

    - If you have many variables you are not able to show it in the pdf

    - The error messages in why technical tests don't work on the model are not user-friendly

VerifyML notes:

- This tool is not actively developed anymore, parties transferred their focus to AIVerify

- This tool does not support for assessments

IBM 360 toolkit notes:

- The toolkit has a strong backing of the industry and the community

- There are many technical tests included from the latest research, and also supports mitigation algorithms

- It is purely for developers and has therefore no support for assessments

HolisticAI:

- Like IBM 360 Toolkit it does differentiate to different type of technical assessments like bias and explainability,
but it is less extensive than the 360 toolkit

- The ambition is large of HolisticAI, they want to capture, Efficacy, Robustness, and Privacy tests as well

- It is a private company from the United Kingdom which has open sourced part of their tool

AI Assessment Tool:

- This tool does not have any technical tests, but outshines the others with the discussion on assessment option

- It is also very performant

## Summary per tool in one sentence

- `AIVerify` is a tool with a UI to execute both assessments and technical tests.

- `VerifyML` is a Python package to generate Model Cards.

- `HolisticAI` is a Python package to test for and mitigate Bias in your model.

- `IBM 360 Research Toolkit` is a Python and R package to test for Fairness & Explainability of your model.

- `AI Assessment Tool` is a tool with a UI to execute assessments and log discussions.
