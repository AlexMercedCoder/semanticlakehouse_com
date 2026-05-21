---
title: "Partition Evolution"
description: "Updating a table's partitioning strategy over time without rebuilding the entire table."
related: ["hidden-partitioning", "schema-evolution", "apache-iceberg"]
---

**Partition Evolution** is the capability to update a table's physical partitioning strategy dynamically without rewriting historical data files. It allows data layouts to adapt to shifting query patterns or growing volumes without table lockouts.

## How it Works

Traditional structures require recreating and reloading a table to change partitioning rules (e.g., changing from monthly to daily partitions).

- **Logical Spec Mapping**: The table format (such as Apache Iceberg) maintains an active partition specification containing version numbers.
- **Mixed layouts**: Historical data files remain partitioned under the old rules, while newly written data files follow the updated partitioning specifications.
- **Unified Querying**: When queries execute, the query engine reads metadata to resolve the layouts, applying the correct partition pruning rules to both historical and current sections of the table.

## Lakehouse & Agentic Relevance

In a data lakehouse, data volume changes can make initial partition strategies inefficient. Partition evolution ensures that data layouts can be updated dynamically as the table grows. AI agents querying lakehouse tables do not need to manage layout changes. Dremio handles partition-evolved tables natively, translating query execution plans across different partition specs and returning consolidated results without performance penalties, keeping agent queries fast and reliable.
