---
title: "Derived Measure"
description: "A metric calculated by applying mathematical operations to one or more base metrics."
related: ["metrics-store", "governed-metric", "calculation-group"]
---

**Derived Measure** is a calculated metric created by performing mathematical calculations on one or more base metrics. Unlike raw measures that aggregate a single database column, derived measures combine multiple data points to compute ratios, percentages, or differences.

## How it Works

A derived measure is defined logically in the semantic layer rather than physically stored in the database. When queried, the engine retrieves the base metrics, applies the defined mathematical formula, and calculates the final output at the requested query granularity.

- **Formula Abstraction**: Encapsulates mathematical calculations (like dividing net profit by total revenue to compute profit margin).
- **On-the-Fly Calculation**: Executes calculations dynamically on aggregated numbers, ensuring mathematical correctness across database groupings.

## Lakehouse & Agentic Relevance

In a data lakehouse, derived measures reduce the necessity of creating custom tables for specialized calculations, keeping object storage footprints small. For AI agents, derived measures simplify quantitative analysis. Instead of generating complex SQL queries containing divisions and multiplications, the agent calls the derived measure by name. Dremio handles these calculations using virtual datasets, ensuring that query engines run them efficiently on massive datasets.
