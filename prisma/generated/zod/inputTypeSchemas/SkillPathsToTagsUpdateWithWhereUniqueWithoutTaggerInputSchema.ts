import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithoutTaggerInputSchema } from './SkillPathsToTagsUpdateWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema';

export const SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema;
