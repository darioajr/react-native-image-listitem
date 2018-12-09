# react-native-image-listitem [![Travis](https://img.shields.io/travis/oblador/react-native-image-listitem.svg)](https://travis-ci.org/oblador/react-native-image-listitem) [![npm version](https://img.shields.io/npm/v/react-native-image-listitem.svg)](https://www.npmjs.com/package/react-native-image-listitem)
*ListItem gallery for images in React Native*

## Installation

```
yarn add react-native-image-listitem
```

**Note: Progress indicators has been broken out to a separate component; [react-native-progress](https://github.com/oblador/react-native-progress). To use them, please follow installation instructions for that package.**


## Usage

```js
import Image from 'react-native-image-listitem';

<ImageListItem
  id={index}
  onPressItem={this.onPressItem}
  uri={item.image.uri}
  selected={item.selected}
/>
```

## Properties

Any [`Image` property](http://facebook.github.io/react-native/docs/image.html) and the following:

| Prop | Description | Default |
|---|---|---|
|**`styles`**|Styles applied to the inner image component.|*None*|
|**`id`**|A component to display progress, will be passed a `progress` prop with a number between 0 and 1 and `indeterminate` a boolean wether or not component has started recieveing data.|`ActivityIndicator`|
|**`uri`**|An object of props being passed to the `indicator` component. To disable indeterminate state, pass `{indeterminate: false}`.|*None*|
|**`selected`**|Function to render your own custom indicator, useful for something very simple. If not, consider breaking it out to a separate component and use `indicator` prop instead.|*None*|


Note: `onLoad*` events are bubbled up, so if you want to do some custom thing when the image is loaded for example. 

## Demo

![image-progress-demo](https://cloud.githubusercontent.com/assets/378279/10882718/0f33e7b4-813b-11e5-9f6c-90df8b9050b8.gif)

## Example 

Check full example in the `Example` folder. 

### Pie

```js
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';
<Image 
  source={{ uri: 'http://loremflickr.com/640/480/dog' }} 
  indicator={Progress.Pie}
  indicatorProps={{
    size: 80,
    borderWidth: 0,
    color: 'rgba(150, 150, 150, 1)',
    unfilledColor: 'rgba(200, 200, 200, 0.2)'
  }}
  style={{
    width: 320,
    height: 240,
  }}/>
```

## Using a custom image component

For some use cases such as better GIF support or more granular control over caching you might want to use a custom image component, to do this simply use the `createImageProgress` function: 

```js
import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';

const Image = createImageProgress(FastImage);
``` 

*NOTE: the alternative image implementation must conform to the core `Image` component life cycle props, notably `onProgress`, `onError`, `onLoad` and `onLoadStart`.*

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Dario Alves Junior

