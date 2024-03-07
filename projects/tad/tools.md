# Research of tools for transparency of algorithmic decision making

In our ongoing research on AI validation and transparency, we are seeking tools to support assessments.
Ideal tools would combine various technical tests with checklists and questionnaires and have the ability to generate
reports in both human-friendly and machine-exchangeable formats.

This document contains a list of tools we have found and may want to investigate further.

## AI Verify

AI Verify is an AI governance testing framework and software toolkit that validates the performance of AI systems against
a set of  internationally recognised principles through standardised tests, and is consistent with international AI governance
frameworks such as those from European Union, OECD and Singapore.

Links:
[AI Verify Homepage](https://aiverifyfoundation.sg/)
[AIVerify documentation](https://imda-btg.github.io/aiverify/)
[AIVerify Github](https://github.com/IMDA-BTG/aiverify)

## AI Assessment Tool Belgium

The tool is based on the ALTAI recommendations published by the European Commission and is designed to help
organizations ensure their AI systems are transparent, robust, and trustworthy.

Links:
[Altai Homepage](https://altai.ai4belgium.be/)
[Altai Github](https://github.com/AI4Belgium/ai-assessment-tool)

## Fate (toolkit?)

Tools mentioned: Aequitas, AI Fairness 360, Dalex, Fairlean, Responsibly, and What-If-Tool

[Paper](https://ceur-ws.org/Vol-2846/paper35.pdf)
[Article](https://www.sciencedirect.com/science/article/pii/S2666920X23000310)
[Microsoft links](https://www.sciencedirect.com/science/article/pii/S2666920X23000310)

## Market research preliminary results

* [AI Assessment Tool Belgium](https://altai.ai4belgium.be/). Looks more like a tool to manage
answers to the ALTAI recommendations, instead of providing detailed technical reports on
technical explainability.

* [Aequitas](https://github.com/dssg/aequitas). Open source bias auditing and Fair ML toolkit.
This already seems to be contained within AI-verify, at least the
'[fairness tree](https://imda-btg.github.io/aiverify/how-to/use-fairness-tree/)'.

* IBM Research 360 Degree Toolkit ([AI Fairness 360](https://github.com/Trusted-AI/AIF360),
[AI Explainability 360](https://github.com/Trusted-AI/AIX360?tab=readme-ov-file)). Open source
Python libraries that supports interpretability and explainability of datasets and machine learning
models.

* [Facets](https://github.com/PAIR-code/facets). Open source toolkit for understanding and analyzing
machine learning datasets.

* [What-if](https://github.com/pair-code/what-if-tool). Provides interface for expanding understanding
of a black-box classifaction or regression ML model. Can be accessed through TensorBoard or as an
extension in a Jupyter or Colab notebook.

* [Fairness Indicators](https://github.com/tensorflow/fairness-indicators). Open source Python
package which enables easy computation of commonly-identified fairness metrics for binary and
multiclass classifiers.

* [Fairlearn](https://github.com/fairlearn/fairlearn). Open source Python package that empowers
developers of AI systems to assess their system's fairness and mitigate any observed unfairness
issuess.

* [Hollisticai](https://github.com/holistic-ai/holisticai). Open source tool to assess and improve
the trustworthiness of AI systems. Offers tools to measure and mitigate bias across numerous tasks.
Will be extended to include tools for efficacy, robustness, privacy and explainability.
