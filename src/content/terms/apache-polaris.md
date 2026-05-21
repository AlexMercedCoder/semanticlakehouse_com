---
title: "Apache Polaris"
description: "An open-source metadata catalog for Apache Iceberg providing cross-engine access control."
related: ["project-nessie", "metadata-registry", "apache-iceberg"]
---

**Apache Polaris** is an open-source metadata catalog and access control server designed specifically for Apache Iceberg tables. It provides a centralized repository for tracking table states and enforces unified security policies across multiple query engines.

## How it Works

Apache Polaris acts as the central coordinator for Iceberg metadata, managing table definitions and access permissions.

- **Central Catalog**: Tracks the current metadata pointer for all Apache Iceberg tables in the data lakehouse, enabling read-write synchronization.
- **Credential Vending**: Dynamically generates short-lived object storage access credentials for query engines, preventing engines from directly accessing storage locations.
- **Cross-Engine Security**: Standardizes role-based access control (RBAC), ensuring that security policies are applied consistently regardless of whether the query engine is Spark, Flink, or Dremio.

## Lakehouse & Agentic Relevance

In a data lakehouse, multiple query engines access the same physical files. Without a central catalog like Polaris, managing permissions across engines is complex and prone to security gaps. Autonomous agents querying data require a secure catalog to locate and read tables safely. Dremio integrates with Apache Polaris as a compute engine, utilizing Polaris to resolve Iceberg metadata pointers and enforce access policies. This integration ensures that agents query governed tables while respecting enterprise data access policies.
