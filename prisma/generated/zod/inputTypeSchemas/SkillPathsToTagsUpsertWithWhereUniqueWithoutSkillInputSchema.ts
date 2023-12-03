import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithoutSkillInputSchema } from './SkillPathsToTagsUpdateWithoutSkillInputSchema';
import { SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema';
import { SkillPathsToTagsCreateWithoutSkillInputSchema } from './SkillPathsToTagsCreateWithoutSkillInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema';

export const SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema;
