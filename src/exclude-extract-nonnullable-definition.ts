export { };

type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FucntionType = Exclude<SomeTypes, string | number>;
type MyFucntionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;


type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
