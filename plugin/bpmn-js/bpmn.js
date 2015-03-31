(function( root, factory)  {
	if( typeof exports === 'object' ) {
		module.exports = factory( require( 'bpmn-js' ) );
	}

	var bpmn_nodes = document.querySelectorAll( 'div.bpmn' );

	for( var i = 0, len = bpmn_nodes.length; i < len; i++ ) {
		bpmn_node = bpmn_nodes[i];
        var BpmnViewer = window.BpmnJS
		var viewer = new BpmnViewer({ container: bpmn_node });

		
		url = bpmn_node.getAttribute( 'src' );

		charset = bpmn_node.getAttribute( 'charset' );

		var xhr = new XMLHttpRequest();
		// see https://developer.mozilla.org/en-US/docs/Web/API/element.getAttribute#Notes
		if( charset != null && charset != '' ) {
			xhr.overrideMimeType( 'text/html; charset=' + charset );
		}

		xhr.onreadystatechange = function() {
			if( xhr.readyState === 4 ) {
				// file protocol yields status code 0 (useful for local debug, mobile applications etc.)
				if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status === 0 ) {
				
				viewer.importXML(xhr.responseText, function(err) {
				  if (!err) {
				    viewer.get('canvas').zoom('fit-viewport');
				    Reveal.layout();
				  } else {
				    console.log('something went wrong:', err);
				  }

				});
			} else {
					section.outerHTML = '<section data-state="alert">' +
						'ERROR: The attempt to fetch ' + url + ' failed with HTTP status ' + xhr.status + '.' +
						'Check your browser\'s JavaScript console for more details.' +
						'<p>Remember that you need to serve the presentation HTML from a HTTP server.</p>' +
						'</section>';

				}
			}
		};

		xhr.open( 'GET', url, true);

		try {
			xhr.send();
		}
		catch ( e ) {
			alert( 'Failed to get the BPMN file ' + url + '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' + e );
		}
	}
})();