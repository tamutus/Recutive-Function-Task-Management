import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutSkillsInputSchema } from './TagUpdateWithoutSkillsInputSchema';
import { TagUncheckedUpdateWithoutSkillsInputSchema } from './TagUncheckedUpdateWithoutSkillsInputSchema';
import { TagCreateWithoutSkillsInputSchema } from './TagCreateWithoutSkillsInputSchema';
import { TagUncheckedCreateWithoutSkillsInputSchema } from './TagUncheckedCreateWithoutSkillsInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.TagUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutSkillsInputSchema;
