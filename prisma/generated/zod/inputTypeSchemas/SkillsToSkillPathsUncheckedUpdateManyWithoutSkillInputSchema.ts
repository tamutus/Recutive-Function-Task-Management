import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToSkillPathsUncheckedUpdateManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUncheckedUpdateManyWithoutSkillInput> = z.object({
  skillPathId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToSkillPathsUncheckedUpdateManyWithoutSkillInputSchema;
