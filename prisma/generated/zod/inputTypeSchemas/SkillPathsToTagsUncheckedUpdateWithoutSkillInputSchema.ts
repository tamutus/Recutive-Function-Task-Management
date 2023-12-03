import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedUpdateWithoutSkillInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  taggerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema;
