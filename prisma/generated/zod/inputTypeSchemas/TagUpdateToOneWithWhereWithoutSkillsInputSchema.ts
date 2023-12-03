import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutSkillsInputSchema } from './TagUpdateWithoutSkillsInputSchema';
import { TagUncheckedUpdateWithoutSkillsInputSchema } from './TagUncheckedUpdateWithoutSkillsInputSchema';

export const TagUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutSkillsInputSchema;
