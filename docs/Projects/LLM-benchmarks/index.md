# LLM-Benchmark project

## Context

Large Languages Models (LLMs) are becoming increasingly popular in assisting people in
a variety of tasks. These tasks include, but are not limited to, information retrieval, assisting with
coding and essay writing. In the context of the government, tasks can include for example supporting
Freedom of Information Act (FOIA) requests and aiding in answering questions of citizens.

While the potential benefit of using LLMs is large, there are also significant risks.
Basically an LLM is just a next token predictor, which bases its predictions on the user input (context) and
on compressed information seen during training (LLM parameters); hence there
is no guarantee on the quality and correctness of the output. Moreover, due to
bias in the training data, LLMs can have bias in their output, despite best efforts
to mitigate this. Additionally, we have human values that we expect LLMs to be aligned with.
Certainly, within the context of a government, we should take utmost care not to discriminate.
To assess the quality, correctness, bias and alignment with human values of an LLM one can perform
benchmarks.

## The project

The LLM-benchmark project of the AI-Validation Team aims to create a platform where LLMs can be measured
across a wide range of benchmarks. We limit ourselves to LLMs and benchmarks that are related to the
Dutch society. Both LLMs and the benchmarks can be configured by users of the platform.
Users can run these benchmarks on LLMs on our platform. The intended goal of this project is to give government
organizations, citizens and companies insight in the various LLMs and their quality, correctness, bias and
alignment with human values. The project also encompasses a dashboard with uploaded LLMs and their performance
on uploaded benchmarks. With this platform we aim to enhance public trust in the usage of LLMs and expose
potential bias that exists within LLMs.
