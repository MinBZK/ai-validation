# ALTAI

See the [introduction](../Comparison/tools.md#ai-assessment-tool). It is a discussion tool about AI Systems.

## Functionality

| Requirement                                                                                                                                                                                       | Priority  | Fulfilled | Comments                                                                                                        |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|:----------|:----------------------------------------------------------------------------------------------------------------|
| The tool allows users to conduct technical tests on algorithms or models, including assessments of performance, bias, and fairness. To facilitate these tests, users can input relevant datasets, | M         | 0         | The tool only allows for discussions not technical tests                                                        |
| The tool allows users to choose which tests to perform.                                                                                                                                           | M         | 0         | See above                                                                                                       |
| The tool allows users to fill out questionnaires to conduct impact assessments for AI. For example IAMA or ALTAI.                                                                                 | M         | 1         | This is very well supported by the tool                                                                         |
| The tool can generate a human readable report.                                                                                                                                                    | M         | 0.9       | There is an export functionality for the outcomes of the assessment, it offers a print dialog                   |
| The tools works with a standardized report format, that it can read, write, and update.                                                                                                           | M         | 0         | This report cannot be re-imported in a different tool as it only exports to pdf                                 |
| The tool supports plugin functionality so additional tests can be added easily.                                                                                                                   | S         | 0         | Not applicable                                                                                                  |
| The tool allows to create custom reports based on components.                                                                                                                                     | S         | 0         | The report cannot be customised by the user                                                                     |
| It is possible to add custom components for reports.                                                                                                                                              | S         | 0         | See above                                                                                                       |
| The tool provides detailed logging, including tracking of different model versions, changes in impact assessments, and technical test results for individual runs.                                | S         | 0.75      | There is even for the users an extensive audit trail what happened to assessment, not different model versions  |
| The tool supports saving progress.                                                                                                                                                                | S         | 1         | Yes this is supported                                                                                           |
| The tool can be used on an isolated system without an internet connection.                                                                                                                        | S         | 1         | Yes it can be ran locally or in a docker container without internet                                             |
| The tool offers options to discuss and document conversations. For example, to converse about technical tests or to collaborate on impact assessments.                                            | C         | 1         | This is the main feature of the tool                                                                            |
| The tool operates with complete data privacy; it does not share any data or logging information.                                                                                                  | C         | 1         | Stored locally in a mongoDB                                                                                     |
| The tool allows extension of report formats functionality.                                                                                                                                        | C         | 0.5       | It could be developed that we export to markdown instead of pdf, but right now it just prints the window as pdf |
| The tool can be integrated in a CI/CD flow.                                                                                                                                                       | C         | 0         | It is an UI tool, so doesn't make sense in a CI/CD pipeline                                                     |
| The tool can be offered as a (cloud) service where no local installation is required.                                                                                                             | C         | 1         | We could host this tool for other parties to use                                                                |
| It is possible to define and automate workflows for repetitive tasks.                                                                                                                             | C         | 0         | It is an UI tool                                                                                                |
| The tool offers pre-built connectors or low-code/no-code integration options to simplify the integration process.                                                                                 | C         | 0         | No                                                                                                              |

total_score = 22.85

## Reliability

| Requirement                                                                                                                            | Priority | Fulfilled | Comments                                                                             |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|--------------------------------------------------------------------------------------|
| The tool operates consistently and reliably, meaning it delivers the same expected results every time you use it.                      | M        | 1         | Yes                                                                                  |
| The tool recovers automatically from common failures.                                                                                  | S        | 1         | The tool seems too do this                                                           |
| The tool recovers from failures quickly, minimizing data loss, for example by automatically saving intermediate test progress results. | S        | 1         | The data is stored in mongoDB, so no data is lost                                    |
| The tool handles errors gracefully and informs users of any issues.                                                                    | S        | 1         | If the email server is down the tool still operates                                  |
| The tool provides clear error messages and instructions for troubleshooting.                                                           | S        | 0.8       | Some errors are not very informative when you get them, but mostly email related are |

total_score = 15.4

## Usability

| Requirement                                                                                         | Priority | Fulfilled | Comments                                                                                                     |
|:----------------------------------------------------------------------------------------------------|:---------|-----------|--------------------------------------------------------------------------------------------------------------|
| The tool possess a clean, intuitive, and visually appealing UI that follows industry standards.     | S        | 1         | Very clean UI                                                                                                |
| The tool provides clear and consistent navigation, making it easy for users to find what they need. | S        | 1         | Compared to AIVerify the navigation is very intuitive (but it also has less features)                        |
| The tool is responsive and provides instant feedback.                                               | S        | 1         | Yes                                                                                                          |
| The user interface is multilingual and supports at least English.                                   | S        | 0.8       | There is support for multilingual, but the assessments are not translated and needs to be translated by hand |
| The tool offers keyboard shortcuts for efficient interaction.                                       | C        | 0         | No                                                                                                           |
| The user interface can easily be translated into other languages.                                   | C        | 0.8       | The buttons are automatically translated but not the assessment itself                                       |

total_score = 13

## Help & Documentation

| Requirement                                                                                                                                                            | Priority | Fulfilled | Comments                                                                            |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------|
| The tool provides comprehensive online help documentation with searchable functionalities.                                                                             | S        | 0.1       | There is little documentation, only the website and the github readme               |
| The tool offers context-sensitive help within the application.                                                                                                         | C        | 0         | The icons are just very clear, would be nice to have a question mark at some places |
| The online documentation includes video tutorials and training materials for ease of learning.                                                                         | C        | 0         | There is no such documentation                                                      |
| The project provides readily available customer support through various channels  (e.g., email, phone, online chat) to address user inquiries and troubleshoot issues. | C        | 0.25      | You can issue tickets on Github, no other way supported way                         |

total_score = 0.55

## Performance Efficiency

| Requirement                                                              | Priority | Fulfilled | Comments                                                                  |
|:-------------------------------------------------------------------------|:---------|-----------|---------------------------------------------------------------------------|
| The tool operates efficiently and minimize resource utilization.         | M        | 1         | The docker container is not so very big, also doesn't use much resources  |
| The tool responds to user actions instantly.                             | M        | 1         | There is instant feedback in the UI                                       |
| The tool is scalable to accommodate increased user base and data volume. | S        | 1         | As it runs on Docker, you can scale this on Kubernetes for multiple users |

total_score = 11

## Maintainability

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                                                                       |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool is easy to modify and maintain.                                                                             | M        | 0.8       | You need to be a bit aware of NextJS, then it is easy to maintain as it is not such a large tool                                                               |
| The tool adheres to industry coding standards and best practices to ensure code quality and maintainability.         | M        | 0.8       | The code looks well structured, they have deployments on github but I don't see any CI or pre-commit hooks                                                     |
| The code is written in a common, widely adopted and supported and actively used and maintained programming language. | M        | 1         | NextJS is very common for frontend tools                                                                                                                       |
| The project provides version control for code changes and rollback capabilities.                                     | M        | 1         | The code is hosted on Github so yes                                                                                                                            |
| The project is open source.                                                                                          | M        | 1         | see above                                                                                                                                                      |
| It is possible to contribute to the source.                                                                          | S        | 1         | It is possible, not many people have done this yet                                                                                                             |
| The system is modular, allowing for easy modification of individual components.                                      | S        | 0.6       | Extra assessments can be appended to the system, but not in such a way that it supports multiple (different) assessments, but roles can be changed very easily |
| Diagnostic tools are available to identify and troubleshoot issues.                                                  | S        | 0.8       | The standard NextJS tools to troubleshoot, but not many tests                                                                                                  |

total_score = 25.6

## Security

| Requirement                                                                                                                            | Priority | Fulfilled | Comments                                                                                                                                                           |
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The tool must protect data and system from unauthorized access, use, disclosure, disruption, modification, or destruction.             | M        | 1         | The data is stored in MongoDB                                                                                                                                      |
| Regular security audits and penetration testing are conducted.                                                                         | S        | 0         | When running docker compose up, the docker client will tell there are quite some CVE vulnerabilities in there, an upgrade of the Node version would help much here |
| The tool enforce authorization controls based on user roles and permissions, restricting access to sensitive data and functionalities. | C        | 0.5       | The tool has support for multiple users and roles (but we couldn't find a user management system)                                                                  |
| Data encryption is used for sensitive information at rest and in transit.                                                              | C        | 1         | When data is transferred to mongoDB, a secure connection is set-up and also in the DB it is encrypted by MongoDB, also you have an SSL connection with the tool    |
| The project allows for regular security audits and penetration testing to identify vulnerabilities and ensure system integrity.        | C        | 1         | The tool does allow this, as it is open-source                                                                                                                     |
| The tool implements backup functionality to ensure data availability in case of incidents.                                             | C        | 1         | The data is store in a volume next to the main container of the                                                                                                    |

total_score = 7.5

## Compatibility

| Requirement                                                                                                                | Priority | Fulfilled | Comments                                                                                                                                 |
|:---------------------------------------------------------------------------------------------------------------------------|:---------|-----------|------------------------------------------------------------------------------------------------------------------------------------------|
| The tool is compatible with existing systems and infrastructure.                                                           | M        | 1         | As it is a container it can run on Kubernetes and therefore at Digilab                                                                   |
| The tool supports industry-standard data formats and protocols.                                                            | M        | 1         | Assessment and other config are stored in JSON                                                                                           |
| The tool operates seamlessly on supported operating systems and hardware platforms.                                        | S        | 1         | As it runs in a container it is able to run on all the major OS'es if you have Docker Desktop or use a cloud version managed by yourself |
| The tool supports commonly used data formats (e.g., CSV, Excel, JSON) for easy data exchange with other systems and tools. | S        | 0         | The tool currently only exports a pdf which is not an exchangable format                                                                 |
| The tool integrates with existing security solutions.                                                                      | C        | 0         | Not applicable as it is an UI                                                                                                            |

total_score = 11

## Accessibility

| Requirement                                                                                                                                                                        | Priority | Fulfilled | Comments                                                                                        |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|-----------|-------------------------------------------------------------------------------------------------|
| The tool is accessible to users with disabilities, following relevant accessibility standards (e.g., [WCAG](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag)). | S        | 0.1       | The color scheme is pretty good viewable, but for the rest there are not accessibility features |

total_score = 0.3

### Portability

| Requirement                                                                                                                 | Priority | Fulfilled | Comments                                                                                                                                   |
|:----------------------------------------------------------------------------------------------------------------------------|:---------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| The tool support a range of operating systems (e.g., Windows, macOS, Linux) commonly used within an organization.           | S        | 1         | It is in docker so can run everywhere                                                                                                      |
| The tool minimizes dependencies on specific hardware or software configurations, promoting flexibility.                     | S        | 1         | This is all containerized                                                                                                                  |
| The tool offers a cloud-based deployment option or be compatible with cloud environments for scalability and accessibility. | S        | 1         | As it is containerized we could host this ourselves in a cloud environment, the Belgium government does not offer a hosted version for you |
| The tool adheres to relevant cloud security standards and best practices.                                                   | S        | 0.8       | The docker container does contain some outdated versions of for example Node.                                                              |

total_score = 11.4

## Deployment

| Requirement                                                                                                              | Priority | Fulfilled | Comments                                                             |
|:-------------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------------------------------------------------|
| The tool has an easy and user-friendly installation and configuration process.                                           | S        | 1         | It was very easy to install out-of-the-box                           |
| The tool has on-premise or cloud-based deployment options to cater to different organizational needs and infrastructure. | S        | 0         | The tool does not promise on-prem or cloud-based managed deployments |

total_score = 3

## Legal & Compliance

| Requirement                                                                                                          | Priority | Fulfilled | Comments                                                                                                                                     |
|:---------------------------------------------------------------------------------------------------------------------|:---------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| It is clear how the tool is funded to avoid improper influence due to conflicts of interest                          | M        | 1         | It is funded by the Belgian Government                                                                                                       |
| The tool is compliant with relevant legal and regulatory requirements.                                               | S        | 1         | Yes EU license                                                                                                                               |
| The tool adheres to (local) data privacy regulations like GDPR, ensuring the protection of user data.                | S        | 1         | Data is stored locally                                                                                                                       |
| The tool implements appropriate security measures to comply with industry regulations and standards.                 | S        | 1         | [EUPL 1.2 license](https://github.com/AI4Belgium/ai-assessment-tool?tab=EUPL-1.2-1-ov-file#readme) (although they say they have MIT license) |
| The tool is licensed for use within the organization according to the terms and conditions of the license agreement. | S        | 1         | Yes, see above                                                                                                                               |
| The tool respects intellectual property rights and avoid copyright infringement issues.                              | S        | 1         | Yes, see above                                                                                                                               |

total_score = 19
