import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedUpdateWithoutSkillInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema;
