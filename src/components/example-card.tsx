// src/components/example-card.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExampleCardProps {
  title: string;
  description: string;
  content: string;
  onAction?: () => void;
  actionLabel?: string;
}

export const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  description,
  content,
  onAction,
  actionLabel = "Action",
}) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        {onAction && <Button onClick={onAction}>{actionLabel}</Button>}
      </CardFooter>
    </Card>
  );
};
