import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithoutTagInputSchema } from './SkillsToTagsUpdateWithoutTagInputSchema';
import { SkillsToTagsUncheckedUpdateWithoutTagInputSchema } from './SkillsToTagsUncheckedUpdateWithoutTagInputSchema';

export const SkillsToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => SkillsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTagsUpdateWithoutTagInputSchema),z.lazy(() => SkillsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default SkillsToTagsUpdateWithWhereUniqueWithoutTagInputSchema;
