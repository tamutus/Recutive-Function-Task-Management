import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateManyTaggerInputSchema } from './ProjectTemplatesToTagsCreateManyTaggerInputSchema';

export const ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyTaggerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateManyTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateManyTaggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema;
