import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema';

export const SkillPathsToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateWithoutTagInput> = z.object({
  skill: z.lazy(() => SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema).optional()
}).strict();

export default SkillPathsToTagsUpdateWithoutTagInputSchema;
