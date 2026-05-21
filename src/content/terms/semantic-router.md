---
title: "Semantic Router"
description: "A logic component that routes incoming natural language requests to specific workflows, models, or databases based on intent."
related: ["context-layer", "agentic-analytics", "prompt-context"]
---

**Semantic Router** is a logical routing component that determines user intent from natural language inputs and routes the request to the most appropriate workflow, database source, or machine learning model.

## How it Works

A semantic router works by comparing the vector representation of an incoming user query against a pre-indexed directory of routing patterns. The router identifies the closest semantic match and forwards the query to the designated handler.

- **Vector Comparison**: Measures semantic similarity using cosine distance calculations between prompt embeddings and route templates.
- **Workflow Dispatching**: Forwards queries to specialized databases, specific models, or predefined agent tools.

## Lakehouse & Agentic Relevance

In a data lakehouse ecosystem, a semantic router prevents query processing waste. When a user asks a question, the router determines if the answer requires a high-performance database scan, a cached Reflection, or a vector search. For agentic analytics, routing incoming questions to specialized tools reduces agent search loops. Dremio helps this architecture by serving as the unified SQL gateway, ensuring that routed queries are executed at sub-second speeds.
