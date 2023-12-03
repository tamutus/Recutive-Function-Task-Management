import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateWithoutPriorityInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInputSchema;
