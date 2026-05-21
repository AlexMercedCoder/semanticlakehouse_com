---
title: "Arrow Flight"
description: "A high-performance protocol based on Apache Arrow designed for high-throughput distributed data transfer."
related: ["dremio", "dremio-reflections", "query-virtualization"]
---

**Arrow Flight** is a high-performance, open-source data transfer framework designed for fast, parallelized transport of large datasets. It leverages Apache Arrow's columnar in-memory format to bypass serialization bottlenecks.

## How it Works

Traditional interfaces (like JDBC or ODBC) serialize data into row-based formats to transport it, which introduces CPU overhead. Arrow Flight maintains a columnar format throughout the transport process.

- **Columnar In-Memory Transport**: Eliminates serialization and deserialization overhead by transferring Apache Arrow memory buffers directly over the network.
- **gRPC Architecture**: Utilizes HTTP/2 and gRPC to manage multi-stream, bidirectional communication, supporting parallel data streams.
- **Parallel Fetching**: Enables client applications to read data partitions from multiple server nodes concurrently, maximizing network throughput.

## Lakehouse & Agentic Relevance

In a data lakehouse ecosystem, analytical tasks require moving large volumes of data (such as vector embeddings or pre-aggregated tables) to client applications and AI frameworks. Using JDBC can create latency bottlenecks. Arrow Flight resolves this by transferring data at high speeds. Dremio supports Arrow Flight, enabling AI agents and Python pipelines to fetch datasets from Dremio at speeds up to 100 times faster than traditional database drivers.
