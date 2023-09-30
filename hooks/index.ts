export const useClassPrefix = (prefix: string) => {
	const apply = (classNames: string) : string => {
		return classNames
			.split(" ")
			.map((c) => `${prefix}-${c}`)
			.join(" ");
	};

	return apply;
};
