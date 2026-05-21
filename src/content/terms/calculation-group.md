---
title: "Calculation Group"
description: "A modeling pattern that allows the reuse of complex calculations across multiple base metrics."
related: ["metrics-store", "semantic-layer", "time-relative-metrics"]
---

**Calculation Group** is a modeling feature in analytical semantic layers that reduces the number of redundant metrics. It allows developers to define a calculation logic once and apply it dynamically to multiple base measures.

## How it Works

A calculation group behaves like a virtual column containing calculation items. When a calculation item is applied to a query, the semantic engine replaces the base metric in the formula with the requested calculation, running the operation dynamically at execution time.

- **Calculation Items**: Reusable mathematical operations, such as Year-over-Year change or moving averages.
- **Dynamic Context**: Intercepts queries to wrap selected metrics in the defined calculation without rewriting the underlying table schemas.

## Lakehouse & Agentic Relevance

In data lakehouse platforms, calculation groups prevent metadata bloat. Instead of building hundreds of variations of basic metrics, data teams configure a few base metrics and calculation groups. For AI agents, calculation groups make query construction simpler. The agent chooses a base metric and applies a calculation group filter (such as selecting "Year-to-Date") rather than generating complex window functions. Dremio supports clean query structuring using virtual datasets, ensuring that calculations compile cleanly across distributed data lake engines.
