import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutPrioritiesInputSchema } from './SkillUpdateWithoutPrioritiesInputSchema';
import { SkillUncheckedUpdateWithoutPrioritiesInputSchema } from './SkillUncheckedUpdateWithoutPrioritiesInputSchema';

export const SkillUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutPrioritiesInputSchema;
