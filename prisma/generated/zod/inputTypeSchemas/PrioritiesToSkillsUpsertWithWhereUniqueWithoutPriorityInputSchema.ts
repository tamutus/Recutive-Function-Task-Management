import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillsUpdateWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedUpdateWithoutPriorityInputSchema';
import { PrioritiesToSkillsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToSkillsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedUpdateWithoutPriorityInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInputSchema;
