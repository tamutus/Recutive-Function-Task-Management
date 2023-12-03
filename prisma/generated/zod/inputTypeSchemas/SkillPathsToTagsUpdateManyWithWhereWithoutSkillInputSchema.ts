import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsScalarWhereInputSchema } from './SkillPathsToTagsScalarWhereInputSchema';
import { SkillPathsToTagsUpdateManyMutationInputSchema } from './SkillPathsToTagsUpdateManyMutationInputSchema';
import { SkillPathsToTagsUncheckedUpdateManyWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedUpdateManyWithoutSkillInputSchema';

export const SkillPathsToTagsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillPathsToTagsUpdateManyMutationInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpdateManyWithWhereWithoutSkillInputSchema;
