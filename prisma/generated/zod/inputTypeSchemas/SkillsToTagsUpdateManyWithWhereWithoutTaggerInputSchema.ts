import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsScalarWhereInputSchema } from './SkillsToTagsScalarWhereInputSchema';
import { SkillsToTagsUpdateManyMutationInputSchema } from './SkillsToTagsUpdateManyMutationInputSchema';
import { SkillsToTagsUncheckedUpdateManyWithoutTaggerInputSchema } from './SkillsToTagsUncheckedUpdateManyWithoutTaggerInputSchema';

export const SkillsToTagsUpdateManyWithWhereWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateManyWithWhereWithoutTaggerInput> = z.object({
  where: z.lazy(() => SkillsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTagsUpdateManyMutationInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateManyWithoutTaggerInputSchema) ]),
}).strict();

export default SkillsToTagsUpdateManyWithWhereWithoutTaggerInputSchema;
