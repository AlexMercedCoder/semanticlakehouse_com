---
title: "Hidden Partitioning"
description: "A feature in Apache Iceberg that automatically manages partitions without requiring user-facing columns."
related: ["apache-iceberg", "partition-evolution", "open-table-format"]
---

**Hidden Partitioning** is a data storage capability that decouples logical queries from the physical partitioning scheme. It eliminates the need for users or application layers to specify partitioning columns in their SQL queries, automating partition pruning behind the scenes.

## How it Works

Traditional layouts require creating explicit partition columns (like `event_date` derived from `timestamp`) and filtering on them in SQL queries to prevent full table scans.

- **Relationship Mapping**: The table format (such as Apache Iceberg) keeps track of the relationship between source columns and the partition columns.
- **Query Rewriting**: When a user queries a table using a source column filter, the query engine automatically matches the filter to the partition layout.
- **Partition Pruning**: The engine reads only the relevant folders or files based on the metadata mapping, avoiding full table scans.

## Lakehouse & Agentic Relevance

In a data lakehouse, managing partitions manually leads to query complexity and frequent errors. For autonomous agents generating SQL, hidden partitioning simplifies query generation. The agent can query columns naturally without knowing the table's physical partition strategy. Dremio leverages hidden partitioning in Iceberg tables to accelerate query execution transparently, providing agents with quick data retrieval without requiring complex partitioning clauses in the generated SQL.
