export interface IScripts<T> {
  [key: string]: T;
}

export interface IScript {
    name: string;
    description: string;
    script: string;
    args: string[];
}

export interface IScriptsConfig {
    scripts: IScripts<IScript>;
}
