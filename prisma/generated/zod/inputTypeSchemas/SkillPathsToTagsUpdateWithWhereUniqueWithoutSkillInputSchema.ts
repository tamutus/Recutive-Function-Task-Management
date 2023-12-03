import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithoutSkillInputSchema } from './SkillPathsToTagsUpdateWithoutSkillInputSchema';
import { SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema';

export const SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema;
