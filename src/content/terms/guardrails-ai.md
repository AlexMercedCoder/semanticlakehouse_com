---
title: "Guardrails (AI)"
description: "Validation layers that filter inputs and outputs to prevent harmful, out-of-bounds, or hallucinated responses."
related: ["hallucination-mitigation", "human-in-the-loop", "context-layer"]
---

**Guardrails (AI)** are programmatic validation layers that sit between user interfaces, large language models, and external databases. They evaluate inputs and outputs in real time to enforce security policies, restrict model actions, and prevent erroneous responses.

## How it Works

Guardrails monitor data flows at the boundaries of the AI orchestration loop.

- **Input Filtering**: Scans user requests to detect and block prompt injection attempts, query hijacking, or requests for unauthorized data access.
- **Output Validation**: Evaluates generated text or code (such as SQL statements) against structural rules (e.g., verifying that the query parses correctly and contains no write commands).
- **Execution Limits**: Restricts the schema paths or compute resource usage that a model can request during a single query session.

## Lakehouse & Agentic Relevance

In a data lakehouse, security, compliance, and budget limits are paramount. AI agents querying lakehouse tables must be constrained to prevent execution of expensive scans or access to restricted tables. Guardrails enforce these boundaries. Dremio supports this security structure by natively applying system-level role-based access control and query resource allocations. If an agent attempts to execute an invalid or out-of-bounds SQL query, Dremio blocks the action at the query engine level, acting as a final guardrail.
