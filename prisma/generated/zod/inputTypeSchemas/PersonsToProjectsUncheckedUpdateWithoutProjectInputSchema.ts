import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedUpdateWithoutProjectInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  volunteerDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema;
