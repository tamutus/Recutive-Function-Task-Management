import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema } from './TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema';

export const PersonsToTaskTemplatesCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateWithoutPersonInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default PersonsToTaskTemplatesCreateWithoutPersonInputSchema;
