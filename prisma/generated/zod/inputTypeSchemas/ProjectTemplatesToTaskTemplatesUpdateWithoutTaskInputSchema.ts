import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { ProjectTemplateUpdateOneRequiredWithoutTasksNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutTasksNestedInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema;
