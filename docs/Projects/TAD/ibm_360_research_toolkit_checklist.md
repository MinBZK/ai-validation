# IBM Research 360 Toolkit

Introduction is written here [tools.md](tools.md#ibm-research-360-toolkit), same thing as verifyML this has no
frontend baked in, but has some nice integrations with MLops tooling like Kubeflow
Pipelines.

## Functionality

| Requirement                                                                                                                                                                                       | Priority  | Fulfilled | Comments |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|:----------|:---------|
| The tool allows users to conduct technical tests on algorithms or models, including assessments of performance, bias, and fairness. To facilitate these tests, users can input relevant datasets, | M         |           |          |
| The tool allows users to choose which tests to perform.                                                                                                                                           | M         |           |          |
| The tool allows users to fill out questionnaires to conduct impact assessments for AI. For example IAMA or ALTAI.                                                                                 | M         |           |          |
| The tool can generate a human readable report.                                                                                                                                                    | M         |           |          |
| The tools works with a standardized report format, that it can read, write, and update.                                                                                                           | M         |           |          |
| The tool supports plugin functionality so additional tests can be added easily.                                                                                                                   | S         |           |          |
| The tool allows to create custom reports based on components.                                                                                                                                     | S         |           |          |
| It is possible to add custom components for reports.                                                                                                                                              | S         |           |          |
| The tool provides detailed logging, including tracking of different model versions, changes in impact assessments, and technical test results for individual runs.                                | S         |           |          |
| The tool supports saving progress.                                                                                                                                                                | S         |           |          |
| The tool can be used on an isolated system without an internet connection.                                                                                                                        | S         |           |          |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C         |           |          |
| The tool operates with complete data privacy; it does not share any data or logging information.                                                                                                  | C         |           |          |
| The tool allows extension of report formats functionality.                                                                                                                                        | C         |           |          |
| The tool can be integrated in a CI/CD flow.                                                                                                                                                       | C         |           |          |
| The tool can be offered as a (cloud) service where no local installation is required.                                                                                                             | C         |           |          |
| It is possible to define and automate workflows for repetitive tasks.                                                                                                                             | C         |           |          |
| The tool offers pre-built connectors or low-code/no-code integration options to simplify the integration process.                                                                                 | C         |           |          |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C         |           |          |

total_score =

## Reliability

| Requirement                                                                                                                            | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool operates consistently and reliably, meaning it delivers the same expected results every time you use it.                      | M        |           |          |
| The tool recovers automatically from common failures.                                                                                  | S        |           |          |
| The tool recovers from failures quickly, minimizing data loss, for example by automatically saving intermediate test progress results. | S        |           |          |
| The tool handles errors gracefully and informs users of any issues.                                                                    | S        |           |          |
| The tool provides clear error messages and instructions for troubleshooting.                                                           | S        |           |          |

total_score =

## Usability

| Requirement                                                                                         | Priority | Fulfilled | Comments |
|:----------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool possess a clean, intuitive, and visually appealing UI that follows industry standards.     | S        |           |          |
| The tool provides clear and consistent navigation, making it easy for users to find what they need. | S        |           |          |
| The tool is responsive and provides instant feedback.                                               | S        |           |          |
| The user interface is multilingual and supports at least English.                                   | S        |           |          |
| The tool offers keyboard shortcuts for efficient interaction.                                       | C        |           |          |
| The user interface can easily be translated into other languages.                                   | C        |           |          |

total_score =

## Help & Documentation

| Requirement                                                                                                                                                            | Priority | Fulfilled | Comments |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool provides comprehensive online help documentation with searchable functionalities.                                                                             | S        |           |          |
| The tool offers context-sensitive help within the application.                                                                                                         | C        |           |          |
| The online documentation includes video tutorials and training materials for ease of learning.                                                                         | C        |           |          |
| The project provides readily available customer support through various channels  (e.g., email, phone, online chat) to address user inquiries and troubleshoot issues. | C        |           |          |

total_score =

## Performance Efficiency

| Requirement                                                              | Priority | Fulfilled | Comments |
|:-------------------------------------------------------------------------|:---------|-----------|----------|
| The tool operates efficiently and minimize resource utilization.         | M        |           |          |
| The tool responds to user actions instantly.                             | M        |           |          |
| The tool is scalable to accommodate increased user base and data volume. | S        |           |          |

total_score =

## Maintainability

| Requirement                                                                                                          | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool is easy to modify and maintain.                                                                             | M        |           |          |
| The tool adheres to industry coding standards and best practices to ensure code quality and maintainability.         | M        |           |          |
| The code is written in a common, widely adopted and supported and actively used and maintained programming language. | M        |           |          |
| The project provides version control for code changes and rollback capabilities.                                     | M        |           |          |
| The project is open source.                                                                                          | M        |           |          |
| It is possible to contribute to the source.                                                                          | S        |           |          |
| The system is modular, allowing for easy modification of individual components.                                      | S        |           |          |
| Diagnostic tools are available to identify and troubleshoot issues.                                                  | S        |           |          |

total_score =

## Security

| Requirement                                                                                                                            | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool must protect data and system from unauthorized access, use, disclosure, disruption, modification, or destruction.             | M        |           |          |
| Regular security audits and penetration testing are conducted.                                                                         | S        |           |          |
| The tool enforce authorization controls based on user roles and permissions, restricting access to sensitive data and functionalities. | C        |           |          |
| Data encryption is used for sensitive information at rest and in transit.                                                              | C        |           |          |
| The project allows for regular security audits and penetration testing to identify vulnerabilities and ensure system integrity.        | C        |           |          |
| The tool implements backup functionality to ensure data availability in case of incidents.                                             | C        |           |          |

total_score =

## Compatibility

| Requirement                                                                                                                | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool is compatible with existing systems and infrastructure.                                                           | M        |           |          |
| The tool supports industry-standard data formats and protocols.                                                            | M        |           |          |
| The tool operates seamlessly on supported operating systems and hardware platforms.                                        | S        |           |          |
| The tool supports commonly used data formats (e.g., CSV, Excel, JSON) for easy data exchange with other systems and tools. | S        |           |          |
| The tool integrates with existing security solutions.                                                                      | C        |           |          |

total_score =

## Accessibility

| Requirement                                                                                                                                                                        | Priority | Fulfilled | Comments |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool is accessible to users with disabilities, following relevant accessibility standards (e.g., [WCAG](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag)). | S        |           |          |

total_score =

## Portability

| Requirement                                                                                                                 | Priority | Fulfilled | Comments |
|:----------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool support a range of operating systems (e.g., Windows, macOS, Linux) commonly used within an organization.           | S        |           |          |
| The tool minimizes dependencies on specific hardware or software configurations, promoting flexibility.                     | S        |           |          |
| The tool offers a cloud-based deployment option or be compatible with cloud environments for scalability and accessibility. | S        |           |          |
| The tool adheres to relevant cloud security standards and best practices.                                                   | S        |           |          |

total_score =

## Deployment

| Requirement                                                                                                              | Priority | Fulfilled | Comments |
|:-------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool has an easy and user-friendly installation and configuration process.                                           | S        |           |          |
| The tool has on-premise or cloud-based deployment options to cater to different organizational needs and infrastructure. | S        |           |          |

total_score =

## Legal & Compliance

| Requirement                                                                                                          | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| It is clear how the tool is funded to avoid improper influence due to conflicts of interest                          | M        |          |          |
| The tool is compliant with relevant legal and regulatory requirements.                                               | S        |          |          |
| The tool adheres to (local) data privacy regulations like GDPR, ensuring the protection of user data.                | S        |          |          |
| The tool implements appropriate security measures to comply with industry regulations and standards.                 | S        |          |          |
| The tool is licensed for use within the organization according to the terms and conditions of the license agreement. | S        |          |          |
| The tool respects intellectual property rights and avoid copyright infringement issues.                              | S        |          |          |

total_score =
