import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const PersonsToSkillPathsUncheckedUpdateManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUncheckedUpdateManyWithoutPersonInput> = z.object({
  skillId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default PersonsToSkillPathsUncheckedUpdateManyWithoutPersonInputSchema;
