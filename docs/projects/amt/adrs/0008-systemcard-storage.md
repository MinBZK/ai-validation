# AMT-0008 System card Storage

## Context

By default, Kubernetes pods use ephemeral storage for their containers. This storage is tied to the
lifecycle of the pod. Thus, when the pod terminates or restarts, the data is lost.
The /tmp/ directory is part of the system's temporary file storage. Files stored here are wiped out
upon system reboots or restarts of pods. This leads to the deletion of the system_cards, which would
need to be recreated or fetched again.

## Assumptions

* The system card data is small to moderate in size and fits within the capabilities of Postgres' JSONB storage.
* Tracking changes to the system card data over time is not a priority in the short term, but may become
necessary in the future.
* Fast access and transactional integrity are critical requirements for the system.

## Decision

A Algorithm Systems system card is stored solely as a JSONB blob in the projects table in Postgres,
with no additional storage elsewhere.

## Risks

* **Data Overwrite**: As the system card is overwritten with each update, it becomes difficult to track
historical changes or revert to previous states.
* **Scaling**: As the project grows, managing larger JSONB blobs may present performance challenges,
particularly when handling complex queries.
* **Collaboration**: Collaborating on the system card content is more difficult, as the JSONB format
requires parsing and manual intervention for certain tasks.
* **Limited Querying**: While Postgres supports querying JSONB, complex queries and data manipulations
may be inefficient without proper indexing or further optimization.

## Consequences

### Positive

* **Fast implementation**: The solution is easy to set up, reducing the time to get the project operational.
* **Future proof**: This approach is designed with future scalability in mind. While system cards are initially
stored in Postgres as JSONB blobs, the plan to transition to a persistent volume with versioned YAML files
managed through Git ensures easy adaptation. The future migration to a remote Git-based storage system offers
enhanced version control, collaboration, and auditing, with minimal disruption to existing workflows.
* **Fast access**: Storing the data in Postgres ensures fast access, as everything is contained within a single source.
* **Single source**: Keeping everything in one database simplifies backups and maintenance.
* **Built-in permissions**: Postgres provides built-in access control and security through its permission system.

### Negative

* **Data tracking**: Changes to the system card are overwritten, making it difficult to maintain a history or audit trail.
* **Complex queries**: Complex queries, especially those involving nested data or formulas in the JSONB blob,
can be inefficient and require custom parsing.
* **Collaboration**: Team members face difficulties working collaboratively on the JSONB data due to its format and
lack of versioning.
* **Scalability**: As the JSONB blobs grow in size, the storage overhead and query performance may become significant issues.
