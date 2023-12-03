import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEditedTasksInputSchema } from './PersonCreateNestedOneWithoutEditedTasksInputSchema';
import { TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema } from './TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema';

export const PersonsToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEditedTasksInputSchema),
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default PersonsToTaskTemplatesCreateInputSchema;
