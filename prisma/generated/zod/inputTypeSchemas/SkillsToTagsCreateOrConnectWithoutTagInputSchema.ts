import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsCreateWithoutTagInputSchema } from './SkillsToTagsCreateWithoutTagInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillsToTagsUncheckedCreateWithoutTagInputSchema';

export const SkillsToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default SkillsToTagsCreateOrConnectWithoutTagInputSchema;
