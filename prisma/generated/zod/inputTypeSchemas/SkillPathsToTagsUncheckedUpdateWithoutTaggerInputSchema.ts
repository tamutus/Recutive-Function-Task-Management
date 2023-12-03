import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedUpdateWithoutTaggerInput> = z.object({
  skillId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema;
