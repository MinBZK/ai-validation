---
    title: 0005 Python coding standard and tools
    adr:
        author: Berry den Hartog
        created: 28-Feb-2024
        status:  accepted
---

## Context

In modern software development, maintaining code quality is crucial for readability, maintainability, and collaboration.
Python, being a dynamically typed language, requires robust tooling to ensure code consistency and type safety. Manual
enforcement of coding standards is time-consuming and error-prone. Hence, adopting automated tooling to streamline this
process is imperative.

## Decision

We will use these standards and tools for our own projects:

- [Google style guide](https://google.github.io/styleguide/pyguide.html)
- [Ruff](https://docs.astral.sh/ruff)
    - [Rules](https://docs.astral.sh/ruff/rules/): [I, SIM, B, UP, F, E]
    - [Formatter](https://docs.astral.sh/ruff/formatter/)
- [Pyright](https://microsoft.github.io/pyright/#/): A static type checker for Python, ensuring type safety and reducing
potential runtime errors.
- [pre-commit](https://pre-commit.com/): A framework for managing and maintaining multi-language pre-commit hooks.

Working with external projects these coding standards will not always be possible. but we will try to integrate them as
much as possible.

## Consequences

**Improved Code Quality**: Adoption of these tools will lead to improved code quality, consistency, and maintainability
across the project.

**Enhanced Developer Productivity**: Automated code formatting and static type checking will reduce manual effort and free
developers to focus more on coding logic rather than formatting and type-related issues.

**Reduced Bug Incidence**: Static typing and linting will catch potential bugs and issues early in the development process,
reducing the likelihood of runtime errors and debugging efforts.

**Standardized Development Workflow**: By integrating pre-commit hooks, the development workflow will be standardized,
ensuring that all developers follow the same code quality standards.
