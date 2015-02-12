


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jQuery-Impromptu/jquery-impromptu.js at master · trentrichardson/jQuery-Impromptu · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="trentrichardson/jQuery-Impromptu" name="twitter:title" /><meta content="jQuery-Impromptu - An extention to help provide a more pleasant way to spontaneously prompt a user for input." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/313144?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/313144?v=3&amp;s=400" property="og:image" /><meta content="trentrichardson/jQuery-Impromptu" property="og:title" /><meta content="https://github.com/trentrichardson/jQuery-Impromptu" property="og:url" /><meta content="jQuery-Impromptu - An extention to help provide a more pleasant way to spontaneously prompt a user for input." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="AE6F2E81:2027:C484E4A:54DCC165" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="PavIImHREYZIufH5MhbX+uHWiGoKrsLq1Q4R2LPgnR+dWhMz9g1OiZ2+epFBvRE5//hgLhBAgcUwfynfJlJ2VQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-a4b171dd2431f87b38fda8fb16f70ffd9b828087c63c1c0a11a0f2a6d3042c1c.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-32bd1c1dfee77fb5e02738e6cd174a96ec7d5cd428ca633652d31df1a7a7ea3d.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="d290348011fa70e235a15550e1954459">

      
  <meta name="description" content="jQuery-Impromptu - An extention to help provide a more pleasant way to spontaneously prompt a user for input.">
  <meta name="go-import" content="github.com/trentrichardson/jQuery-Impromptu git https://github.com/trentrichardson/jQuery-Impromptu.git">

  <meta content="313144" name="octolytics-dimension-user_id" /><meta content="trentrichardson" name="octolytics-dimension-user_login" /><meta content="1919549" name="octolytics-dimension-repository_id" /><meta content="trentrichardson/jQuery-Impromptu" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1919549" name="octolytics-dimension-repository_network_root_id" /><meta content="trentrichardson/jQuery-Impromptu" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/trentrichardson/jQuery-Impromptu/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-Impromptu:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button" href="/login?return_to=%2Ftrentrichardson%2FjQuery-Impromptu%2Fblob%2Fmaster%2Fdist%2Fjquery-impromptu.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/trentrichardson/jQuery-Impromptu/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/trentrichardson/jQuery-Impromptu/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Ftrentrichardson%2FjQuery-Impromptu"
    class="minibutton with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/trentrichardson/jQuery-Impromptu/watchers">
    25
  </a>


  </li>

  <li>
      <a href="/login?return_to=%2Ftrentrichardson%2FjQuery-Impromptu"
    class="minibutton with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/trentrichardson/jQuery-Impromptu/stargazers">
      247
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Ftrentrichardson%2FjQuery-Impromptu"
        class="minibutton with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/trentrichardson/jQuery-Impromptu/network" class="social-count">
        116
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/trentrichardson" class="url fn" itemprop="url" rel="author"><span itemprop="title">trentrichardson</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/trentrichardson/jQuery-Impromptu" class="js-current-repository" data-pjax="#js-repo-pjax-container">jQuery-Impromptu</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/trentrichardson/jQuery-Impromptu/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/trentrichardson/jQuery-Impromptu" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /trentrichardson/jQuery-Impromptu">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/trentrichardson/jQuery-Impromptu/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /trentrichardson/jQuery-Impromptu/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/trentrichardson/jQuery-Impromptu/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /trentrichardson/jQuery-Impromptu/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/trentrichardson/jQuery-Impromptu/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /trentrichardson/jQuery-Impromptu/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/trentrichardson/jQuery-Impromptu/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /trentrichardson/jQuery-Impromptu/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/trentrichardson/jQuery-Impromptu.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/trentrichardson/jQuery-Impromptu" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save trentrichardson/jQuery-Impromptu to your computer and use it in GitHub Desktop." aria-label="Save trentrichardson/jQuery-Impromptu to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/trentrichardson/jQuery-Impromptu/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of trentrichardson/jQuery-Impromptu as a zip file"
                   title="Download the contents of trentrichardson/jQuery-Impromptu as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/trentrichardson/jQuery-Impromptu/blob/753c2833f62f9c00301dd8b75af03599dc4f2ee8/dist/jquery-impromptu.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:61f459cecc0513a7c1b29400635bfa07 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/blob/dev/dist/jquery-impromptu.js"
                 data-name="dev"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="dev">dev</a>
            </div>
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/blob/master/dist/jquery-impromptu.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v6.0.0/dist/jquery-impromptu.js"
                 data-name="v6.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0">v6.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.3.0/dist/jquery-impromptu.js"
                 data-name="v5.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.3.0">v5.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.2.5/dist/jquery-impromptu.js"
                 data-name="v5.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.5">v5.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.2.4/dist/jquery-impromptu.js"
                 data-name="v5.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.4">v5.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.2.3/dist/jquery-impromptu.js"
                 data-name="v5.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.3">v5.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.2.2/dist/jquery-impromptu.js"
                 data-name="v5.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.2">v5.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.2.1/dist/jquery-impromptu.js"
                 data-name="v5.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.1">v5.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.2.0/dist/jquery-impromptu.js"
                 data-name="v5.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.0">v5.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.1.1/dist/jquery-impromptu.js"
                 data-name="v5.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.1.1">v5.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.1.0/dist/jquery-impromptu.js"
                 data-name="v5.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.1.0">v5.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v5.0/dist/jquery-impromptu.js"
                 data-name="v5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0">v5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v4.4/dist/jquery-impromptu.js"
                 data-name="v4.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.4">v4.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v4.3/dist/jquery-impromptu.js"
                 data-name="v4.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.3">v4.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v4.1/dist/jquery-impromptu.js"
                 data-name="v4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.1">v4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v4.0.1/dist/jquery-impromptu.js"
                 data-name="v4.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.1">v4.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v4.0.0/dist/jquery-impromptu.js"
                 data-name="v4.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.0">v4.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/trentrichardson/jQuery-Impromptu/tree/v3.3.3/dist/jquery-impromptu.js"
                 data-name="v3.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.3.3">v3.3.3</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/trentrichardson/jQuery-Impromptu/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/trentrichardson/jQuery-Impromptu" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-Impromptu</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/trentrichardson/jQuery-Impromptu/tree/master/dist" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">jquery-impromptu.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Trent Richardson" class="avatar" data-user="313144" height="24" src="https://avatars0.githubusercontent.com/u/313144?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/trentrichardson" rel="author">trentrichardson</a></span>
        <time datetime="2014-12-27T23:20:50Z" is="relative-time">Dec 27, 2014</time>
        <div class="commit-title">
            <a href="/trentrichardson/jQuery-Impromptu/commit/753c2833f62f9c00301dd8b75af03599dc4f2ee8" class="message" data-pjax="true" title="New Version">New Version</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>2</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="trentrichardson" href="/trentrichardson/jQuery-Impromptu/commits/master/dist/jquery-impromptu.js?author=trentrichardson"><img alt="Trent Richardson" class="avatar" data-user="313144" height="20" src="https://avatars2.githubusercontent.com/u/313144?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Zalmoxisus" href="/trentrichardson/jQuery-Impromptu/commits/master/dist/jquery-impromptu.js?author=Zalmoxisus"><img alt="Mihail Diordiev" class="avatar" data-user="7957859" height="20" src="https://avatars2.githubusercontent.com/u/7957859?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Trent Richardson" data-user="313144" height="24" src="https://avatars0.githubusercontent.com/u/313144?v=3&amp;s=48" width="24" />
            <a href="/trentrichardson">trentrichardson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mihail Diordiev" data-user="7957859" height="24" src="https://avatars0.githubusercontent.com/u/7957859?v=3&amp;s=48" width="24" />
            <a href="/Zalmoxisus">Zalmoxisus</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>864 lines (749 sloc)</span>
          <span class="meta-divider"></span>
        <span>24.66 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/trentrichardson/jQuery-Impromptu/raw/master/dist/jquery-impromptu.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/trentrichardson/jQuery-Impromptu/blame/master/dist/jquery-impromptu.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/trentrichardson/jQuery-Impromptu/commits/master/dist/jquery-impromptu.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*! jQuery-Impromptu - v6.0.0 - 2014-12-27</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">* http://trentrichardson.com/Impromptu</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">* Copyright (c) 2014 Trent Richardson; Licensed MIT */</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">root</span>, <span class="pl-vpf">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> define.amd) {</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">		define([<span class="pl-s1"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span>], factory);</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">		factory(root.jQuery);</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">}(<span class="pl-v">this</span>, <span class="pl-st">function</span>(<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">	<span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">	<span class="pl-c">// Base object</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="pl-c">	* Imp - Impromptu object - passing no params will not open, only return the instance</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="pl-c">	* @param message String/Object - String of html or Object of states</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="pl-c">	* @param options Object - Options to set the prompt</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="pl-c">	* @return Imp - the instance of this Impromptu object</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">	<span class="pl-s">var</span> <span class="pl-en">Imp</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">message</span>, <span class="pl-vpf">options</span>){</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">		<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">		t.<span class="pl-sc">id</span> <span class="pl-k">=</span> Imp.count<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">		Imp.lifo.<span class="pl-s3">push</span>(t);</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">		<span class="pl-k">if</span>(message){</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">			t.<span class="pl-s3">open</span>(message, options);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">		<span class="pl-k">return</span> t;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">	<span class="pl-c">// static properties and methods</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line"><span class="pl-c">	* defaults - the default options</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">	Imp.defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">		prefix<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>jqi<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">		classes<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">			box<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">			fade<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">			prompt<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">			form<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">			close<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">			title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">			message<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">			buttons<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">			button<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">			defaultButton<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">		title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">		closeText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;times;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">		buttons<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">			Ok<span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">		<span class="pl-en">loaded</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){},</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">		<span class="pl-en">submit</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">v</span>,<span class="pl-vpf">m</span>,<span class="pl-vpf">f</span>){},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">		<span class="pl-en">close</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">v</span>,<span class="pl-vpf">m</span>,<span class="pl-vpf">f</span>){},</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">		<span class="pl-en">statechanging</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>, <span class="pl-vpf">from</span>, <span class="pl-vpf">to</span>){},</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">		<span class="pl-en">statechanged</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>, <span class="pl-vpf">to</span>){},</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">		opacity<span class="pl-k">:</span> <span class="pl-c1">0.6</span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">		zIndex<span class="pl-k">:</span> <span class="pl-c1">999</span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">		overlayspeed<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">		promptspeed<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fast<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">		show<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fadeIn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">		hide<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fadeOut<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">		focus<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">		defaultButton<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">		useiframe<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">		top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>15%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">		position<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">			container<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">			x<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">			y<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">			arrow<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">			width<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">		persistent<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">		timeout<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">		states<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">		state<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">			name<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">			title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">			html<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">			buttons<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">				Ok<span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">			focus<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">			defaultButton<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">			position<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">				container<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">				x<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">				y<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">				arrow<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">				width<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">			<span class="pl-en">submit</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">v</span>,<span class="pl-vpf">m</span>,<span class="pl-vpf">f</span>){</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line"><span class="pl-c">	* setDefaults - Sets the default options</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line"><span class="pl-c">	* @param o Object - Options to set as defaults</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line"><span class="pl-c">	* @return void</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">	<span class="pl-s3">Imp</span>.<span class="pl-en">setDefaults</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">o</span>) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">		Imp.defaults <span class="pl-k">=</span> $.extend({}, Imp.defaults, o);</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line"><span class="pl-c">	* setStateDefaults - Sets the default options for a state</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line"><span class="pl-c">	* @param o Object - Options to set as defaults</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line"><span class="pl-c">	* @return void</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">	<span class="pl-s3">Imp</span>.<span class="pl-en">setStateDefaults</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">o</span>) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">		Imp.defaults.state <span class="pl-k">=</span> $.extend({}, Imp.defaults.state, o);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line"><span class="pl-c">	* @var Int - A counter used to provide a unique ID for new prompts</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">	Imp.count <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line"><span class="pl-c">	* @var Array - An array of Impromptu intances in a LIFO queue (last in first out)</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">	Imp.lifo <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line"><span class="pl-c">	* getLast - get the last element from the queue (doesn&#39;t pop, just returns)</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line"><span class="pl-c">	* @return Imp - the instance of this Impromptu object or false if queue is empty</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">	<span class="pl-s3">Imp</span>.<span class="pl-en">getLast</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">		<span class="pl-s">var</span> l <span class="pl-k">=</span> Imp.lifo.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">		<span class="pl-k">return</span> (l <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)<span class="pl-k">?</span> Imp.lifo[l<span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line"><span class="pl-c">	* removeFromStack - remove an element from the lifo stack by its id</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line"><span class="pl-c">	* @param id int - id of the instance to remove</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line"><span class="pl-c">	* @return api - The api of the element removed from the stack or void</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">	<span class="pl-s3">Imp</span>.<span class="pl-en">removeFromStack</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">id</span>){</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">		<span class="pl-k">for</span>(<span class="pl-s">var</span> i<span class="pl-k">=</span>Imp.lifo.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>; i<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>; i<span class="pl-k">--</span>){</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">			<span class="pl-k">if</span>(Imp.lifo[i].<span class="pl-sc">id</span> <span class="pl-k">===</span> id){</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">				<span class="pl-k">return</span> Imp.lifo.<span class="pl-s3">splice</span>(i,<span class="pl-c1">1</span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">	<span class="pl-c">// extend our object instance properties and methods</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">	<span class="pl-s3">Imp</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line"><span class="pl-c">		* @var Int - A unique id, simply an autoincremented number</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">		id<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line"><span class="pl-c">		* open - Opens the prompt</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line"><span class="pl-c">		* @param message String/Object - String of html or Object of states</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line"><span class="pl-c">		* @param options Object - Options to set the prompt</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line"><span class="pl-c">		* @return Imp - the instance of this Impromptu object</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">		<span class="pl-en">open</span>: <span class="pl-st">function</span>(<span class="pl-vpf">message</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">			t.<span class="pl-sc">options</span> <span class="pl-k">=</span> $.extend({},Imp.defaults,options);</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">			<span class="pl-c">// Be sure any previous timeouts are destroyed</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">			<span class="pl-k">if</span>(t.timeout){</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">				<span class="pl-s3">clearTimeout</span>(t.timeout);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">			t.timeout <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">			<span class="pl-s">var</span> opts <span class="pl-k">=</span> t.<span class="pl-sc">options</span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">				$body <span class="pl-k">=</span> $(<span class="pl-s3">document</span>.<span class="pl-sc">body</span>),</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">				$<span class="pl-s3">window</span> <span class="pl-k">=</span> $(<span class="pl-s3">window</span>);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">			<span class="pl-c">//build the box and fade</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">			<span class="pl-s">var</span> msgbox <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>box <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.box <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">			<span class="pl-k">if</span>(opts.useiframe <span class="pl-k">&amp;&amp;</span> ($(<span class="pl-s1"><span class="pl-pds">&#39;</span>object, applet<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">				msgbox <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;iframe src=&quot;javascript:false;&quot; style=&quot;display:block;position:absolute;z-index:-1;&quot; class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>fade <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.fade <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/iframe&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">				msgbox <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>fade <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.fade <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">			msgbox <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.<span class="pl-sc">prompt</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">						<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;form action=&quot;javascript:false;&quot; onsubmit=&quot;return false;&quot; class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>form <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.<span class="pl-sc">form</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">							<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>close <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.close <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.closeText <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">							<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>states&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">						<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/form&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">				<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">			t.jqib <span class="pl-k">=</span> $(msgbox).appendTo($body);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">			t.jqi <span class="pl-k">=</span> t.jqib.children(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span>);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">			t.jqif <span class="pl-k">=</span> t.jqib.children(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">			<span class="pl-c">//if a string was passed, convert to a single state</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">			<span class="pl-k">if</span>(message.<span class="pl-sc">constructor</span> <span class="pl-k">===</span> <span class="pl-s3">String</span>){</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">				message <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">					state0<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">						title<span class="pl-k">:</span> opts.<span class="pl-sc">title</span>,</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">						html<span class="pl-k">:</span> message,</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">						buttons<span class="pl-k">:</span> opts.buttons,</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">						position<span class="pl-k">:</span> opts.position,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">						focus<span class="pl-k">:</span> opts.focus,</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">						defaultButton<span class="pl-k">:</span> opts.defaultButton,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">						submit<span class="pl-k">:</span> opts.submit</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">			<span class="pl-c">//build the states</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">			t.<span class="pl-sc">options</span>.states <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">			<span class="pl-s">var</span> k,v;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">			<span class="pl-k">for</span>(k <span class="pl-k">in</span> message){</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">				v <span class="pl-k">=</span> $.extend({},Imp.defaults.state,{name<span class="pl-k">:</span>k},message[k]);</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">				t.addState(v.<span class="pl-sc">name</span>, v);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">				<span class="pl-k">if</span>(t.currentStateName <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">					t.currentStateName <span class="pl-k">=</span> v.<span class="pl-sc">name</span>;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">			<span class="pl-c">//Events</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">			t.jqi.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>buttons button<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">				<span class="pl-s">var</span> $t <span class="pl-k">=</span> $(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">					$state <span class="pl-k">=</span> $t.parents(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>state<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">					stateobj <span class="pl-k">=</span> t.<span class="pl-sc">options</span>.states[$state.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>jqi-name<span class="pl-pds">&#39;</span></span>)],</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">					msg <span class="pl-k">=</span> $state.children(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">					clicked <span class="pl-k">=</span> stateobj.buttons[$t.<span class="pl-sc">text</span>()] <span class="pl-k">||</span> stateobj.buttons[$t.html()],</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">					forminputs <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">				<span class="pl-c">// if for some reason we couldn&#39;t get the value</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">				<span class="pl-k">if</span>(clicked <span class="pl-k">===</span> <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">					<span class="pl-k">for</span>(<span class="pl-s">var</span> i <span class="pl-k">in</span> stateobj.buttons){</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">						<span class="pl-k">if</span>(stateobj.buttons[i].<span class="pl-sc">title</span> <span class="pl-k">===</span> $t.<span class="pl-sc">text</span>() <span class="pl-k">||</span> stateobj.buttons[i].<span class="pl-sc">title</span> <span class="pl-k">===</span> $t.html()){</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">							clicked <span class="pl-k">=</span> stateobj.buttons[i].<span class="pl-sc">value</span>;</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">				<span class="pl-c">//collect all form element values from all states.</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">				$.each(t.jqi.children(<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span>).serializeArray(),<span class="pl-st">function</span>(<span class="pl-vpf">i</span>,<span class="pl-vpf">obj</span>){</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">					<span class="pl-k">if</span> (forminputs[obj.<span class="pl-sc">name</span>] <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">						forminputs[obj.<span class="pl-sc">name</span>] <span class="pl-k">=</span> obj.<span class="pl-sc">value</span>;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> forminputs[obj.<span class="pl-sc">name</span>] <span class="pl-k">===</span> <span class="pl-s3">Array</span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> forminputs[obj.<span class="pl-sc">name</span>] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">						forminputs[obj.<span class="pl-sc">name</span>].<span class="pl-s3">push</span>(obj.<span class="pl-sc">value</span>);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">						forminputs[obj.<span class="pl-sc">name</span>] <span class="pl-k">=</span> [forminputs[obj.<span class="pl-sc">name</span>],obj.<span class="pl-sc">value</span>];</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">				<span class="pl-c">// trigger an event</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">				<span class="pl-s">var</span> promptsubmite <span class="pl-k">=</span> <span class="pl-k">new</span> $.Event(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:submit<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">				promptsubmite.stateName <span class="pl-k">=</span> stateobj.<span class="pl-sc">name</span>;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">				promptsubmite.state <span class="pl-k">=</span> $state;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">				$state.trigger(promptsubmite, [clicked, msg, forminputs]);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>promptsubmite.isDefaultPrevented()){</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">					t.<span class="pl-s3">close</span>(<span class="pl-c1">true</span>, clicked,msg,forminputs);</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">			<span class="pl-c">// if the fade is clicked blink the prompt</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">			<span class="pl-s">var</span> <span class="pl-en">fadeClicked</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">				<span class="pl-k">if</span>(opts.persistent){</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">					<span class="pl-s">var</span> offset <span class="pl-k">=</span> (opts.<span class="pl-sc">top</span>.<span class="pl-s3">toString</span>().<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span><span class="pl-k">?</span> ($<span class="pl-s3">window</span>.<span class="pl-sc">height</span>()<span class="pl-k">*</span>(<span class="pl-s3">parseInt</span>(opts.<span class="pl-sc">top</span>,<span class="pl-c1">10</span>)/<span class="pl-c1">100</span>)) <span class="pl-k">:</span> <span class="pl-s3">parseInt</span>(opts.<span class="pl-sc">top</span>,<span class="pl-c1">10</span>)),</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">						top <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(t.jqi.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),<span class="pl-c1">10</span>) <span class="pl-k">-</span> offset;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">					<span class="pl-c">//$window.scrollTop(top);</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">					$(<span class="pl-s1"><span class="pl-pds">&#39;</span>html,body<span class="pl-pds">&#39;</span></span>).animate({ scrollTop<span class="pl-k">:</span> top }, <span class="pl-s1"><span class="pl-pds">&#39;</span>fast<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">						<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">						t.jqib.addClass(opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>warning<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">						<span class="pl-s">var</span> intervalid <span class="pl-k">=</span> <span class="pl-s3">setInterval</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">							t.jqib.toggleClass(opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>warning<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">							<span class="pl-k">if</span>(i<span class="pl-k">++</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">								<span class="pl-s3">clearInterval</span>(intervalid);</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">								t.jqib.removeClass(opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>warning<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">						}, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">					t.<span class="pl-s3">close</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">			<span class="pl-c">// listen for esc or tab keys</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">			<span class="pl-s">var</span> <span class="pl-en">keyDownEventHandler</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">				<span class="pl-s">var</span> key <span class="pl-k">=</span> (<span class="pl-s3">window</span>.<span class="pl-s3">event</span>) <span class="pl-k">?</span> <span class="pl-s3">event</span>.keyCode <span class="pl-k">:</span> e.keyCode;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">				<span class="pl-c">//escape key closes</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">				<span class="pl-k">if</span>(key <span class="pl-k">===</span> <span class="pl-c1">27</span>) {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">					fadeClicked();</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">				<span class="pl-c">//enter key pressed trigger the default button if its not on it, ignore if it is a textarea</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">				<span class="pl-k">if</span>(key <span class="pl-k">===</span> <span class="pl-c1">13</span>){</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">					<span class="pl-s">var</span> $defBtn <span class="pl-k">=</span> t.getCurrentState().<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>defaultbutton<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">					<span class="pl-s">var</span> $tgt <span class="pl-k">=</span> $(e.<span class="pl-sc">target</span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">					<span class="pl-k">if</span>($tgt.is(<span class="pl-s1"><span class="pl-pds">&#39;</span>textarea,.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>opts.<span class="pl-sc">prefix</span><span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>button<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> $defBtn.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">						e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">						$defBtn.<span class="pl-s3">click</span>();</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">				<span class="pl-c">//constrain tabs, tabs should iterate through the state and not leave</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">				<span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-c1">9</span>){</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">					<span class="pl-s">var</span> $inputels <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>input,select,textarea,button<span class="pl-pds">&#39;</span></span>,t.getCurrentState());</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">					<span class="pl-s">var</span> fwd <span class="pl-k">=</span> <span class="pl-k">!</span>e.shiftKey <span class="pl-k">&amp;&amp;</span> e.<span class="pl-sc">target</span> <span class="pl-k">===</span> $inputels[$inputels.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">					<span class="pl-s">var</span> back <span class="pl-k">=</span> e.shiftKey <span class="pl-k">&amp;&amp;</span> e.<span class="pl-sc">target</span> <span class="pl-k">===</span> $inputels[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">					<span class="pl-k">if</span> (fwd <span class="pl-k">||</span> back) {</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">						<span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">							<span class="pl-k">if</span> (<span class="pl-k">!</span>$inputels){</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">								<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">							<span class="pl-s">var</span> el <span class="pl-k">=</span> $inputels[back<span class="pl-k">===</span><span class="pl-c1">true</span> <span class="pl-k">?</span> $inputels.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">							<span class="pl-k">if</span> (el){</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">								el.<span class="pl-s3">focus</span>();</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">						},<span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">			t.position();</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">			t.<span class="pl-sc">style</span>();</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">			<span class="pl-c">// store copy of the window resize function for interal use only</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">			<span class="pl-s3">t</span>.<span class="pl-en">_windowResize</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">				t.position(e);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">			$<span class="pl-s3">window</span>.resize({ animate<span class="pl-k">:</span> <span class="pl-c1">false</span> }, t._windowResize);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">			t.jqif.<span class="pl-s3">click</span>(fadeClicked);</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">			t.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>close<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">click</span>(<span class="pl-st">function</span>(){ t.<span class="pl-s3">close</span>(); });</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">			t.jqib.on(<span class="pl-s1"><span class="pl-pds">&quot;</span>keydown<span class="pl-pds">&quot;</span></span>,keyDownEventHandler)</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">						.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:loaded<span class="pl-pds">&#39;</span></span>, opts.loaded)</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">						.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:close<span class="pl-pds">&#39;</span></span>, opts.close)</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">						.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:statechanging<span class="pl-pds">&#39;</span></span>, opts.statechanging)</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">						.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:statechanged<span class="pl-pds">&#39;</span></span>, opts.statechanged);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">			<span class="pl-c">// Show it</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">			t.jqif[opts.show](opts.overlayspeed);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">			t.jqi[opts.show](opts.promptspeed, <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">				<span class="pl-s">var</span> $firstState <span class="pl-k">=</span> t.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>states .<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>state<span class="pl-pds">&#39;</span></span>).eq(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">				t.goToState($firstState.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>jqi-name<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">				t.jqib.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:loaded<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">			<span class="pl-c">// Timeout</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">			<span class="pl-k">if</span>(opts.timeout <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">				t.timeout <span class="pl-k">=</span> <span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>(){ t.<span class="pl-s3">close</span>(<span class="pl-c1">true</span>); },opts.timeout);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">			<span class="pl-k">return</span> t;</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line"><span class="pl-c">		* close - Closes the prompt</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line"><span class="pl-c">		* @param callback Function - called when the transition is complete</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line"><span class="pl-c">		* @param clicked String - value of the button clicked (only used internally)</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line"><span class="pl-c">		* @param msg jQuery - The state message body (only used internally)</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line"><span class="pl-c">		* @param forvals Object - key/value pairs of all form field names and values (only used internally)</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line"><span class="pl-c">		* @return Imp - the instance of this Impromptu object</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">		<span class="pl-en">close</span>: <span class="pl-st">function</span>(<span class="pl-vpf">callCallback</span>, <span class="pl-vpf">clicked</span>, <span class="pl-vpf">msg</span>, <span class="pl-vpf">formvals</span>){</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">			Imp.removeFromStack(t.<span class="pl-sc">id</span>);</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">			<span class="pl-k">if</span>(t.timeout){</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">				<span class="pl-s3">clearTimeout</span>(t.timeout);</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">				t.timeout <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">			<span class="pl-k">if</span>(t.jqib){</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">				t.jqib[t.<span class="pl-sc">options</span>.hide](<span class="pl-s1"><span class="pl-pds">&#39;</span>fast<span class="pl-pds">&#39;</span></span>,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">					t.jqib.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:close<span class="pl-pds">&#39;</span></span>, [clicked,msg,formvals]);</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">					t.jqib.<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">					$(<span class="pl-s3">window</span>).off(<span class="pl-s1"><span class="pl-pds">&#39;</span>resize<span class="pl-pds">&#39;</span></span>, t._windowResize);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">					<span class="pl-k">if</span>(<span class="pl-k">typeof</span> callCallback <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">						callCallback();</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">			t.currentStateName <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">			<span class="pl-k">return</span> t;</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line"><span class="pl-c">		* addState - Injects a state into the prompt</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line"><span class="pl-c">		* @param statename String - Name of the state</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line"><span class="pl-c">		* @param stateobj Object - options for the state</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line"><span class="pl-c">		* @param afterState String - selector of the state to insert after</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the newly created state</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">		<span class="pl-en">addState</span>: <span class="pl-st">function</span>(<span class="pl-vpf">statename</span>, <span class="pl-vpf">stateobj</span>, <span class="pl-vpf">afterState</span>) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">				state <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">				$state <span class="pl-k">=</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">				arrow <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">				title <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">				opts <span class="pl-k">=</span> t.<span class="pl-sc">options</span>,</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">				$jqistates <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>states<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">				buttons <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">				showHtml,defbtn,k,v,l,i<span class="pl-k">=</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">			stateobj <span class="pl-k">=</span> $.extend({},Imp.defaults.state, {name<span class="pl-k">:</span>statename}, stateobj);</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">			<span class="pl-k">if</span>(stateobj.position.arrow <span class="pl-k">!==</span> <span class="pl-c1">null</span>){</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">				arrow <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>arrow <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>arrow<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> stateobj.position.arrow <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">			<span class="pl-k">if</span>(stateobj.<span class="pl-sc">title</span> <span class="pl-k">&amp;&amp;</span> stateobj.<span class="pl-sc">title</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">				title <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;lead <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>title <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.<span class="pl-sc">title</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>  stateobj.<span class="pl-sc">title</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">			showHtml <span class="pl-k">=</span> stateobj.html;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> stateobj.html <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">				showHtml <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Error: html function must return text<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">			state <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>state&quot; data-jqi-name=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> statename <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot; style=&quot;display:none;&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">						arrow <span class="pl-k">+</span> title <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">						<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>message <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.message <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> showHtml <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">						<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>buttons <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.buttons <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> ($.isEmptyObject(stateobj.buttons)<span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>style=&quot;display:none;&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">			<span class="pl-c">// state buttons may be in object or array, lets convert objects to arrays</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">			<span class="pl-k">if</span>($.isArray(stateobj.buttons)){</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">				buttons <span class="pl-k">=</span> stateobj.buttons;</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span>($.isPlainObject(stateobj.buttons)){</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">				<span class="pl-k">for</span>(k <span class="pl-k">in</span> stateobj.buttons){</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">					<span class="pl-k">if</span>(stateobj.buttons.hasOwnProperty(k)){</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">						buttons.<span class="pl-s3">push</span>({ title<span class="pl-k">:</span> k, value<span class="pl-k">:</span> stateobj.buttons[k] });</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">			<span class="pl-c">// iterate over each button and create them</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">			<span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>, l<span class="pl-k">=</span>buttons.<span class="pl-sc">length</span>; i<span class="pl-k">&lt;</span>l; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">				v <span class="pl-k">=</span> buttons[i],</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">				defbtn <span class="pl-k">=</span> stateobj.focus <span class="pl-k">===</span> i <span class="pl-k">||</span> (<span class="pl-s3">isNaN</span>(stateobj.focus) <span class="pl-k">&amp;&amp;</span> stateobj.defaultButton <span class="pl-k">===</span> i) <span class="pl-k">?</span> (opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>defaultbutton <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.defaultButton) <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">				state <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;button class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">classes</span>.button <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>button <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> defbtn;</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">typeof</span> v.<span class="pl-sc">classes</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">					state <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> ($.isArray(v.<span class="pl-sc">classes</span>)<span class="pl-k">?</span> v.<span class="pl-sc">classes</span>.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> v.<span class="pl-sc">classes</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">				state <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot; name=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> statename <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>_button<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> v.<span class="pl-sc">title</span>.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span>gi</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot; value=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> v.<span class="pl-sc">value</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> v.<span class="pl-sc">title</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/button&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">			state <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">			$state <span class="pl-k">=</span> $(state);</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">			$state.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:submit<span class="pl-pds">&#39;</span></span>, stateobj.submit);</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">			<span class="pl-k">if</span>(afterState <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">				$jqistates.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>[data-jqi-name=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>afterState<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>).after($state);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">			<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">				$jqistates.append($state);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">			t.<span class="pl-sc">options</span>.states[statename] <span class="pl-k">=</span> stateobj;</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">			<span class="pl-k">return</span> $state;</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line"><span class="pl-c">		* removeState - Removes a state from the prompt</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line"><span class="pl-c">		* @param state String - Name of the state</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line"><span class="pl-c">		* @param newState String - Name of the state to transition to</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line"><span class="pl-c">		* @return Boolean - returns true on success, false on failure</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">		<span class="pl-en">removeState</span>: <span class="pl-st">function</span>(<span class="pl-vpf">state</span>, <span class="pl-vpf">newState</span>) {</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">				$state <span class="pl-k">=</span> t.getState(state),</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">				<span class="pl-en">rm</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(){ $state.<span class="pl-s3">remove</span>(); };</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">			<span class="pl-k">if</span>($state.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">			<span class="pl-c">// transition away from it before deleting</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">			<span class="pl-k">if</span>($state.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">				<span class="pl-k">if</span>(newState <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> t.getState(newState).<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">					t.goToState(newState, <span class="pl-c1">false</span>, rm);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>($state.<span class="pl-sc">next</span>().<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">					t.nextState(rm);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>($state.prev().<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">					t.prevState(rm);</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">				<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">					t.<span class="pl-s3">close</span>();</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">			<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">				$state.slideUp(<span class="pl-s1"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span>, rm);</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line"><span class="pl-c">		* getApi - Get the api, so you can extract it from $.prompt stack</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the prompt</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">		<span class="pl-en">getApi</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line"><span class="pl-c">		* getBox - Get the box containing fade and prompt</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the prompt</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">		<span class="pl-en">getBox</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.jqib;</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line"><span class="pl-c">		* getPrompt - Get the prompt</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the prompt</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">		<span class="pl-en">getPrompt</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.jqi;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line"><span class="pl-c">		* getState - Get the state by its name</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line"><span class="pl-c">		* @param statename String - Name of the state</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the state</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">		<span class="pl-en">getState</span>: <span class="pl-st">function</span>(<span class="pl-vpf">statename</span>) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>[data-jqi-name=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> statename <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line"><span class="pl-c">		* getCurrentState - Get the current visible state</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the current visible state</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">		<span class="pl-en">getCurrentState</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.getState(<span class="pl-v">this</span>.getCurrentStateName());</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line"><span class="pl-c">		* getCurrentStateName - Get the name of the current visible state/substate</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line"><span class="pl-c">		* @return String - the current visible state&#39;s name</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">		<span class="pl-en">getCurrentStateName</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.currentStateName;</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line"><span class="pl-c">		* position - Repositions the prompt (Used internally)</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line"><span class="pl-c">		* @return void</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">		<span class="pl-en">position</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">				restoreFx <span class="pl-k">=</span> $.fx.off,</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">				$state <span class="pl-k">=</span> t.getCurrentState(),</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">				stateObj <span class="pl-k">=</span> t.<span class="pl-sc">options</span>.states[$state.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>jqi-name<span class="pl-pds">&#39;</span></span>)],</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">				pos <span class="pl-k">=</span> stateObj<span class="pl-k">?</span> stateObj.position <span class="pl-k">:</span> <span class="pl-c1">undefined</span>,</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">				$<span class="pl-s3">window</span> <span class="pl-k">=</span> $(<span class="pl-s3">window</span>),</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">				bodyHeight <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-sc">body</span>.scrollHeight, <span class="pl-c">//$(document.body).outerHeight(true),</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">				windowHeight <span class="pl-k">=</span> $(<span class="pl-s3">window</span>).<span class="pl-sc">height</span>(),</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">				documentHeight <span class="pl-k">=</span> $(<span class="pl-s3">document</span>).<span class="pl-sc">height</span>(),</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">				height <span class="pl-k">=</span> bodyHeight <span class="pl-k">&gt;</span> windowHeight <span class="pl-k">?</span> bodyHeight <span class="pl-k">:</span> windowHeight,</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">				top <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>($<span class="pl-s3">window</span>.scrollTop(),<span class="pl-c1">10</span>) <span class="pl-k">+</span> (t.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>.<span class="pl-s3">toString</span>().<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span><span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">						(windowHeight<span class="pl-k">*</span>(<span class="pl-s3">parseInt</span>(t.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>,<span class="pl-c1">10</span>)/<span class="pl-c1">100</span>)) <span class="pl-k">:</span> <span class="pl-s3">parseInt</span>(t.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>,<span class="pl-c1">10</span>));</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">			<span class="pl-c">// when resizing the window turn off animation</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">			<span class="pl-k">if</span>(e <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> e.<span class="pl-sc">data</span>.animate <span class="pl-k">===</span> <span class="pl-c1">false</span>){</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">				$.fx.off <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">			t.jqib.css({</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">				position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">				height<span class="pl-k">:</span> height,</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">				width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">				top<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">				left<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">				right<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">				bottom<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">			t.jqif.css({</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">				position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>fixed<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">				height<span class="pl-k">:</span> height,</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">				width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">				top<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">				left<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">				right<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">				bottom<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">			<span class="pl-c">// tour positioning</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">			<span class="pl-k">if</span>(pos <span class="pl-k">&amp;&amp;</span> pos.container){</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">				<span class="pl-s">var</span> offset <span class="pl-k">=</span> $(pos.container).offset();</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">				<span class="pl-k">if</span>($.isPlainObject(offset) <span class="pl-k">&amp;&amp;</span> offset.<span class="pl-sc">top</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">					t.jqi.css({</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">						position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">					t.jqi.animate({</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">						top<span class="pl-k">:</span> offset.<span class="pl-sc">top</span> <span class="pl-k">+</span> pos.<span class="pl-sc">y</span>,</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">						left<span class="pl-k">:</span> offset.<span class="pl-sc">left</span> <span class="pl-k">+</span> pos.<span class="pl-sc">x</span>,</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">						marginLeft<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">						width<span class="pl-k">:</span> (pos.<span class="pl-sc">width</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)<span class="pl-k">?</span> pos.<span class="pl-sc">width</span> <span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">					top <span class="pl-k">=</span> (offset.<span class="pl-sc">top</span> <span class="pl-k">+</span> pos.<span class="pl-sc">y</span>) <span class="pl-k">-</span> (t.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>.<span class="pl-s3">toString</span>().<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span><span class="pl-k">?</span> (windowHeight<span class="pl-k">*</span>(<span class="pl-s3">parseInt</span>(t.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>,<span class="pl-c1">10</span>)/<span class="pl-c1">100</span>)) <span class="pl-k">:</span> <span class="pl-s3">parseInt</span>(t.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>,<span class="pl-c1">10</span>));</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">					$(<span class="pl-s1"><span class="pl-pds">&#39;</span>html,body<span class="pl-pds">&#39;</span></span>).animate({ scrollTop<span class="pl-k">:</span> top }, <span class="pl-s1"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>swing<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(){});</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">			<span class="pl-c">// custom state width animation</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span>(pos <span class="pl-k">&amp;&amp;</span> pos.<span class="pl-sc">width</span>){</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">				t.jqi.css({</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">						position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">						left<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>50%<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">				t.jqi.animate({</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">						top<span class="pl-k">:</span> pos.<span class="pl-sc">y</span> <span class="pl-k">||</span> top,</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">						left<span class="pl-k">:</span> pos.<span class="pl-sc">x</span> <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>50%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">						marginLeft<span class="pl-k">:</span> ((pos.<span class="pl-sc">width</span>/<span class="pl-c1">2</span>)<span class="pl-k">*-</span><span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">						width<span class="pl-k">:</span> pos.<span class="pl-sc">width</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">			<span class="pl-c">// standard prompt positioning</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">			<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">				t.jqi.css({</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">					position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">					top<span class="pl-k">:</span> top,</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">					left<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>50%<span class="pl-pds">&#39;</span></span>,<span class="pl-c">//$window.width()/2,</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">					marginLeft<span class="pl-k">:</span> ((t.jqi.<span class="pl-sc">outerWidth</span>(<span class="pl-c1">false</span>)/<span class="pl-c1">2</span>)<span class="pl-k">*-</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">			<span class="pl-c">// restore fx settings</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">			<span class="pl-k">if</span>(e <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> e.<span class="pl-sc">data</span>.animate <span class="pl-k">===</span> <span class="pl-c1">false</span>){</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">				$.fx.off <span class="pl-k">=</span> restoreFx;</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line"><span class="pl-c">		* style - Restyles the prompt (Used internally)</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line"><span class="pl-c">		* @return void</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">		<span class="pl-en">style</span>: <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">			t.jqif.css({</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">				zIndex<span class="pl-k">:</span> t.<span class="pl-sc">options</span>.<span class="pl-sc">zIndex</span>,</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">				display<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">				opacity<span class="pl-k">:</span> t.<span class="pl-sc">options</span>.opacity</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">			t.jqi.css({</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">				zIndex<span class="pl-k">:</span> t.<span class="pl-sc">options</span>.<span class="pl-sc">zIndex</span><span class="pl-k">+</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">				display<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">			t.jqib.css({</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">				zIndex<span class="pl-k">:</span> t.<span class="pl-sc">options</span>.<span class="pl-sc">zIndex</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line"><span class="pl-c">		* goToState - Goto the specified state</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line"><span class="pl-c">		* @param state String - name of the state to transition to</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line"><span class="pl-c">		* @param subState Boolean - true to be a sub state within the currently open state</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line"><span class="pl-c">		* @param callback Function - called when the transition is complete</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the newly active state</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">		<span class="pl-en">goToState</span>: <span class="pl-st">function</span>(<span class="pl-vpf">state</span>, <span class="pl-vpf">subState</span>, <span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">				$jqi <span class="pl-k">=</span> t.jqi,</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">				jqiopts <span class="pl-k">=</span> t.<span class="pl-sc">options</span>,</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">				$state <span class="pl-k">=</span> t.getState(state),</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">				stateobj <span class="pl-k">=</span> jqiopts.states[$state.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>jqi-name<span class="pl-pds">&#39;</span></span>)],</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">				promptstatechanginge <span class="pl-k">=</span> <span class="pl-k">new</span> $.Event(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:statechanging<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">				opts <span class="pl-k">=</span> t.<span class="pl-sc">options</span>;</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">			<span class="pl-k">if</span>(stateobj <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">typeof</span> stateobj.html <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">					<span class="pl-s">var</span> contentLaterFunc <span class="pl-k">=</span> stateobj.html;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">					$state.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>message <span class="pl-pds">&#39;</span></span>).html(contentLaterFunc());</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">				<span class="pl-c">// subState can be ommitted</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">typeof</span> subState <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">					callback <span class="pl-k">=</span> subState;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">					subState <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">				t.jqib.trigger(promptstatechanginge, [t.getCurrentStateName(), state]);</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>promptstatechanginge.isDefaultPrevented() <span class="pl-k">&amp;&amp;</span> $state.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">					t.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>parentstate<span class="pl-pds">&#39;</span></span>).removeClass(opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>parentstate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">					<span class="pl-k">if</span>(subState){ <span class="pl-c">// hide any open substates</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">						<span class="pl-c">// get rid of any substates</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">						t.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>substate<span class="pl-pds">&#39;</span></span>).not($state)</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">							.slideUp(jqiopts.promptspeed)</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">							.removeClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>substate<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">							.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>arrow<span class="pl-pds">&#39;</span></span>).hide();</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">						<span class="pl-c">// add parent state class so it can be visible, but blocked</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">						t.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>state:visible<span class="pl-pds">&#39;</span></span>).addClass(opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>parentstate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">						<span class="pl-c">// add substate class so we know it will be smaller</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">						$state.addClass(opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>substate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">					<span class="pl-k">else</span>{ <span class="pl-c">// hide any open states</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">						t.jqi.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>state<span class="pl-pds">&#39;</span></span>).not($state)</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">							.slideUp(jqiopts.promptspeed)</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">							.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>arrow<span class="pl-pds">&#39;</span></span>).hide();</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">					t.currentStateName <span class="pl-k">=</span> stateobj.<span class="pl-sc">name</span>;</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">					$state.slideDown(jqiopts.promptspeed,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">						<span class="pl-s">var</span> $t <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">						<span class="pl-c">// if focus is a selector, find it, else its button index</span></td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">						<span class="pl-k">if</span>(<span class="pl-k">typeof</span>(stateobj.focus) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">							$t.<span class="pl-s3">find</span>(stateobj.focus).eq(<span class="pl-c1">0</span>).<span class="pl-s3">focus</span>();</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">						<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">							$t.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>defaultbutton<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">focus</span>();</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">						$t.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> opts.<span class="pl-sc">prefix</span> <span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>arrow<span class="pl-pds">&#39;</span></span>).show(jqiopts.promptspeed);</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">							t.jqib.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:statechanged<span class="pl-pds">&#39;</span></span>, callback);</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">						t.jqib.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:statechanged<span class="pl-pds">&#39;</span></span>, [state]);</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">							t.jqib.off(<span class="pl-s1"><span class="pl-pds">&#39;</span>impromptu:statechanged<span class="pl-pds">&#39;</span></span>, callback);</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">					<span class="pl-k">if</span>(<span class="pl-k">!</span>subState){</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">						t.position();</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">				} <span class="pl-c">// end isDefaultPrevented()	</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">			}<span class="pl-c">// end stateobj !== undefined</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">			<span class="pl-k">return</span> $state;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line"><span class="pl-c">		* nextState - Transition to the next state</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line"><span class="pl-c">		* @param callback Function - called when the transition is complete</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the newly active state</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">		<span class="pl-en">nextState</span>: <span class="pl-st">function</span>(<span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">				$next <span class="pl-k">=</span> t.getCurrentState().<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">			<span class="pl-k">if</span>($next.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">				t.goToState( $next.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>jqi-name<span class="pl-pds">&#39;</span></span>), callback );</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">			<span class="pl-k">return</span> $next;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line"><span class="pl-c">		* prevState - Transition to the previous state</span></td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line"><span class="pl-c">		* @param callback Function - called when the transition is complete</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line"><span class="pl-c">		* @return jQuery - the newly active state</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">		<span class="pl-en">prevState</span>: <span class="pl-st">function</span>(<span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">			<span class="pl-s">var</span> t <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">				$prev <span class="pl-k">=</span> t.getCurrentState().prev();</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">			<span class="pl-k">if</span>($prev.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">				t.goToState( $prev.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>jqi-name<span class="pl-pds">&#39;</span></span>), callback );</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">			<span class="pl-k">return</span> $prev;</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">	<span class="pl-c">// $.prompt will manage a queue of Impromptu instances</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code js-file-line"><span class="pl-c">	* $.prompt create a new Impromptu instance and push it on the stack of instances</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code js-file-line"><span class="pl-c">	* @param message String/Object - String of html or Object of states</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code js-file-line"><span class="pl-c">	* @param options Object - Options to set the prompt</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code js-file-line"><span class="pl-c">	* @return jQuery - the jQuery object of the prompt within the modal</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code js-file-line">	<span class="pl-s3">$</span>.<span class="pl-en">prompt</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">message</span>, <span class="pl-vpf">options</span>){</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code js-file-line">		<span class="pl-s">var</span> api <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Imp</span>(message, options);</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code js-file-line">		<span class="pl-k">return</span> api.jqi;</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code js-file-line"><span class="pl-c">	* Copy over static methods</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code js-file-line">	$.each(Imp, <span class="pl-st">function</span>(<span class="pl-vpf">k</span>,<span class="pl-vpf">v</span>){</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code js-file-line">		$.<span class="pl-sc">prompt</span>[k] <span class="pl-k">=</span> v;</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code js-file-line"><span class="pl-c">	* Create a proxy for accessing all instance methods. The close method pops from queue.</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code js-file-line">	$.each(Imp.<span class="pl-sc">prototype</span>, <span class="pl-st">function</span>(<span class="pl-vpf">k</span>,<span class="pl-vpf">v</span>){</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code js-file-line">		$.<span class="pl-sc">prompt</span>[k] <span class="pl-k">=</span> <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code js-file-line">			<span class="pl-s">var</span> api <span class="pl-k">=</span> Imp.getLast(); <span class="pl-c">// always use the last instance on the stack</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code js-file-line">			<span class="pl-k">if</span>(api <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> api[k] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code js-file-line">				<span class="pl-k">return</span> api[k].<span class="pl-s3">apply</span>(api, arguments);</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code js-file-line">	<span class="pl-c">// jQuery Plugin and public access</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code js-file-line">	<span class="pl-c">// ########################################################################</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code js-file-line"><span class="pl-c">	* Enable using $(&#39;.selector&#39;).prompt({});</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code js-file-line"><span class="pl-c">	* This will grab the html within the prompt as the prompt message</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">prompt</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>){</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code js-file-line">		<span class="pl-k">if</span>(options <span class="pl-k">===</span> <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code js-file-line">			options <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code js-file-line">		<span class="pl-k">if</span>(options.withDataAndEvents <span class="pl-k">===</span> <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code js-file-line">			options.withDataAndEvents <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code js-file-line">		$.<span class="pl-s3">prompt</span>($(<span class="pl-v">this</span>).clone(options.withDataAndEvents).html(),options);</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code js-file-line"><span class="pl-c">	* Export it as Impromptu and $.prompt</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code js-file-line"><span class="pl-c">	* Can be used from here forth as new Impromptu(states, opts)</span></td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code js-file-line">	<span class="pl-s3">window</span>.Impromptu <span class="pl-k">=</span> Imp;</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code js-file-line">}));</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04570s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-996268c2962f947579cb9ec2908bd576591bc94b6a2db184a78e78815022ba2c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-87d95fe9c4332174f9c7761d3be4ee3b59996fe3e3f60ced320522493e1014a6.js"></script>
      
      

  </body>
</html>

