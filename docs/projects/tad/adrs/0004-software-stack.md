# TAD-0004 Software Stack for TAD

## Context

For building our own TAD solution, we need to choose a software stack. During our earlier
POCs and market research, we gathered insight and information on technologies to use
and which not to use.

During further discussions and brainstorm sessions, a software stack was chosen
that accommodates our needs best.

While more fine grained [requirements](../existing-tools/comparison/requirements.md) are listed elsewhere,
some key requirements are:

* The tool is locally runnable with docker.
* The tool is runnable as user as a local Docker solution.
* The tool is runnable on a cloud platform based on Kubernetes.
* The tool supports multiple organizations, teams and projects.
* The tool supports Oauth2.

## Assumptions

We stick to suitable programming languages. As most AI related
tooling is written in Python, this language is the logical choice for our development as well.

Currently we do not see the need for a separate web GUI framework.
it is preferred to bundle backend and frontend in one solution.

As part of a Dutch government organization, we need to adhere to all dutch laws and standards, like:

* [Digitoegankelijk](https://www.digitoegankelijk.nl/)
* [WCAG Guidelines](https://wcag.nl/kennis/richtlijnen/wcag-2-1-richtlijnen/)
* [Forum Standaardisatie](https://www.forumstandaardisatie.nl/)

## Decision

### Programming language

We will support the latest 3 minor version of [Python](https://www.python.org/) v3 as programming language
and [Poetry](https://python-poetry.org/) for dependency management.

### Backend

The Python backend will use the following key dependencies:

* [Granian](https://github.com/emmett-framework/granian) as HTTP server.
* [Pydantic](https://docs.pydantic.dev/latest/) for data validation.
* [FastAPI](https://fastapi.tiangolo.com/) for REST/API/HTML communication.
* [Jinja2](https://palletsprojects.com/p/jinja/) for templating.
* [i18n Extension](https://jinja.palletsprojects.com/en/3.1.x/extensions/#i18n-extension) for multilingual support
 with [gettext](https://docs.python.org/3/library/gettext.html) or [Babel](https://babel.pocoo.org/en/latest/).

### Frontend

We will use serverside rendering of HTML, based on [HTMX](https://htmx.org/).
For styling and components we will use [NL Design System](https://github.com/nl-design-system/rijkshuisstijl-community).

### Testing

We will use [pytest](https://docs.pytest.org/en/) for unit-testing and [VCRPY](https://vcrpy.readthedocs.io/en/latest/)
and [Playwright](https://playwright.dev/) for module and integration tests.

### Database

We will use [SQLModel](https://sqlmodel.tiangolo.com/) or
[SQL Alchemy](https://www.sqlalchemy.org/) with [SQLite](https://www.sqlite.org/) for
development and [postgreSQL](https://www.postgresql.org/) for
production.

## Risks

As HTMX is relatively more limited than other UI frameworks, it may lack features we require but
did not anticipate.

## Consequences

We have clarity about the tools to use and develop our TAD tool.
