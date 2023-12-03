import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsScalarWhereInputSchema } from './SkillsToSkillPathsScalarWhereInputSchema';
import { SkillsToSkillPathsUpdateManyMutationInputSchema } from './SkillsToSkillPathsUpdateManyMutationInputSchema';
import { SkillsToSkillPathsUncheckedUpdateManyWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedUpdateManyWithoutSkillInputSchema';

export const SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToSkillPathsUpdateManyMutationInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInputSchema;
