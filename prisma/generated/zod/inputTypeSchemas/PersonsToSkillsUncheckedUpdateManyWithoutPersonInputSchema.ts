import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToSkillsUncheckedUpdateManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedUpdateManyWithoutPersonInput> = z.object({
  skillId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToSkillsUncheckedUpdateManyWithoutPersonInputSchema;
