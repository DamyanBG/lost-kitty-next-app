import lodashSnakecase from "lodash.snakecase";

export const toSnakeCase = (value: string): string => lodashSnakecase(value);

export const keysToSnakeCase = (obj: object): object => (
    Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [lodashSnakecase(key), value])
    )
);
    
