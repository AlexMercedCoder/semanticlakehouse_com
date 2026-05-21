---
title: "Dremio"
description: "A unified data lakehouse platform that provides query virtualization, high-speed execution, and a semantic layer."
related: ["query-virtualization", "dremio-reflections", "arrow-flight"]
---

**Dremio** is a unified data lakehouse platform designed to enable fast, self-service SQL analytics directly on cloud object storage. It provides a virtualization layer, pre-computed query acceleration, and a semantic layer to abstract complex physical data structures.

## How it Works

Dremio uses a distributed query engine built on Apache Arrow to execute queries directly on data source locations.

- **Query Virtualization**: Exposes files (such as Parquet) and external databases as unified virtual datasets, eliminating the need to move or duplicate data.
- **Dremio Reflections**: Utilizes pre-computed data structures to accelerate query performance transparently, matching the speed of physical data warehouses.
- **Central Semantic Layer**: Provides an interface for teams to define business metrics, tags, and security rules, serving as a single source of truth.

## Lakehouse & Agentic Relevance

In a data lakehouse, managing multiple catalogs and tables is a challenge for users and AI systems. Dremio simplifies this by providing a unified access point. For autonomous agents, Dremio serves as the execution layer that translates natural language queries into optimized SQL plans. The agent queries Dremio's semantic layer to find and read datasets securely, enabling conversational business intelligence at scale.
