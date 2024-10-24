# AMT-0008 System card Storage

## Context

By default, Kubernetes pods use ephemeral storage, which is tied to the pod's lifecycle.
When the pod terminates or restarts, all data is lost. The `/tmp/` directory, being part of
the system's temporary file storage, is cleared during reboots or pod restarts, resulting in
the deletion of system_cards. Therefore, we need a different kind of storage to preserve the data.

## Assumptions

* The system card data is small to moderate in size (up to 255MB), making it manageable to store
in databases (in postgres as well as in  in SQLite).
* Tracking changes to the system card data over time is not a priority in the short term, but may become
necessary in the future.

## Decision

The system card of an algorithm system is stored solely as a JSON blob in the projects table in Postgres,
with no additional storage elsewhere.

## Risks

* **Data Overwrite**: As the system card is overwritten with each update, it becomes difficult to track
historical changes or revert to previous states.
* **Scaling**: As the project grows, managing larger JSON blobs may present performance challenges,
particularly when handling complex queries.
* **Collaboration**: Collaborating on the system card content is more difficult, as the JSON format
requires parsing and manual intervention for certain tasks.
* **Limited Querying**: While Postgres supports querying and indexing JSON fields, complex queries and data manipulations
may be inefficient without proper indexing or further optimization.

## Consequences

### Positive

* **Fast implementation**: The solution is easy to set up, reducing the time to get the project operational.
* **Future proof**: This approach is designed with future scalability in mind. While system cards will initially
be stored in Postgres as JSONB blobs, we anticipate migrating to a Git-based local or remote storage solution
as the system evolves. Importantly, this initial decision allows for a seamless transition in the future,
ensuring no obstacles to migration.
* **Single source & Fast access**: Centralizing everything in a single Postgres database streamlines backups,
reduces maintenance complexity, and ensures quick data access.
* **Built-in permissions**: Postgres provides built-in access control and security through its permission system.

### Negative

* **Data tracking**: Changes to the system card are overwritten, making it difficult to maintain a history or audit trail.
* **Complex queries**: Complex queries can be inefficient and require custom parsing.
* **Collaboration**: Collaborating on the JSONB data is challenging due to its complex format and lack of version control.
* **Scalability**: As the JSONB blobs grow in size, the storage overhead and query performance may become significant issues.
* **Not supported by SQLite**: While SQLite supports JSON through its JSON1 extension, it does not support PostgreSQL's
JSONB data type natively, which complicates local development and testing environments that rely on SQLite as a database
backend.
