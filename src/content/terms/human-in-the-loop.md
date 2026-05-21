---
title: "Human-in-the-Loop"
description: "Incorporating human review steps in autonomous agent loops for verification or safety."
related: ["ai-agent", "autonomous-workflow", "guardrails-ai"]
---

**Human-in-the-Loop** (HITL) is an interaction paradigm that integrates human review, verification, or intervention steps directly into autonomous AI execution cycles. It ensures safety and accuracy for critical or sensitive system actions.

## How it Works

HITL interrupts autonomous execution loops, routing high-risk tasks to human reviewers for approval.

- **Confidence Thresholds**: Triggers a human review request if the agent's internal confidence score for a plan falls below a specific threshold.
- **Approval Gates**: Pauses the workflow before executing irreversible actions (such as sending alerts, running expensive queries, or updating tables) to await manual confirmation.
- **Feedback Injection**: Allows human operators to correct intermediate agent errors (such as fixing a SQL syntax mistake), after which the agent resumes execution.

## Lakehouse & Agentic Relevance

In a data lakehouse ecosystem, giving AI agents unmonitored execution privileges can result in security violations or runaway query costs. Integrating HITL prevents these issues. An agent can plan an analytical report but wait for a data steward to approve the query before running it on the lakehouse. Dremio supports this paradigm by providing clear SQL planning tools and query logs, making it easy for human operators to inspect and approve agent actions.
