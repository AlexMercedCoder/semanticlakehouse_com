---
title: "Parquet Format"
description: "An open-source, columnar storage file format optimized for fast query performance in analytical engines."
related: ["object-storage", "data-lakehouse", "open-table-format"]
---

**Parquet Format** is an open-source, columnar storage file format designed for efficient data compression and high-performance analytical queries. It structures datasets by columns rather than rows, minimizing the amount of data read from storage.

## How it Works

Parquet optimizes data layout for analytical engines that typically query specific columns.

- **Columnar Layout**: Groups records into row groups and stores values for each column contiguously on disk, allowing query engines to skip unreferenced columns.
- **Efficient Compression**: Applies specialized compression algorithms (such as Snappy or Gzip) and encoding schemes (such as dictionary encoding or run-length encoding) tailored to column data types.
- **Embedded Metadata**: Includes file footers containing schema definitions and basic statistics (such as min and max values) for each column block, enabling query engines to skip irrelevant row groups.

## Lakehouse & Agentic Relevance

In a data lakehouse, Parquet is the standard file format used by transactional engines like Apache Iceberg. For analytical agents running SQL, querying Parquet files directly reduces input-output (I/O) bottlenecks. Dremio leverages Parquet's column statistics and layout, reading only the necessary data blocks to accelerate queries. This performance boost enables real-time responses for conversational business intelligence applications and agents.
