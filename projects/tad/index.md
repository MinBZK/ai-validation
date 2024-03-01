<!-- markdownlint-disable MD013 -->
# Transparency of algorithmic decision making

This document contains a checklist with requirements for tools we could use to help with the transparency of algorithmic decision making.

The requirements are based on:

- **ISO 25010 standard:** This standard defines the eight quality characteristics and provides a framework for evaluating software quality.
- **Industry best practices:** This includes a broad range of recommendations and guidelines for IT tool development and implementation
- **Common IT tool requirements:** This information was gathered by analyzing various sources, such as documentation from popular IT tools, user reviews, and articles from reputable tech publications that discuss essential features and functionalities expected from different types of IT tools.
- **Internal discussion and common sense**: While above sources are already exhaustive, we also used team discussions and our own knowledge.

The requirements have been given a priority based on the MoSCoW scale to allow for tool comparison.

| ID   | Group                  | Requirement                                                  | Priority |
| ---- | ---------------------- | ------------------------------------------------------------ | -------- |
| 1... | Functionality          | The tool allows users to perform technical tests on an algorithm or model. | M        |
|      | Functionality          | The tool allows users to choose which tests to perform.      | M        |
|      | Functionality          | The tool supports plugin functionality so additional tests can be added easily. | S        |
|      | Functionality          | The tool can generate a human readable report.               | M        |
|      | Functionality          | The tool can generate a machine readable report.             | S        |
|      | Functionality          | The tool allows various formats for reports, like PDF, JSON, MD. | C        |
|      | Functionality          | The tool allows to create custom reports based on components. | S        |
|      | Functionality          | It is possible to add custom components for reports.         | S        |
|      | Functionality          | The tool provides logging.                                   | S        |
|      | Functionality          | The tool can be used on an isolated system without an internet connection. | S        |
|      | Functionality          | The tool does not share any data or logging to anyone or anywhere. | C        |
|      | Functionality          | The tool can be integrated in a CI/CD flow.                  | C        |
|      | Functionality          | The tool can be offered as a (cloud) service where no local installation is required. | C        |
|      | Reliability            | The tool can operate consistently and reliably.              | M        |
|      | Reliability            | The tool can recover automatically from common failures.     | M        |
|      | Reliability            | The tool recovers from failures quickly and minimizes data loss. | S        |
|      | Reliability            | The tool handles errors gracefully and informs users of any issues. | S        |
|      | Reliability            | The tool provides clear error messages and instructions for troubleshooting. | S        |
|      | Usability              | The tool possess a clean, intuitive, and visually appealing UI that follows industry standards. | S        |
|      | Usability              | The tool offers keyboard shortcuts for efficient interaction. | C        |
|      | Usability              | The tool provides clear and consistent navigation, making it easy for users to find what they need. | S        |
|      | Usability              | The tool is responsive and provides instant feedback.        | S        |
|      | Usability              | The user interface is multilingual and supports at least English. | S        |
|      | Usability              | The user interface can easily be translated into other languages. | C        |
|      | Help & Documentation   | The tool provides comprehensive online help documentation with searchable functionalities. | S        |
|      | Help & Documentation   | The tool offers context-sensitive help within the application. | C        |
|      | Help & Documentation   | The online documentation includes video tutorials and training materials for ease of learning. | C        |
|      | Help & Documentation   | The project provides readily available customer support through various channels  (e.g., email, phone, online chat) to address user inquiries and troubleshoot issues. | C        |
|      | Performance Efficiency | The tool operates efficiently and minimize resource utilization. | M        |
|      | Performance Efficiency | The tool responds to user actions instantly.                 | M        |
|      | Performance Efficiency | Resource consumption of the tool itself (e.g., CPU, memory) does not exceed [Threshold] under normal load. Resource consumption of the tests can not be predicted. | C        |
|      | Performance Efficiency | The tool is scalable to accommodate increased user base and data volume. | S        |
|      | Maintainability        | The project is open source.                                  | S        |
|      | Maintainability        | It is possible to contribute to the source.                  | S        |
|      | Maintainability        | The tool is easy to modify and maintain.                     | M        |
|      | Maintainability        | The tool adheres to industry coding standards and best practices to ensure code quality and maintainability. | M        |
|      | Maintainability        | The system is modular, allowing for easy modification of individual components. | S        |
|      | Maintainability        | Diagnostic tools are available to identify and troubleshoot issues. | S        |
|      | Maintainability        | The code is written in a modern and common programming language. | M        |
|      | Maintainability        | The project provides version control for code changes and rollback capabilities. |          |
|      | Security               | The tool must protect data and system from unauthorized access, use, disclosure, disruption, modification, or destruction. | M        |
|      | Security               | The tool enforce authorization controls based on user roles and permissions, restricting access to sensitive data and functionalities. | C        |
|      | Security               | Data encryption is used for sensitive information at rest and in transit. | C        |
|      | Security               | Regular security audits and penetration testing are conducted. | S        |
|      | Security               | The project allows for regular security audits and penetration testing to identify vulnerabilities and ensure system integrity. | C        |
|      | Security               | The tool implements backup functionality to ensure data availability in case of incidents. | C        |
|      | Compatibility          | The tool is compatible with existing systems and infrastructure. | M        |
|      | Compatibility          | The tool supports industry-standard data formats and protocols. | M        |
|      | Compatibility          | The tool operates seamlessly on supported operating systems and hardware platforms. | M        |
|      | Compatibility          | The tool integrates with existing security solutions.        | C        |
|      | Compatibility          | The tool supports commonly used data formats (e.g., CSV, Excel, JSON) for easy data exchange with other systems and tools. | S        |
|      | Data Management        | The tool supports saving progress.                           | S        |
|      | Workflow Management    | It is possible to define and automate workflows for repetitive tasks. | C        |
|      | Integration            | The tool offers pre-built connectors or low-code/no-code integration options to simplify the integration process. | C        |
|      | Accessibility          | The tool is accessible to users with disabilities, following relevant accessibility standards (e.g., WCAG). | S        |
|      | Portability            | The tool support a range of operating systems (e.g., Windows, macOS, Linux) commonly used within an organization. | S        |
|      | Portability            | The tool minimizes dependencies on specific hardware or software configurations, promoting flexibility. | S        |
|      | Portability            | The tool offers a cloud-based deployment option or be compatible with cloud environments for scalability and accessibility. | S        |
|      | Portability            | The tool adheres to relevant cloud security standards and best practices. | S        |
|      | Deployment             | The tool has an easy and user-friendly installation and configuration process. | S        |
|      | Deployment             | The tool has on-premise or cloud-based deployment options to cater to different organizational needs and infrastructure. | S        |
|      | Legal & Compliance     | The tool is compliant with relevant legal and regulatory requirements. | S        |
|      | Legal & Compliance     | The tool adheres to (local) data privacy regulations like GDPR and CCPA, ensuring the protection of user data. | S        |
|      | Legal & Compliance     | The tool implements appropriate security measures to comply with industry regulations and standards. | S        |
|      | Legal & Compliance     | The tool is licensed for use within the organization according to the terms and conditions of the license agreement. | S        |
|      | Legal & Compliance     | The tool respects intellectual property rights and avoid copyright infringement issues. | S        |
|      | Legal & Compliance     | It is clear how the tool is funded to avoid improper influence due to conflicts of interest | M        |
|      |                        |                                                              |          |
