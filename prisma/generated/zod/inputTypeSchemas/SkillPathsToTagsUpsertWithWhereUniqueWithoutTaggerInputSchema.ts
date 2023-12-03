import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithoutTaggerInputSchema } from './SkillPathsToTagsUpdateWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema';
import { SkillPathsToTagsCreateWithoutTaggerInputSchema } from './SkillPathsToTagsCreateWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema';

export const SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema;
