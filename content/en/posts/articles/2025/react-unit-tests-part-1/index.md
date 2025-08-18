---
title: React Unit Tests part 1
date: 2025-08-18
author: hexxie
description: How to test React app with React testing library
---

Here's the documentation for [Frontend testing](https://testing-library.com/docs/react-testing-library/cheatsheet)

## Test structure

### Component

```js
import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Changed!</button>
    </div>
  );
};

export default Greeting;
```

### Test

And test structure to test click button

```js
// Test suite
describe("Greeting component", () => {
  // Test
  test("renders Changed if the button clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement); // wait for click

    // Assert
    const outputElement = await screen.findByText(/Changed!/i, {
      selector: "p",
    });
    const hideElement = screen.queryByText(/good to see you/i);

    // We can see that by click desired test shows
    expect(outputElement).toBeInTheDocument();
    // Undesired hides
    expect(hideElement).toBeNull();
  });
});
```

## Used API

### @testing-library/react - React testing Library

https://testing-library.com/docs/react-testing-library/intro

Wraps `@testing-library/dom` and adds integration with React.

#### Main methods

**`render(ui, options)`** – mount component into fake DOM (jsdom).
**`screen`** – global object to search elements (instead destructuring with `render`).

- **Queries (усі з `@testing-library/dom`)**:

  - `getBy...` / `getAllBy...` – sync search (throw an error if not found).
  - `queryBy...` / `queryAllBy...` – also search but doesn't throw an error (returns `null`/`[]`).
  - `findBy...` / `findAllBy...` – async search (wait for element to appear).

- **`cleanup()`** – clean DOM after the test manually

#### @testing-library/user_event

https://testing-library.com/docs/user-event/intro

Library to **simulate user actions** (clicks, typing, hover etc).

### Main methods

- `await userEvent.click(element)` – click.
- `await userEvent.type(element, 'Hello')` – typing text by letters.
- `await userEvent.keyboard('{Backspace}')` – simulate keyboard.
- `await userEvent.hover(element)` / `unhover(element)` – hover/unhover.
- `await userEvent.dblClick(element)` – double click.
- `await userEvent.selectOptions(select, 'value')` – choose in `<select>`.
- `await userEvent.upload(input, file)` – upload file.

#### @testing-library/jest-dom

https://testing-library.com/docs/user-event/intro

Matchers from **Jest DOM** help make assertions more natural and user-focused.  
Here is a quick cheatsheet to get started.

### Popular matchers

- `expect(element).toBeInTheDocument()` – element in the DOM.
- `expect(element).toHaveTextContent("Hello")`
- `expect(element).toBeVisible()` – visible.
- `expect(element).toBeDisabled()` / `toBeEnabled()`
- `expect(element).toHaveAttribute("src", "image.png")`
- `expect(element).toHaveClass("active")`
- `expect(element).toHaveValue("123")`
- `expect(element).toHaveStyle({ color: 'red' })`
