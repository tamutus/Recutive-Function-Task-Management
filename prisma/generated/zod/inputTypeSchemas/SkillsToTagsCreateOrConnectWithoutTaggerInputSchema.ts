import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsCreateWithoutTaggerInputSchema } from './SkillsToTagsCreateWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillsToTagsUncheckedCreateWithoutTaggerInputSchema';

export const SkillsToTagsCreateOrConnectWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsCreateOrConnectWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default SkillsToTagsCreateOrConnectWithoutTaggerInputSchema;
