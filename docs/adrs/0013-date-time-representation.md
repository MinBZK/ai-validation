# ADR-0013 Date Time Representation: ISO 8601

## Context

In our software development projects, we have encountered ambiguity related to the representation of dates and times,
particularly when dealing with time zones. The lack of a standardized approach has led to discussions and possibly
ambiguity when interpreting timestamps within our applications.

## Assumptions

Standardizing the representation of dates and times will improve clarity and precision in our application's logic and
user interfaces.

ISO 8601 format is better human-readable than other formats such as unix timestamps.

## Decision

We adopt ISO 8601 with timezone notation, preferably in UTC (`Z`), as the standard method for representing dates and
times in our software projects, replacing the usage of Unix timestamps or any other formats or timezones.
We use both dashes (`-`) and colons (`:`).

We store date and time as: `2024-04-16T16:48:14Z` (preferably with `Z` as timezone, representing UTC)

We store dates as `2024-04-16`.

Only when capturing client events we may want to choose to store the client timezone instead of UTC.

When rendering a date and time in a user interface, we may want to localize the date and time for the appropriate
timezone.

## Risks

Increased storage space: ISO 8601 representations can be longer than other formats, leading to potential increases in
storage requirements, especially when dealing with large datasets.

## Consequences

A single ISO 8601 with UTC timezone provides a clear and unambiguous way to represent dates and times.
Its format is easily recognizable and eliminates the need for interpretation.
For example: `2024-04-15T10:00:00Z` can easily be understood without needing to parse it using a library.

We will need to regularly convert from localized time to UTC and back when capturing, storing, and rendering dates and
times.

## More Information

ISO 8601 is an internationally recognized standard endorsed by the International Organization for Standardization (ISO).
Its adoption offers numerous benefits, including improved clarity, global accessibility, and future-proofing of systems
and applications.

For further reading on ISO 8601:

- [Forum Standaardisatie - Datum en Tijd](https://www.forumstandaardisatie.nl/open-standaarden/datum-en-tijd)
- [ISO 8601-1:2019 - Date and Time Format](https://www.iso.org/standard/70907.html)
- [ISO 8601 - Wikipedia](https://en.wikipedia.org/wiki/ISO_8601)
