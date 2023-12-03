import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema } from './PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema';

export const PersonsToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema).optional()
}).strict();

export default PersonsToTaskTemplatesUpdateWithoutTaskInputSchema;
