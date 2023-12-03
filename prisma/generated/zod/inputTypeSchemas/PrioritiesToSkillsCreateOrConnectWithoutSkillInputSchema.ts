import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsCreateWithoutSkillInputSchema } from './PrioritiesToSkillsCreateWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema';

export const PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema;
