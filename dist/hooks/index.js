export const useClassPrefix = (prefix) => {
    const apply = (classNames) => {
        return classNames
            .split(" ")
            .map((c) => `${prefix}-${c}`)
            .join(" ");
    };
    return apply;
};
