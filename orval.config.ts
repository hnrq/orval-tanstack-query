import { defineConfig } from "orval";

export default defineConfig({
  pokeAPI: {
    output: {
      mode: "split",
      target: "src/api/index.ts",
      schemas: "src/api/model",
      client: "react-query",
      mock: true,
      prettier: true,
      baseUrl: {
        getBaseUrlFromSpecification: true,
      },
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "offset",
          options: {
            staleTime: 10000,
          },
        },
      },
    },
    input: {
      target: "./openapi.yml",
    },
  },
});
