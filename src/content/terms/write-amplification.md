---
title: "Write Amplification"
description: "The ratio of data written to storage relative to the logical amount of data changed by a write operation."
related: ["compaction", "copy-on-write", "merge-on-read"]
---

**Write Amplification** is a data management metric that measures the ratio of physical data written to storage relative to the logical amount of data changed by a write transaction. Minimizing this ratio is critical to optimizing storage utilization and performance.

## How it Works

Write amplification occurs because storage engines write data in blocks or files rather than individual records.

- **File Rewriting**: Updating a single row in a columnar file (such as Parquet) requires rewriting the entire file, which generates large physical writes for minor logical changes.
- **Metadata Overhead**: In transactional formats, every commit generates new manifest and snapshot files, adding metadata write amplification.
- **Compaction Trade-offs**: While background file consolidation reduces read latency, the process of rewriting multiple small files into larger ones increases physical write operations.

## Lakehouse & Agentic Relevance

In a data lakehouse, streaming pipelines ingest data continuously, causing high write amplification if left unchecked. High write amplification increases storage costs and slows down execution. Data engineers balance this trade-off using Merge-on-Read or Copy-on-Write strategies. For AI agents requiring real-time insights, minimizing query latency means maintaining optimized physical files. Dremio helps manage this by utilizing pre-computed Reflections, which accelerate query execution and reduce the need for constant, raw table writes.
