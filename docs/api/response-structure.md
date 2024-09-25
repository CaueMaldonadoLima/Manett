# Response

All endpoints will return an object of type `Response`. As a mandatory pattern,
every single response must contain an attribute called status, which is an int
representing a [status code]
(https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

# Errors

The API endpoints should not throw, instead, they should catch all of the errors
and return a response with the proper status code and, additionally, a `message`
attribute explaining what went wrong.

_TODO_: Create and use custom type for responses / errors as well as defining
all possible errors as an object of that type (similar to what nestjs did).
