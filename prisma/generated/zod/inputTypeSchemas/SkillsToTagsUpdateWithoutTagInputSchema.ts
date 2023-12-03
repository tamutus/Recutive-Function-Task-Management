import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutTagsNestedInputSchema } from './SkillUpdateOneRequiredWithoutTagsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema';

export const SkillsToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateWithoutTagInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema).optional()
}).strict();

export default SkillsToTagsUpdateWithoutTagInputSchema;
