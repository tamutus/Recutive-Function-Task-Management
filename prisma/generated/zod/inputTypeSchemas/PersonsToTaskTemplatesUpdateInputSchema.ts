import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema } from './PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema';
import { TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const PersonsToTaskTemplatesUpdateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema).optional(),
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default PersonsToTaskTemplatesUpdateInputSchema;
