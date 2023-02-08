# React Component Library with Create React App

This project uses [Create React App](https://create-react-app.dev/) with TypeScript to develop and test a collection of reusable React components before publishing to npm.

## Prerequisites
- npm account (paid or public repository)
- [React](https://reactjs.org/) knowledge
- [Create React App](https://create-react-app.dev/) experience
- [TypeScript](https://www.typescriptlang.org/) knowledge (optional)

## Getting Started
1. Fork the repository
2. Pull the repository
3. Run `npm install` in the project directory
4. Create a folder in `/src/components` for your new component
5. Make an index file in `/src/components/yourComponentName` with the component exported
6. Add the export to `/index.ts`
7. Test and develop your component by adding it to `/src/App.tsx`
8. Consider using [Emotion](https://emotion.sh/docs/introduction) or similar to keep CSS with the component.
9. Change the name and homepage in `package.json` to reflect your library

## Testing the Components
This project uses [Create React App](https://create-react-app.dev/) to test the components, so you can use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to write tests.

## How to Publish
```npm run prepare```

1. Check the contents of `lib` folder as this is what will get published after running `npm run publish`. The type definitions will also be added to the `/lib` folder.
2. Change the version in `package.json`
3. Push the code

```npm run publish```

This script is set up to publish the components in the `/lib` folder to npm with the `--access public` flag, making the package publicly available.

## Package Structure
The built package, which includes both CommonJS and ECMAScript modules, as well as CSS files, will be located in the `lib` folder.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch for your contribution
3. Make your changes
4. Submit a pull request

We appreciate any contribution that helps improve the project, whether it's fixing bugs, adding new features, or improving documentation. Before submitting your contribution, please make sure to thoroughly test your changes in the development environment to ensure stability and compatibility.

When submitting a pull request, please include a clear and concise description of the changes you have made and why they are needed. Please also make sure that your code follows the existing coding standards and conventions used in the project.

We look forward to reviewing your contributions!

## License
This project is licensed under the MIT license. The license file can be found at the root of the repository: [LICENSE](./LICENSE)

## Note
Please make sure to thoroughly test the components in the development environment before publishing to ensure stability and compatibility.

We hope you have good times and fun building React components with this library!