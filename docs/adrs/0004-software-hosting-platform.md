# ADR-0004 Software hosting platform

## Context

Our team recognizes the necessity of a platform to run our software, as our local machines lack the capacity to handle
certain workloads effectively. We have evaluated several options available to us:

1. Digilab Kubernetes
2. Logius Kubernetes
3. SSC-ICT VMs
4. ODC Noord

## Assumptions

We operate under the following assumptions:

- High availability is not a critical requirement for our software.
- Our team prioritizes low maintenance solutions.

## Decision

We will use [Digilab Kubernetes](https://digilab.overheid.nl/) for our workloads.

## Consequences

By choosing Digilab Kubernetes, we gain access to a namespace within their managed Kubernetes cluster. However, it's
important to note that Digilab does not provide any guarantees regarding the availability of the cluster. Should our
software require higher availability assurances, we may need to explore alternative solutions.
