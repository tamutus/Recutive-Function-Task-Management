import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesCreateManyProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateManyProjectInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema;
