# TSC Default Compiler Options

### Compiler configurations which have a default value

config                          | default value \(acording to https://www.typescriptlang.org/tsconfig)
--------------------------------|---------------------------------------------------------------
files                           | false
extends                         | false
include                         | [] if files is specified; **/* otherwise.
exclude                         | node_modules bower_components jspm_packages outDir
references                      | false
module                          | CommonJS if target is ES3 or ES5; ES6/ES2015 otherwise.
moduleResolution                | Classic if module is AMD, UMD, System, or ES6/ES20… if module is node16 or nodenext; Node otherwise.
resolvePackageJsonExports       | true when moduleResolution is node16, nodenext, or bundler; otherwise false
resolvePackageJsonImports       | true when moduleResolution is node16, nodenext, or bundler; otherwise false
rootDir                         | Computed from the list of input files.
rootDirs                        | Computed from the list of input files.
declaration                     | true if composite; false otherwise.
importsNotUsedAsValues          | remove
newLine                         | Platform specific.
preserveConstEnums              | true if isolatedModules; false otherwise.
allowSyntheticDefaultImports    | true if esModuleInterop is enabled, module is syst… or moduleResolution is bundler; false otherwise.
jsxFactory                      | React.createElement
jsxFragmentFactory              | React.Fragment
jsxImportSource                 | react
moduleDetection                 | "auto": Treat files with imports, exports, import.… or esm format (with module: node16+) as modules.
reactNamespace                  | React
target                          | ES3
useDefineForClassFields         | true if target is ES2022 or higher, including ESNext; false otherwise.
generateCpuProfile              | profile.cpuprofile
incremental                     | true if composite; false otherwise.
tsBuildInfoFile                 | .tsbuildinfo
pretty                          | true

<br /><br />
### Compiler configurations which DON'T have a default value

config                             | config                                    | config
-----------------------------------|-------------------------------------------|--------------------------
allowUnreachableCode               | allowUnusedLabels                         | alwaysStrict
exactOptionalPropertyTypes         | noFallthroughCasesInSwitch                | noImplicitAny
noImplicitOverride                 | noImplicitReturns                         | noImplicitThis
noUnusedLocals                     | noUncheckedIndexedAccess                  | noPropertyAccessFromIndexSignature
noUnusedParameters                 | strict                                    | strictBindCallApply
strictFunctionTypes                | strictNullChecks                          | strictPropertyInitialization
useUnknownInCatchVariables         | allowArbitraryExtensions                  | allowImportingTsExtensions
allowUmdGlobalAccess               | baseUrl                                   | customConditions
moduleSuffixes                     | noResolve                                 | paths
resolveJsonModule                  | typeRoots                                 | types
declarationDir                     | declarationMap                            | downlevelIteration
emitBOM                            | emitDeclarationOnly                       | importHelpers
inlineSourceMap                    | inlineSources                             | mapRoot
noEmit                             | noEmitHelpers                             | noEmitOnError
outDir                             | outFile                                   | preserveValueImports
removeComments                     | sourceMap                                 | sourceRoot
stripInternal                      | allowJs                                   | checkJs
maxNodeModuleJsDepth               | disableSizeLimit                          | plugins
esModuleInterop                    | forceConsistentCasingInFileNames          | isolatedModules
preserveSymlinks                   | verbatimModuleSyntax                      | charset
keyofStringsOnly                   | noImplicitUseStrict                       | noStrictGenericChecks
out                                | suppressExcessPropertyErrors              | suppressImplicitAnyIndexErrors
emitDecoratorMetadata              | experimentalDecorators                    | jsx
lib                                | noLib                                     | diagnostics
explainFiles                       | extendedDiagnostics                       | listEmittedFiles
listFiles                          | traceResolution                           | disableReferencedProjectLoad
composite                          | disableSolutionSearching                  | disableSourceOfProjectReferenceRedirect
noErrorTruncation                  | preserveWatchOutput                       | skipDefaultLibCheck
skipLibCheck                       | watchFile                                 | assumeChangesOnlyAffectDirectDependencies
watchDirectory                     | fallbackPolling                           | synchronousWatchDirectory
excludeDirectories                 | excludeFiles                              | enable
include                            | exclude                                   | disableFilenameBasedTypeAcquisition
