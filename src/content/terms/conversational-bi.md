---
title: "Conversational BI"
description: "Querying and visualizing business data using conversational natural language interfaces."
related: ["agentic-analytics", "autonomous-query-agent", "semantic-layer"]
---

**Conversational BI** (Business Intelligence) is an analytical interface paradigm that enables users to query databases, construct visualizations, and generate analytical reports using conversational natural language rather than drag-and-drop tools or raw SQL.

## How it Works

Conversational BI platforms map natural language inputs to physical database architectures through translation pipelines.

- **Intent Recognition**: Parses the user's text to determine the core request (e.g., filtering sales data, grouping by region, or comparing historical periods).
- **SQL Generation & Execution**: Translates recognized intents into optimized database queries, running them against connection endpoints.
- **Dynamic Visualization**: Renders query results as tables, charts, or summaries based on the shape and context of the returned data.

## Lakehouse & Agentic Relevance

In a data lakehouse, data is stored across nested tables and distributed formats, making manual SQL query construction difficult for business users. Conversational BI simplifies access by wrapping this complexity in an intuitive chat interface. For this to work without errors, the LLM must understand business definitions, not just raw database columns. Dremio's semantic layer provides these definitions, allowing conversational BI agents to query virtualized tables using correct business metrics.
