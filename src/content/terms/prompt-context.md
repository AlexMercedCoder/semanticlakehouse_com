---
title: "Prompt Context"
description: "The targeted business rules, schema metadata, and background information injected into an LLM prompt to guide its reasoning."
related: ["context-layer", "llm-context-window", "retrieval-augmented-generation"]
---

**Prompt Context** refers to the background information, schema metadata, business definitions, and operational rules injected into an LLM prompt. It grounds the model, ensuring its answers are relevant and accurate to the business database.

## How it Works

Prompt context works by prepending relevant facts to the user's question. When a query is received, the AI system retrieves structural metadata, rules, and few-shot SQL examples, then structures them into the prompt before sending it to the model.

- **Dynamic Grounding**: Pulls relevant database tables and definitions to insert into the active prompt context.
- **Instruction Enforcement**: Integrates specific rules (such as specifying which columns contain null values) to guide code generation.

## Lakehouse & Agentic Relevance

In a data lakehouse, prompt context acts as the guide that teaches AI models how to query raw storage systems. For agentic analytics, prompt context is necessary to write correct queries over open table formats. If the context does not define the table relationships and schemas clearly, the agent will write invalid joins. Dremio virtual datasets simplify this by providing pre-packaged logical views, allowing developer tools to supply simple, high-value prompt context to the model.
