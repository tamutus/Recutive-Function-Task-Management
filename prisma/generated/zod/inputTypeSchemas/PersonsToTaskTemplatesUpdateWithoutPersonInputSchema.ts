import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const PersonsToTaskTemplatesUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateWithoutPersonInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default PersonsToTaskTemplatesUpdateWithoutPersonInputSchema;
