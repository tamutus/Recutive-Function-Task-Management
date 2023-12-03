import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithoutTaggerInputSchema } from './SkillsToTagsUpdateWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedUpdateWithoutTaggerInputSchema } from './SkillsToTagsUncheckedUpdateWithoutTaggerInputSchema';

export const SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
}).strict();

export default SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema;
