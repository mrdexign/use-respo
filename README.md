# useRespo

## a usefull react hook for build responsive web pages

it's fast & it's very easy to use :))

# How to use ?

first , install it :

```bash
yarn install use-respo
```

or if you prefer npm :

```bash
npm i use-respo
```

then use it like a charm :

```js
import React from 'react';
import useRespo from 'use-respo';

const App = () => {
	const { Tiny, Mobile, Tablet, Laptop, Tv } = useRespo();
	return (
		<div>
			<Laptop>Laptop screen ONLY</Laptop>

			<Laptop up>larger than Laptop Screen size</Laptop>

			<Laptop down>smaller than Laptop Screen size</Laptop>
		</div>
	);
};

export default App;
```

> use "up" or "down" attributes to show content in larger or smaller size than the device you choose

you can use below components like the example above

-   Tiny
-   Mobile
-   Tablet
-   Laptop
-   Tv

# ide suggestion

use ide suggestion for faster development

![hello](https://github.com/mrdexign/use-respo/blob/main/images/1.png)

![hello](https://github.com/mrdexign/use-respo/blob/main/images/2.png)

# Customization

## breakpoints

default break point sizes is :

```js
{ xs: 0, sm: 410, md: 960, lg: 1280, xl: 1800 }
```

you can define your custom sizes like this:

```js
const { Laptop } = useRespo({ xs: 0, sm: 480, md: 790, lg: 1100, xl: 1900 });
```

or create your custom hook like this :

```js
const myCustomBreakPoints = { xs: 0, sm: 480, md: 790, lg: 1100, xl: 1900 };

const useCustomRespo = useRespo.bind(null, myCustomBreakPoints);

const { Laptop } = useCustomRespo();
```

## onDown & onUp callbacks

call your custom function if the device breakpoint , breaks

```js
<Laptop
	onDown={() => {
		console.log('down');
	}}
	onUp={() => {
		console.log('up');
	}}
/>
```
