Using compression to send files fastly through internet.

---- Zlib library ----

1:  Zlib library to compress and decompress the files.

2: Zlib.createGzip() will create a compress file .

3: We can create a pipeline to write a readable chunk of streams into a compress file.

4: And then we send the file to the client.

---- Semantic versioning -----

Semantic Versioning is a powerful tool for managing software releases. By providing a clear and consistent framework, SemVer helps developers communicate changes effectively, manage dependencies efficiently, and maintain a stable and predictable development lifecycle. Whether you’re a solo developer or part of a large team, adopting Semantic Versioning can significantly improve your project’s clarity and reliability

Three major things:


Patch: A patch version (e.g., 1.0.1 -> 1.0.2) includes minor bug fixes that do not affect the software’s functionality or API. For instance, if a small bug in the user interface is fixed without altering any external behavior, the patch number is incremented.
Feature: A minor version (e.g., 1.1.0 -> 1.2.0) includes new features or improvements that are backwards-compatible. Adding a new method to an API, enhancing performance, or introducing optional configurations without breaking existing functionality would warrant a minor version bump.
Major Change: A major version (e.g., 1.0.0 -> 2.0.0) includes changes that break backwards compatibility. This could be removing a deprecated feature, restructuring the codebase, or making significant changes to the API that require users to modify their code to upgrade.

Example:

Initial Release: 1.0.0 : The first stable release of a software application;
Minor Update: 1.1.0 : Added a new feature that is backwards-compatible;
Patch Update: 1.1.1 : Fixed a minor bug that did not affect the overall functionality;
Major Update: 2.0.0 : Introduced breaking changes that require users to update their implementations;


---- Library V/S framework

1: Library is something which will some code and we can use those code into our application without writing the code from the scratch."Dont reinvent the wheel".

2: We can use the library functions anywhere we want.

3: There is no restrictions to use and there are format to follow.

4: But in framework, we should follow the format they asked to do.

5: It has vast of things that we can use that to build full-fledged application.

----- Query params VS route params VS Route Body ----

1: Usually, Query params is used to filter or search some data specifically and it is optional. we can extract query params using req.query().

2: We should use main details on Route Params to make our application to have more seo and caching practices. we can get this by req.params().

3: We should not provide main details on query strings because it will cause caching abilities.

4: Compared to both methods, Route Body is more secure to share data because it is not visible. We can access it by using req.body()