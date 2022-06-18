# Reiforcement Learning notes

- Concepts:
  - Reinforcement learning is machine learning method based on rewarding/punishing the agent for its actions in an difined enviroment.
  - Target is maxmimizing the reward(or minimizing the punishment) the agent(a) receive after preiod time(t).
  - Based on the target, the agent(a) will learn to find the best action(s).
  - Basic reinforcement learning includes:
    - A set of enviroments and agent states (S).
    - A set of actions (A) of the agent.
    - Pa(s, s') = Pr(s(t+1) = s' | s(t) = s, at = a) is the probability of trasaction (at time t) from state s to state s' under action a.
    - R(s, s') is immediate reward after transaction from s to state s' with action a.
- Documents: 
    - [wiki](https://en.wikipedia.org/wiki/Reinforcement_learning)
