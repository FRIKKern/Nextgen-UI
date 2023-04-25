# NextGen UI

A simplisic UI Tailwind component library just focused on making readable core layout components for React and Next.js projects.

## Installation

To install the `nextgen-ui` package, run the following command in your project directory:

```bash
npm install nextgen-ui
```

or

```bash
pnpm i nextgen-ui
```

## Usage

Import the components you need from the nextgen-ui package and use them in your project.

### Example

```jsx
import { Container, FlexRow, FlexCol } from "nextgen-ui";

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
- **Section**: A versatile section component for your layouts.

- **GridRow**: A grid-based row component.
- **GridCol**: A grid-based column component.

- **FlexRow**: A flexbox-based row component.
- **FlexCol**: A flexbox-based column component.

## Customizing Styles

You can customize the styles of the components using the className prop. Pass your custom CSS classes to the components, and they will be applied alongside the default styles.

```jsx
import { Container, FlexRow, FlexCol } from "nextgen-ui";

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
