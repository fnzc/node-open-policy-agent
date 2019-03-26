export function build(callback: (res: string) => void, args: {data?: string, debug?: string, help?: string, ignore?: string, output?: string, query?: string}): void
export function check(callback: (res: string) => void, args: {format?: string, help?: string, ignore?: string, 'max-errors': string, query?: string}): void
export function deps(callback: (res: string) => void, args: {data?: string, format?: string, help?: string, ignore?: string, query?: string}): void
export function evalQuery(callback: (res: string) => void, args: {coverage?: string, data?: string, explain?: string, fail?: string, format?: string, help?: string, ignore?: string, import?: string, input?: string, metrics?: string, package?: string, partial?: string, 'pretty-limit'?: string, profile?: string, 'profile-limit'?: string, 'profile-sort'?: string, stdin?: string, 'stdin-input'?: string, unknown?: string, query?: string}): void
export function evalQueryBoolean(callback: (res: string) => void, args: {coverage?: string, data?: string, explain?: string, fail?: string, format?: string, help?: string, ignore?: string, import?: string, input?: string, metrics?: string, package?: string, partial?: string, 'pretty-limit'?: string, profile?: string, 'profile-limit'?: string, 'profile-sort'?: string, stdin?: string, 'stdin-input'?: string, unknown?: string, query?: string}): void
export function fmt(callback: (res: string) => void, args: {diff?: string, help?: string, list?: string, write?: string, query?: string}): void
export function help(callback: (res: string) => void): void
export function parse(callback: (res: string) => void, args: {format?: string, help?: string, query?: string}): void
export function testRego(callback: (res: string) => void, args: {coverage?: string, format?: string, help?: string, ignore?: string, 'max-errors'?: string, 'show-failure'?: string, threshold?: string, timeout?: string, verbose?: string, query?: string}): void
export function version(callback: (res: string) => void): void