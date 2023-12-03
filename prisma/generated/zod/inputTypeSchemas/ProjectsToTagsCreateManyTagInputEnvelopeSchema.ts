import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsCreateManyTagInputSchema } from './ProjectsToTagsCreateManyTagInputSchema';

export const ProjectsToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.ProjectsToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectsToTagsCreateManyTagInputSchema),z.lazy(() => ProjectsToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectsToTagsCreateManyTagInputEnvelopeSchema;
