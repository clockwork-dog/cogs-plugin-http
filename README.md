# COGS HTTP plugin

This simple plugin allows you to send GET or POST requests to a server. You can use this to trigger events on a machine on the local network or on the internet.

## How to use

1. [Add the plugin](https://docs.cogs.show/plugins/how-to-install/) to your COGS project
2. Enabled the plugin in "Show Settings" in the "Build" view
3. Add a `HTTP: GET` or `HTTP: POST` action to your behaviour

<img width="504" height="641" alt="image" src="https://github.com/user-attachments/assets/dc7a48a2-7c31-47a7-a6a2-c6c6d801735a" />

4. Type the URL you want

  <img width="500" height="96" alt="image" src="https://github.com/user-attachments/assets/bc5e2d30-5e88-4f92-81f2-da2a6e90f7a8" />

  Optional: You can use [Computed Values](https://learn.cogs.show/computed-values) to change the URL depending on a variable or some other state in COGS.

  <img width="493" height="184" alt="image" src="https://github.com/user-attachments/assets/90c45175-228f-4e7b-919c-0e4fdeb6cd12" />

## Limitations

The HTTP headers and body cannot be set using this plugin.
