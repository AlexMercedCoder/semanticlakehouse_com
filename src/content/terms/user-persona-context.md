---
title: "User Persona Context"
description: "Metadata representing the user's role, permissions, and history to tailor AI interactions."
related: ["prompt-context", "context-layer", "prompt-engineering-context"]
---

**User Persona Context** is the system metadata injected into an LLM prompt to define the role, domain expertise, access permissions, and history of the interacting user. It ensures that the model generates tailored responses appropriate to the user's organizational standing and technical background.

## How it Works

When a user submits a query to an analytical application, the orchestration system fetches the user's profile and session data prior to model inference.

- **Role Specification**: Defines the user's focus (e.g., executive, marketing analyst, or database engineer) to adjust the response complexity and vocabulary.
- **Permission Mapping**: Filters out references to tables or metrics that the user does not have authorization to view, preventing information leaks.
- **Session State**: Appends recent query history to maintain continuity across a conversation.

## Lakehouse & Agentic Relevance

In a data lakehouse, users with varying security clearances access the same physical storage. For AI agents, user persona context is critical to prevent the unauthorized execution of SQL queries. Dremio handles this by enforcing granular, role-based access control (RBAC) on virtual datasets. When an agent queries Dremio on behalf of a user, Dremio applies security rules natively, ensuring that persona context is backed by system-level data governance.
