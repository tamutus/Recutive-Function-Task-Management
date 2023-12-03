import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema } from './PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema';

export const PersonsToProjectTemplatesUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateWithoutProjectInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema).optional()
}).strict();

export default PersonsToProjectTemplatesUpdateWithoutProjectInputSchema;
