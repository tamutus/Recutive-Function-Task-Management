import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutTagsInputSchema } from './SkillUpdateWithoutTagsInputSchema';
import { SkillUncheckedUpdateWithoutTagsInputSchema } from './SkillUncheckedUpdateWithoutTagsInputSchema';
import { SkillCreateWithoutTagsInputSchema } from './SkillCreateWithoutTagsInputSchema';
import { SkillUncheckedCreateWithoutTagsInputSchema } from './SkillUncheckedCreateWithoutTagsInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutTagsInputSchema: z.ZodType<Prisma.SkillUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutTagsInputSchema;
