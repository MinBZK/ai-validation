# AMT-0005 Add support to run technical tests via AI Verify

## Context

The [AI Verify project](https://github.com/aiverify-foundation/aiverify) is set up in a modular way, and the
technical tests is one of the modules. The AI Verify
team is developing a feature which makes it possible to run the technical tests using an API: a Python library with
a method to run a test and providing the required configuration; for example, which  model and dataset to use and
some test specific configuration.

The result of the test are returned in a JSON format,
which can be processed in any way we please, like writing it to a file or System Card or store it in a database.

### Pros

* We have several technical tests we can use of the shelf, like SHAP, ALE, or Fairness metrics.
* Tests are set up in a generic way using interfaces which allows others, like ourselves, to create and add
 their own plugins.
* Loading models, pipelines and data is done through the AI Verify toolkit, which not only streamlines this process
 but also performs validation and support checks.
* We benefit from new tests being added in the future.

### Cons

* The outcome of an AI Verify test depends on the implementation chosen by the developer of the
 plugin. This means there is no control or flexibility over what data (metrics, logs etc.) is
 included in the output.
* Adding our own plugins may require adding AI Verify frontend components we don't use ourselves.
* We are dependent on the AI Verify ecosystem for supported models and data formats. However, they are
 (like us) planning to expand model support to also include ONNX and we can contribute ourselves to support
 a wider range of models and data formats.
* Running pipeline tests requires familiarity with the toolkit's pipeline handling mechanisms.

## Assumptions

* We can wrap the API and other AI Verify requirements in a Docker image.
* We can run the Docker image independently where we only have to provide the model, datasets and other
 required configuration to run a test.
* We can monitor the progress of a test in our AMT tool.
* We can process the results of a test in our AMT tool.

## Decision

Our technical tests will include, but may extend beyond, those offered by AI Verify.

## Risks

The tests we use from AI Verify are tied to the AI Verify ecosystem. So it uses their (core) modules
to load models and datasets. Adding support for other models or data formats, like models written in R, has to
be done in the AI Verify core.

## Consequences

We have a set of technical tests we can integrate in the AMT tool.
