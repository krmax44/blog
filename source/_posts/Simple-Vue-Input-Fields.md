---
title: 'Simple, beautiful input fields with Vue.js'
date: 2018-07-27 19:35:14
tags: vue.js, frontend, ui, animation, css
image: beautiful-inputs.svg
---
In this post, I'll show you how to create this simple, yet beautiful input field with Vue.js.
<!-- more -->

### Demo

<a href="https://codepen.io/krmax44/pen/djVwag" class="btn btn-next">Demo on CodePen</a>

### TextInput.vue
Let's start with a basic setup:
```html
<template>
    <div>
        <input type="text">
    </div>
</template>
```
We've got our input field contained in a `div`, pretty easy so far. Let's allow to pass some props to make the input more usable, and also add an event we can listen for:
```html
<template>
    <div class="input-field">
        <input
            type="text"
            v-model="value"
            :placeholder="placeholder"
            @keyup="inputEvent">
    </div>
</template>

<script>
export default = {
    props: ['placeholder', 'value'],
    methods: {
        inputEvent(e) {
            this.$emit('inputEvent', e); 
        }
    }
};
</script>
```
Now, we can already use this component!
### main.vue
```html
<template>
    <div>
        <TextInput value="" placeholder="Keepin' the place" @inputEvent="inputEvent"></TextInput>
    </div>
</template>

<script>
import TextInput from './TextInput.vue';

export default {
    components: { TextInput },
    methods: {
        inputEvent(e) {
            console.log(e);
        }
    }
}
</script>
```
We can already see our input field and get the value in the console when we type something in, but it doesn't look that great yet, so let's add some styling.

### TextInput.vue
```html
<style lang="scss" scoped>
$primary: #FFF;
$accent: #d34747;

.input-field {
    input {
        /* just some resets and basic styles for now */
        box-sizing: border-box;
        width: 100%;
        border:  0;
        background-color:  transparent;
        color: $primary;
        font-family: 'Segoe UI', 'San Francisco', 'Roboto', sans-serif;
    }
}

::placeholder {
    color: rgba(255,255,255,.5);
}
</style>
```
Finally, let's add the bottom border! For that, we need pseudo elements (`::before` and `::after`), but these are not available on input fields, so we'll need to put them on the `div.input-field`. This means that we'll not be able to make use of `:focus` in CSS, as the `input` will be a child element, but we can fix this using Vue. For extra giggles, let's only show the accent border when the input field is focused and it has something in it.

```html
<template>
    <div class="input-field" :class="{ focus }"> <!-- add class when focus is true -->
        <input
            type="text"
            v-model="value"
            :placeholder="placeholder"
            @focus="inputEvent" 
            @focusout="inputEvent"
            @keyup="inputEvent">
        <!-- notice the new event listeners -->
    </div>
</template>

<script>
export default {
    props: ['placeholder', 'value'],
    data() {
        return {
            focus: false
        }
    },
    methods: {
        inputEvent(e) {
            console.log(e);
            this.$emit('inputEvent', e);
            if ((e.type == 'focus' || e.type == 'keyup') && this.value.length > 0) {
                // activate the effect
                this.focus = true;
            }
            else {
                this.focus = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
```
```scss
$primary: #FFF;
$accent: #d34747;

.input-field {
    position: relative;
    padding: 5px 0;

    &::before, &::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        border-bottom: 2px $primary solid;
        transition: .3s;
    }

    &::after {
        left: 50%;
        right: 50%;
        border-bottom: 2px $accent solid;
    }

    &::before, &.focus::after {
        left: 0;
        right: 0;
    }

    input[type='text'] {
        border: 0;
        outline: 0;
        background-color: transparent;
        font-family: 'Segoe UI', 'San Francisco', 'Roboto', sans-serif;
        font-size: 1em;
        width: 100%;
        color: $primary;
    }
}

::placeholder {
    color: rgba(255,255,255,.5);
}
```
```html
</style>
```

There you have it! You could have also got away with only one pseudo-element by adding the default border to the main `div`, but this way I don't have to fuzz with bottom spacing or anything like that, just a bit cleaner.