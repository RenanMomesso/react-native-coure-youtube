
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.gql",
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
