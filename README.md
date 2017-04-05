# Code Companion

Code Companion is an open source desktop application that interactively teaches you how to code. Taking advantage of its access to your local filesystem it provides real-time, responsive, and intelligent feedback while you follow along with the lessons. Instead of merely watching videos or using 'fake' terminals and editors, Code Companion helps you learn by doing, acting as a sort of virtual teacher and assistant along the way.

Using the Code Companion Lesson API, content creators can write lessons that help users get started with just about any kind of technology or programming language. The API allows them to write in a simple (TBD) format.

## Development

To run the Electron app locally, first clone this repository, then:

```bash
$ cd code-companion
$ yarn
$ yarn start
```

Feel free to replace `yarn` above with `npm` if preferred.

## Plan

- [x] Create this README file and start to spec out the project.
- [ ] Choose a Lesson idea from the list below and start thinking about the content and what interactive features would be needed/desirable.
- [ ] Start working on the Electron app using React/redux
- [ ] Choose a license
- [ ] Determine the format of a module
- [ ] Create a website, including a private API for the online store
- [ ] Analyze security concerns
- [ ] Do more work...
- [ ] ???
- [ ] Profit!

## Name
- Code Companion
- ~~Virtual Tutor~~
- ~~Coding Buddy~~
- ~~Hamish's House of Learning and Wisdom~~


## Lesson Ideas

*(this list needs priority ordering!)*

- Build your first website (HTML, CSS, JavaScript preview, Hosting basics, Going Live)
- Learning the Command Line (Bash on macOS, Linux, and Windows)
- git basics
	- GitHub basics
- JavaScript basics
	- some lessons may require an AST parser
- node.js + npm basics
- server basics
	- express
	- REST
- domain names / DNS
- SSL/TLS certificates
	- letsencrypt
- python basics
- chrome plugins?
- react/redux
- elm basics
- Haskell basics
- clojure basics
- ruby basics
- ssh keys
- cryptography
- vim
- markdown
- LaTeX basics
- electron apps
- SQL
- mongoDB
- Test-Driven Development
- functional programming
- C++ basics


## App Design / Appearance

<img src="/_mockups/app.png" width="586" height="447">

- Looks like a regular desktop app for the system it's running on.
- Home / main view; list of available lessons (large thumbnail style?)
- Lesson view
	- Has sidebar for table of contents
	- Other side has lesson content
	- (?) Lesson content divided into steps (presentation style with arrows?)
	- Buttons for moving between steps
	- Real-time/Interactive data and logic (more on this later)
- 'Assistant' window that shows when main window isn't focused and you're in an active lesson.
	- Shows current step and abbreviated instructions
	- Would also show real-time/interactive data and logic
- Other views?
	- Account (will need for purchaes)
	- Settings

## Thoughts on Lesson Format

- Lessons could be written as simple React components. Would make it easy to write in the interactivity as React in a declarative way. Could use nested structures. Consider how the most recent version of [React Router (v4) uses components for routing logic](https://reacttraining.com/react-router/).
- Have lessons be divided into pages like a presentation. Encourage simple single pages to teach a principle or concept. Similar to how online coding sites do it now.
- Have a loop:
	- **present content -- wait for event**
	- use promise chains
- Have a lesson builder for content creators
	- presentation sections can be in plain text, markdown, html (restricted subset), or React components
	- presentation "slides" can include multimedia content
	- lesson modules can also include file templates copied into the working directory
- if the user spends a long time on an assigment, suggestions or tips can be given


## Interactivity

This is the core of what makes Code Companion unique!  🔑

Interactivity could take several forms;

- Constraints;
	- Can't continue the lesson until condition(s) are met:
		- file exists (or structure) -- could use fuzzy matching too?
		- some specific change is made
		- a library or package is installed
		- an app is started
		- user starts a server
		- opens an ssh connection or runs another command (?? can we know that)
		- Feels like this is a big one! Lots to explore here! 🔥
- Proactive Help:
	- Make suggestions when errors are seen in code (have a way to heuristically determine common mistakes or errors for example, or run code through a validator/linter?)
	- Run code against a test suite in BG as a way of helping the user complete a task
- Variable content
	- Show different content based on the state of the user's work, system, or any other variable


## Mentor Matching
- video chat built into the app
- live lessons (with the same condition checking)
- users build up reputation in specific topics
- offer tutoring for free, or charge a fee
- an algorithm finds ideal candidates for tutoring specific students

## Terminology
- a **lesson** is a guided set of content and instructions, along with the interactive components, from start to finish
- a **module** is folder (zip file? format TBD) of all the text files, media content, and logic making up one lesson
	- should it be "package" or "module"?
	- it is downloaded from the online store into the user's desktop app
	- it can be downloaded from elsewhere and loaded manually
	- content creators build and test their lessons locally, then push it up
- a **slide** is a segment of content that is presented between user events
	- should it be "slide" or "segment"?
	- it can be text, animated text, images, or video segments
- an **event** is when the lesson pauses and the user completes a task
	- it could be as simple as clickin the "next" button, or writing a portion of code


## Under the Hood
- package/module management
	- the online store should tell the user information like, "This module takes 400MB."
	- load custom modules (from a friend/internet, or for testing/development)
	- modules for the online store are vetted for security, etc
- web site
	- module store
	- user account management
	- sync with local app
	- STUN server for video chat
- local storage (hard drive)
	- generated private keys
	- offline mode


## Future Expansion
- open-source codebase
- community-generated content
- free or premium lessons
- free or paid mentoring


