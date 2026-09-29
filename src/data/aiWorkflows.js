export const aiWorkflowsData = {
  sectionLabel: "SYSTEMS EXPERIMENTATION",
  title: "AI / Beyond Code",
  tagline: "Exploring structured intelligence, recursive agent loops, and automated software workflows.",
  manifesto:
    "Artificial intelligence is most powerful when shifted from unconstrained conversation into deterministic, structured workflows. My experimentation centers on designing resilient agentic loops, systematic prompt topologies, and multi-agent systems where specialized nodes validate, iterate, and execute complex programming and analytical tasks.",
  domains: [
    {
      id: "prompt-engineering",
      index: "01",
      title: "Prompt Engineering",
      subtitle: "Structured Context & Deterministic Constraints",
      description:
        "Designing robust system instructions, few-shot taxonomies, schema-enforced JSON outputs, and domain-bounded contexts that eliminate hallucination and force structured responses.",
      techniques: [
        "Schema-enforced JSON output validation",
        "Few-shot contextual bootstrapping",
        "Role-specialized system conditioning",
        "Negative prompt guardrailing"
      ],
      diagramType: "schema"
    },
    {
      id: "loop-prompting",
      index: "02",
      title: "Loop Prompting",
      subtitle: "Self-Critique & Recursive Refinement Cycles",
      description:
        "Building iterative evaluation loops where intermediate model outputs are programmatically parsed, tested against lint/spec criteria, and fed back into corrective generation prompts until thresholds are met.",
      techniques: [
        "Automated syntax & logic verification loops",
        "Multi-pass draft-critique-revise cycles",
        "Error trace re-injection & auto-healing",
        "Convergence threshold termination"
      ],
      diagramType: "loop"
    },
    {
      id: "agentic-ai",
      index: "03",
      title: "Agentic AI",
      subtitle: "Autonomous Decision Loops & Tool Execution",
      description:
        "Developing autonomous agent loops capable of formulating internal execution plans, invoking external tools and APIs, maintaining conversational scratchpads, and adapting to run-time environment state.",
      techniques: [
        "Plan-and-Solve decomposition frameworks",
        "Sandboxed tool invocation & API dispatch",
        "Persistent memory state & token pruning",
        "Dynamic branching based on environment response"
      ],
      diagramType: "agent"
    },
    {
      id: "multi-agent-workflows",
      index: "04",
      title: "Multi-Agent Workflows",
      subtitle: "Collaborative Specialist Orchestration",
      description:
        "Coordinating constellations of distinct, specialized agents (e.g. Architect, Coder, Critic, Validator) communicating across structured message channels to execute complex technical objectives.",
      techniques: [
        "Hierarchical manager-worker orchestrations",
        "Consensus-driven code verification",
        "Asynchronous message bus topologies",
        "Separation of concerns across specialized agents"
      ],
      diagramType: "multi-agent"
    }
  ],
  simulationNodes: [
    { name: "Planner Agent", role: "Decomposes Goal", status: "Active" },
    { name: "Code Generator", role: "Produces Implementation", status: "Active" },
    { name: "Reviewer Agent", role: "Static & Logic Validation", status: "Evaluating" },
    { name: "Feedback Loop", role: "Autonomous Refinement", status: "Iterating" }
  ]
};
