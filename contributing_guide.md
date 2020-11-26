# Contributing
We are open to, and grateful for, any contributions made by the community. Everyone participating in this project governed by the [Code of Conduct](code_of_conduct.md).

## Contribution Prerequisites
- You have Node installed at v8.0.0+

## Setting up the Development Environment
To get the project running, execute an `npm install`.

## Testing
Please update the tests to reflect your code changes. Also, new features must include adequate test coverage. High test coverage does not ensure features are bug free, but it decreases the likelyhood of defects by identifying untested code. So, contributions are expected to have high test coverage.

Execute the following command to run test coverage:
```
npm run test-cov
```

## Code Style
We optimize for readability. The project uses ESLint to maintain and enforce its code style. Ensure your contribution passes the linter before summiting a pull request.

Execute the following command to run the linter:
```
npm run lint
```

## Documentation
Update the documentation appropriately to represent the changes to the behavior of the project.

## Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 50 characters or less
- Do not end the subject line with a period

## Pull Requsts
Contributions via pull requests are much appreciated. Before sending us a pull request, please ensure that:

You are working against the latest source on the master branch.
You check existing open, and recently merged, pull requests to make sure someone else hasn't addressed the problem already.
You open an issue to discuss any significant work - we would hate for your time to be wasted.

To send us a pull request, please:

1) Fork the repo, clone your fork, and configure the remotes
2) If you cloned a while ago, get the latest changes from upstream
3) Create a new topic branch (off the master branch) to contain your feature, change, or fix
4) Commit your changes in logical chunks; follow the commit message guidelines above
5) Locally merge (or rebase) the upstream development branch into your topic branch
6) Push your topic branch up to your fork
7) Open a Pull Request with a clear title and description

GitHub provides additional document on [forking a repository](https://help.github.com/articles/fork-a-repo/) and
[creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Releasing / Changelog
It's important to update Prefect's changelog with any adjustments to the project. Each release has a few sections:

- Features: headline additions to the system
- Enhancements: improvements to existing functionality, or minor additions
- Fixes: adjustments that fix bugs or other conditions
- Deprecations: any deprecated functionality
- Breaking Changes: any changes that break Prefect's backwards-compatibility

## License
By contributing, you agree that your contributions will be licensed under the LICENSE file in the root directory of this source tree.
