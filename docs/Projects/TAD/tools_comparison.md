# Comparison of tools for transparency of algorithmic decision making

In [tools.md](tools.md) we have researched a few tools which we want to
investigate further, this document is the next step in that investigation.
The checklist we will lay these tools against is written down at
[index.md](index.md). The Fulfilled column will give a numerical value based
on the priority which can then be compared with the other tools per section.
The scoring is as follows: {M:4, S:3, C:2, W:-1}.

## Summary of the comparison

| Requirement            | AIVerify Score | VerifyML Score | IBM 360 Research Toolkit Score | Hollisticai Score | ALTAI Score |
|:-----------------------|:---------------|----------------|--------------------------------|-------------------|-------------|
| Functionality          | 36             | 42             |                                |                   |             |
| Reliability            | 13             | 4              |                                |                   |             |
| Usability              | 9.4            | 0              |                                |                   |             |
| Help & Documentation   | 2.8            | 1.5            |                                |                   |             |
| Performance Efficiency | 7.5            | 11             |                                |                   |             |
| Maintainability        | 15.8           | 44.5           |                                |                   |             |
| Security               | 8.3            | 2              |                                |                   |             |
| Compatibility          | 12.5           | 14             |                                |                   |             |
| Accessibility          | 0              | 0              |                                |                   |             |
| Portability            | 7.5            | 4.5            |                                |                   |             |
| Deployment             | 1.5            | 0.6            |                                |                   |             |
| Legal & Compliance     | 19             | 16             |                                |                   |             |
| **Total**              | **133.3**      | **140.1**      | ****                           | ****              | ****        |

The scores are calculated in these individual markdowns
[aiverify_checklist.md](aiverify_checklist.md),
[verifyml_checklist.md](verifyml_checklist.md),
[ibm_360_research_toolkit_checklist.md](ibm_360_research_toolkit_checklist.md),
[hollisticai_checklist.md](hollisticai_checklist.md),
[altai_checklist.md](altai_checklist.md).
The scoring is done by an individual, for extra context the
comment section in the checklist for that tool can be questioned.

## Notable differences between the tools

AIVerify notes:

- Technical tests are supported, but it can be quite slow because of overhead of the tool

- More flexibility would need to be built in before people could use the technical tests

    - If you have many variables you are not able to show it in the pdf

    - The error messages in why technical tests don't work on the model are not user-friendly

VerifyML notes:

- This tool is not actively developed anymore, parties transferred their focus to AIVerify

- This tool does not support for assessments

## Summary per tool in one sentence

- `AIVerify` is a tool with a UI to execute both assessments and technical tests.

- `VerifyML` is a Python package to generate Model Cards.

- `HollisticAI` is a Python package to test for and mitigate Bias in your model.

- `IBM 360 Research Toolkit` is a Python and R package to test for Fairness & Explainability of your model.

- `ALTAI` is a tool with a UI to execute assessments and log discussions.
