# ADR-0002 Code Platform

## Context

In the landscape of software development, the choice of coding platform significantly impacts developer productivity,
collaboration, and code quality. it's crucial to evaluate and select a coding platform that aligns with our development
needs and fosters efficient workflows.

## Assumptions

The following assumptions are made:

- Our work should be visible to external teams to promote transparency and facilitate collaboration.
- The coding platform should be easily available for developers.
- The coding platform should offers collaboration tools between developers and the community.
- The coding platform should offers security and dependency management tools.
- The pricing model should be suitable for our budget and needs. Currently meaning no budgets.

## Decision

After careful consideration and evaluation of various options like GitHub, GitLab and BitBucket, we propose adopting
GitHub as our primary coding platform. The decision is based on the following factors:

**Costs**: There are currently no costs associate in using GitHub for our use cases.

**Features and Functionality**: GitHub offers a comprehensive set of features essential for modern software development
and collaboration with external teams, including version control, code review, issue tracking, continuous integration,
and deployment automation.

**Security**: GitHub offers a complete set of security features essential to secure development like dependency management
and security scanning.

**Community and Ecosystem**: GitHub boasts a vibrant community and ecosystem, facilitating knowledge sharing, collaboration,
and access to third-party tools, and services that can enhance our development workflows. Within our organization we have
easy access to the team managing the GitHub organization.

**Usability and User Experience**: A user-friendly interface and intuitive workflows are essential for maximizing developer
productivity and minimizing onboarding time. GitHub offers a streamlined user experience and customizable workflows that
align with our team's preferences and practices.

## Risks

Currently the organization of MinBZK on GitHub does not have a lot of `people` indicating that our team is an early
adapter of the platform within the organization. This might impact our features due to cost constrains.

## Consequences

If we choose another tool in the future we need to migrate our codebase, and potentially need to rewrite some specific GitHub
features that cannot be used in another tool.

## More Information

Alternatives considered:

- BitBucket
- GitLab
- [Forgejo](https://forgejo.org/)
