---
title: "Aggregation Path"
description: "The defined route or logical strategy used to summarize granular details into higher-level calculations."
related: ["data-hierarchy", "semantic-layer"]
---

**Aggregation Path** is the logical route defined in a semantic model that specifies how granular transaction records are rolled up, summarized, and calculated at higher analytical levels. It ensures that metrics scale correctly when grouped by different dimensions.

## How it Works

An aggregation path directs the analytical engine on how to compute metrics across dimensional relationships. When a query requests high-level business summaries, the engine traverses the aggregation path to apply sum, average, or distinct count rules in the correct mathematical order.

- **Calculation Ordering**: Controls the mathematical hierarchy of calculations, ensuring that ratios are calculated after sums to prevent averaging errors.
- **Dimensional Roll-ups**: Defines how transactional values are aggregated along hierarchies (e.g., aggregating daily store sales into regional annual revenue).

## Lakehouse & Agentic Relevance

In data lakehouses, pre-defining aggregation paths prevents calculations from breaking when downstream tools query raw cloud storage files. For AI agents, explicit aggregation paths act as instructions for resolving metrics. Rather than guessing how to aggregate complex percentages or compound metrics, the agent queries the predefined path. Dremio leverages pre-calculated paths within its Reflections engine to accelerate complex aggregate queries, providing instant responses on massive datasets.
