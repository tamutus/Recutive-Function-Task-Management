import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsScalarWhereInputSchema } from './SkillsToSkillPathsScalarWhereInputSchema';
import { SkillsToSkillPathsUpdateManyMutationInputSchema } from './SkillsToSkillPathsUpdateManyMutationInputSchema';
import { SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema';

export const SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToSkillPathsUpdateManyMutationInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema) ]),
}).strict();

export default SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema;
