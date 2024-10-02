
# Select Country - Flag Components and Country Lists

This project reads a folder of SVG flags, converts them into React components, and generates lists of countries that support different Speech API features (TTS, STT, both). The images are sourced from the `react-flags-select` library, which should be credited accordingly.

## Features

- **Flag Components**: SVG files are converted into TypeScript (.tsx) components.
- **Country Lists**: Three lists of countries are generated, ready for use in the ShadCN combobox element:
  - `allCountries`: A list of all countries.
  - `sttSupportCountries`: A list of countries that support Speech-to-Text (STT) in the Microsoft Speech API.
  - `ttsSupportCountries`: A list of countries that support Text-to-Speech (TTS).
  - `sttTtsSupportCountries`: A list of countries that support both STT and TTS.

## Folder Structure

The folder structure includes:
- `select-country/`
  - Contains all the flag components and the `countriesList.tsx` file.

## How to Use

### Step 1: Copy the `select-country` Folder

Simply copy the `select-country` folder into your React or Next.js project, under the `components` directory.

### Step 2: Import Country Lists

In your component, you can import the country lists like this:

\`\`\`tsx
import {
  CountryEntry,
  allCountries,
  sttSupportCountries,
  sttTtsSupportCountries,
  ttsSupportCountries,
} from "./select-country/countriesList";
\`\`\`

These lists are ready to be used to populate the combobox in your application.

### Step 3: Populate the Combobox

You can use the lists to fill the ShadCN combobox or any other dropdown you use in your app.

\`\`\`tsx
<Combobox>
  {allCountries.map((country: CountryEntry) => (
    <ComboboxOption key={country.code} value={country.name}>
      {country.flag} {country.name}
    </ComboboxOption>
  ))}
</Combobox>
\`\`\`

## Customization

If you need to make changes to the lists or flags, you can modify the `convert-svg-to-react.js` file. After making changes, rerun the script to regenerate the `select-country` folder.

## Credits

- The flag images are sourced from the [react-flags-select](https://github.com/ekwonye-richard/react-flags-select) library. Please make sure to credit it in your project.

## How to Run the SVG to React Conversion

1. Make sure you have Node.js installed.
2. Modify the `convert-svg-to-react.js` script as needed.
3. Run the script:

\`\`\`bash
node convert-svg-to-react.js
\`\`\`

This will regenerate the `select-country` folder with updated React components and country lists.
