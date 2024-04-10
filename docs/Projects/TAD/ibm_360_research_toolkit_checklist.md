# IBM Research 360 Toolkit

Introduction is written here [tools.md](tools.md#ibm-research-360-toolkit), same thing as verifyML this has no
frontend baked in, but has some nice integrations with MLops tooling like Kubeflow
Pipelines. The IBM Research 360 toolkit is actuallt a collection of three open-source
toolkits as stated by their [Github repo](https://github.com/IBM/ai-360-toolkit-explained);
_AI Fairness 360_, _AI Explainability 360_, _Adversarial Robustness 360_. The strong suite
of this toolkit that it considers bias in the whole lifecycle of the model; (dataset, training,
output).

## Functionality

| Requirement                                                                                                                                                                                       | Priority  | Fulfilled | Comments                                                                                                                                                                                                  |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool allows users to conduct technical tests on algorithms or models, including assessments of performance, bias, and fairness. To facilitate these tests, users can input relevant datasets, | M         | 1         | Fairness, Explainability and security can be tested with the suite of tools                                                                                                                               |
| The tool allows users to choose which tests to perform.                                                                                                                                           | M         | 1         | The websites of contain a whole explanation of which testst to perform [AIF Website](https://aif360.res.ibm.com/), [AIX website](https://aix360.res.ibm.com/), [ART website](https://art360.res.ibm.com/) |
| The tool allows users to fill out questionnaires to conduct impact assessments for AI. For example IAMA or ALTAI.                                                                                 | M         | 0         | The tool only does technical tests                                                                                                                                                                        |
| The tool can generate a human readable report.                                                                                                                                                    | M         | 0         | The toolkit itself cannot make a human readble report, it only generates results which then needs to be interpreted                                                                                       |
| The tools works with a standardized report format, that it can read, write, and update.                                                                                                           | M         | 0         | The only format it outputs are specific numbers, so no standardized format or even een report format                                                                                                      |
| The tool supports plugin functionality so additional tests can be added easily.                                                                                                                   | S         | 1         | Only the repository new tests could be added quite easily if you understand Python                                                                                                                        |
| The tool allows to create custom reports based on components.                                                                                                                                     | S         | 0         | The tool does not generate reports                                                                                                                                                                        |
| It is possible to add custom components for reports.                                                                                                                                              | S         | 0         | The tool does not generate reports                                                                                                                                                                        |
| The tool provides detailed logging, including tracking of different model versions, changes in impact assessments, and technical test results for individual runs.                                | S         | 0         | Not ouf of the box, but this could be written in code by the owner of the algorithm                                                                                                                       |
| The tool supports saving progress.                                                                                                                                                                | S         | 0         | Not ouf of the box, but this could be written in code by the owner of the algorithm                                                                                                                       |
| The tool can be used on an isolated system without an internet connection.                                                                                                                        | S         | 1         | As it can be imported as a python or r library                                                                                                                                                            |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C         | 0         | This is not supported, there is no UI                                                                                                                                                                     |
| The tool operates with complete data privacy; it does not share any data or logging information.                                                                                                  | C         | 1         | The tool does not share data                                                                                                                                                                              |
| The tool allows extension of report formats functionality.                                                                                                                                        | C         | 0         | The tool does not generate reports                                                                                                                                                                        |
| The tool can be integrated in a CI/CD flow.                                                                                                                                                       | C         | 1         | As it is a programming toolkit it can be used in a CI/CD pipelfine                                                                                                                                        |
| The tool can be offered as a (cloud) service where no local installation is required.                                                                                                             | C         | 0         | not immediately, then an UI needs to be made                                                                                                                                                              |
| It is possible to define and automate workflows for repetitive tasks.                                                                                                                             | C         | 1         | We could automate specific tests which we deem necessary or standard                                                                                                                                      |
| The tool offers pre-built connectors or low-code/no-code integration options to simplify the integration process.                                                                                 | C         | 0         | Purely written in Python                                                                                                                                                                                  |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C         | 0         | As it is a python toolkit, it does not do this, it does not have an UI                                                                                                                                    |

total_score = 20

## Reliability

| Requirement                                                                                                                            | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|---------|
| The tool operates consistently and reliably, meaning it delivers the same expected results every time you use it.                      | M        | 1         |         |
| The tool recovers automatically from common failures.                                                                                  | S        | 1         |         |
| The tool recovers from failures quickly, minimizing data loss, for example by automatically saving intermediate test progress results. | S        | 1         |         |
| The tool handles errors gracefully and informs users of any issues.                                                                    | S        | 1         |         |
| The tool provides clear error messages and instructions for troubleshooting.                                                           | S        | 1         |         |

total_score = 16

## Usability

| Requirement                                                                                         | Priority | Fulfilled | Comments                   |
|:----------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------|
| The tool possess a clean, intuitive, and visually appealing UI that follows industry standards.     | S        | 0         | There is no user-interface |
| The tool provides clear and consistent navigation, making it easy for users to find what they need. | S        | 0         | There is no user-interface |
| The tool is responsive and provides instant feedback.                                               | S        | 0         | There is no user-interface |
| The user interface is multilingual and supports at least English.                                   | S        | 0         | There is no user-interface |
| The tool offers keyboard shortcuts for efficient interaction.                                       | C        | 0         | There is no user-interface |
| The user interface can easily be translated into other languages.                                   | C        | 0         | There is no user-interface |

total_score = 0

## Help & Documentation

| Requirement                                                                                                                                                            | Priority | Fulfilled | Comments                                                                                  |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------------|
| The tool provides comprehensive online help documentation with searchable functionalities.                                                                             | S        | 0.8       | On the website of the specific toolkit you can find many docs but you cannot search       |
| The tool offers context-sensitive help within the application.                                                                                                         | C        | 0         | Within the application (as it is not an UI, does not offer specific help)                 |
| The online documentation includes video tutorials and training materials for ease of learning.                                                                         | C        | 1         | The amount of tutorials is extensive even videos of its usage                             |
| The project provides readily available customer support through various channels  (e.g., email, phone, online chat) to address user inquiries and troubleshoot issues. | C        | 1         | You can ask questions at the repository, but also in slack and many people are using this |

total_score = 6.4

## Performance Efficiency

| Requirement                                                              | Priority | Fulfilled | Comments                                                                                                        |
|:-------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------------------------------------------------------------|
| The tool operates efficiently and minimize resource utilization.         | M        | 1         | very lightweight as a python package                                                                            |
| The tool responds to user actions instantly.                             | M        | 1         | It will return output instantly                                                                                 |
| The tool is scalable to accommodate increased user base and data volume. | S        | 1         | This would be installed distributed and therefore would be scalable, with large datasets it is still very quick |

total_score = 11

## Maintainability

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                                     |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| The tool is easy to modify and maintain.                                                                             | M        | 1         | The repositories are very well structured and therefore easy to adjust                                                       |
| The tool adheres to industry coding standards and best practices to ensure code quality and maintainability.         | M        | 1         | Although it doesn't have pre-commit hooks it does have a CONTRIBUTING.rst where the rules of good practices are written down |
| The code is written in a common, widely adopted and supported and actively used and maintained programming language. | M        | 1         | It is written in Python                                                                                                      |
| The project provides version control for code changes and rollback capabilities.                                     | M        | 1         | The code is hosted on Github                                                                                                 |
| The project is open source.                                                                                          | M        | 1         | At the beginning of this doc you can find the links to the repositories                                                      |
| It is possible to contribute to the source.                                                                          | S        | 1         | They have merged many outside requests, so this is fine                                                                      |
| The system is modular, allowing for easy modification of individual components.                                      | S        | 1         | Tests can very easily be added if you understand Python                                                                      |
| Diagnostic tools are available to identify and troubleshoot issues.                                                  | S        | 1         | Just standard python troubleshooting tools                                                                                   |

total_score = 29

## Security

| Requirement                                                                                                                            | Priority | Fulfilled | Comments                                                                |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------|
| The tool must protect data and system from unauthorized access, use, disclosure, disruption, modification, or destruction.             | M        | 0         | not applicable                                                          |
| Regular security audits and penetration testing are conducted.                                                                         | S        | 0         | It is not stated on the repository that they do something with security |
| The tool enforce authorization controls based on user roles and permissions, restricting access to sensitive data and functionalities. | C        | 0         | The tool does not have Users or Access control                          |
| Data encryption is used for sensitive information at rest and in transit.                                                              | C        | 0         | Transitionary data is not stored                                        |
| The project allows for regular security audits and penetration testing to identify vulnerabilities and ensure system integrity.        | C        | 1         | This is not blocked by the tool                                         |
| The tool implements backup functionality to ensure data availability in case of incidents.                                             | C        | 0         | Not supported                                                           |

total_score = 2

## Compatibility

| Requirement                                                                                                                | Priority | Fulfilled | Comments                                                                              |
|:---------------------------------------------------------------------------------------------------------------------------|:---------|-----------|---------------------------------------------------------------------------------------|
| The tool is compatible with existing systems and infrastructure.                                                           | M        | 1         | It can easily be imported in Python or R                                              |
| The tool supports industry-standard data formats and protocols.                                                            | M        | 0.5       | It does not standardize really on any output from the tests                           |
| The tool operates seamlessly on supported operating systems and hardware platforms.                                        | S        | 1         | As a python and R tool it can be run on systems where these can be ran                |
| The tool supports commonly used data formats (e.g., CSV, Excel, JSON) for easy data exchange with other systems and tools. | S        | 1         | These can be used if they are imported in python and R                                |
| The tool integrates with existing security solutions.                                                                      | C        | 1         | The Adversarial Robustness Toolbox can be used to test for the security of AI Systems |

total_score = 14

## Accessibility

| Requirement                                                                                                                                                                        | Priority | Fulfilled | Comments |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool is accessible to users with disabilities, following relevant accessibility standards (e.g., [WCAG](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag)). | S        | 0         | You need to be a programmer to use it, and that is not your typical user with disabilities         |

total_score = 0

## Portability

| Requirement                                                                                                                 | Priority | Fulfilled | Comments                                                                                                                            |
|:----------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|
| The tool support a range of operating systems (e.g., Windows, macOS, Linux) commonly used within an organization.           | S        | 0.7       | If you can run python, which is not always possible within the government for example, but R could be more easy to be run on places |
| The tool minimizes dependencies on specific hardware or software configurations, promoting flexibility.                     | S        | 1         | Just a python tool, no UI which is fairly minimal                                                                                   |
| The tool offers a cloud-based deployment option or be compatible with cloud environments for scalability and accessibility. | S        | 0         | It is not offered as a cloud-based option                                                                                           |
| The tool adheres to relevant cloud security standards and best practices.                                                   | S        | 0         | Not relevant                                                                                                                        |

total_score = 5.1

## Deployment

| Requirement                                                                                                              | Priority | Fulfilled | Comments                                                                                                                                          |
|:-------------------------------------------------------------------------------------------------------------------------|:---------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool has an easy and user-friendly installation and configuration process.                                           | S        | 0.4       | You need to have some developer knowledge and also knowledge about the technical tests to use. But then it is quite easy and works fairly quickly |
| The tool has on-premise or cloud-based deployment options to cater to different organizational needs and infrastructure. | S        | 0         | Not applicable                                                                                                                                    |

total_score = 1.2

## Legal & Compliance

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                                                                           |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| It is clear how the tool is funded to avoid improper influence due to conflicts of interest                          | M        | 1         | The tool was from IBM, but slowly they are removing the IBM branding from this and the tool is now owned by the LF AI Foundation (where big companies are part of) |
| The tool is compliant with relevant legal and regulatory requirements.                                               | S        | 1         | All three tools have apache [2.0 license](https://github.com/Trusted-AI/AIF360?tab=Apache-2.0-1-ov-file#readme)                                                    |
| The tool adheres to (local) data privacy regulations like GDPR, ensuring the protection of user data.                | S        | 1         | Data will stay local                                                                                                                                               |
| The tool implements appropriate security measures to comply with industry regulations and standards.                 | S        | 0         | Nothing is known about the security measures of the toolkits                                                                                                       |
| The tool is licensed for use within the organization according to the terms and conditions of the license agreement. | S        | 1         | All three tools have apache [2.0 license](https://github.com/Trusted-AI/AIF360?tab=Apache-2.0-1-ov-file#readme)                                                    |
| The tool respects intellectual property rights and avoid copyright infringement issues.                              | S        | 1         | The specific tests are implementations of papers which are open for everyone                                                                                       |

total_score = 16
