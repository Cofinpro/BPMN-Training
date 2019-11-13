'use strict';
(function () {
    const BpmnViewer = window.BpmnJS;

    let bpmn_nodes = document.querySelectorAll('div.bpmn');
    for (let i = 0; i < bpmn_nodes.length; i++) {
        const bpmn_node = bpmn_nodes[i];
        const url = bpmn_node.getAttribute('bpmn-src');

        loadDiagram(bpmn_node, url);
    }

    // Relayout when slide turns visible - does not help
    Reveal.addEventListener('slidechanged', function (event) {
        event.currentSlide.querySelectorAll('div.bpmn').forEach((bpmn) => {
            // sometimes diagrams seem to get lost - reattaching them fixes that
            bpmn.viewer.attachTo(bpmn);
            layout(bpmn, bpmn.viewer)
        })
    });

    function loadDiagram(bpmn_node, url) {
        const charset = bpmn_node.getAttribute('charset');

        const xhr = new XMLHttpRequest();
        // see https://developer.mozilla.org/en-US/docs/Web/API/element.getAttribute#Notes
        if (charset != null && charset !== '') {
            xhr.overrideMimeType('text/html; charset=' + charset);
        }
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                // file protocol yields status code 0 (useful for local debug, mobile applications etc.)
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
                    drawDiagram(bpmn_node, xhr.responseText, url);
                } else {
                    bpmn_node.outerHTML = '<section data-state="alert">' +
                        'ERROR: The attempt to fetch ' + url + ' failed with HTTP status ' + xhr.status + '.' +
                        'Check your browser\'s JavaScript console for more details.' +
                        '<p>Remember that you need to serve the presentation HTML from a HTTP server.</p>' +
                        '</section>';
                }
            }
        };

        xhr.open('GET', url, true);

        try {
            xhr.send();
        } catch (e) {
            console.error('Failed to get the BPMN file ' + url + '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' + e);
        }
    }

    function drawDiagram(bpmn_node, bpmn_xml, url) {
        let width = bpmn_node.getAttribute('bpmn-width');
        if (width === null) {
            width = '100%';
        }

        let height = bpmn_node.getAttribute('bpmn-height');
        if (height === null) {
            height = '100%';
        }

        const viewer = new BpmnViewer({container: bpmn_node, width: width, height: height});
        bpmn_node.viewer = viewer;
        viewer.importXML(bpmn_xml, function (err, parseWarnings) {
            parseWarnings.forEach(warning => console.log(`Diagram ${url} has a problem: ${warning.message}` ));
            if (!err) {
                bpmn_node.bpmnviewer = viewer;
                layout(bpmn_node, viewer);
            } else {
                console.log('something went wrong:', err);
            }
        });
    }

    function layout(bpmn_node, viewer) {
        let scale = bpmn_node.getAttribute('scale');
        if (scale == null) {
            scale = 'fit-viewport';
        }

        let center = bpmn_node.getAttribute('center');
        if (center == null) {
            // centers the image
            center = 'auto';
        }

        // first center the diagram
        viewer.get('canvas').zoom('fit-viewport', 'auto');
        // then zoom
        viewer.get('canvas').zoom(scale, center);
    }

})
();
