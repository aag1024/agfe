import { Button } from "@/components/ui/button";
import { ExampleCard } from "@/components/example-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Modern Frontend Template</h1>
        <p className="text-muted-foreground">
          A minimal template using Vite, React 19, TypeScript, Tailwind CSS, and
          shadcn/ui
        </p>

        <div>
          <Alert>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your template is working correctly.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExampleCard
            title="Vite + React 18"
            description="Fast development with HMR"
            content="Vite offers an extremely fast development experience with Hot Module Replacement."
            actionLabel="Documentation"
            onAction={() => window.open("https://vitejs.dev/guide/", "_blank")}
          />

          <ExampleCard
            title="TypeScript"
            description="Type-safe development"
            content="TypeScript adds static types to JavaScript, helping you catch errors early."
            actionLabel="Learn TypeScript"
            onAction={() =>
              window.open("https://www.typescriptlang.org/docs/", "_blank")
            }
          />

          <ExampleCard
            title="Tailwind CSS"
            description="Utility-first CSS framework"
            content="Build modern designs without leaving your HTML using utility classes."
            actionLabel="Explore Tailwind"
            onAction={() =>
              window.open("https://tailwindcss.com/docs", "_blank")
            }
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => window.open("http://localhost:61000", "_blank")}
          >
            View Components in Ladle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
