import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithoutTagInputSchema } from './SkillsToTagsUpdateWithoutTagInputSchema';
import { SkillsToTagsUncheckedUpdateWithoutTagInputSchema } from './SkillsToTagsUncheckedUpdateWithoutTagInputSchema';
import { SkillsToTagsCreateWithoutTagInputSchema } from './SkillsToTagsCreateWithoutTagInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillsToTagsUncheckedCreateWithoutTagInputSchema';

export const SkillsToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTagsUpdateWithoutTagInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default SkillsToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
