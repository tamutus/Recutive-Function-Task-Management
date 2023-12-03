import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutPrioritiesInputSchema } from './SkillUpdateWithoutPrioritiesInputSchema';
import { SkillUncheckedUpdateWithoutPrioritiesInputSchema } from './SkillUncheckedUpdateWithoutPrioritiesInputSchema';
import { SkillCreateWithoutPrioritiesInputSchema } from './SkillCreateWithoutPrioritiesInputSchema';
import { SkillUncheckedCreateWithoutPrioritiesInputSchema } from './SkillUncheckedCreateWithoutPrioritiesInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutPrioritiesInputSchema;
