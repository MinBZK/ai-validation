# LLL-Benchmark project

Large Languages Models (LLM's) are becoming increasingly popular in assisting people in
variety of tasks. These tasks include, but are not limited to, information retrieval, assisting with
coding and essay writing. For example, in the context of government tasks include: supporting FOIA
requests, answering questions of citizens.

While the potential benefit of LLM's is large, there are also significant risk
associated with their usage. Basically an LLM is just a next token predictor, which bases its
predictions on the user input (context) and on the compressed information seen during training (represented
by the LLM parameters); hence there is no guarantee on the correctness of the output. Moreover, due to
bias in the training data, LLM's can have bias in their output as well, despite best efforts
to mitigate this. Additionally, we have human values that we expect LLM's to be aligned with.
Certainly, within in the context of a government, we should take utmost care not to discriminate.
To assess the quality, correctness, bias and alignment with human values of the LLM's one can perform
benchmarks.

## The project

The LLM-benchmark project of the AI-Validation Team of the Ministry of the Interior and Kingdom
Relations of the Government of the Netherlands aims to create a platform where LLM's can be measured
across a wide range of benchmarks. Both LLM's and the benchmarks can be configured by users of the platform.
The intended goal of this project is to give government organizations, citizens, and companies insight in the various
LLM's and their bias and alignment with human values. The project also encompasses a dashboard with
uploaded LLM's and their performance on uploaded benchmarks. With this platform we aim to enhance
public trust in the usage of LLM's and expose potential bias that exists within LLM's.
