import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsScalarWhereInputSchema } from './PrioritiesToSkillsScalarWhereInputSchema';
import { PrioritiesToSkillsUpdateManyMutationInputSchema } from './PrioritiesToSkillsUpdateManyMutationInputSchema';
import { PrioritiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema';

export const PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema;
