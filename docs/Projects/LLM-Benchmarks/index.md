# LLM Benchmarks

This document contains the design decisions behind the LLM Benchmarks the architectural diagrams and the technical
solution can be found [here](https://github.com/MinBZK/llm-benchmark).

The requirements of the solution are:

- People should be able to run the LLM Benchmark system locally
    - When the BIO does not allow the model to leave the digital organizational boundary
    - Locally we have to get the hash of the model as a version stamp
    - Most likely this will be a containerized version of the solution
- There should be an online version hosted by the ai-validation team for easy access and to promote transparency
    - This should be scalable as downloading models and verifying them could take a long time especially when supplying
    many people
- The preferable entrance would be that people have their model versioned through version control and published via
the [Dutch Algorithm Register](https://algoritmes.overheid.nl/nl)
    - In this way people would only need to provide the link to the model on the register and our solution would do the
    rest, the results of the benchmarks would also be posted on the Algorithm Register
- The LLM Benchmarks system does not store any data long-term, the benchmark results and models are stored at the
Algorithm Register
- An open LLM Benchmark dashboard like [Huggingface](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
would be a different solution built on top of the Database of the Algorithm Register

Extra requirements not vital for the technical solution:

- The specific Benchmarks that we have built/acquired would also be promoted on huggingface
- We seek the collaboration with [DUMB](https://dumbench.nl/) as this is closely related to what we want
