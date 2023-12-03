import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithoutSkillInputSchema } from './SkillsToTagsUpdateWithoutSkillInputSchema';
import { SkillsToTagsUncheckedUpdateWithoutSkillInputSchema } from './SkillsToTagsUncheckedUpdateWithoutSkillInputSchema';

export const SkillsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTagsUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema;
