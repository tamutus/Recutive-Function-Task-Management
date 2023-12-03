import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathInput> = z.object({
  skillId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema;
