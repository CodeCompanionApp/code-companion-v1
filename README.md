# Code Companion

Code Companion is an open source desktop application that interactively teaches you how to code. Taking advantage of it's access to your local filesystem it provides real-time, responsive, and intelligent feedback while you follow along with the it's lessons. Instead of watching videos or using 'fake' terminals and editros, Code Companion helps you learn with the real thing, acting as a sort of virtual teacher and assistant along the way.

Using the Code Companion Lesson API content creators can write lessons that help users get started with just about any kind of technology or programming language. The API allows them to write in a simple (TBD) format.

For now lessons will be simple, that is HTML (text and image) based, but future versions may support audio and video elements as well.

## Plan

- [x] Create this README file and start to spec out the project.
- [ ] Choose a Lesson idea from the list below and start thinking about the content and what interactive features would be needed/desirable.
- [ ] Start working on the Electron app using React/redux
- [ ] Choose a license
- [ ] Do more work...
- [ ] ???
- [ ] Profit!

## Lesson Ideas

- Build your first website (HTML, CSS, JavaScript preview, Servers, Going Live)
- Learning the Command Line (Bash on macOS, Linux, and Windows)
- Getting Started with JavaScript
- Node.js

## App Design / Appearance

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
		- fancier conditions like
	- Feels like this is a big one! Lots to explore here.
- Proactive Help:
	- Make suggestions when errors are seen in code (have a way to heuristically determine common mistakes or errors for example, or run code through a validator/linter?)
	- Run code against a test suite in BG as a way of helping the user complete a task
- Variable content
	- Show different content based on the state of the user's work, system, or any other variable

