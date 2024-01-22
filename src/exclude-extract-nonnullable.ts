export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FucntionType = Exclude<SomeTypes, string | number >;
type NunFucntionType = Exclude<SomeTypes, DebugType>;
type TypeExculdingFunction = Exclude<SomeTypes, Function>;
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtractingFuction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
