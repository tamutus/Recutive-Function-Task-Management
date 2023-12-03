import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { TaskTemplateUpdateOneRequiredWithoutProjectsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInput> = z.object({
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema;
