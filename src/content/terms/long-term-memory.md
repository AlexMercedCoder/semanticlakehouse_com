---
title: "Long-Term Memory"
description: "Persistent memory storing user preferences, history, and patterns across distinct sessions."
related: ["short-term-memory", "vector-embeddings", "user-persona-context"]
---

**Long-Term Memory** is the persistent storage mechanism that allows AI systems to retain user preferences, historical workflows, and operational patterns across distinct conversation sessions. It enables agents to learn from past interactions.

## How it Works

Long-term memory decouples context from transient session state, utilizing database storage for persistence.

- **Interaction Archival**: Structures and writes key events, user preferences, and query outcomes from past sessions to a persistent database.
- **Semantic Retrieval**: Uses vector embedding models to index past interactions, allowing the agent to perform similarity searches to retrieve relevant history.
- **Context Injection**: Selects relevant historical snippets based on the current user query, injecting them into the prompt to guide agent behavior.

## Lakehouse & Agentic Relevance

In a data lakehouse, long-term memory allows agents to adapt to user-specific query patterns, such as preferring specific data visualizations or filtering on certain regions. Storing this history in Apache Iceberg tables within the lakehouse allows organizations to analyze agent usage. Dremio queries these historical interaction tables, serving as the retrieval engine that loads long-term memory records into the agent's context, optimizing personalized analytics.
