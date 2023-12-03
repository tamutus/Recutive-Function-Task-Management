import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEditedTasksInputSchema } from './PersonCreateNestedOneWithoutEditedTasksInputSchema';

export const PersonsToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateWithoutTaskInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEditedTasksInputSchema)
}).strict();

export default PersonsToTaskTemplatesCreateWithoutTaskInputSchema;
