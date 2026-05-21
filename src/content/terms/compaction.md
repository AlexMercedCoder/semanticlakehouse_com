---
title: "Compaction"
description: "The background process of consolidating small files into larger, optimized files to speed up queries."
related: ["write-amplification", "copy-on-write", "merge-on-read"]
---

**Compaction** is a background maintenance process in data storage engines that consolidates multiple small physical files into fewer, larger files. It resolves the "small file problem" in distributed file systems, optimizing query read performance.

## How it Works

Compaction rewrites fragmented files into structured layouts, reducing the metadata overhead needed to plan query routes.

- **Bin-Packing**: Merges smaller files (e.g., kilobytes in size) into standard targeted sizes (typically 128MB or 256MB Parquet files).
- **Sort and Cluster**: Re-orders data records during the merge process (e.g., applying Z-ordering or hierarchical sorting) to optimize column-level compression and filtering.
- **Commit Swapping**: Updates the table metadata pointers atomically to reference the new consolidated files, removing references to the old files.

## Lakehouse & Agentic Relevance

In a data lakehouse, frequent streaming ingestion generates thousands of small files, which degrade query execution times due to metadata bottlenecks. Compaction cleans up this fragmentation. For autonomous agents executing ad-hoc queries, fast responses are necessary for interactive analysis. Dremio accelerates queries over compacted tables by leveraging optimized columnar formats. Dremio also supports scheduling maintenance tasks to manage Iceberg table compaction directly, maintaining peak retrieval performance for both BI and AI workloads.
