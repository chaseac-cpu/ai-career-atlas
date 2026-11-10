# Build your learning path

Choose your route first. The practice schedule below is adaptable and is not a promise of job readiness.

## Choose a route

| Starting point | Focus | Reality check |
| --- | --- | --- |
| Undergraduate student | Fundamentals, a scoped team/project contribution, and internship research | Check return-to-school rules and term length in the [internship examples](./opportunities/internships.md). |
| Graduate student | Connect research depth to reproducible software and evaluation | Some internships require advanced study and prior deployment experience. |
| Recent graduate | A shipped project, clear evaluation, and concise technical explanations | Compare explicit no-experience roles with internship-gated new-grad roles in the [early-career examples](./opportunities/entry-level.md). |
| Experienced software developer | Model behavior, retrieval, evaluation, operations, and domain learning | Investigate [mid-level roles](./opportunities/mid-level.md) where your existing engineering experience may transfer. |
| Career changer without software experience | Learn a language, APIs, Git, testing, and debugging before a full AI application | A portfolio does not waive explicit experience or degree requirements. |

## An eight-week project cycle

Extend each phase if you need stronger foundations. A beginner may need a separate foundations period before this cycle.

| Phase | Practice | Evidence to keep |
| --- | --- | --- |
| Weeks 1–2: foundations | Build an API-backed app. Practice Git, testing, data handling, and debugging. | A repository with reproducible setup. |
| Weeks 3–4: model behavior | Add a model feature. Compare prompts and measure quality, latency, and cost. | A versioned test set and baseline. |
| Weeks 5–6: specialization | Pick one role and complete its portfolio experiment. | A demo with success criteria. |
| Weeks 7–8: delivery | Improve failures, document tradeoffs, rehearse a project walkthrough. | A case study with results and limitations. |

## Adjust for your background

- **Starting from scratch:** first practice one programming language, HTTP, JSON, and debugging.
- **Already a developer:** focus on evaluation, model variability, retrieval quality, and operations.
- **Coming from a domain role:** use workflow knowledge to define a valuable problem, then build technical depth or investigate product work.
- **Interested in model research:** add linear algebra, probability, optimization, and paper reproduction; this plan alone is insufficient.

## Your first application, step by step

Start with a local FAQ lookup before adding a model. Retrieval means finding relevant source text; an API lets programs exchange requests and responses.

1. Create a Git repository and a Python or JavaScript script. Store three public FAQ questions, answers, and source URLs in a JSON file; record the data license.
2. Read the file and return an answer for an exact matching question. A fictional practice fixture could contain “Monday opening time: 09:00”; label it synthetic.
3. Return “No matching source” for an unknown question. Test a known question, an unknown question, and empty input against written expected outputs.
4. Add keyword lookup and return the source URL. Record where it performs worse than exact matching, such as ambiguous questions.
5. Write setup instructions and ask a classmate to reproduce the tests. Fix one problem they encounter.
6. Extend this into the [answer-engine project](./portfolio.md#an-answer-engine-with-evidence), keeping the lookup as your baseline and using its evaluation worksheet.

For application engineering, add an API and a small interface. For evaluation work, expand the test questions and analyze failures. For customer delivery, write a user brief and revise the tool from feedback. These are practice routes: projects do not replace the enrollment, degree, or experience gates in the [beginner hub](./opportunities/getting-started.md). Progress by reproducible results rather than a promised employment timeline.

## Final project check

Can another person reproduce your project? Can you explain why it helps, when it fails, what it costs, and what you would change? Improve that evidence before adding another framework.

[Pick a portfolio project](./portfolio.md)
