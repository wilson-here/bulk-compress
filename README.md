# [Bulk Compress](https://www.npmjs.com/package/bulk-compress) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-red.svg)](https://github.com/wilson-here/bulk-compress/LICENSE) [![npm version](https://img.shields.io/npm/v/bulk-compress.svg?style=flat)](https://www.npmjs.com/package/bulk-compress) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://www.npmjs.com/package/bulk-compress-cli#Contributing)

## Overview

a CLI app to bulk compress the images inside a folder (supported image type: jpeg, png, webp, avif, gif, svg, tiff)

## Installation

```bash
npm i bulk-compress
```

## Usage

```bash
bulk-compress <INPUT_DIRECTORY> [<OUTPUT_DIRECTORY>]
```

- <INPUT_DIRECTORY>: where your images need to be compressed located
- <OUTPUT_DIRECTORY> (optional): the target folder for your compressed images
  - this folder is automatically created if it doesn't exist, otherwise it is reused
  - if no <OUTPUT_DIRECTORY> provided, the compressed images will be created in the <INPUT_DIRECTORY>
  - compressed image file name will be: <YOUR_IMG_NAME>-min

## Example

```bash
bulk-compress ./images/ ./images/compress/
```

## Contributing

Feel free to contribute to the project by submitting a pull request 🙋‍♂️.

## License

Bulk Compress is [MIT licensed](./LICENSE).
