# Contributing

Thank you for being interested in contributing to the content of [joshbruce.com](https://joshbruce.com).

You don't need any specific knowledge or tools to get started.

## Content changes

For most content changes you don't need any special tools. You can open the `content` folder. The contents and structure will match the URL of the page you want to edit.

For example, if you want to edit the content found at:

https://joshbruce.com/software-development

You would go to the following file:

```bash
.
└── content/
	└── software-development/
		└── content.md
```

1. After clicking on the file, you should see the current contents on the screen. 
2. Click on the pencil to [edit the file](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files). 
3. Edit until you're satisfied.
4. At the bottom of the page, fill out the form by:
	- adding a title briefly describing the change,
	- optionally writing a longer description of the change,
	- select "create a new branch", and
	- click commit changes.
	
This will create a new pull request and notify me to review the proposed change. You will be credited as a contributor to this project, however, Josh Bruce retains the copyright of the content per the terms of service.

If you don't feel comfortable updating the content yourself, you can create an [issue](https://github.com/joshbruce/content-joshbruce.com/issues). Or, if the comment isn't specific to content (your just want to chat), use the [discussions tab](https://github.com/joshbruce/content-joshbruce.com/discussions).

Note: Any folder starting with an underscore (_) represents draft content that may never actually see the light of day. You may notice that some of them start off sounding like rants and a bit heavy on the "get off my lawn" and that's somewhat how I operate—my frustration gets channeled into creativity and challenging myself and the idea in my head. And, hopefully, it moves to something of value.

### For the more daring

Either:

1. [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo), or
2. [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repository.

If you fork the repository you can edit the content through the GitHub UI using the aforementioned process or you can clone your repository. Cloning will give you a copy of the repository on your computer (enter at your own risk). 

If you decided to clone this repository the following still applies.

Once the repository is cloned, [create a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch), make the changes, and submit a [pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

That's pretty much it.

(If you think something is missing, please use these instructions to let me know.)

## Style and interaction changes

From a development perspective, one of the things that may be considered odd for this project is that the style (CSS) and interaction (JavaScript) components are stored with the content, not the [application](https://github.com/8fold/site-joshbruce.com).

These elements are compiled using NPM packages and can be found in the [assets](https://github.com/joshbruce/content-joshbruce.com/tree/main/assets); so, there is "code" here.