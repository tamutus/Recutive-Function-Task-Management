import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateManyTagInputSchema } from './ProjectTemplatesToTagsCreateManyTagInputSchema';

export const ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateManyTagInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema;
