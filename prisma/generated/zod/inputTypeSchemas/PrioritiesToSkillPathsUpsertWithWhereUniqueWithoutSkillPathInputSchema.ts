import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';

export const PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema;
