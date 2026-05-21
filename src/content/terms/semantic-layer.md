---
title: "Semantic Layer"
description: "A business representation of corporate data that maps complex underlying structures to standardized business concepts."
related: ["metrics-store", "data-lakehouse", "agentic-analytics"]
---

**Semantic Layer** is an abstraction layer that maps complex physical data structures to clear, standardized business terms. It allows users and applications to query data without needing to understand underlying table joins, file formats, or database locations.

## How it Works

The semantic layer translates logical business definitions into physical execution plans. When a query is initiated, the semantic layer compiles the request into SQL, maps logical columns to their physical counterparts, and applies governed access controls before fetching results.

- **Unified Interface**: Serves as the single source of truth for queries, ensuring consistent definitions for business concepts.
- **Data Virtualization**: Connects multiple data sources dynamically, resolving queries without physical replication.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, the semantic layer prevents data silos by providing a single governed entryway to physical tables like Apache Iceberg. For AI agents, the semantic layer provides structured context, reducing SQL generation hallucinations by replacing raw table schemas with well-defined metrics, dimensions, and relationships. Dremio provides a native semantic layer using virtual datasets, allowing teams to define abstractions directly over lakehouse sources and query them at sub-second speeds.
