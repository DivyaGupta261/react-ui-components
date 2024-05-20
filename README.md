# React UI Components

This is a library of reusable UI components built with React, TypeScript, and TailwindCSS. It uses Vite for development and build processes, and includes Storybook for component documentation and visual testing.

## Table of Contents

- [Installation](#installation)
- [Starting your own Component Library](#starting-your-own-component-library)
- [Development](#development)
- [Build](#build)
- [Linting and Formatting](#linting-and-formatting)
- [Testing](#testing)
- [Storybook Component Library View](#storybook)
- [Creating a New Component](#creating-a-new-component)
- [Modifying the Component Templates](#modifying-the-component-template)
- [Using the library in another project](#using-the-library-in-another-project)
- [Pre-commit Hook using Husky](#pre-commit-hook)
- [Contributing](#contributing)
- [License](#license)

## Cloning the Repository

To clone the repository, run:

```bash
git clone https://github.com/DivyaGupta261/react-ui-components.git
cd react-ui-components

``` 

## Installation

To install the dependencies, run:

```bash
npm install
```


## Starting your own Component Library

If you want to start your own component library based on this template:

**1.** Clone the repository as mentioned above.
**2.** Remove the existing Git origin:

    ```bash
    git remote remove origin
    ```

**3.** Create a new repository as you normally would do, on GitHub or any other Git hosting service.

**4.** Add the new repository as the origin:

    ```bash
    git remote add origin <your-repository-url>
    ```

**5.** Push the code to the new repository:

  ```bash
  git push -u origin main
  ```

## Development

To start the development server with Vite:

```bash
npm run dev
```

## Build

To build the library for production:

```bash
npm run build
```

This will compile TypeScript and bundle the project using Vite.


## Linting and Formatting

To lint the project using ESLint:

```bash
npm run lint
```

To format the project using Prettier:

```bash
npm run format
```

Linting and formatting are also automatically run on staged files before each commit using Husky and lint-staged.


## Testing


To run the tests once:

```bash
npm run test
```

To run the tests in watch mode:

```bash
npm run test-watch
```

To run the UI test interface with Vitest:

```bash
npm run test:ui
```

## Storybook

To start Storybook server:

```bash
npm run storybook
```

To build the Storybook static site:

```bash
npm run build-storybook
```

## Creating a New Component

To create a new component, use the following command:

```bash
npm run create-component <ComponentName>
```

This will create a new component in the `src/components` directory, along with a test file and a story file.

## Modifying the Component Template

To modify the template files used when creating a new component, navigate to the `scripts/templates` directory and modify the files as needed. These templates are used by the `create-component` script to generate new component files.

## Using the library in another project

To use the library locally in your other React projects, refer to this [blog here](https://medium.com/p/05cd58319801)

## Pre-commit Hook

This project uses Husky to run a pre-commit hook that ensures code quality by running `lint-staged` on staged files. The pre-commit hook is defined as follows:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

This script ensures that all staged files are linted and formatted and tests are run, before they are committed.


## Contributing

Contributions are welcome! Please follow these guidelines when contributing:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

Feel free to use the components in this library in your own projects!