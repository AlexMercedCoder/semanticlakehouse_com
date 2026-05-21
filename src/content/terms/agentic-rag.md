---
title: "Agentic RAG"
description: "An advanced RAG pattern where agents dynamically plan, refine, and query databases for context retrieval."
related: ["retrieval-augmented-generation", "ai-agent", "semantic-router"]
---

**Agentic RAG** (Retrieval-Augmented Generation) is an advanced information retrieval pattern where autonomous agents dynamically plan, execute, and refine search queries to gather context. It replaces static search pipelines with reasoning-driven retrieval.

## How it Works

Agentic RAG uses LLM reasoning loops to determine what, when, and how to search for information.

- **Dynamic Query Formulation**: The agent analyzes user intent and constructs search queries across multiple databases, vector indices, or APIs, rather than relying on a single vector lookup.
- **Evaluation Loop**: Evaluates the quality and completeness of retrieved document chunks. If the retrieved context is insufficient, the agent plans a new search strategy.
- **Synthesized Reasoning**: Merges findings from disparate sources into a cohesive response, resolving contradictions and filling context gaps.

## Lakehouse & Agentic Relevance

In a data lakehouse environment, relevant context is rarely stored in a single document or table. Standard RAG pipelines struggle to locate and connect structured metrics with unstructured manuals. Agentic RAG enables AI agents to query both documentation files and relational tables to answer questions. Dremio accelerates Agentic RAG workflows by virtualizing these diverse datasets under a single query layer, allowing agents to execute cross-source queries at low latency.
