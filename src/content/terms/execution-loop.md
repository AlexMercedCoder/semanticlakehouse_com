---
title: "Execution Loop"
description: "The repeating cycle of sensing, reasoning, acting, and evaluating performed by an autonomous agent."
related: ["react-pattern", "ai-agent", "autonomous-workflow"]
---

**Execution Loop** is the iterative execution sequence that controls an autonomous agent's activity. It defines the continuous cycle of parsing inputs, formulating plans, calling external tools, and evaluating outcomes to achieve a goal.

## How it Works

The execution loop operates as a state machine that runs until the agent's goal is met or a timeout limit is reached.

- **Sense Phase**: Evaluates current system state, user prompts, and observations returned from prior actions.
- **Plan Phase**: Uses the model's reasoning capabilities to determine the next logical action or update the plan.
- **Act Phase**: Dispatches tool calls (such as executing SQL queries or fetching documentation) to interact with external environments.
- **Evaluate Phase**: Inspects results returned by tools, updating the agent's memory to determine if the target goal has been accomplished.

## Lakehouse & Agentic Relevance

In a data lakehouse, analytical queries require validation. An agent's execution loop allows it to verify SQL queries before returning results. If a query fails, the loop captures the error and regenerates the SQL. Dremio acts as a core tool in this loop. Because Dremio virtualizes multiple sources under a single SQL dialect, the agent can call Dremio to execute queries, check observations, and refine its plan.
