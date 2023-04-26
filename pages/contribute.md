---
title: "Contributing"
description: Interested in Morty ? Discover how to contribute to the project.
---

# Contributing to Morty

Thank you for investing your time in contributing to the Morty project!

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, committing your changes, and getting your PR merged.

If you are lost at any point, don't hesitate to file an issue on [GitHub](https://github.com/morty-faas/morty) !

## Project Roadmap

You can find the project roadmap on the [GitHub project](https://github.com/orgs/morty-faas/projects/1).

## Community

All the discussions related to the project must be done through the [organization discussion](https://github.com/orgs/morty-faas/discussions). Don't forget to review the project [code of conduct](https://github.com/morty-faas/morty/blob/main/CODE_OF_CONDUCT.md).

## Getting started

### Select an issue to work on

First, you can explore the issues present in the different projects of the [morty-faas](https://github.com/morty-faas) organization. If you are interested by an issue, add a comment on it by tagging the `@morty-faas/core` team. This avoid conflicts between multiple development on the same issue.

If your issue is not listed in any of the repositories, you can create an issue in the good repository. In your issue, please give a detailed description to allow other maintainers and other contributors to understand the subject and the implications of your request.

> See [GitHub - Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue).

### Fork the repository

Once your issue is ready, fork the repository in order to do your changes freely without affecting the original project.

> See [GitHub - Fork a repository](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue).

### Open a Pull Request

When you are creating a pull request, consider using templates provided and fill it.

### Review flow

**Your pull request needs to be up to date with the latest changes before asking for merge**

When your Pull Request is ready to be reviewed, you can ask for "review" using github pull requests parameters.

The Pull Request will be checked in a first step by a maintainer using the following criteria:

- [x] Up to date and no merge conflict
- [x] Code explanations and documentation provided
- [x] Unitary tests or procedure to test the feature provided
- [x] Pull request have a description of the feature objectives provided

If the maintainer validates the relevance and form of the Pull Request, he will merge himself.

NOTE: A pull request need at least 1 approvals to be merged.

## Commits conventions

Our commit convention follow the [Conventional Commits 1.0.0-beta.4](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

To be more explicit, we will describe below the commit conventions message.

### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>

<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if any.

Samples: (even more samples)

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest golang version
```

### Revert

If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: npm, maven, etc.)
- **chore**: Some house keeping activity
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit revert
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **i18n**: Add or improve translations

### Scope

The scope should be the name of the module affected.

The following is the list of supported scopes:

- main
- cli
- etc.

There are currently a few exceptions to the "use module name" rule:

- **none/empty string**: useful for style, test and refactor changes that are done across all packages (e.g. style: add missing semicolons)

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about Breaking Changes and is also the place to [reference GitHub issues that this commit Closes](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

**Breaking Changes** should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.

### Sign commit message

Please consider signing the commit message at least with `Signed-Off-By`.
