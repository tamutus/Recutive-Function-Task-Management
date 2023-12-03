import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsCreateWithoutSkillInputSchema } from './SkillsToTagsCreateWithoutSkillInputSchema';
import { SkillsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillsToTagsUncheckedCreateWithoutSkillInputSchema';

export const SkillsToTagsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTagsCreateOrConnectWithoutSkillInputSchema;
