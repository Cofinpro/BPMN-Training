'use strict';
var RevealBPMN = (function( root, factory)  {

    var BpmnViewer = window.BpmnJS;

    var bpmn_nodes = document.querySelectorAll( 'div.bpmn' );
	for( var i = 0, len = bpmn_nodes.length; i < len; i++ ) {
		var bpmn_node = bpmn_nodes[i];
		var url = bpmn_node.getAttribute( 'bpmn-src' );

		new loadDiagram(bpmn_node, url);
	}

	function loadDiagram(bpmn_node, url) {
		var charset = bpmn_node.getAttribute( 'charset' );

		var xhr = new XMLHttpRequest();
		// see https://developer.mozilla.org/en-US/docs/Web/API/element.getAttribute#Notes
		if( charset != null && charset != '' ) {
			xhr.overrideMimeType( 'text/html; charset=' + charset );
		}	
		xhr.onreadystatechange = function() {
			
			if( xhr.readyState === 4 ) {
				// file protocol yields status code 0 (useful for local debug, mobile applications etc.)
				if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status === 0 ) {
					drawDiagram(bpmn_node, xhr.responseText);
				} 
				else {
					bpmn_node.outerHTML = '<section data-state="alert">' +
						'ERROR: The attempt to fetch ' + url + ' failed with HTTP status ' + xhr.status + '.' +
						'Check your browser\'s JavaScript console for more details.' +
						'<p>Remember that you need to serve the presentation HTML from a HTTP server.</p>' +
						'</section>';
				}
			}
		}

		xhr.open( 'GET', url, true);

		try {
			xhr.send();
		}
		catch ( e ) {
			alert( 'Failed to get the BPMN file ' + url + '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' + e );
		}
	}

	function drawDiagram(bpmn_node, bpmn_xml) {
		var scale = bpmn_node.getAttribute( 'scale' );
		
		if (scale == null) {
			scale = 'fit-viewport';
		}

		var center = bpmn_node.getAttribute( 'scale' );;
		if (scale == 'fit-viewport') {
			// centers the image
			center = 'auto';
		}

		var width = bpmn_node.getAttribute( 'bpmn-width' );
		if (width === null) {
			width = '100%';
		}
		var height = bpmn_node.getAttribute( 'bpmn-height' );
		if (height === null) {
			height = '100%';
		}

		var viewer = new BpmnViewer({container: bpmn_node, width: width, height: height});
		viewer.importXML(bpmn_xml, function(err) {
		  if (!err) {
		    console.log('Rendered diagram in:', bpmn_node);
		    viewer.get('canvas').zoom(scale, center);
		    Reveal.layout();

		    // Relayout when slide turns visible
			Reveal.addEventListener( 'slidechanged', function( event ) {
				viewer.get('canvas').zoom(scale, center);
				Reveal.layout();
			} );
		  } else {
		    console.log('something went wrong:', err);
		  }
		});
		Reveal.layout();
		
	}
})();