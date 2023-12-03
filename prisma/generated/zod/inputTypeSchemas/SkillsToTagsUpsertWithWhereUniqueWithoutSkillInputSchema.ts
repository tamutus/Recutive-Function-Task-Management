import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithoutSkillInputSchema } from './SkillsToTagsUpdateWithoutSkillInputSchema';
import { SkillsToTagsUncheckedUpdateWithoutSkillInputSchema } from './SkillsToTagsUncheckedUpdateWithoutSkillInputSchema';
import { SkillsToTagsCreateWithoutSkillInputSchema } from './SkillsToTagsCreateWithoutSkillInputSchema';
import { SkillsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillsToTagsUncheckedCreateWithoutSkillInputSchema';

export const SkillsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTagsUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema;
