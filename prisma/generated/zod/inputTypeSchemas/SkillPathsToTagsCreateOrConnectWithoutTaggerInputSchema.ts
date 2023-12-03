import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsCreateWithoutTaggerInputSchema } from './SkillPathsToTagsCreateWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema';

export const SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateOrConnectWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema;
