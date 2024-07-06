# @k_ben/k-reactmodal

A modular react modal.

## Requirements

![NPM](https://img.shields.io/badge/NPM->_10-272858?logo=npm&style=for-the-badge)
![Node](https://img.shields.io/badge/Node->_20-272858?logo=node.js&style=for-the-badge)
![VSCode](https://img.shields.io/badge/IDE-visual%20studio%20code-272858?logo=visual%20studio%20code&style=for-the-badge)

## Installation

The package can be installed via [npm](https://www.npmjs.com/package/@k_ben/k-reactmodal):

```
npm install @k_ben/k-reactmodal
```

## Usage

```jsx
import Modal from '@k_ben/k-reactmodal';

<Modal
  type="success"
  title={'Put your title here'}
  content={'Put your content here'}
  height="150px"
  width="300px"
  position="topleft"
  delay={5000}
  buttonPosition="bottomright"
/>;
```

### Customizing the modal

#### type

The `type` prop is used to specify the type of modal you want to use

```jsx
<Modal type="success" />
```

> Accepted Values : `"info" | "success" | "error" | "warning" | "loading" | "launch" | "end" | "wait"`

#### title

The `title` prop is used to specify the title of modal you want to use

```jsx
<Modal title="The title you want to put" />
```

> Accepted Values : `"string"`

#### content

The `content` prop is used to specify the content of modal you want to use

```jsx
<Modal content="The content you want to put" />
```

> Accepted Values : `"string"`

#### width

The `width` prop is used to specify the width of the modal

```jsx
<Modal width="250px" />
```

> Accepted Values : `"string | number"`

#### height

The `height` prop is used to specify the height of the modal

```jsx
<Modal height="250px" />
```

> Accepted Values : `"string | number"`

#### position

The `position` prop is used to specify the position of the modal in the page

```jsx
<Modal position="topleft" />
```

> Accepted Values : `"topleft" | "topright" | "center" | "bottomleft" | "bottomright"`

#### delay

The `delay` prop is used to specify the delay before the modal disappear

```jsx
<Modal delay="topleft" />
```

> Accepted Values : `"number"`

#### buttonPosition

The `buttonPosition` prop is used to specify the position of the close button on the modal.

```jsx
<Modal buttonPosition="upleft" />
```

> Accepted Values : `"upleft" | "upright" | "center" | "downleft" | "downright"`
