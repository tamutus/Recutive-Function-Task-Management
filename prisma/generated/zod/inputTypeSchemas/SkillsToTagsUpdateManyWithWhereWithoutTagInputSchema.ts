import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsScalarWhereInputSchema } from './SkillsToTagsScalarWhereInputSchema';
import { SkillsToTagsUpdateManyMutationInputSchema } from './SkillsToTagsUpdateManyMutationInputSchema';
import { SkillsToTagsUncheckedUpdateManyWithoutTagInputSchema } from './SkillsToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const SkillsToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => SkillsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTagsUpdateManyMutationInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default SkillsToTagsUpdateManyWithWhereWithoutTagInputSchema;
