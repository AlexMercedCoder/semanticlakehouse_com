---
title: "Query Federation"
description: "Executing a single query that joins data located across multiple distinct databases or data sources."
related: ["dremio", "query-virtualization", "pushdown-query"]
---

**Query Federation** is a query execution technique that enables users to query and join data from multiple distinct databases, storage platforms, and remote catalogs via a single unified entry point. It removes the requirement to consolidate all operational data into a single centralized database or physical data lake before analysis.

## How it Works

A query federation engine accepts a single SQL statement and coordinates its execution across distributed external storage systems.

- **Distributed Query Decomposition**: The engine parses the SQL query and splits it into discrete sub-queries optimized for each target source database.
- **Data Transfer Minimization**: The engine attempts to run query components on the source databases to reduce the volume of data transferred over the network.
- **In-Memory Merging**: The federation engine gathers intermediate result sets from each source and performs final joins and aggregations in system memory.

## Lakehouse & Agentic Relevance

In a data lakehouse environment, data is frequently distributed between open table formats like Apache Iceberg and operational relational databases. Query federation allows engines to query operational databases and historical data lakes simultaneously without moving data. For autonomous analytics agents, query federation provides a simplified query interface to access multi-source databases. Dremio accelerates federated queries by using Apache Arrow to stream data across sources, allowing agents to join database records and Iceberg tables dynamically.
