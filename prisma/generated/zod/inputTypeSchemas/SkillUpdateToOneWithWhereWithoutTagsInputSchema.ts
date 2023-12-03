import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutTagsInputSchema } from './SkillUpdateWithoutTagsInputSchema';
import { SkillUncheckedUpdateWithoutTagsInputSchema } from './SkillUncheckedUpdateWithoutTagsInputSchema';

export const SkillUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutTagsInputSchema;
