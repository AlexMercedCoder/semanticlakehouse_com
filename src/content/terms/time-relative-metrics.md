---
title: "Time-Relative Metrics"
description: "Metrics computed dynamically relative to specific points in time, such as Year-over-Year or Year-to-Date."
related: ["metrics-store", "governed-metric", "calculation-group"]
---

**Time-Relative Metrics** are analytical calculations that evaluate business performance relative to specific time periods. Common examples include Year-over-Year (YoY) growth, Month-over-Month (MoM) change, and Year-to-Date (YTD) cumulative sums.

## How it Works

Time-relative metrics are computed dynamically at query execution time. The query engine uses window functions or relative offset logic to compare data from a selected period with historical periods, keeping calculations accurate as new transactions arrive.

- **Window Functions**: Leverages SQL analytic features to shift or accumulate values over partition boundaries.
- **Dynamic Offsets**: Resolves time ranges relative to a variable anchor date, keeping metrics flexible for filters.

## Lakehouse & Agentic Relevance

In a data lakehouse, time-relative-metrics are defined in the semantic layer to avoid writing complex, hard-to-maintain SQL scripts in reports. For AI agents, querying time-relative metrics directly is far more reliable than expecting the agent to write raw time-series SQL window functions. Exposing predefined time-relative metrics limits calculation errors and speeds up conversational analytics. Dremio supports these calculations using virtual datasets, ensuring they compile cleanly and run at high speed.
