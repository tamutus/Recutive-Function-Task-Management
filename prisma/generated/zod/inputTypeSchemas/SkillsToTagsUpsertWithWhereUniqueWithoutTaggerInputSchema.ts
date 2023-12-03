import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithoutTaggerInputSchema } from './SkillsToTagsUpdateWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedUpdateWithoutTaggerInputSchema } from './SkillsToTagsUncheckedUpdateWithoutTaggerInputSchema';
import { SkillsToTagsCreateWithoutTaggerInputSchema } from './SkillsToTagsCreateWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillsToTagsUncheckedCreateWithoutTaggerInputSchema';

export const SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema;
