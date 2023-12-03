import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';

export const SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateOrConnectWithoutSkillPathInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema) ]),
}).strict();

export default SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema;
