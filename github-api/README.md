# GitHub REST API – Learning Plan

A hands-on guide to explore everything you can do with the GitHub REST API using VS Code REST Client (`.rest` file).

---

## 🛠️ Setup

### Step 1 – Install REST Client Extension
Already installed: **REST Client** (`humao.rest-client`)

### Step 2 – Create a Personal Access Token (PAT)

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**
2. Click **Generate new token**
3. Select your repository: `custom-actions-demo`
4. Set the following permissions:

| Permission | Access |
|---|---|
| Actions | Read & Write |
| Issues | Read & Write |
| Pull Requests | Read & Write |
| Secrets | Read |
| Contents | Read & Write |
| Environments | Read & Write |
| Metadata | Read (mandatory) |

### Step 3 – Configure the `.rest` file

Open `github-api.rest` and update the variables at the top:

```
@token = YOUR_PAT_TOKEN_HERE
@owner = YOUR_GITHUB_USERNAME
@repo  = custom-actions-demo
```

### Step 4 – Run a request

Click **"Send Request"** that appears above any `###` block in the `.rest` file.

---

## 📋 Full API Coverage Plan

### Section 1 – User & Account
| # | Request | Description |
|---|---|---|
| 1.1 | `GET /user` | Get the authenticated user (who am I?) |
| 1.2 | `GET /users/{username}` | Get any public user's profile |
| 1.3 | `GET /user/repos` | List all your repositories |

---

### Section 2 – Repository
| # | Request | Description |
|---|---|---|
| 2.1 | `GET /repos/{owner}/{repo}` | Get full repository details |
| 2.2 | `GET /repos/{owner}/{repo}/branches` | List all branches |
| 2.3 | `GET /repos/{owner}/{repo}/branches/{branch}` | Get a specific branch |
| 2.4 | `GET /repos/{owner}/{repo}/contributors` | List contributors |

---

### Section 3 – Commits & Logs
| # | Request | Description |
|---|---|---|
| 3.1 | `GET /repos/{owner}/{repo}/commits` | List commits (`git log` equivalent) |
| 3.2 | `GET /repos/{owner}/{repo}/commits/{sha}` | Get a specific commit details |
| 3.3 | `GET /repos/{owner}/{repo}/compare/{base}...{head}` | Compare two branches (diff) |

---

### Section 4 – Issues
| # | Request | Description |
|---|---|---|
| 4.1 | `GET /repos/{owner}/{repo}/issues` | List all open issues |
| 4.2 | `POST /repos/{owner}/{repo}/issues` | Create a new issue |
| 4.3 | `GET /repos/{owner}/{repo}/issues/{number}` | Get a specific issue |
| 4.4 | `PATCH /repos/{owner}/{repo}/issues/{number}` | Update / close an issue |
| 4.5 | `POST /repos/{owner}/{repo}/issues/{number}/comments` | Add a comment to an issue |

---

### Section 5 – Pull Requests
| # | Request | Description |
|---|---|---|
| 5.1 | `GET /repos/{owner}/{repo}/pulls` | List open pull requests |
| 5.2 | `POST /repos/{owner}/{repo}/pulls` | Create a new pull request |
| 5.3 | `GET /repos/{owner}/{repo}/pulls/{number}` | Get PR details |

---

### Section 6 – GitHub Actions & Workflows ⭐
| # | Request | Description |
|---|---|---|
| 6.1 | `GET /repos/{owner}/{repo}/actions/workflows` | List all workflows |
| 6.2 | `GET /repos/{owner}/{repo}/actions/runs` | List workflow run history |
| 6.3 | `GET /repos/{owner}/{repo}/actions/runs/{run_id}` | Get a specific run |
| 6.4 | `POST /repos/{owner}/{repo}/actions/workflows/{file}/dispatches` | **Trigger a workflow via API** |
| 6.5 | `POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel` | Cancel a running workflow |
| 6.6 | `POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun` | Re-run a failed workflow |
| 6.7 | `GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs` | Download run logs |
| 6.8 | `GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs` | List jobs for a run |

---

### Section 7 – Secrets & Variables
| # | Request | Description |
|---|---|---|
| 7.1 | `GET /repos/{owner}/{repo}/actions/secrets` | List repo secrets (names only, values never returned) |
| 7.2 | `GET /repos/{owner}/{repo}/actions/variables` | List repo variables |
| 7.3 | `GET /repos/{owner}/{repo}/environments/{env}/secrets` | List environment-specific secrets |

---

### Section 8 – Releases & Tags
| # | Request | Description |
|---|---|---|
| 8.1 | `GET /repos/{owner}/{repo}/releases` | List all releases |
| 8.2 | `POST /repos/{owner}/{repo}/releases` | Create a new release |
| 8.3 | `GET /repos/{owner}/{repo}/tags` | List all tags |

---

### Section 9 – Environments
| # | Request | Description |
|---|---|---|
| 9.1 | `GET /repos/{owner}/{repo}/environments` | List all environments |
| 9.2 | `GET /repos/{owner}/{repo}/environments/{name}` | Get a specific environment |

---

### Section 10 – Search
| # | Request | Description |
|---|---|---|
| 10.1 | `GET /search/repositories` | Search public repositories |
| 10.2 | `GET /search/issues` | Search issues in a repo |
| 10.3 | `GET /search/code` | Search code inside a repo |

---

## 🔑 Key Concepts

### Authentication
```
Authorization: Bearer YOUR_TOKEN
Accept: application/vnd.github+json
```
- Always send both headers
- `Accept: application/vnd.github+json` tells GitHub you want the latest API version response

### Rate Limits
| Type | Limit |
|---|---|
| Unauthenticated | 60 requests/hour |
| Authenticated (PAT) | 5,000 requests/hour |
| Check current limit | `GET /rate_limit` |

### HTTP Methods Used
| Method | Purpose |
|---|---|
| `GET` | Read / fetch data |
| `POST` | Create new resource |
| `PATCH` | Partially update resource |
| `PUT` | Replace resource |
| `DELETE` | Delete resource |

### Response Codes
| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 204 | No Content (success, nothing to return) |
| 401 | Unauthorized (bad/missing token) |
| 403 | Forbidden (token lacks permission) |
| 404 | Not Found |
| 422 | Validation failed (check your request body) |

---

## 📁 Files

```
github-api/
├── README.md          ← This file (plan & reference)
└── github-api.rest    ← All API requests ready to run
```

---

## ✅ Progress Tracker

- [ ] Section 1 – User & Account
- [ ] Section 2 – Repository
- [ ] Section 3 – Commits & Logs
- [ ] Section 4 – Issues
- [ ] Section 5 – Pull Requests
- [ ] Section 6 – GitHub Actions & Workflows
- [ ] Section 7 – Secrets & Variables
- [ ] Section 8 – Releases & Tags
- [ ] Section 9 – Environments
- [ ] Section 10 – Search
