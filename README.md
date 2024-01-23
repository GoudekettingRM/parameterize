[![Build](https://github.com/GoudekettingRM/parameterize/actions/workflows/main.yml/badge.svg)](https://github.com/GoudekettingRM/parameterize/actions/workflows/main.yml) [![Specs](https://github.com/GoudekettingRM/parameterize/actions/workflows/specs.yml/badge.svg)](https://github.com/GoudekettingRM/parameterize/actions/workflows/specs.yml) [![codecov](https://codecov.io/gh/goudekettingrm/parameterize/branch/main/graph/badge.svg)](https://codecov.io/gh/goudekettingrm/parameterize)


# Parameterize

A TypeScript library for normalizing and parameterizing strings, making them URL-friendly.

## Installation

Install `parameterize` using npm:

```bash
npm install @goudekettingrm/parameterize
```

or using yarn:

```bash
yarn add @goudekettingrm/parameterize
```

## Usage
Import and use the parameterize function in your TypeScript or JavaScript project:

```typescript
import { parameterize } from 'parameterize';

const normalizedString = parameterize('Äpfel & Birnen!');
console.log(normalizedString); // Outputs: 'apfel-birnen'
```

## API
- parameterize(str: string, options?: { charCap?: number, separator?: string }): string
  - str: The string to be normalized and parameterized.
  - options: Optional settings.
    - charCap: Maximum length of the output string.
    - separator: The separator to use instead of hyphens.


## Contributing
Contributions are welcome! Please read our Contributing Guide for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License.
