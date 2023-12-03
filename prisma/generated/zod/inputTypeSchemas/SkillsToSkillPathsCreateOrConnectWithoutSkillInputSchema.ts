import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsCreateWithoutSkillInputSchema } from './SkillsToSkillPathsCreateWithoutSkillInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema';

export const SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema;
