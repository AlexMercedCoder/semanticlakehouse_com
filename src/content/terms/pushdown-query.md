---
title: "Pushdown Query"
description: "Offloading query processing operations (like filters and aggregations) to the underlying source database."
related: ["dremio", "query-virtualization", "query-federation"]
---

**Pushdown Query** (or query pushdown) is an optimization technique where a query engine passes computation workloads directly to the source database hosting the raw data. Instead of retrieving all records over the network to process them locally, the engine delegates operations like filtering, projection, and aggregation to the storage layer.

## How it Works

When an application executes a query, the query optimizer evaluates the execution plan and identifies operations that the source storage system can execute natively.

- **Filter Pushdown**: Offloads `WHERE` clauses to the source database, ensuring only matching rows are returned.
- **Projection Pushdown**: Offloads column selection (`SELECT`) to the source database, retrieving only required fields and reducing network payload size.
- **Aggregation Pushdown**: Offloads functions like `SUM`, `AVG`, or `COUNT` so the source database computes the summary and transmits only the final value.

## Lakehouse & Agentic Relevance

In a data lakehouse, pushing down queries is crucial to maintain high performance across federated data sources and data lake tables. Reducing the amount of data transferred minimizes latency and network congestion. For AI agents translating natural language questions into SQL, pushdown capabilities ensure that their queries run efficiently even when joining large datasets. Dremio utilizes advanced query optimization to push down operations to relational databases and file formats like Apache Iceberg, accelerating agent responses.
