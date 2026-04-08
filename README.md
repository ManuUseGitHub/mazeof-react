useClassPrefix
===
React hooks and other usefull stuff. More info later

# Hooks

- **useClassPrefix**
  Function that will produce a string where every class is prefixed

  usage

  ```jsx
  const pre = useClassPrefix ("my-prefix");
  ...
  <div className={pre("clsA clsB content")}/>
  ```

  result

  ```jsx
  <div class="my-prefix-clasA my-prefix-clasB my-prefix-content"/>
  ```
