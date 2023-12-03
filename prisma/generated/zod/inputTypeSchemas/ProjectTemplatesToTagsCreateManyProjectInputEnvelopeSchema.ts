import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateManyProjectInputSchema } from './ProjectTemplatesToTagsCreateManyProjectInputSchema';

export const ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateManyProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema;
