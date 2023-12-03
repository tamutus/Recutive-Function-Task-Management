import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesCreateManyTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateManyTaskInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
