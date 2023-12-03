import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateManyTemplateInputSchema } from './ProjectCreateManyTemplateInputSchema';

export const ProjectCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.ProjectCreateManyTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectCreateManyTemplateInputSchema),z.lazy(() => ProjectCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectCreateManyTemplateInputEnvelopeSchema;
