import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PersonUpdateOneRequiredWithoutProjectsNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema } from './ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema';

export const PersonsToProjectsUpdateInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateInput> = z.object({
  volunteerDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutProjectsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema).optional()
}).strict();

export default PersonsToProjectsUpdateInputSchema;
