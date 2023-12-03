import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsScalarWhereInputSchema } from './SkillPathsToTagsScalarWhereInputSchema';
import { SkillPathsToTagsUpdateManyMutationInputSchema } from './SkillPathsToTagsUpdateManyMutationInputSchema';
import { SkillPathsToTagsUncheckedUpdateManyWithoutTagInputSchema } from './SkillPathsToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const SkillPathsToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillPathsToTagsUpdateManyMutationInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpdateManyWithWhereWithoutTagInputSchema;
