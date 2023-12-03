import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TagUpdateOneRequiredWithoutSkillsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema';

export const SkillsToTagsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateWithoutSkillInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema).optional()
}).strict();

export default SkillsToTagsUpdateWithoutSkillInputSchema;
