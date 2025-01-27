import type {UnionToIntersection} from 'type-fest'

type UnionKeys<T> = T extends T ? keyof T : never
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never

// credits goes to https://stackoverflow.com/questions/65805600/struggling-with-building-a-type-in-ts#answer-65805753
export type StrictUnion<T> = StrictUnionHelper<T, T>

type Indexify<T> = T & Record<string, undefined>
type AllUnionKeys<T> = keyof UnionToIntersection<{[K in keyof T]: undefined}>
export type NonDiscriminatedUnion<T> = {
  [K in AllUnionKeys<T> & string]: Indexify<T>[K]
}
