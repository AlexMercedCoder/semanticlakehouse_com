---
title: "Semantic Agent"
description: "An AI agent that leverages a semantic layer to understand database business definitions and schemas."
related: ["ai-agent", "semantic-layer", "agentic-rag"]
---

**Semantic Agent** is an autonomous AI agent designed to interact with databases by leveraging a semantic layer rather than raw physical schemas. It uses centralized business metrics and relationships to construct queries and reason about data.

## How it Works

A semantic agent utilizes the logical definitions provided by a semantic catalog to understand the context of enterprise data.

- **Logical Mapping**: Interacts with user-friendly business entities (such as "Revenue" or "Customer Lifetime Value") rather than physical table columns (such as `rev_usd_val`).
- **Contextual Reasoning**: Resolves queries by checking relationship maps, metric parameters, and security rules defined within the semantic layer.
- **SQL Generation**: Generates queries against virtualized logical views, delegating database join execution to the semantic platform.

## Lakehouse & Agentic Relevance

In a data lakehouse, thousands of physical tables are distributed across object storage catalogs. Standard SQL agents struggle to navigate this complexity, often generating incorrect SQL. A semantic agent simplifies this process. Dremio serves as the ideal semantic layer interface for these agents. By virtualizing diverse schemas and exposing them as governed, documented datasets, Dremio allows semantic agents to query data using natural language while ensuring consistent business definitions.
