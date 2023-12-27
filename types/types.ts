import { SearchResult } from "./interfaces"

export type Token = string | null

export type SearchFunc = Promise<SearchResult>