import { Transform } from 'class-transformer';

export const Trim = () =>
    Transform(({ value }) => (typeof value === 'string' ? value.trim() : value));

export const CollapseSpaces = () =>
    Transform(({ value }) =>
        typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value,
    );

export const ToLower = () =>
    Transform(({ value }) => (typeof value === 'string' ? value.toLowerCase() : value));
