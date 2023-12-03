import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema';

export const SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema;
