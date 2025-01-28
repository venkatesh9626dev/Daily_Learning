---- Module Wrapper -----

1: So in js, the code will not run directly. Instead, It will wrap the code like this :

        (function(exports, require, module, __filename, __dirname) {
          console.log("Hello, world!");
        });
This provides data like exports, require, module, __filename, __dirname to use in the module.

2: This function is immediately invoked and so why we cant use this files variables or functions on other files.


---- Path Module -----

1: Usually we use relative path to map files.

2: But mapping formats vary on different os, So while running the server in other os, may lead to error

3: It's not a good practice to hardcode the path, instead we can use "path" modules utilities to make our life better.

4: There are methods like extracting extensions, filename and folder name etc...


---- OS Module ----

1: Os module is used to handle os related works like getting total space, remaining space etc..

---- events / eventEmitter ----

1: The events library is used to handle event listeners.

2: To create our own event listeners by using the eventEmitter class in the library.

3: Key Methods and Properties of EventEmitter

on(eventName, listener): Attaches a listener for the specified event.
emit(eventName, [...args]): Triggers the specified event and passes arguments to the listeners.
once(eventName, listener): Attaches a listener that executes only once.
removeListener(eventName, listener): Removes a specific listener for an event.
removeAllListeners(eventName): Removes all listeners for the specified event.
listenerCount(eventName): Returns the number of listeners for a specific event.

--- Diff b/w Common Js Require() and ES Modules import ----

1: require() will run synchronously and make the rest of the code wait to get the file.

2: Here, import statements will get the modules asynchronously which happens on initialization stage of JS runtime.

3: So the modules will be available on execution time which also not block anything.