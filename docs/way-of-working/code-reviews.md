# Code reviews

The purpose of a code review is to ensure the quality, readability, and that all requirements from the ticket have been
met for a change before it gets merged into the main codebase. Additionally, code reviews are a communication tool, they
allow team members to stay aware of changes being made.

Code reviews involve having a team member examine the changes made by another team member and give feedback or ask
questions if needed.

## Creating a Pull Request

We use GitHub pull requests (PR) for code reviews. You can make a draft PR if your work is still in progress. When you
are done you can remove the draft status. A team member may start reviewing when the PR does not have a draft status.

For team ADRs at least 3 accepting reviews are required, or all team members should accept if it can be expected that
the ADR is controversial.

A team ADR is an ADR made in the ai-validation repository.

All other PRs only need at least 1 reviewer to get accepted, but can have more reviewers if desired (by either reviewer or
author).

## Review process

By default the codeowner, indicated in the CODEOWNER file, will be requested to review. For us this is the GitHub team
AI-validation. If the PR creator wants a specific team member to review, the PR creator should add the team member
specifically in the reviewers section of the PR. A message in Mattermost will be posted for PRs. Then with the reaction
of an emoji a reviewer will indicate they are looking at the PR.

If the reviewer has suggestions or comments the PR creator can fix those or add comments to the suggestions. When the
creator of the PR thinks he is done with the feedback he must re-request a review from the person that did the review.
The reviewer must then look at the changes and approve or add more comments. This process continues until the reviewer
agrees that all is correct and approves the PR.

Once the review is approved the reviewer checks if the branch is in sync with the main branch before merging. If not,
the reviewer rebases the branch. Once the branch is in sync with main the reviewer merges the PR and checks if the
deployment is successful. If the deployment is
not successful the reviewer fixes it. If the PR needs more than one review, the last accepting reviewer merges the PR.
