import { createClient } from "next-sanity";

const client = createClient({
  projectId: "sq60opre",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>;
}) {
  return await client.fetch(query, params);
}
