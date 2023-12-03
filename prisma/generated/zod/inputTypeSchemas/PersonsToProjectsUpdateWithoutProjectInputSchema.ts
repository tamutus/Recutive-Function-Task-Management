import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PersonUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const PersonsToProjectsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateWithoutProjectInput> = z.object({
  volunteerDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default PersonsToProjectsUpdateWithoutProjectInputSchema;
