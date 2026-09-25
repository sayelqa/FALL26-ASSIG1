# Mission 4: Report it and brief the owner

## Commit history

Output of `git log --oneline`:

```
ce48b39 (HEAD -> assignment1, origin/assignment1) Complete mission 3
f8182db Complete mission 2
41143cd Complete mission 1
4cb642b Complete mission 0 answers
0ad5741 Ignore node_modules directory
d890ff1 (origin/main, origin/HEAD, main) first push with the assignment files
294714d Initial commit
```

Pick your **best** commit message and your **worst** one. Which of the 7 rules does the worst one break?

> My best commit message is "Ignore node_modules directory" because it is short, clear, and uses the imperative mood.

My worst commit message is "Complete mission 0 answers" because it is more general and does not explain much about what was changed.
## Pull Request

PR link, inside your fork:

> https://github.com/...

## Creating value: the risk brief


1. What you proved, in terms of **impact** on operators and on the campus, not in terms of code.
2. Why "it uses HTTPS and validates its data" did **not** protect them.
3. The single most important change the backend team must make, stated concretely.
4. One honest limit of your engagement: what you did **not** test.

> n this assignment, I showed that the portal can give operators wrong information. It can show that services are working even when there is an outarge. This can be a problem because staff mayt not know there is a real issue one campus. HTTPS did not fully protect the potal because it only protects data while it is sent over the network. The browser can still be changed by the user. Data validation also did not stop the attack because fake data can still look valid. The most important change is to make the backend cherck and conrtrol the real service status instead of trusting the browser. One limit of my testing is that I only tested the browser side. I did not test the real backend server, dattabase, login system, or the campus network. 

## Reflection

In one or two sentences: which concept from Units 1.1 to 1.3 do you understand much better now, and what made it click?

> I understand better that browser code cannot be trusted for security. Missions 2 and 3 made it clear because I changed what the page showed and how it worked.
