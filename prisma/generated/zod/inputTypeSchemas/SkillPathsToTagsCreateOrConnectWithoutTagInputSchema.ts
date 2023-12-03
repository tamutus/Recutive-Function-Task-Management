import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsCreateWithoutTagInputSchema } from './SkillPathsToTagsCreateWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTagInputSchema';

export const SkillPathsToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default SkillPathsToTagsCreateOrConnectWithoutTagInputSchema;
