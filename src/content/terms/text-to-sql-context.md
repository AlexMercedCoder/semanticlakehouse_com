---
title: "Text-to-SQL Context"
description: "The schemas, rules, and examples supplied to an LLM to guide accurate SQL query generation."
related: ["context-layer", "prompt-context", "retrieval-augmented-generation"]
---

**Text-to-SQL Context** is the specific metadata payload (including table definitions, column types, relationship joins, and sample queries) injected into an LLM's prompt to guide it in translating natural language queries into valid SQL syntax.

## How it Works

The context serves as a database dictionary for the model. When a user asks a data question, the AI orchestration system fetches the relevant database schemas and injects them as formatted text within the prompt context, allowing the model to select correct tables and columns.

- **Schema Mapping**: Translates raw database layouts into structured text representations for prompt insertion.
- **SQL Few-Shot Examples**: Appends sample question-to-SQL pairings to teach the model how to construct complex query patterns.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture containing massive physical datasets, writing correct SQL requires deep partition knowledge. Supplying this context to the AI agent prevents invalid table scans on cloud storage. For agentic analytics, using virtual datasets as text-to-sql context minimizes complexity because the agent compiles simple SQL views rather than complex physical layouts. Dremio simplifies this process by exposing clean, virtualized SQL endpoints that serve as stable targets for AI code generation.
