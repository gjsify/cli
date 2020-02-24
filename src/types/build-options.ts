export interface BuildOptions {
  entry?: string[];
  output: {
    filename?: string;
    path?: string;
  };
  beautify?: boolean;
  minimize?: boolean;
}
