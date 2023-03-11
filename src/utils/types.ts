export type NullablePartial<T> = { [P in keyof T]?: T[P] | null }

export type Loadable<T> = T & { isLoading: boolean }
