import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const PersonsToProjectsUpdateManyMutationInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateManyMutationInput> = z.object({
  volunteerDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToProjectsUpdateManyMutationInputSchema;
