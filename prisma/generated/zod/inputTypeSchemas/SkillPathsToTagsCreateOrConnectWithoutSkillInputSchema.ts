import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsCreateWithoutSkillInputSchema } from './SkillPathsToTagsCreateWithoutSkillInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema';

export const SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema;
