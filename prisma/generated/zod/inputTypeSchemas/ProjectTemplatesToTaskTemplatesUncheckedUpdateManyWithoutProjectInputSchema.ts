import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectInputSchema;
