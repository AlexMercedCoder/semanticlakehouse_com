---
title: "Dremio Reflections"
description: "Pre-computed data structures in Dremio that accelerate query performance transparently using Arrow."
related: ["dremio", "query-virtualization", "arrow-flight"]
---

**Dremio Reflections** are pre-computed physical layout structures managed by Dremio to accelerate SQL query execution. They function similarly to materialized views or indexes but operate transparently without requiring users to rewrite their queries.

## How it Works

Dremio Reflections optimize query execution by using the engine to swap physical layouts behind the scenes.

- **Raw and Aggregation Reflections**: Raw Reflections store sorted, partitioned, or clustered representations of tables, while Aggregation Reflections store pre-computed rollups and metrics.
- **Transparent Rewrite**: When a user or agent submits a query, Dremio's cost-based optimizer determines if a Reflection can satisfy the request, rewriting the query plan to use the Reflection.
- **Apache Arrow Format**: Stores Reflections as Parquet files on object storage, loading them into Apache Arrow memory structures during query execution to maximize speed.

## Lakehouse & Agentic Relevance

In a data lakehouse, executing ad-hoc queries or complex joins directly over raw files can introduce latency, which slows down interactive analytics. Dremio Reflections resolve this by accelerating queries to sub-second speeds. For autonomous agents that require immediate feedback to proceed through their execution loops, Reflections ensure that data retrieval is fast. Agents can query logical views naturally, while Dremio accelerates the query using Reflections transparently.
