# Portfolio lab

Build one small, credible project that demonstrates how you think. These are editorial project ideas.

## An answer engine with evidence

**Fits:** applied AI, evaluation, architecture.

Use public documents. Return citations and decline unsupported questions. Compare retrieval against a simple baseline.

**Show:** a held-out question set, citation checks, error categories, latency, and cost per successful answer. Explain who checked answers and the limitations of your sample.

## A customer workflow pilot

**Fits:** forward deployed, automation, product.

Use synthetic support tickets. Classify them and draft responses with a person approving the final action. Write an intake brief, acceptance criteria, and handover guide.

**Show:** exceptions, approval boundaries, retries, and test-user feedback. Describe a simulated pilot accurately.

## An agent reliability test bench

**Fits:** evaluation, security, agent engineering.

Connect a model to mock tools locally. Test malformed inputs, tool failures, and malicious instructions in retrieved text.

**Show:** reproducible cases, expected versus observed behavior, permissions, and before/after measurements. Test only systems you own or are authorized to test.

## Publish a case study

Use the [evaluation worksheet](#answer-engine-evaluation-worksheet) for the answer-engine project's measurement section.

1. User problem and constraints.
2. Baseline and reasons for your approach.
3. Architecture and data sources.
4. Evaluation method and measured results.
5. Failures, limitations, and next steps.
6. Reproduction instructions and demo.

Use public or synthetic data and document its license. Publish measurements only after running the experiment.

## Answer-engine evaluation worksheet

Keep development questions for tuning separate from a frozen held-out set for final evaluation. Include supported and unsupported questions in each; split by document or topic where practical to avoid near duplicates. If you tune after inspecting held-out failures, disclose it and use a fresh held-out set for the next final claim.

Copy this schema, one row per question and repeat. Run the baseline and model on the same frozen documents and questions.

| Question ID / split | Question / supported? | Expected evidence or refusal | Baseline output / pass | Model output / pass | Citation correctness (baseline / model) | Latency ms (baseline / model) | Estimated cost USD (baseline / model) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ILLUSTRATION-01 / held-out | When does the fictional library open Monday? / supported | Fixture FAQ v1, Hours: 09:00 | Not run | Not run | Not scored / not scored | Not measured / not measured | Not estimated / not estimated |

This fictional row illustrates the template; it is not an experiment result. An unsupported question might ask for next year's holiday schedule when the fixture contains no schedule; its expected result is a refusal.

- **Successful supported answer:** answers every requested part correctly, with every factual claim supported by the frozen corpus and cited to a supporting passage. A missing or contradictory claim fails.
- **Correct refusal:** explicitly says the sources are insufficient for an unsupported question and invents no answer. Refusing a supported question fails.
- **Citation correctness:** all citations must resolve to evidence supporting the associated claims, and every factual answer claim needs evidence. Missing, broken, irrelevant, or contradictory citations fail. Use N/A only for a correct refusal without factual claims.
- **Scoring:** save each output, binary pass, reviewer, reason, and error category. A person checks expected evidence using the same rubric for both systems. Disclose reviewers and how disagreements were resolved.
- **Measurement:** time the same end-to-end request boundary, including retrieval and retries. Record repeats, timeouts, failures, cache policy, hardware, corpus version, model/version, prompt, retrieval settings, token usage, and dated pricing. Disclose excluded hosting/local compute costs; zero API cost does not mean zero operating cost.
- **Reporting:** report supported passes / supported questions and correct refusals / unsupported questions separately, plus overall passes / all questions. Estimated cost per successful answer is total run cost, including failures and retries, divided by passing rows; report undefined if none pass. Give latency distributions and sample sizes.

Publish the rubric, questions, raw outputs, and configuration when licensing allows. Keep development and held-out results separate. A small test set describes only that experiment and cannot establish general reliability.
