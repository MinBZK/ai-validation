# Holistic AI

See the [introduction](../comparison/tools.md#holisticai). It is a toolkit just like IBM-360-Toolkit for a
data scientist to research bias and also to mitigate it immediately.

## Functionality

| Requirement                                                                                                                                                                                       | Priority | Fulfilled | Comments                                                                                                                                                                                                                   |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool allows users to conduct technical tests on algorithms or models, including assessments of performance, bias, and fairness. To facilitate these tests, users can input relevant datasets, | M        | 1         | The tests which can be executed are written [here](https://holistic-ai.readthedocs.io/en/latest/tutorials.html)                                                                                                            |
| The tool allows users to choose which tests to perform.                                                                                                                                           | M        | 1         | In code the user is free to choose any test                                                                                                                                                                                |
| The tool allows users to fill out questionnaires to conduct impact assessments for AI. For example IAMA or ALTAI.                                                                                 | M        | 0         | The tool only does technical tests                                                                                                                                                                                         |
| The tool can generate a human readable report.                                                                                                                                                    | M        | 0         | The toolkit itself cannot make a human readable report, it only generates results which then needs to be interpreted                                                                                                       |
| The tools works with a standardized report format, that it can read, write, and update.                                                                                                           | M        | 0         | The only format it outputs are specific numbers, so no standardized format or even een report format                                                                                                                       |
| The tool supports plugin functionality so additional tests can be added easily.                                                                                                                   | S        | 0         | All the bias tests are put in a [single script](https://github.com/holistic-ai/holisticai/blob/main/holisticai/bias/metrics/_classification.py) which making additional tests a bit cumbersome and leas developer-friendly |
| The tool allows to create custom reports based on components.                                                                                                                                     | S        | 0         | Does not allow reports export                                                                                                                                                                                              |
| It is possible to add custom components for reports.                                                                                                                                              | S        | 0         | Does not allow reports export                                                                                                                                                                                              |
| The tool provides detailed logging, including tracking of different model versions, changes in impact assessments, and technical test results for individual runs.                                | S        | 0         | Not ouf of the box, but this could be written in code by the owner of the algorithm                                                                                                                                        |
| The tool supports saving progress.                                                                                                                                                                | S        | 0         | Not ouf of the box, but this could be written in code by the owner of the algorithm                                                                                                                                        |
| The tool can be used on an isolated system without an internet connection.                                                                                                                        | S        | 1         | As a python tool this is possible                                                                                                                                                                                          |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C        | 0         | This is not supported                                                                                                                                                                                                      |
| The tool operates with complete data privacy; it does not share any data or logging information.                                                                                                  | C        | 1         | The local tool does not share anything to the outside world                                                                                                                                                                |
| The tool allows extension of report formats functionality.                                                                                                                                        | C        | 0         | This is not what the tool is built for                                                                                                                                                                                     |
| The tool can be integrated in a CI/CD flow.                                                                                                                                                       | C        | 1         | As it is a python package it can be included in a CI pipeline                                                                                                                                                              |
| The tool can be offered as a (cloud) service where no local installation is required.                                                                                                             | C        | 0         | Not immediately, an UI needs to be build around it                                                                                                                                                                         |
| It is possible to define and automate workflows for repetitive tasks.                                                                                                                             | C        | 1         | Automated tests could be programmed specifically from this tool                                                                                                                                                            |
| The tool offers pre-built connectors or low-code/no-code integration options to simplify the integration process.                                                                                 | C        | 0         | Not supported by the tool                                                                                                                                                                                                  |

total_score = 17

## Reliability

| Requirement                                                                                                                            | Priority | Fulfilled | Comments |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------|
| The tool operates consistently and reliably, meaning it delivers the same expected results every time you use it.                      | M        | 1         |          |
| The tool recovers automatically from common failures.                                                                                  | S        | 1         |          |
| The tool recovers from failures quickly, minimizing data loss, for example by automatically saving intermediate test progress results. | S        | 1         |          |
| The tool handles errors gracefully and informs users of any issues.                                                                    | S        | 1         |          |
| The tool provides clear error messages and instructions for troubleshooting.                                                           | S        | 1         |          |

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

| Requirement                                                                                                                                                            | Priority | Fulfilled | Comments                                                                                                                                |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| The tool provides comprehensive online help documentation with searchable functionalities.                                                                             | S        | 0.2       | There is some [documentation](https://holistic-ai.readthedocs.io/en/latest/index.html) but it is not very helpful                       |
| The tool offers context-sensitive help within the application.                                                                                                         | C        | 0         | As a Python tool, no                                                                                                                    |
| The online documentation includes video tutorials and training materials for ease of learning.                                                                         | C        | 0         | Ths is not there                                                                                                                        |
| The project provides readily available customer support through various channels  (e.g., email, phone, online chat) to address user inquiries and troubleshoot issues. | C        | 0.5       | You can contact sales through their website and respond on Github, Github seems to be an okay response time (but not a large community) |

total_score = 1.6

## Performance Efficiency

| Requirement                                                              | Priority | Fulfilled | Comments                                                                                                        |
|:-------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------------------------------------------------------------|
| The tool operates efficiently and minimize resource utilization.         | M        | 1         | very lightweight as a python package                                                                            |
| The tool responds to user actions instantly.                             | M        | 1         | It will return output instantly                                                                                 |
| The tool is scalable to accommodate increased user base and data volume. | S        | 1         | This would be installed distributed and therefore would be scalable, with large datasets it is still very quick |

total_score = 11

## Maintainability

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                         |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------------------------------------------------------------|
| The tool is easy to modify and maintain.                                                                             | M        | 0.5       | It is less modular because most of the tests are written in a single script      |
| The tool adheres to industry coding standards and best practices to ensure code quality and maintainability.         | M        | 0.5       | They use pre-commit hooks, but the codebase seems to be a bit weirdly structured |
| The code is written in a common, widely adopted and supported and actively used and maintained programming language. | M        | 1         | It is written in Python                                                          |
| The project provides version control for code changes and rollback capabilities.                                     | M        | 1         | It is hosted on Github                                                           |
| The project is open source.                                                                                          | M        | 1         | Hosted [here](https://github.com/holistic-ai/holisticai)                         |
| It is possible to contribute to the source.                                                                          | S        | 1         | It is possible and they respond to contributions                                 |
| The system is modular, allowing for easy modification of individual components.                                      | S        | 0.5       | See the first point                                                              |
| Diagnostic tools are available to identify and troubleshoot issues.                                                  | S        | 1         | Just standard python troubleshooting tools                                       |

total_score = 23.5

## Security

| Requirement                                                                                                                            | Priority | Fulfilled | Comments                                                                |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------|
| The tool must protect data and system from unauthorized access, use, disclosure, disruption, modification, or destruction.             | M        | 0         | Not applicable                                                          |
| Regular security audits and penetration testing are conducted.                                                                         | S        | 0         | It is not stated on the repository that they do something with security |
| The tool enforce authorization controls based on user roles and permissions, restricting access to sensitive data and functionalities. | C        | 0         | The tool does not have Users or Access control                          |
| Data encryption is used for sensitive information at rest and in transit.                                                              | C        | 0         | Transitionary data is not stored                                        |
| The project allows for regular security audits and penetration testing to identify vulnerabilities and ensure system integrity.        | C        | 1         | This is not blocked by the tool                                         |
| The tool implements backup functionality to ensure data availability in case of incidents.                                             | C        | 0         | Not supported                                                           |

total_score = 2

## Compatibility

| Requirement                                                                                                                | Priority | Fulfilled | Comments                                                  |
|:---------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------|
| The tool is compatible with existing systems and infrastructure.                                                           | M        | 1         | It can be imported in Python                              |
| The tool supports industry-standard data formats and protocols.                                                            | M        | 0         | it does not standardize at all in the output of the tests |
| The tool operates seamlessly on supported operating systems and hardware platforms.                                        | S        | 1         | Python can be ran on any system                           |
| The tool supports commonly used data formats (e.g., CSV, Excel, JSON) for easy data exchange with other systems and tools. | S        | 1         | If it can be imported in Python/R it is supported         |
| The tool integrates with existing security solutions.                                                                      | C        | 0         | Not applicable                                            |

total_score = 10

## Accessibility

| Requirement                                                                                                                                                                        | Priority | Fulfilled | Comments                                                                                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|---------------------------------------------------------------------------------------------|
| The tool is accessible to users with disabilities, following relevant accessibility standards (e.g., [WCAG](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag)). | S        | 0         | You need to be a programmer to use it, and that is not your typical user with disabilities  |

total_score = 0

## Portability

| Requirement                                                                                                                 | Priority | Fulfilled | Comments                                                                                                                                       |
|:----------------------------------------------------------------------------------------------------------------------------|:---------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool support a range of operating systems (e.g., Windows, macOS, Linux) commonly used within an organization.           | S        | 0.5       | As it is a python tool it is supported anywhere python runs                                                                                    |
| The tool minimizes dependencies on specific hardware or software configurations, promoting flexibility.                     | S        | 1         | It is a python tool                                                                                                                            |
| The tool offers a cloud-based deployment option or be compatible with cloud environments for scalability and accessibility. | S        | 1         | The company behind Holistic AI offers a whole range of services included an UI which uses this open-source toolkit                             |
| The tool adheres to relevant cloud security standards and best practices.                                                   | S        | 0         | On their [website](https://www.holisticai.com/) they do not speak about where the data of their solution will go, this is not very transparent |

total_score = 7.5

## Deployment

| Requirement                                                                                                              | Priority | Fulfilled | Comments                                                                                      |
|:-------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------------------------------------------|
| The tool has an easy and user-friendly installation and configuration process.                                           | S        | 0.2       | You need to have some developer knowledge and also knowledge about the technical tests to use |
| The tool has on-premise or cloud-based deployment options to cater to different organizational needs and infrastructure. | S        | 1         | Yes the tool can be used as a cloud-based deployment but then with a whole UI around it       |

total_score = 3.6

## Legal & Compliance

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                  |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|-----------------------------------------------------------------------------------------------------------|
| It is clear how the tool is funded to avoid improper influence due to conflicts of interest                          | M        | 1         | The tool is owned by a private company but has been made open source to the public                        |
| The tool is compliant with relevant legal and regulatory requirements.                                               | S        | 1         | Under the [apache 2.0 license](https://github.com/holistic-ai/holisticai?tab=Apache-2.0-1-ov-file#readme) |
| The tool adheres to (local) data privacy regulations like GDPR, ensuring the protection of user data.                | S        | 1         | Data stays locally                                                                                        |
| The tool implements appropriate security measures to comply with industry regulations and standards.                 | S        | 0         | The repo does not speak about security at all                                                             |
| The tool is licensed for use within the organization according to the terms and conditions of the license agreement. | S        | 1         | Under the [apache 2.0 license](https://github.com/holistic-ai/holisticai?tab=Apache-2.0-1-ov-file#readme) |
| The tool respects intellectual property rights and avoid copyright infringement issues.                              | S        | 1         |                                                                                                           |

total_score = 16
