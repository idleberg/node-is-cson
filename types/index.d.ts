declare namespace IsCson {
	function isCson(intput: string, options: Options): boolean;

	type Options = {
		allowJSON?: boolean;
	}
}

export = IsCson;
export as namespace IsCson;
