import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = path.join(__dirname.split('helpers')[0], 'src');

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
