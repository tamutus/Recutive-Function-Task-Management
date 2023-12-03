import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUncheckedCreateInput> = z.object({
  projectId: z.number().int(),
  taskId: z.number().int(),
  count: z.number().int().optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema;
