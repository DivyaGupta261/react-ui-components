import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

let componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

componentName = componentName.charAt(0).toLowerCase() + componentName.slice(1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const currentFolderName = __dirname.split('/').pop();
const rootDir = path.join(__dirname.split(currentFolderName)[0]);
const srcDir = path.join(rootDir, 'src');

const packageJsonContents = fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8');
const packageJsonData = JSON.parse(packageJsonContents);
const packageName = packageJsonData.name;

console.log(`Creating component ${componentName}...`,);

const componentDir = path.join(srcDir, 'components', componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Component ${componentName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const docsDir = path.join(srcDir, 'components', componentName, '__docs__');
fs.mkdirSync(docsDir, { recursive: true });

const testDir = path.join(srcDir, 'components', componentName, '__test__');
fs.mkdirSync(testDir, { recursive: true });

const componentNameCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const fileName = `${componentNameCapitalized}.tsx`;

const getContents = (fileName) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'templates', fileName), 'utf8');
        let contents = data.toString();
        contents = contents.replace(/{componentNameCapitalized}/g, componentNameCapitalized)
        contents = contents.replace(/{componentName}/g, componentName)
        contents = contents.replace(/{packageName}/g, packageName)
        return contents;
    } catch (err) {
        console.error('Error encountered while trying to read template files', err);
        return '';
    }
}

const files = [
    {
        name: fileName,
        content: getContents('component.txt'),
    },
    {
        name: 'index.ts',
        content: `export { default as ${componentNameCapitalized} } from "./${componentNameCapitalized}";`,
    },
    {
        name: `__docs__/${componentNameCapitalized}.mdx`,
        content: getContents('docs.txt'),
    },
    {
        name: `__docs__/${componentNameCapitalized}.stories.tsx`,
        content: getContents('stories.txt'),
    },
    {
        name: `__test__/${componentNameCapitalized}.test.tsx`,
        content: getContents('test.txt'),
    }
];
        
files.forEach((file) => {
    fs.writeFileSync(path.join(componentDir, file.name), file.content);
});
        
console.log(`Component ${componentName} created successfully.`);
