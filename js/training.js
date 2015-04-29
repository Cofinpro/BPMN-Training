// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  viewDistance: 5,

  transition: 'concave', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/bpmn-js/bpmn-viewer.min.js'},
    { src: 'plugin/bpmn-js/bpmn.js', async: true},
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true }
  ]
});
