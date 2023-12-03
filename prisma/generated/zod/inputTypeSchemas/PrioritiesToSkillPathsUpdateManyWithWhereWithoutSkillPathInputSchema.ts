import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsScalarWhereInputSchema } from './PrioritiesToSkillPathsScalarWhereInputSchema';
import { PrioritiesToSkillPathsUpdateManyMutationInputSchema } from './PrioritiesToSkillPathsUpdateManyMutationInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema';

export const PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema;
