import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithoutTagInputSchema } from './SkillPathsToTagsUpdateWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedUpdateWithoutTagInputSchema } from './SkillPathsToTagsUncheckedUpdateWithoutTagInputSchema';

export const SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInputSchema;
