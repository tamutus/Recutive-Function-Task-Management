import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema } from './ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema';

export const PersonsToProjectsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateWithoutPersonInput> = z.object({
  volunteerDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema).optional()
}).strict();

export default PersonsToProjectsUpdateWithoutPersonInputSchema;
