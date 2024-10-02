const fs = require("fs");
const path = require("path");

// Use the root of the application folder where the script is run
const appRoot = process.cwd();

// Directory configuration based on your folder structure
const selectCountryDir = path.join(appRoot, "select-country"); // Directory at the root of your app for storing the output
const svgDir = path.join(appRoot, "flags"); // Directory for SVG files
const flagComponentsDir = path.join(selectCountryDir, "flagComponents"); // Directory for React components
const indexFile = path.join(flagComponentsDir, "index.ts"); // Index file for flag components
const countriesListFile = path.join(selectCountryDir, "countriesList.tsx"); // Output for countries list
const jsonDir = path.join(appRoot, "CountryJson"); // Directory for the JSON files

// JSON files to process
const jsonFiles = [
  { file: "countries.json", exportName: "allCountries" },
  { file: "stt-support.json", exportName: "sttSupportCountries" },
  { file: "stt-tts-support.json", exportName: "sttTtsSupportCountries" },
  { file: "tts-support.json", exportName: "ttsSupportCountries" },
];

// Helper function to capitalize the first letter of a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Function to create the React component from the SVG content
const createReactComponent = (svgContent, componentName) => {
  const svgBody = svgContent.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "");

  return `
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ${componentName}Props = {
  className?: string;
};

const ${componentName} = forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${svgBody.trim()}
        </svg>
      </div>
    );
  }
);

${componentName}.displayName = "${componentName}";

export default ${componentName};
`;
};

// Step 1: Ensure that output directories exist
if (!fs.existsSync(selectCountryDir)) {
  fs.mkdirSync(selectCountryDir);
}
if (!fs.existsSync(flagComponentsDir)) {
  fs.mkdirSync(flagComponentsDir);
}

// Step 2: Clear or create the index.ts file for flag components
fs.writeFileSync(indexFile, "");

// Step 3: Read all SVG files from the directory and convert them to React components
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error("Error reading SVG directory:", err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const filePath = path.join(svgDir, file);
      const fileNameWithoutExt = path.basename(file, ".svg");

      // Capitalize the file name and add 'Flag' to it
      const componentName = capitalize(fileNameWithoutExt) + "Flag";

      // Step 4: Read the content of the SVG file and create the corresponding React component
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading SVG file:", filePath, err);
          return;
        }

        const componentContent = createReactComponent(data, componentName);

        // Step 5: Write the React component to a .tsx file in the flagComponents folder
        const outputFilePath = path.join(
          flagComponentsDir,
          `${componentName}.tsx`
        );
        fs.writeFile(outputFilePath, componentContent, (err) => {
          if (err) {
            console.error("Error writing component file:", outputFilePath, err);
            return;
          }

          console.log(`Component ${componentName} created successfully!`);

          // Step 6: Append the export statement to the index.ts for flag components
          const exportStatement = `export { default as ${componentName} } from './${componentName}';\n`;
          fs.appendFileSync(indexFile, exportStatement);
        });
      });
    }
  });
});

// Step 7: Create the countriesList.ts file to store the country data from the JSON files
const createCountryList = () => {
  // Write initial imports and type definitions to the countriesList.ts file
  fs.writeFileSync(
    countriesListFile,
    `import { ReactElement } from "react";\nimport * as Flags from "./flagComponents";\n\n`
  );

  // Define the CountryEntry type
  fs.appendFileSync(
    countriesListFile,
    `export type CountryEntry = {\n  name: string;\n  code: string;\n  flag: ReactElement;\n};\n\n`
  );

  // Step 8: Process each JSON file and generate the exportable country lists
  jsonFiles.forEach(({ file, exportName }) => {
    const filePath = path.join(jsonDir, file);

    // Step 9: Read and parse the JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Step 10: Create the country array with the corresponding flag component
    const countriesArray = jsonData
      .map(
        (entry) =>
          `{\n  name: "${entry.name}",\n  code: "${
            entry.code
          }",\n  flag: <Flags.${capitalize(entry.code)}Flag />\n}`
      )
      .join(",\n");

    // Step 11: Append the array to the countriesList.ts file
    fs.appendFileSync(
      countriesListFile,
      `export const ${exportName}: CountryEntry[] = [\n${countriesArray}\n];\n\n`
    );
  });

  console.log("countriesList.ts file created successfully!");
};

// Step 12: Call the function to create the countries list after processing flags
createCountryList();
