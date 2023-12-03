import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema';

export const PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema;
