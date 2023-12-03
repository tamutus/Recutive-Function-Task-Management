import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateOrConnectWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema;
