import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsScalarWhereInputSchema } from './SkillsToTagsScalarWhereInputSchema';
import { SkillsToTagsUpdateManyMutationInputSchema } from './SkillsToTagsUpdateManyMutationInputSchema';
import { SkillsToTagsUncheckedUpdateManyWithoutSkillInputSchema } from './SkillsToTagsUncheckedUpdateManyWithoutSkillInputSchema';

export const SkillsToTagsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTagsUpdateManyMutationInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTagsUpdateManyWithWhereWithoutSkillInputSchema;
