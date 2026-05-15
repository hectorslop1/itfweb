import { createClient } from '@sanity/client';

export type SanityClientConfig = {
  projectId: string;
  dataset: string;
  apiVersion: string;
};

export function getSanityClientConfig(): SanityClientConfig {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '';
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? '';
  const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2025-05-14';

  return {
    projectId,
    dataset,
    apiVersion,
  };
}

export function hasSanityClientConfig() {
  const { projectId, dataset } = getSanityClientConfig();
  return Boolean(projectId && dataset);
}

export function getSanityClient() {
  const { projectId, dataset, apiVersion } = getSanityClientConfig();

  if (!projectId || !dataset) {
    throw new Error('Sanity client config is missing. Set PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET.');
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}
