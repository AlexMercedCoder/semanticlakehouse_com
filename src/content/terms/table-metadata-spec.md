---
title: "Table Metadata Specification"
description: "The structural layout defining how snapshots, schemas, and partition specs are recorded in a table format."
related: ["manifest-file", "manifest-list", "apache-iceberg"]
---

**Table Metadata Specification** is the standardized JSON schema that defines the logical structure of an open table format. It records the historical progression of schemas, partition definitions, and table snapshots over time.

## How it Works

The metadata specification acts as the entry point for query engines reading a table. It points to active snapshots and tracks structural changes.

- **Schema Evolution Log**: Stores the current schema and a history of previous schemas, mapped to unique column IDs to support backward compatibility.
- **Partition Specs**: Records the current partitioning layout and a history of older specifications to enable partition evolution.
- **Snapshot Log**: Lists all table snapshots, mapping each to its corresponding manifest list file.

## Lakehouse & Agentic Relevance

In a data lakehouse, multiple engines must interpret table structures identically. The table metadata specification (such as the Apache Iceberg format spec) guarantees this consistency, preventing corruption during concurrent writes. For autonomous agents, having structured metadata makes it possible to discover table capabilities programmatically. Dremio reads this metadata specification to virtualize Iceberg tables, ensuring that any schema changes are propagated to the query layer instantly without data pipeline rebuilds.
