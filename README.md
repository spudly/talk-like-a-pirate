# talk-like-a-pirate

Translates text into pirate-speak.

# Installation

```
npm install talk-like-a-pirate
```

# Usage (node)

Yonder module exports a function, so all ye have to do be require it in and
execute it. Pass it a string and it will translate it into pirate-lingo for ye.

```javascript
var talkLikeAPirate = require('talk-like-a-pirate');
console.log(talkLikeAPirate('Hello!'));
```

# Usage (web browser)

All ye have to do here be load ye JavaScript file (use yonder
talk-like-a-pirate.js file for web browsers). It puts `talkLikeAPirate`
on thar window object, so ye just have to call ye function.

```html
<script src='talk-like-a-pirate.js'></script>
<script>
  alert(talkLikeAPirate('Hello!'));
</script>
```

... or use requirejs.

```js
require.config({
  paths: {
    'talk-like-a-pirate': '/path/to/talk-like-a-pirate'
  }
});
require(['talk-like-a-pirate'], function(talkLikeAPirate) {
  alert(talkLikeAPirate('Hello!'));
});
```

... or better still, use ye node usage described above and
[browserify](http://browserify.org/) it.
