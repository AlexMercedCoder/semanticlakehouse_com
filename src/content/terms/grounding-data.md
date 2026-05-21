---
title: "Grounding Data"
description: "Factually verified data used to anchor LLM responses and minimize model hallucinations."
related: ["retrieval-augmented-generation", "prompt-context", "context-layer"]
---

**Grounding Data** refers to the factually verified, structured, and contextual information retrieved from authoritative databases and used to anchor large language model responses. It ensures that the model generates replies based on corporate facts rather than internal weights.

## How it Works

Grounding data functions as a reference manual for the LLM during prompt processing. When a user query is received, the system queries reliable enterprise systems, extracts the exact metrics or documents required, and inserts them into the active context, instructing the model to base its generation step only on this text.

- **Factual Restraints**: Instructs the model to limit its replies to the retrieved facts, blocking speculation.
- **Reference Auditing**: Enables the user or system to verify the source files behind the model's statements.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, grounding data is retrieved from verified datasets and catalogs rather than unstructured web scraping. For agentic analytics, using high-quality grounding data prevents agents from hallucinating corporate stats or reporting wrong metrics. A unified semantic layer acts as the authority source for grounding, providing verified KPIs to the model prompt. Dremio accelerates grounding data extraction by providing sub-second SQL access to massive cloud tables, ensuring the agent gets immediate access to the latest data.
