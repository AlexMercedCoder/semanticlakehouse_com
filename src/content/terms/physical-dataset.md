---
title: "Physical Dataset"
description: "A direct mapping to a raw database table, file, or object storage directory in Dremio."
related: ["virtual-dataset", "data-lakehouse", "object-storage"]
---

**Physical Dataset** is the direct representation of a physical table, file, database, or object storage directory within the Dremio platform. It acts as the raw source layer upon which virtual datasets and semantic abstractions are constructed.

## How it Works

A physical dataset maps directly to files stored in cloud object storage (like S3 or ADLS) or tables in relational databases. Dremio registers these storage locations, parses the schemas, and reads file formats natively to make them queryable via SQL.

- **Schema Detection**: Automatically identifies file formats, column names, and data types from the source storage files.
- **Source Connectivity**: Connects to heterogeneous sources (such as Apache Iceberg tables, Parquet files, or SQL Server instances).

## Lakehouse & Agentic Relevance

Physical datasets are the raw storage foundation of a data lakehouse. Because physical datasets can be complex, partitioned, and unorganized, they are rarely exposed directly to business users or AI agents. Instead, architects use them as the building blocks for cleaner logical views. Dremio speeds up queries on physical datasets by pushing down filters and aggregations to the underlying storage engines, minimizing network overhead.
