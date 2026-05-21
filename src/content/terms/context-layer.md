---
title: "Context Layer"
description: "The abstraction layer providing business metadata, permissions, and semantic details to LLMs and AI agents."
related: ["semantic-layer", "agentic-analytics", "prompt-context"]
---

**Context Layer** is an architectural abstraction that organizes, curates, and delivers structural metadata, business rules, and session state details to large language models (LLMs) and analytical agents. It provides the domain knowledge needed to ground AI reasoning.

## How it Works

The context layer sits between raw data storage and AI orchestrators. When an agent initiates a task, the context layer supplies table schemas, column descriptions, and query guidelines, allowing the model to generate correct SQL and interpret database outputs.

- **Schema Mapping**: Translates raw database layouts into structured system prompts that describe tables, metrics, and relationships.
- **Dynamic Insertion**: Injects relevant schema and business rule context into the model's active window during query planning.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, the context layer bridges the gap between raw file storage and AI applications. For agentic analytics, the context layer prevents errors by ensuring the AI model has clear definitions for database fields. Without it, the agent has no way to understand column short-codes or structural joins. Dremio helps build a context layer by serving as a unified catalog, offering clear schema metadata and column tags that can be fed directly to AI orchestrators.
