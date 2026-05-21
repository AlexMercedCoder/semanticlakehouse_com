---
title: "Time Travel"
description: "Querying historical states of a table by referencing specific timestamps or snapshot IDs."
related: ["apache-iceberg", "open-table-format", "acid-transactions"]
---

**Time Travel** is a data retrieval capability that allows users to query a table's historical state. It permits analyzing data as it existed at a specific point in time or under a particular transaction ID, without reverting database modifications.

## How it Works

Time travel relies on immutable files and metadata log versioning.

- **Snapshot Tracking**: Every write transaction creates a new table snapshot. The table metadata stores a timeline of these snapshot IDs alongside their creation timestamps.
- **File Retention**: The storage engine keeps older data and metadata files instead of immediately deleting them on update or delete operations.
- **SQL Selectors**: The query engine parses syntax extensions (such as `FOR SYSTEM_TIME AS OF` or `VERSION AS OF`) to determine which snapshot to read from the storage logs.

## Lakehouse & Agentic Relevance

In a data lakehouse, time travel is essential for audit compliance, debugging data pipelines, and reproducing machine learning model training states. Autonomous agents use time travel to compare current data performance with historical states. For instance, an agent can automatically run comparison reports between current sales and the previous quarter's state. Dremio supports native time travel queries against Apache Iceberg tables, allowing agents to execute point-in-time SQL queries easily.
