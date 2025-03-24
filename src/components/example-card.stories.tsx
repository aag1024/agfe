// src/components/example-card.stories.tsx
import { ExampleCard } from "./example-card";

export default {
  title: "Components/ExampleCard",
};

export const Default = () => (
  <ExampleCard
    title="Example Card"
    description="This is a sample card component"
    content="This card demonstrates the integration of shadcn UI components with Ladle for component development."
    actionLabel="Click Me"
    onAction={() => alert("Button clicked!")}
  />
);

export const NoAction = () => (
  <ExampleCard
    title="Card Without Action"
    description="A card without an action button"
    content="This variation shows the card without any actions in the footer."
  />
);

export const LongContent = () => (
  <ExampleCard
    title="Card With Long Content"
    description="This card has a longer content section"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nisl eget nisl."
    actionLabel="Learn More"
    onAction={() => alert("Learn more clicked!")}
  />
);
