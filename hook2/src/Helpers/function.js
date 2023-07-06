export const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
  };
  export const isObject = (value) => {
    return typeof value === "object";
  };
  
  export const isPathActive = (currentPath, pathname) => {
    return currentPath.includes(pathname);
  };