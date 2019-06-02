import { runSaga } from "redux-saga";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const response = [
  {
    id: 152356902,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTIzNTY5MDI=",
    name: "algamoney-api",
    full_name: "camposLuis/algamoney-api",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/algamoney-api",
    description: "Projeto do Curso Algaworks Fullstack Angular e Spring",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/algamoney-api",
    forks_url: "https://api.github.com/repos/camposLuis/algamoney-api/forks",
    keys_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/camposLuis/algamoney-api/teams",
    hooks_url: "https://api.github.com/repos/camposLuis/algamoney-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/issues/events{/number}",
    events_url: "https://api.github.com/repos/camposLuis/algamoney-api/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/algamoney-api/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/camposLuis/algamoney-api/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/algamoney-api/deployments",
    created_at: "2018-10-10T03:20:18Z",
    updated_at: "2019-03-06T01:28:58Z",
    pushed_at: "2018-10-21T01:47:47Z",
    git_url: "git://github.com/camposLuis/algamoney-api.git",
    ssh_url: "git@github.com:camposLuis/algamoney-api.git",
    clone_url: "https://github.com/camposLuis/algamoney-api.git",
    svn_url: "https://github.com/camposLuis/algamoney-api",
    homepage: null,
    size: 135,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master"
  },
  {
    id: 148058985,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDgwNTg5ODU=",
    name: "curso-fullstack-angular-spring",
    full_name: "camposLuis/curso-fullstack-angular-spring",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/curso-fullstack-angular-spring",
    description: null,
    fork: false,
    url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring",
    forks_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/forks",
    keys_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/teams",
    hooks_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/curso-fullstack-angular-spring/deployments",
    created_at: "2018-09-09T19:33:43Z",
    updated_at: "2019-03-06T01:29:00Z",
    pushed_at: "2018-10-10T01:25:13Z",
    git_url: "git://github.com/camposLuis/curso-fullstack-angular-spring.git",
    ssh_url: "git@github.com:camposLuis/curso-fullstack-angular-spring.git",
    clone_url:
      "https://github.com/camposLuis/curso-fullstack-angular-spring.git",
    svn_url: "https://github.com/camposLuis/curso-fullstack-angular-spring",
    homepage: null,
    size: 123,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI="
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 170990385,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzA5OTAzODU=",
    name: "CursoJavaScriptES6",
    full_name: "camposLuis/CursoJavaScriptES6",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/CursoJavaScriptES6",
    description: "Rocketseat",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/CursoJavaScriptES6",
    forks_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/forks",
    keys_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/teams",
    hooks_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/CursoJavaScriptES6/deployments",
    created_at: "2019-02-16T10:20:21Z",
    updated_at: "2019-03-07T20:19:50Z",
    pushed_at: "2019-02-16T11:33:39Z",
    git_url: "git://github.com/camposLuis/CursoJavaScriptES6.git",
    ssh_url: "git@github.com:camposLuis/CursoJavaScriptES6.git",
    clone_url: "https://github.com/camposLuis/CursoJavaScriptES6.git",
    svn_url: "https://github.com/camposLuis/CursoJavaScriptES6",
    homepage: null,
    size: 40,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 174232889,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQyMzI4ODk=",
    name: "GoNative",
    full_name: "camposLuis/GoNative",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/GoNative",
    description: "Curso Rocketseat React Native",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/GoNative",
    forks_url: "https://api.github.com/repos/camposLuis/GoNative/forks",
    keys_url: "https://api.github.com/repos/camposLuis/GoNative/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/GoNative/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/camposLuis/GoNative/teams",
    hooks_url: "https://api.github.com/repos/camposLuis/GoNative/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/GoNative/issues/events{/number}",
    events_url: "https://api.github.com/repos/camposLuis/GoNative/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/GoNative/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/GoNative/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/GoNative/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/GoNative/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/GoNative/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/GoNative/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/GoNative/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/GoNative/statuses/{sha}",
    languages_url: "https://api.github.com/repos/camposLuis/GoNative/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/GoNative/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/GoNative/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/GoNative/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/GoNative/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/GoNative/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/GoNative/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/GoNative/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/GoNative/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/GoNative/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/GoNative/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/camposLuis/GoNative/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/GoNative/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/camposLuis/GoNative/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/GoNative/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/GoNative/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/GoNative/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/GoNative/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/GoNative/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/GoNative/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/GoNative/deployments",
    created_at: "2019-03-06T22:47:59Z",
    updated_at: "2019-03-20T23:15:15Z",
    pushed_at: "2019-03-20T23:15:13Z",
    git_url: "git://github.com/camposLuis/GoNative.git",
    ssh_url: "git@github.com:camposLuis/GoNative.git",
    clone_url: "https://github.com/camposLuis/GoNative.git",
    svn_url: "https://github.com/camposLuis/GoNative",
    homepage: null,
    size: 2452,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 171379672,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzEzNzk2NzI=",
    name: "GoNode",
    full_name: "camposLuis/GoNode",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/GoNode",
    description: "Bootcamp 5 Rocketseat",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/GoNode",
    forks_url: "https://api.github.com/repos/camposLuis/GoNode/forks",
    keys_url: "https://api.github.com/repos/camposLuis/GoNode/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/GoNode/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/camposLuis/GoNode/teams",
    hooks_url: "https://api.github.com/repos/camposLuis/GoNode/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/GoNode/issues/events{/number}",
    events_url: "https://api.github.com/repos/camposLuis/GoNode/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/GoNode/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/GoNode/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/GoNode/tags",
    blobs_url: "https://api.github.com/repos/camposLuis/GoNode/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/GoNode/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/GoNode/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/camposLuis/GoNode/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/GoNode/statuses/{sha}",
    languages_url: "https://api.github.com/repos/camposLuis/GoNode/languages",
    stargazers_url: "https://api.github.com/repos/camposLuis/GoNode/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/GoNode/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/GoNode/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/GoNode/subscription",
    commits_url: "https://api.github.com/repos/camposLuis/GoNode/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/GoNode/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/GoNode/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/GoNode/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/GoNode/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/GoNode/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/camposLuis/GoNode/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/GoNode/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/camposLuis/GoNode/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/GoNode/issues{/number}",
    pulls_url: "https://api.github.com/repos/camposLuis/GoNode/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/GoNode/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/GoNode/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/camposLuis/GoNode/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/GoNode/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/GoNode/deployments",
    created_at: "2019-02-19T00:56:45Z",
    updated_at: "2019-03-31T18:52:10Z",
    pushed_at: "2019-03-31T18:52:09Z",
    git_url: "git://github.com/camposLuis/GoNode.git",
    ssh_url: "git@github.com:camposLuis/GoNode.git",
    clone_url: "https://github.com/camposLuis/GoNode.git",
    svn_url: "https://github.com/camposLuis/GoNode",
    homepage: null,
    size: 450,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 173002352,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzMwMDIzNTI=",
    name: "GoReact",
    full_name: "camposLuis/GoReact",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/GoReact",
    description: "Curso Rocketseat GoReact",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/GoReact",
    forks_url: "https://api.github.com/repos/camposLuis/GoReact/forks",
    keys_url: "https://api.github.com/repos/camposLuis/GoReact/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/GoReact/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/camposLuis/GoReact/teams",
    hooks_url: "https://api.github.com/repos/camposLuis/GoReact/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/GoReact/issues/events{/number}",
    events_url: "https://api.github.com/repos/camposLuis/GoReact/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/GoReact/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/GoReact/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/GoReact/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/GoReact/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/GoReact/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/GoReact/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/GoReact/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/GoReact/statuses/{sha}",
    languages_url: "https://api.github.com/repos/camposLuis/GoReact/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/GoReact/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/GoReact/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/GoReact/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/GoReact/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/GoReact/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/GoReact/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/GoReact/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/GoReact/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/GoReact/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/GoReact/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/camposLuis/GoReact/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/GoReact/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/camposLuis/GoReact/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/GoReact/issues{/number}",
    pulls_url: "https://api.github.com/repos/camposLuis/GoReact/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/GoReact/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/GoReact/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/camposLuis/GoReact/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/GoReact/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/GoReact/deployments",
    created_at: "2019-02-27T22:47:13Z",
    updated_at: "2019-06-02T00:44:51Z",
    pushed_at: "2019-06-02T00:44:49Z",
    git_url: "git://github.com/camposLuis/GoReact.git",
    ssh_url: "git@github.com:camposLuis/GoReact.git",
    clone_url: "https://github.com/camposLuis/GoReact.git",
    svn_url: "https://github.com/camposLuis/GoReact",
    homepage: null,
    size: 1668,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 184493088,
    node_id: "MDEwOlJlcG9zaXRvcnkxODQ0OTMwODg=",
    name: "NubankRN",
    full_name: "camposLuis/NubankRN",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/NubankRN",
    description:
      "Recriando a interface do Nubank (+ ANIMAÇÕES) com React Native",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/NubankRN",
    forks_url: "https://api.github.com/repos/camposLuis/NubankRN/forks",
    keys_url: "https://api.github.com/repos/camposLuis/NubankRN/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/NubankRN/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/camposLuis/NubankRN/teams",
    hooks_url: "https://api.github.com/repos/camposLuis/NubankRN/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/NubankRN/issues/events{/number}",
    events_url: "https://api.github.com/repos/camposLuis/NubankRN/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/NubankRN/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/NubankRN/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/NubankRN/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/NubankRN/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/NubankRN/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/NubankRN/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/NubankRN/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/NubankRN/statuses/{sha}",
    languages_url: "https://api.github.com/repos/camposLuis/NubankRN/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/NubankRN/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/NubankRN/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/NubankRN/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/NubankRN/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/NubankRN/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/NubankRN/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/NubankRN/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/NubankRN/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/NubankRN/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/NubankRN/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/camposLuis/NubankRN/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/NubankRN/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/camposLuis/NubankRN/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/NubankRN/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/NubankRN/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/NubankRN/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/NubankRN/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/NubankRN/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/NubankRN/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/NubankRN/deployments",
    created_at: "2019-05-01T23:07:51Z",
    updated_at: "2019-05-04T04:22:42Z",
    pushed_at: "2019-05-04T04:22:41Z",
    git_url: "git://github.com/camposLuis/NubankRN.git",
    ssh_url: "git@github.com:camposLuis/NubankRN.git",
    clone_url: "https://github.com/camposLuis/NubankRN.git",
    svn_url: "https://github.com/camposLuis/NubankRN",
    homepage: null,
    size: 1169,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 85433115,
    node_id: "MDEwOlJlcG9zaXRvcnk4NTQzMzExNQ==",
    name: "SpringMVC",
    full_name: "camposLuis/SpringMVC",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/SpringMVC",
    description:
      'Projeto Java Web do workshop "Começando com Spring MVC" da algaworks.',
    fork: false,
    url: "https://api.github.com/repos/camposLuis/SpringMVC",
    forks_url: "https://api.github.com/repos/camposLuis/SpringMVC/forks",
    keys_url: "https://api.github.com/repos/camposLuis/SpringMVC/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/camposLuis/SpringMVC/teams",
    hooks_url: "https://api.github.com/repos/camposLuis/SpringMVC/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/issues/events{/number}",
    events_url: "https://api.github.com/repos/camposLuis/SpringMVC/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/branches{/branch}",
    tags_url: "https://api.github.com/repos/camposLuis/SpringMVC/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/camposLuis/SpringMVC/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/SpringMVC/deployments",
    created_at: "2017-03-18T21:27:30Z",
    updated_at: "2019-03-06T01:30:33Z",
    pushed_at: "2017-03-18T21:31:42Z",
    git_url: "git://github.com/camposLuis/SpringMVC.git",
    ssh_url: "git@github.com:camposLuis/SpringMVC.git",
    clone_url: "https://github.com/camposLuis/SpringMVC.git",
    svn_url: "https://github.com/camposLuis/SpringMVC",
    homepage: null,
    size: 243,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 85434244,
    node_id: "MDEwOlJlcG9zaXRvcnk4NTQzNDI0NA==",
    name: "Teste-JUnit-Selenium",
    full_name: "camposLuis/Teste-JUnit-Selenium",
    private: false,
    owner: {
      login: "camposLuis",
      id: 5728954,
      node_id: "MDQ6VXNlcjU3Mjg5NTQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5728954?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/camposLuis",
      html_url: "https://github.com/camposLuis",
      followers_url: "https://api.github.com/users/camposLuis/followers",
      following_url:
        "https://api.github.com/users/camposLuis/following{/other_user}",
      gists_url: "https://api.github.com/users/camposLuis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/camposLuis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/camposLuis/subscriptions",
      organizations_url: "https://api.github.com/users/camposLuis/orgs",
      repos_url: "https://api.github.com/users/camposLuis/repos",
      events_url: "https://api.github.com/users/camposLuis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/camposLuis/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/camposLuis/Teste-JUnit-Selenium",
    description:
      "Projeto Java aplicando práticas de testes unitários e de aceitação (testes automatizados).",
    fork: false,
    url: "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium",
    forks_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/forks",
    keys_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/teams",
    hooks_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/hooks",
    issue_events_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/events",
    assignees_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/tags",
    blobs_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/languages",
    stargazers_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/stargazers",
    contributors_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/contributors",
    subscribers_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/subscribers",
    subscription_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/subscription",
    commits_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/merges",
    archive_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/downloads",
    issues_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/labels{/name}",
    releases_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/camposLuis/Teste-JUnit-Selenium/deployments",
    created_at: "2017-03-18T21:50:08Z",
    updated_at: "2019-03-06T01:26:59Z",
    pushed_at: "2017-03-18T21:56:25Z",
    git_url: "git://github.com/camposLuis/Teste-JUnit-Selenium.git",
    ssh_url: "git@github.com:camposLuis/Teste-JUnit-Selenium.git",
    clone_url: "https://github.com/camposLuis/Teste-JUnit-Selenium.git",
    svn_url: "https://github.com/camposLuis/Teste-JUnit-Selenium",
    homepage: null,
    size: 33034,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  }
];

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.successRepos(response)
    );
  });
});
