# Katwercer

## Description

katwercer is a lightweight npm package that converts time strings into the equivalent number of milliseconds. It supports various time units such as years, months, weeks, days, hours, minutes, and seconds. The package provides a single function convert for easy and efficient parsing of time durations.

## Getting Started

### Installation

Install **katwercer** using `npm`, `pnpm`, or `yarn`:

#### npm

```sh
npm install katwercer
```

#### pnpm

```sh
pnpm install katwercer
```

#### yarn

```sh
yarn add katwercer
```

### Usage

Import the convert function into your code:

```js
import { convert } from 'katwercer';
```

Convert time strings into milliseconds:

```js
const timeString = '1h30m';
const milliseconds = convert(timeString);
console.log(milliseconds); // Output: 3600000 (1 hour in milliseconds)
```

The time string can consist of any combination of time units, allowing
flexibility in defining durations.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
