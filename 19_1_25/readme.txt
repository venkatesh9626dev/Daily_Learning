----Promise.all----

Normally, where we have to fetch more details through network by using fetch method or some network calls, we generally call the fetch method one by one which the each fetch calls depends on the previous one. So the time will take to long.

But here by using promise.all method we can make it simple 

steps:

1: First, we have to pass the arr of promises to the promises.all by using map or something.

2: It will wait for all promises to resolve.

3: Each promises is happen independently behind the scenes.

Example:

1: In this code by calling and initializing all fetch calls gives the pending promsie object to promsie.all()

2: It will get resolved once the all pending promises get resolved and it will return the data of each promsies in the array format.

3: Then, we can use the array data to render it on the ui.

4 : If any one of the pending promsise get rejected the whole promise.all() will be rejected.


Time difference 

Normal way : 2071.60595703125 ms

Using promise.all : 1384.8828125 ms
