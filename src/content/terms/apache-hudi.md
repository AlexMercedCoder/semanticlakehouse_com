---
title: "Apache Hudi"
description: "A transactional lakehouse table format optimized for fast upserts, deletes, and incremental queries."
related: ["data-lakehouse", "apache-iceberg", "delta-lake"]
---

**Apache Hudi** (Hadoop Upserts Deletes and Incrementals) is an open-source transactional table format designed for managing large analytical datasets on object storage. It is built to optimize near real-time stream ingestion, supporting fast upserts and deletes.

## How it Works

Apache Hudi manages file layouts using specific indexes to route writes directly to the correct physical files.

- **Write Layouts**: Employs Copy on Write (CoW) for read-heavy workloads (rewriting data files on change) and Merge on Read (MoR) for write-heavy workloads (logging changes to delta files resolved at query time).
- **Indexing Mechanism**: Uses bloom filters, simple indexes, or HBase to quickly locate which file contains a specific record key during update operations.
- **Timeline Service**: Maintains a sequence of actions (commits, cleans, and compactions) to support transaction rollback and point-in-time queries.

## Lakehouse & Agentic Relevance

In a data lakehouse, streaming data sources (such as IoT telemetry or database change data capture) require low-latency ingestion. Apache Hudi handles these streaming upserts, while autonomous agents require immediate access to this data for real-time analysis. Dremio integrates with Hudi tables, allowing agents to query the latest updates via high-performance virtualization. Dremio translates natural language requests into SQL queries over the Hudi files, ensuring that business users and agents retrieve accurate data.
