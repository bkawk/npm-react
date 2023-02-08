# React Component Library with Create React App

This project uses Create React App to develop and test a collection of reusable React components before publishing to npm.

## Prerequisites
- npm account (paid or public repository)

## Getting Started
1. Pull the repository
2. Run `npm install` in the project directory
3. Create a folder in /src/components
4. Create a folder in `/src/components` for your new component
5. Make an index file in `/src/components/yourComponentName` with the component exported
6. Add the export to `/index.ts`
7. Test and develop your component by adding it to `/src/App.tsx`
8. Consider using [Emotion](https://emotion.sh/docs/introduction) or similar to keep CSS with the component.

## How to Publish
```npm run prepare```

check the contents of `lib` folder as this is what wil get published after...

```npm run publish```

This script is set up to publish the components in the `src/components` folder to npm with the `--access public` flag, making the package publicly available.

## Package Structure
The built package, which includes both CommonJS and EcmaScript modules, as well as CSS files, will be located in the `lib` folder.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch for your contribution
3. Make your changes
4. Submit a pull request


## License
This project is licensed under the MIT license. The license file can be found at the root of the repository: [LICENSE](./LICENSE)

## Note
Please make sure to thoroughly test the components in the development environment before publishing to ensure stability and compatibility.

We hope you have good times and fun building React components with this library!