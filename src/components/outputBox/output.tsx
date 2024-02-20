'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export function OutputBox({text}) {
  return (
    <Card className="mt-10 size-48 w-auto">
      <CardHeader>
        <CardTitle>Output</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
    </Card>
  );
}


