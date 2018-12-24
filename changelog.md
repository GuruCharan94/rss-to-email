# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Nothing yet

### Fixed
- Nothing yet

### Removed
- Nothing yet

## 0.8.0 - 2018-12-23

### Added
- Optional `limit` paramter to truncate number of items in each feed.

## 0.7.0 - 2018-12-23

### Added
- Optional `parserOptions` configuration field for each feed to allow custom fields in templates.
- Docs folder with frontend demo using Jekyll.

### Fixed
- Allowing HTML in content for each item in rss template.

### Removed
- `/webtask` directory from NPM package.

## 0.6.0 - 2018-05-26

### Added
- Custom templates using Handlebars/MJML.

### Changed
- Node versions supported to 8, 9, and 10. No longer supporting Node <7.

### Removed
- `signature` and `greeting` fields. Should now consolidate and use `intro` and `outro` only.

## 0.5.0 - 2018-04-25

### Added
- [Webtask](https://webtask.io/) to allow deployment as a serverless endpoint.
- `publishedSince` option on each RSS feed.

### Changed
- Updated documentation.
- Improved error message when no config passed in.

## 0.4.0 - 2018-04-16

### Changed
- Improvements to templates.
- Upgraded to mjml v4.
- Refactored objects/classes with [Stampit](https://github.com/stampit-org/stampit).
- Removing `fs` and `path` modules from core library.
- Reimplemented and documented CLI.

### Removed
- Webpack/build for frontend as [mjml v4 no longer supports it](https://github.com/mjmlio/mjml/issues/438#issuecomment-302712905).

## 0.3.0 - 2018-04-13

### Added
- Infrastructure to build as browser-ready JS project.
- Example `index.html` file to demonstrate browser use.
- Docs about importing as node module, contributing, releasing new versions, etc.
- More fun badges!
- Improvements to eslint (docblocks and blank line before `return`).

## 0.2.0 - 2018-04-09

### Added
- Added unit and integratin tests with Jest
- Broke main functions out into classes/objects
- Added eslint
- Allowing multiple RSS feeds (with optional headers/descriptions between each)
- Add CI via Travis

## 0.0.1 - 2018-03-29

### Added
- Working prototype using configuration file
- Readme with instructions, license, etc.
