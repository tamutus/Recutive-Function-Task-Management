import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsCreateManyProjectInputSchema } from './ProjectsToTagsCreateManyProjectInputSchema';

export const ProjectsToTagsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectsToTagsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectsToTagsCreateManyProjectInputSchema),z.lazy(() => ProjectsToTagsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectsToTagsCreateManyProjectInputEnvelopeSchema;
