# NextGen Core UI

Simplicity is the feature.

Nextgen Core UI is a simplisic component library which is pretty much not based as.... just focused on making readable core layout components for React and Next.js projects.

## Installation

To install the `nextgen-core-ui` package, run the following command in your project directory:

```bash
npm install nextgen-core-ui
```

or

```bash
pnpm i nextgen-core-ui
```

## Usage

Import the components you need from the nextgen-ui package and use them in your project.

### Example

```jsx
import { Container, FlexRow, FlexCol } from "nextgen-core-ui";

function MyComponent() {
  return (
    <Container>
      <FlexRow>
        <FlexCol>{/* Your content goes here */}</FlexCol>
      </FlexRow>
    </Container>
  );
}
```

## Components

- **PageContainer**: A container component for page layouts.

- **Container**: A wrapper component for your content.
- **Section**: A section component that actually outputs a `<section>` tag. I usually use this before a `<Container>` component to store full-width backgrounds.
- **InnerSection**: It's not actually a `<section>`, but it makes it easier to read the code. It's just a `<div>`.

- **GridRow**: A grid-based row component.
- **GridCol**: A grid-based column component.

- **FlexRow**: A flexbox-based row component.
- **FlexCol**: A flexbox-based column component.

## Customizing Styles

You can customize the styles of the components using the className prop. Pass your custom CSS classes to the components, and they will be applied alongside the default styles.

```jsx
import { Container, FlexRow, FlexCol } from "nextgen-core-ui";

function MyComponent() {
  return (
    <Container className="max-w-screen-lg mx-auto">
      <FlexRow className="justify-between">
        <FlexCol className="w-1/2">{/* Your content goes here */}</FlexCol>
        <FlexCol className="w-1/2">{/* Your content goes here */}</FlexCol>
      </FlexRow>
    </Container>
  );
}
```

All components is just based on what a `<div>` is supposed to do. We do split them into semantics as `<section>`, but only when a section is used. Else... Just a lot of divs... what can i say? 🙄
