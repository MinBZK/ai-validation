# Research of tools for Transparency of Algorithmic Decision making

In our ongoing research on AI validation and transparency, we are seeking tools to support assessments.
Ideal tools would combine various technical tests with checklists and questionnaires and have the ability to generate
reports in both human-friendly and machine-exchangeable formats.

This document contains a list of tools we have found and may want to investigate further.

## AI Verify

AI Verify is an AI governance testing framework and software toolkit that validates the performance of AI systems against
a set of  internationally recognized principles through standardized tests, and is consistent with international AI governance
frameworks such as those from European Union, OECD and Singapore.

Links:
[AI Verify Homepage](https://aiverifyfoundation.sg/),
[AI Verify documentation](https://imda-btg.github.io/aiverify/),
[AI Verify Github](https://github.com/IMDA-BTG/aiverify).

## To investigate further

### VerifyML

**What is it?** VerifyML is an opinionated, open-source toolkit and workflow to help companies implement
human-centric AI practices. It seems pretty much equivalent to AI Verify.

**Why interesting?** The functionality of this toolkit seems to match closely with those of AI Verify.
It has a "git and code first approach" and has automatic generation of model cards.

**Remarks** The code seems to be last updated 2 years ago.

Links: [VerifyML](https://www.verifyml.com/),
[VerifyML GitHub](https://github.com/cylynx/verifyml)

### IBM Research 360 Toolkit

**What is it?** Open source Python libraries that supports interpretability and explainability of
datasets and machine learning models. Most relevant toolkits are the AI Fairness 360 and AI Explainability 360.

**Why interesting?** Seems to encompass extensive fairness and explainability tests. Codebase seems
to be active.

**Remarks** It comes as Python and R libraries.

Links: [AI Fairness 360 Github](https://github.com/Trusted-AI/AIF360),
[AI Explainability 360 Github](https://github.com/Trusted-AI/AIX360?tab=readme-ov-file).

### Holistic AI

**What is it?** Open source tool to assess and improve the trustworthiness of AI systems. Offers
tools to measure and mitigate bias across numerous tasks. Will be extended to include tools for
efficacy, robustness, privacy and explainability.

**Why interesting?** Although it is not entirely clear what exactly this tool does (see Remarks)
it does seem (according to their website) to provide reports on bias and fairness. The Github rep
does not seem to include any report generating code, but mainly technical tests.
[This tutorial](https://holisticai.readthedocs.io/en/latest/tutorials/measuring_bias_tutorials/measuring_bias_classification.html)
is an example in which bias is measured in a classification model.

**Remarks** Website seems to suggest the possibility to generate reports, but this is not directly
reflected in the codebase. Possibly reports are only available with some sort of licensed product?

Links:
[Holistic AI Homepage](https://www.holisticai.com/),
[Holistic AI Github](https://github.com/holistic-ai/holisticai).

### AI Assessment Tool

**What is it?** The tool is based on the [ALTAI](https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment)
published by the European Commission. It is more of a discussion tool about AI Systems.

**Why interesting?** Although it only includes questionnaires it does give an interesting way
of reporting the end results. Discussions on for example IAMA can be documented as well within the tool.

**Remarks** The tool of the EU itself is not open-source but the tool from Belgium is. Does not include
any technical tests at this point.

Links:
[AI Assessment Tool Belgium homepage](https://altai.ai4belgium.be/)
[AI Assessment Tool Belgium Github](https://github.com/AI4Belgium/ai-assessment-tool)

## Interesting to mention

* [What-if](https://github.com/pair-code/what-if-tool). Provides interface for expanding understanding
of a black-box classification or regression ML model. Can be accessed through TensorBoard or as an
extension in a Jupyter or Colab notebook. Does not seem to be an active codebase.

* [Aequitas](https://github.com/dssg/aequitas). Open source bias auditing and Fair ML toolkit.
This already seems to be contained within AI Verify, at least the
'[fairness tree](https://imda-btg.github.io/aiverify/how-to/use-fairness-tree/)'.

* [Facets](https://github.com/PAIR-code/facets). Open source toolkit for understanding and analyzing
ML datasets. Note that does not include ML models.

* [Fairness Indicators](https://github.com/tensorflow/fairness-indicators). Open source Python
package which enables easy computation of commonly-identified fairness metrics for binary and
multiclass classifiers. Part of TensorFlow.
k
* [Fairlearn](https://github.com/fairlearn/fairlearn). Open source Python package that empowers
developers of AI systems to assess their system's fairness and mitigate any observed unfairness
issues.

* [Dalex](https://dalex.drwhy.ai/). The DALEX package x-rays any model and helps to explore and
explain its behavior, helps to understand how complex models are working. The main function
explain() creates a wrapper around a predictive model. Wrapped models may then be explored and
compared with a collection of local and global explainers. Recent developments from the area of
Interpretable Machine Learning/eXplainable Artificial Intelligence.

* [SigmaRed](https://www.sigmared.ai). SigmaRed platform enables comprehensive third-party AI
risk management (AI TPRM) and rapidly reduces the cycle time of conducting AI risks assessments
while providing deep visibility, control, stakeholder based reporting, and detailed evidence repository.
Does not seem to be open source.

* [Anch.ai](https://anch.ai/about/). The end-to-end cloud solution empowers global data-driven
organizations to govern and deploy responsible, transparent, and explainable AI aligned with
upcoming EU regulation AI Act. Does not seem to be open source.

* [CredoAI](https://www.credo.ai/). Credo AI is an AI governance platform that helps companies adopt,
scale, and govern AI safely and effectively. Does not seem to be open source.

## The FATE system

Paper by TNO about the FATE system. Acronym stands for "FAir, Transparent and Explainable Decision Making."

Tools mentioned include some of the above: Aequitas, AI Fairness 360, Dalex, Fairlearn,
Responsibly, and What-If-Tool

Links:
[Paper](https://ceur-ws.org/Vol-2846/paper35.pdf),
[Article](https://www.sciencedirect.com/science/article/pii/S2666920X23000310),
[Microsoft links](https://www.sciencedirect.com/science/article/pii/S2666920X23000310).
