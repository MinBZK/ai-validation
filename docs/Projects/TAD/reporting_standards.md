# TAD Reporting standards
This document assesses standards that standardize the way algorithm assessments can be captured.

## Background
There are many algorithm assessments (IAMA, HUIDERIA, etc.), technical tests on performance (Accuracy, TP, FP, F1, etc),
fairness and bias of algorithms (SHAP) and reporting formats available. The goal is to have a way of standardizing the way these different
assessments and tests can be captured. 

## Available standards

### Model Cards
The most interesting existing capturing method seems to be [Model Cards for Model Reporting](https://arxiv.org/pdf/1810.03993.pdf),
which are "short documents accompanying trained machine learning models that provide benchmarked evaluation in a variety of conditions,
such as across different cultural, demographic, or phenotypic groups (e.g., race, geographic location, sex, Fitzpatrick skin type) and
intersectional groups (e.g., age and race, or sex and Fitzpatrick skin type) that are relevant to the intended application domains. Model
cards also disclose the context in which models are intended to be used, details of the performance evaluation procedures, and other relevant information",
proposed by Google.

An [implementation](https://huggingface.co/docs/hub/en/model-cards) of this paper exists on Hugging Face and is the standard way Hugging Face
provides information on the models available on their platform. Their [experimental tool](https://huggingface.co/spaces/huggingface/Model_Cards_Writing_Tool)
provides a UI to create a model card. Although the UI of this tool can certainly be improved, it might be the best starting point as a way 
to standardize algorithm assessments. Also the tool allows for up- and dowloading assessments from and to markdown. 

### Other standards
[A landscape analysis of machine learning documentation tools](https://huggingface.co/docs/hub/en/model-card-landscape-analysis) has been
performed by Hugging Face and provides a good overview of the current landscape.

Another interesting standard is the [Algorithmic Transparency Recording Standard (ATRS)](https://www.gov.uk/government/publications/algorithmic-transparency-template)
of the United Kingdom Goverment. 


## Proposal
Take the Hugging Face Model Cards as a base for our own standard. The Model Cards needs to be extended to be able to caputre 
assessments like IAMA. The above mentioned experimental tool can be a good example of the functionalities that we would like
to have in to process our standard, although the tool can certainly be improved for example by supporting de/serialization
to different formats and by adjusting availbe evaluation, fairness and bias tests depending on the chosen model task.

