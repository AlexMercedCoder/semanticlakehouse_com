---
title: "Headless BI"
description: "An architectural pattern that decouples the semantic layer from frontend BI visualization tools."
related: ["semantic-layer", "metrics-store"]
---

**Headless BI** is a software design pattern that separates the semantic layer and metric definitions from the presentation or visualization tool. It provides a single data modeling service that exposes metrics to multiple downstream consumption points through open APIs.

## How it Works

Instead of embedding data models and metric definitions within a specific visualization tool, headless BI manages these definitions in an independent central platform. Downstream applications query the headless BI service via SQL, REST, or GraphQL APIs.

- **Centralized Semantic Server**: Resolves data modeling, security rules, and user definitions in a single database abstraction layer.
- **API-Driven Access**: Serves normalized datasets to various client applications, including BI tools, notebook environments, and web portals.

## Lakehouse & Agentic Relevance

Headless BI ensures semantic consistency across the entire data lakehouse. Without it, different business intelligence tools generate conflicting values for identical metrics due to localized SQL calculations. For agentic analytics, a headless BI system acts as an API directory that AI agents query to fetch governed data. This architecture reduces query writing mistakes because the AI agent does not generate raw JOIN statements. Dremio enables a headless BI strategy by providing virtual datasets and standard SQL endpoints that any external tool can query.
