# Algorithm Reporting Standard

For the [Algorithm Management Toolkit (AMT)](../amt/index.md) we were looking for a standardized way to report on
algorithmic systems. Inspired by [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993) and
[Papers with Code Model Index](https://github.com/paperswithcode/model-index) the Algorithm Reporting Standard extends
the [Hugging Face model card metadata specification](https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1)
to allow for:

1. More fine-grained information on performance metrics.
2. Capturing additional *measurements* on fairness and bias, which can be partitioned into bar plot like
   measurements (such as mean absolute SHAP values) and graph plot like measurements (such as partial dependence).
3. Capturing *assessments* (such as
   [IAMA](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
   and [ALTAI](https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment)).

More information about the Algorithm Reporting Standard can be found on the GitHub repository
[github.com/MinBZK/algorithm-reporting-standard](https://github.com/MinBZK/algorithm-reporting-standard/). Here you can
also find information about the definition of the
[System Card](https://github.com/MinBZK/algorithm-reporting-standard/blob/main/reporting-standard/latest.md#system_card)
which contains
[Model Cards](https://github.com/MinBZK/algorithm-reporting-standard/blob/main/reporting-standard/latest.md#model_card) and
[Assessment Cards](https://github.com/MinBZK/algorithm-reporting-standard/blob/main/reporting-standard/latest.md#assessment_card).

[Algorithm Reporting Standard on GitHUB](https://github.com/MinBZK/algorithm-reporting-standard/){ .md-button }
