import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token } from '../env';
import 'server-only';

export const writeClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
	token,
});
