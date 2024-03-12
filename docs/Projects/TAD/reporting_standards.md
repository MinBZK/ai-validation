# TAD Reporting standards
This document assesses standards that standardize the way algorithm assessments can be captured.

## Background
There are many algorithm assessments (e.g. IAMA, HUIDERIA, etc.), technical tests on performance (e.g. Accuracy, TP, FP, F1, etc),
fairness and bias of algorithms (e.g. SHAP) and reporting formats available. The goal is to have a way of standardizing the way these different
assessments and tests can be captured.

## Available standards

### Model Cards
The most interesting existing capturing methods seem to be all based on [Model Cards for Model Reporting](https://arxiv.org/pdf/1810.03993.pdf),
which are:
>"Short documents accompanying trained machine learning models that provide benchmarked evaluation in a variety of conditions,
>such as across different cultural, demographic, or phenotypic groups (e.g., race, geographic location, sex, Fitzpatrick skin type) and
>intersectional groups (e.g., age and race, or sex and Fitzpatrick skin type) that are relevant to the intended application domains. Model
>cards also disclose the context in which models are intended to be used, details of the performance evaluation procedures, and other relevant information",
>proposed by Google. Note that "The proposed set of sections" in the Model Cards paper "are intended to provide relevant details to consider, but are not intended to be complete or
>exhaustive, and may be tailored depending on the model, context, and stakeholders."

Many companies implement their own version of Model Cards, for example 
[Meta System Cards](https://ai.meta.com/blog/system-cards-a-new-resource-for-understanding-how-ai-systems-work/) (with accompanying 
[Research Paper](https://scontent-ams2-1.xx.fbcdn.net/v/t39.2365-6/277534097_2440637952739403_7120117370014241056_n.pdf?_nc_cat=110&ccb=1-7&_nc_sid=3c67a6&_nc_ohc=Aninj9n8dZkAX-taf6n&_nc_oc=AQljYgl-KvN8tKF_A8bcdgcBT_deV0wFzI06r_P7sZODn4m3T3YUJKVb1SWDGtdjOus&_nc_ht=scontent-ams2-1.xx&oh=00_AfAhz7YW2blPavGIzs-cOXyLMQnb-xjkc4nTuT4zKdif6w&oe=65F48231)) and the tools mentioned in the next section.

#### Automatic model card generation
There exist tools to (semi)-automatically generate models cards:
1. [Model Card Generator by US Sensus Bureau](https://bias.xd.gov/resources/model-card-generator/). Basic UI to create model cards and export to markdown, also hase a command line tool.
2. [Model Card Toolkit by Google](https://blog.research.google/2020/07/introducing-model-card-toolkit-for.html). Automation only comes from integration with [TensorFlowExtended](https://www.tensorflow.org/tfx) and [ML Metadata](https://www.tensorflow.org/tfx/guide/mlmd).
3. [VerifyML](https://github.com/cylynx/verifyml?tab=readme-ov-file). Based on the Google toolkit, but is extended to include specific tests on fairness and bias. Technical tests can be added by users and model card schema (in protobuf) can be extended by users.
4. [Experimental Model Cards Writing Tool by Hugging Face](https://huggingface.co/spaces/huggingface/Model_Cards_Writing_Tool). This is the implementation of the Google paper by Hugging Face and provides information on the models available on their platform. The writing tools guides users through their model card and allows for up- and downloading from and to markdown.

### Other standards
[A landscape analysis of machine learning documentation tools](https://huggingface.co/docs/hub/en/model-card-landscape-analysis) has been
performed by Hugging Face and provides a good overview of the current landscape.

Another interesting standard is the [Algorithmic Transparency Recording Standard (ATRS)](https://www.gov.uk/government/publications/algorithmic-transparency-template)
of the United Kingdom Goverment. 

## Proposal
We need a standard that captures algorithmic assessments and technical tests on model and datasets. The idea of [model cards](https://arxiv.org/pdf/1810.03993.pdf) can serve as a guiding theoretical principle on how to implement such a standard. More specifically, we can draw inspiration from the existing model card schema's and implementations of [VerifyML](https://github.com/cylynx/verifyml?tab=readme-ov-file) and [Hugging Face](https://huggingface.co/spaces/huggingface/Model_Cards_Writing_Tool). We note the following:
1. None of these two standards capture algorithmic assessments.
2. Only VerifyML has a specific format to capture some technical tests.

Hence in any case we need to extend one of these standards. We propose to:

1. Assess and compare these two standards
2. Chose the most appropriate one to extend
3. Extend (and possibly adjust) this standard to our own standard (in the form of a basic schema) that allows for capturing algorithmic assessments and standardizes the way technical tests can be captured.