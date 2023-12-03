import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithoutTagInputSchema } from './SkillPathsToTagsUpdateWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedUpdateWithoutTagInputSchema } from './SkillPathsToTagsUncheckedUpdateWithoutTagInputSchema';
import { SkillPathsToTagsCreateWithoutTagInputSchema } from './SkillPathsToTagsCreateWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTagInputSchema';

export const SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
