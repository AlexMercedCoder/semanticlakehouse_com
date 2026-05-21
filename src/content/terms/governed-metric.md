---
title: "Governed Metric"
description: "A standardized metric definition managed centrally to ensure data consistency across an organization."
related: ["metrics-store", "semantic-layer"]
---

**Governed Metric** is a standardized calculation or business KPI that is defined, managed, and controlled centrally within an enterprise data system. It ensures that critical metrics are computed uniformly, preventing different departments from reporting conflicting numbers.

## How it Works

A governed metric is defined in a centralized repository using code configurations. When an analytics tool requests a governed metric, the centralized semantic system injects the pre-approved mathematical formula and filtration logic into the query before execution.

- **Centralized Logic**: Houses the exact math and filters (such as date ranges or customer status rules) in a version-controlled config file.
- **Access Policies**: Restricts edit permissions to authorized data stewards while allowing read access to downstream clients.

## Lakehouse & Agentic Relevance

In a decentralized data lakehouse, governed metrics serve as the single source of truth for critical KPIs. In agentic analytics, exposing governed metrics to AI agents prevents them from writing custom SQL logic to calculate business figures. Instead of generating complex aggregates that are prone to errors, the agent calls the pre-defined governed metric. Dremio virtualizes raw data source tables and allows analysts to build pre-calculated fields, serving as a governance engine for enterprise lakehouse environments.
