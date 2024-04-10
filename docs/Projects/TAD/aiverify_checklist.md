# AI Verify

Introduction is written here [tools.md](tools.md#ai-verify)

## Functionality

| Requirement                                                                                                                                                                                       | Priority  | Fulfilled | Comments                                                                                                                                                                                |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool allows users to conduct technical tests on algorithms or models, including assessments of performance, bias, and fairness. To facilitate these tests, users can input relevant datasets, | M         | 1         | This is core functionality of AIVerify                                                                                                                                                  |
| The tool allows users to choose which tests to perform.                                                                                                                                           | M         | 1         | This is core functionality of AIVerify                                                                                                                                                  |
| The tool allows users to fill out questionnaires to conduct impact assessments for AI. For example IAMA or ALTAI.                                                                                 | M         | 1         | This is core functionality of AIVerify, however work is needed to add extra impact assessments                                                                                          |
| The tool can generate a human readable report.                                                                                                                                                    | M         | 1         | This is core functionality of AIVerify                                                                                                                                                  |
| The tools works with a standardized report format, that it can read, write, and update.                                                                                                           | M         | 0         | The outputted format is a [PDF format](https://imda-btg.github.io/aiverify/user-interface-features/report-generating-page/), so this cannot be updated, or easily read by a machine.    |
| The tool supports plugin functionality so additional tests can be added easily.                                                                                                                   | S         | 0.5       | One can add a test as a [plugin](https://imda-btg.github.io/aiverify-developer-tools/plugins/), it can however be a bit too technical still for many people.                            |
| The tool allows to create custom reports based on components.                                                                                                                                     | S         | 1         | One can slide the technical tests results and the assessment test results into a report which will be placed into a PDF                                                                 |
| It is possible to add custom components for reports.                                                                                                                                              | S         | 1         | It is possible, but just like with tests can be hard for non-technical people                                                                                                           |
| The tool provides detailed logging, including tracking of different model versions, changes in impact assessments, and technical test results for individual runs.                                | S         | 0.5       | There are versions of models when uploaded, and the report itself is the technical test result of a run. Changes to impact assessments are not logged (only when a report is generated) |
| The tool supports saving progress.                                                                                                                                                                | S         | 1         | Reports can be saved, while it is being constructed                                                                                                                                     |
| The tool can be used on an isolated system without an internet connection.                                                                                                                        | S         | 1         | Locally the docker container can be build and ran                                                                                                                                       |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C         | 0         | Only the end-result will be logged into the report                                                                                                                                      |
| The tool operates with complete data privacy; it does not share any data or logging information.                                                                                                  | C         | 1         | The application is a docker application and does not do this                                                                                                                            |
| The tool allows extension of report formats functionality.                                                                                                                                        | C         | 1         | We could program this functionality in the tool and submit a PR                                                                                                                         |
| The tool can be integrated in a CI/CD flow.                                                                                                                                                       | C         | 0.5       | It is possible, but would be very heavy to do so. The build time is quite large, and only the technical tests could be ran in an automated fashion                                      |
| The tool can be offered as a (cloud) service where no local installation is required.                                                                                                             | C         | 0         | AIVerify is currently not doing this, we could however offer it as a cloud service                                                                                                      |
| It is possible to define and automate workflows for repetitive tasks.                                                                                                                             | C         | 0         | As this tool is focused on UI, this is not possible                                                                                                                                     |
| The tool offers pre-built connectors or low-code/no-code integration options to simplify the integration process.                                                                                 | C         | 0         | This is not included                                                                                                                                                                    |

total_score = 36

## Reliability

| Requirement                                                                                                                            | Priority | Fulfilled | Comments                                                                                                                                                                                                                 |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool operates consistently and reliably, meaning it delivers the same expected results every time you use it.                      | M        | 1         | The tool did not break down a single time while we were coding a plugin (only threw errors)                                                                                                                              |
| The tool recovers automatically from common failures.                                                                                  | S        | 1         | Common failures like missing datasets or models are not breaking                                                                                                                                                         |
| The tool recovers from failures quickly, minimizing data loss, for example by automatically saving intermediate test progress results. | S        | 0.5       | The assessments you need to manually save otherwise it will be lost, but over different sessions the data will be stored persistent even if the containers go down. Test results are only stored in the generated report |
| The tool handles errors gracefully and informs users of any issues.                                                                    | S        | 1         | When failed to generate a report the tool will log the error messages, otherwise when loading in data that is non existing the application (while not being very clear in error message) just continues with an error    |
| The tool provides clear error messages and instructions for troubleshooting.                                                           | S        | 0.5       | The test-engine-core is a dependency that is installed as a package, and therefore the error message will not contain error in that package                                                                              |

total_score = 13

## Usability

| Requirement                                                                                         | Priority | Fulfilled | Comments                                                                                                                                                             |
|:----------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool possess a clean, intuitive, and visually appealing UI that follows industry standards.     | S        | 1         | The tool does follow the material design principes for example when you hover over items they will respond to user input                                             |
| The tool provides clear and consistent navigation, making it easy for users to find what they need. | S        | 0.5       | It is not completely clear where in the tool you are when interacting with it and sometimes you could go back to home but not always                                 |
| The tool is responsive and provides instant feedback.                                               | S        | 1         | Even for jobs like generating tests and the report, it scheduled jobs and will notify you when it is done                                                            |
| The user interface is multilingual and supports at least English.                                   | S        | 0.5       | Currently it only supports english                                                                                                                                   |
| The tool offers keyboard shortcuts for efficient interaction.                                       | C        | 0         | It is mainly UI and therefore no keyboard shortcuts                                                                                                                  |
| The user interface can easily be translated into other languages.                                   | C        | 0.2       | It would need quite some refactoring when adding support for the Dutch Language (especially the more technical words like Warning or the metadata on all the plugins |

total_score = 9.4

## Help & Documentation

| Requirement                                                                                                                                                            | Priority | Fulfilled | Comments                                                                                                                                                                                                               |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool provides comprehensive online help documentation with searchable functionalities.                                                                             | S        | 0.8       | From the [end-user](https://imda-btg.github.io/aiverify/how-to/connect-to-ai-model-api/) perspective yes, from the development perspective no (for example that you need to rebuild packages like the test-engine-core |
| The tool offers context-sensitive help within the application.                                                                                                         | C        | 0         | Not included in the tool                                                                                                                                                                                               |
| The online documentation includes video tutorials and training materials for ease of learning.                                                                         | C        | 0         | Although it contains many images                                                                                                                                                                                       |
| The project provides readily available customer support through various channels  (e.g., email, phone, online chat) to address user inquiries and troubleshoot issues. | C        | 0.2       | Just email, which they do not respond to very quickly                                                                                                                                                                  |

total_score = 2.8

## Performance Efficiency

| Requirement                                                              | Priority | Fulfilled | Comments                                                                                                                                                                                                    |
|:-------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool operates efficiently and minimize resource utilization.         | M        | 0.5       | The tool is efficient, minimal waiting and no lagg although it uses up quite some resources which could be optimized                                                                                        |
| The tool responds to user actions instantly.                             | M        | 1         | Instantaneous response time                                                                                                                                                                                 |
| The tool is scalable to accommodate increased user base and data volume. | S        | 0.5       | As it is built into a container it can be made scalable with Kubernetes, but the the tool itself can become very slow when generating results for a large dataset and model (because of the extra overhead) |

total_score = 7.5

## Maintainability

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                       |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------------------------------------------------------------------------------------------|
| The tool is easy to modify and maintain.                                                                             | M        | 0.2       | Adding a new plugin for a model type was quite hard, other plugins however are more easier                     |
| The tool adheres to industry coding standards and best practices to ensure code quality and maintainability.         | M        | 0.2       | The docker side of the project could have a big improvement                                                    |
| The code is written in a common, widely adopted and supported and actively used and maintained programming language. | M        | 1         | Backend in Python, Frontend in NextJs                                                                          |
| The project provides version control for code changes and rollback capabilities.                                     | M        | 0.8       | The code is stored on Github, but the container itself not and also the packages which the tools depend on not |
| The project is open source.                                                                                          | M        | 1         | [Github link](https://github.com/IMDA-BTG/aiverify)                                                            |
| It is possible to contribute to the source.                                                                          | S        | 0.5       | It is possible, although with our three features it takes a while for them to dedicated time for integration   |
| The system is modular, allowing for easy modification of individual components.                                      | S        | 0.5       | The techincal tests and assessments are easy to adjust, other core features not                                |
| Diagnostic tools are available to identify and troubleshoot issues.                                                  | S        | 0         | Diagnosing some parts of the system took us quite some time as we couldn't properly debug in the containers    |

total_score = 15.8

## Security

| Requirement                                                                                                                            | Priority | Fulfilled | Comments                                                                                                                                          |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool must protect data and system from unauthorized access, use, disclosure, disruption, modification, or destruction.             | M        | 0.5       | This managed by that the data is stored in MongoDB however, it currently only has 1 user support                                                  |
| Regular security audits and penetration testing are conducted.                                                                         | S        | 0.1       | We are unaware of the security audits but they do have a security policy [here](https://github.com/IMDA-BTG/aiverify?tab=security-ov-file#readme) |
| The tool enforce authorization controls based on user roles and permissions, restricting access to sensitive data and functionalities. | C        | 0         | Currently only 1 user can use the system and see all the data                                                                                     |
| Data encryption is used for sensitive information at rest and in transit.                                                              | C        | 1         | When data is transferred to mongoDB, a secure connection is set-up and also in the DB it is encrypted by MongoDB                                  |
| The project allows for regular security audits and penetration testing to identify vulnerabilities and ensure system integrity.        | C        | 1         | As you can install it locally, this is possible                                                                                                   |
| The tool implements backup functionality to ensure data availability in case of incidents.                                             | C        | 1         | Data is stores persistent, so even if the tool breaks the data will be in volumes                                                                 |

total_score = 8.3

## Compatibility

| Requirement                                                                                                                | Priority | Fulfilled | Comments                                                                                                                                 |
|:---------------------------------------------------------------------------------------------------------------------------|:---------|-----------|------------------------------------------------------------------------------------------------------------------------------------------|
| The tool is compatible with existing systems and infrastructure.                                                           | M        | 1         | As it is a container it can run on Kubernetes and therefore at Digilab                                                                   |
| The tool supports industry-standard data formats and protocols.                                                            | M        | 1         | Most Datasets and Models are supported by the tool                                                                                       |
| The tool operates seamlessly on supported operating systems and hardware platforms.                                        | S        | 1         | As it runs in a container it is able to run on all the major OS'es if you have Docker Desktop or use a cloud version managed by yourself |
| The tool supports commonly used data formats (e.g., CSV, Excel, JSON) for easy data exchange with other systems and tools. | S        | 0.5       | As input many types are accepted, but only as export there is a PDF report                                                               |
| The tool integrates with existing security solutions.                                                                      | C        | 0         | It does not integrate with security solutions                                                                                            |

total_score = 12.5

## Accessibility

| Requirement                                                                                                                                                                        | Priority | Fulfilled | Comments                                                                                                                                                                                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool is accessible to users with disabilities, following relevant accessibility standards (e.g., [WCAG](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag)). | S        | 0         | It is not clear what the tool actually does with one look, also the color change when hovering over elements is not a large difference compared to the original color (the purple and pink) |

total_score = 0

## Portability

| Requirement                                                                                                                 | Priority | Fulfilled | Comments                                                                                                                                                  |
|:----------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool support a range of operating systems (e.g., Windows, macOS, Linux) commonly used within an organization.           | S        | 0         | Only runs well in a Linux Container                                                                                                                       |
| The tool minimizes dependencies on specific hardware or software configurations, promoting flexibility.                     | S        | 1         | This is all containerized                                                                                                                                 |
| The tool offers a cloud-based deployment option or be compatible with cloud environments for scalability and accessibility. | S        | 1         | As it is containerized we could host this ourselves in a cloud environment                                                                                |
| The tool adheres to relevant cloud security standards and best practices.                                                   | S        | 0.5       | The making of the container it self is lacking some best practices, otherwise the cloud security standards are not applicable as it is a self-hosted tool |

total_score = 7.5

## Deployment

| Requirement                                                                                                              | Priority | Fulfilled | Comments                                                                                  |
|:-------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------------|
| The tool has an easy and user-friendly installation and configuration process.                                           | S        | 0.5       | You need to be technical to be able to install and deploy, but then it is relatively easy |
| The tool has on-premise or cloud-based deployment options to cater to different organizational needs and infrastructure. | S        | 0         | The tool does not promise on-prem or cloud-based managed deployments                      |

total_score = 1.5

## Legal & Compliance

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                                            |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|
| It is clear how the tool is funded to avoid improper influence due to conflicts of interest                          | M        | 1         | On the [website](https://aiverifyfoundation.sg/ai-verify-foundation/) it is stated, that many commercial partners fund this project |
| The tool is compliant with relevant legal and regulatory requirements.                                               | S        | 1         |                                                                                                                                     |
| The tool adheres to (local) data privacy regulations like GDPR, ensuring the protection of user data.                | S        | 1         |                                                                                                                                     |
| The tool implements appropriate security measures to comply with industry regulations and standards.                 | S        | 1         |                                                                                                                                     |
| The tool is licensed for use within the organization according to the terms and conditions of the license agreement. | S        | 1         | [Apache 2.0 licence](https://github.com/IMDA-BTG/aiverify?tab=Apache-2.0-1-ov-file)                                                 |
| The tool respects intellectual property rights and avoid copyright infringement issues.                              | S        | 1         |                                                                                                                                     |

total_score = 19
