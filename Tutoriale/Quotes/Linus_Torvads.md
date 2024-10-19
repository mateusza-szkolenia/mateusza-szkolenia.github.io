# Linus Torvalds

## `Goto`

<https://koblents.com/Ches/Links/Month-Mar-2013/20-Using-Goto-in-Linux-Kernel-Code/>

```
I think goto's are fine, and they are often more readable than large
amounts of indentation. That's _especially_ true if the code flow isn't
actually naturally indented (in this case it is, so I don't think using
goto is in any way _clearer_ than not, but in general goto's can be quite
good for readability).

Of course, in stupid languages like Pascal, where labels cannot be 
descriptive, goto's can be bad. But that's not the fault of the goto, 
that's the braindamage of the language designer.

		Linus
```
