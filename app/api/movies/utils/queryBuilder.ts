import type { ApiClientQuery } from '../interfaces';

type QueryTransformer = (query: ApiClientQuery) => Record<string, string>;

const createApiMapper = (
    mapping: Record<string, string>,
    customProcessors: Partial<
        Record<keyof ApiClientQuery, (value: any) => string>
    > = {}
): QueryTransformer => {
    return (query: ApiClientQuery) => {
        const result: Record<string, string> = {};

        for (const [localKey, apiKey] of Object.entries(mapping)) {
            const value = query[localKey as keyof ApiClientQuery];
            if (value !== undefined && value !== null) {
                // Используем кастомный процессор если есть, иначе просто преобразуем в строку
                const processor =
                    customProcessors[localKey as keyof ApiClientQuery];
                result[apiKey] = processor
                    ? processor(value)
                    : value.toString();
            }
        }

        return result;
    };
};

// Функция для создания URLSearchParams
export function buildSearchParams(
    transformer: QueryTransformer,
    query: ApiClientQuery
): URLSearchParams {
    const apiParams = transformer(query);
    return new URLSearchParams(apiParams);
}

// Создаем трансформер для OMDb API
export const omdbTransformer = createApiMapper(
    {
        title: 's',
        genre: 's',
        year: 'y',
        page: 'page',
        type: 'type',
    },
    {
        title: (value: string) => value.replace(/\s+/g, '+'),
        genre: (value: string) => value.toLowerCase(),
    }
);
