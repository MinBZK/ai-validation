# ADR-0010 Container Registry

## Context

Containers allow us to package and run applications in a standardized and portable way.
To be able to (re)use and share images, they need to be stored in a registry
that is accessible by others.

There are many container registries. During research the following registries have been noted:

[Docker Hub](https://hub.docker.com/),
[GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry),
[Amazon Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/),
[Azure Container Registry (ACR)](https://azure.microsoft.com/en-us/products/container-registry),
[Google Artifact Registry (GAR)](https://cloud.google.com/artifact-registry),
[Red Hat Quay](https://www.quay.io/),
[GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/),
[Harbor](https://goharbor.io/),
[Sonatype Nexus Repository Manager](https://www.sonatype.com/products/sonatype-nexus-repository),
[JFrog Artifactory](https://jfrog.com/help/r/jfrog-artifactory-documentation).

## Assumptions

* We do not want to host our own registry.
* The images we create can be kept private or publicly shared.
* For development and testing, images should be kept private to prevent accidental use of unfinished products.
* Images we provide are safe and secure. This means a container registry should have the option to (continuously) verify
the security status of an image.
* By configuration, tags can be made immutable, to prevent image tags from being overwritten.
* The registry keeps logs of events regarding containers.
* The registry needs to have a Role Based Access model.
* No additional sign up is required to pull the image
* We can use a kubernetes authorization token to pull images.
* The registry has support for scheduled deletion of images by criteria.

## Decision

We will use [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

This aligns best with the previously made choices for GitHub as a [code repository](0002-code-platform.md) and [CI/CD workflow](0003-ci-cd.md).

## Risks

Traditionally, Docker Hub has been the place to publish images. Therefore, our images may be more difficult to discover.

The following assumptions are not (directly) covered by the chosen registry:

* Security scans are not implemented by default, meaning we should find another solution to cover this,
for example by using a [GitHub Action](https://github.com/marketplace/actions/container-scan).
* Private packages are limited by space and an additional license may be required, see [Billing for GitHub Packages](https://docs.github.com/en/billing/managing-billing-for-github-packages/about-billing-for-github-packages).
* It is unclear if it is possible to overwrite tags.
* Removing images by criteria is not implemented by default, but could be solved using a [GitHub Action](https://github.com/bots-house/ghcr-delete-image-action).

## Consequences

By using GitHub Container Registry we have a container registry we can use both internally as well as share with others.
This has low impact, we can always move to another registry since
the [Open Container Initiative](https://opencontainers.org/about/overview/) is standardized.

## More Information

The following sites have been consulted:

* [Bluelight 'How to choose a container registry'](https://bluelight.co/blog/how-to-choose-a-container-registry)
* [G2 container-registry](https://www.g2.com/categories/container-registry)
* [slashdot container registries](https://slashdot.org/software/container-registries/)
* [Sourceforge Container Registries](https://sourceforge.net/software/container-registries/)
* [G2 Alternative Registries](https://www.g2.com/products/google-container-registry/competitors/alternatives)
* [Security controls for container registries](https://www.appsecengineer.com/blog/4-essential-security-controls-for-container-registries)
