import { defineConfig } from 'sanity';
import { schemaTypes } from './sanity/schemaTypes';

const projectId = 'change-me';
const dataset = 'production';
const apiVersion = '2025-05-14';

export default defineConfig({
  name: 'itfweb-studio',
  title: 'Ives Torres Foundation Studio',
  projectId,
  dataset,
  apiVersion,
  schema: {
    types: schemaTypes,
  },
});
