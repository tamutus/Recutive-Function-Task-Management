import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateManyMutationInput> = z.object({
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema;
