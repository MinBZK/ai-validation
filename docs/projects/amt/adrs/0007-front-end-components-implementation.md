# AMT-0007 Front-end components implementation

## Context

We will implement the [NL Design System](https://nldesignsystem.nl) to ensure consistency, accessibility,
and efficiency in our user interface development. This decision is motivated by the need
to align with accessibility standards and best practices. Ensuring that our products are intuitive,
cohesive, and maintain a high standard of quality. By leveraging the NL Design System,
we will streamline our design process and collaborate with other governmental institutions.

## Assumptions

* The NL Design System will continue to evolve and remain supported.
* Our team has the capacity and expertise to contribute to the NL Design System when needed.
* The existing components in the NL Design System will cover the majority of our design needs.

## Decision

We will adopt the NL Design System as the foundation for our GUI implementation.
For any special requirements not covered by the system, we will develop our own components and
contribute them back to the NL Design System community where applicable. We will not adopt our
own NL Design System but rather always contribute to the existing ones.

We make use of the following NL Design Systems; ROOS Design System from RVO, Utrecht Design System
from municipality of Utrecht and, in the future, to the Rijkshuisstijl community, ensuring that our
contributions and customizations are in line with broader governmental design standards.

## Risks

* The NL Design System might not evolve quickly enough to meet all our future needs,
  leading to potential delays in development.
* Contributing back to the NL Design System might require additional resources and
  could introduce complexities in managing our own custom components.
* Dependence on external systems and communities might pose a risk if their priorities
  shift or if there is a lack of support.

## Consequences

### Positive

* **Consistency:** Our products will benefit from a consistent look and feel,
  in line with governmental standards.
* **Efficiency**: Reusing existing components will accelerate development and reduce redundancy.
* **Community engagement**: By contributing to the NL Design System, we enhance our standing within
  the design community and promote shared innovation.

### Negative

* **Customization complexity:** Developing and maintaining custom components might increase our design and
development workload.
* **Dependency:** Our design system will be partially dependent on external frameworks and community
 developments, which could introduce unforeseen challenges.

## More Information

* [ROOS Design System](https://nl-design-system.github.io/rvo/docs/) - The design system developed by RVO,
  which will serve as an initial reference.
* [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community) - The broader
  community we plan to engage with in the future.
* [NL Design System official documentation](https://nldesignsystem.nl/) - The NL Design System community, documentation
  and tools.
