---
title: "Metrics Store"
description: "A centralized repository that defines and governs business metrics independently of downstream tools."
related: ["semantic-layer", "headless-bi", "governed-metric"]
---

**Metrics Store** is a software layer that centralizes the definition, calculation, and governance of business metrics. It ensures that KPIs like monthly recurring revenue or active users are calculated identically across all analytics tools, dashboards, and machine learning models.

## How it Works

A metrics store acts as an intermediary database client. Instead of writing custom SQL logic in individual BI tools, developers define the calculations once in a declarative language (such as YAML or SQL) within the store.

- **Declarative Interface**: Defines metrics, dimensions, and joins in configuration files version-controlled by Git.
- **Dynamic Compilation**: Translates logical metric requests from downstream tools into optimized SQL queries executed by the underlying database engine.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, the metrics store sits directly above the open storage table format, acting as a governed semantic layer for the raw data files. For AI agents, a metrics store provides reliable API endpoints to fetch pre-defined computations, eliminating the need for the agent to synthesize complex SQL aggregates. This prevents calculations from drifting and prevents AI hallucinations. Dremio supports centralizing these abstractions using virtual datasets, allowing teams to query metrics uniformly using standard SQL interfaces.
