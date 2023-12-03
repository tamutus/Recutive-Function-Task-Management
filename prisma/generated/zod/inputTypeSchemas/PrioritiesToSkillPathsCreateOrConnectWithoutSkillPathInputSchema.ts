import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';

export const PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema;
