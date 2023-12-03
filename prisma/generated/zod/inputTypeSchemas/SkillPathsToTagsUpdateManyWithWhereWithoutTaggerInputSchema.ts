import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsScalarWhereInputSchema } from './SkillPathsToTagsScalarWhereInputSchema';
import { SkillPathsToTagsUpdateManyMutationInputSchema } from './SkillPathsToTagsUpdateManyMutationInputSchema';
import { SkillPathsToTagsUncheckedUpdateManyWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedUpdateManyWithoutTaggerInputSchema';

export const SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillPathsToTagsUpdateManyMutationInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateManyWithoutTaggerInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInputSchema;
