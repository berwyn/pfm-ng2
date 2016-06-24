interface URI {
	protocol: string;
	host: string;
	port?: number;
	path?: string;
	query?: string;
	hash?: string;
}

export function parseURI(uri: string): URI {
	let parser = document.createElement('a');
	parser.href = uri;

	let result: URI = {
		protocol: parser.protocol,
		host: parser.hostname,
	};

	if(parser.port) result.port = parseInt(parser.port, 10);
	if(parser.pathname) result.path = parser.pathname;
	if(parser.search) result.query = parser.search;
	if(parser.hash) result.hash = parser.hash;

	return result;
}
