import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema;
